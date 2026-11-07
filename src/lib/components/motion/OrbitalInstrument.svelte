<script lang="ts">
  import { onMount } from 'svelte';
  let { enabled }: { enabled: boolean } = $props();
  let figure: HTMLElement;
  let visible = $state(false);
  let pointerX = $state(0);
  let pointerY = $state(0);
  let frame = 0;
  let finePointer = false;
  const ticks = Array.from({ length: 60 }, (_, i) => i);
  onMount(() => {
    finePointer = matchMedia('(hover:hover) and (pointer:fine)').matches;
    const observer = new IntersectionObserver(([entry]) => { visible = entry?.isIntersecting ?? false; }, { threshold: .1 });
    observer.observe(figure);
    return () => { observer.disconnect(); cancelAnimationFrame(frame); };
  });
  function follow(event: PointerEvent) {
    if (!enabled || !finePointer || event.pointerType === 'touch') return;
    cancelAnimationFrame(frame);
    const { clientX, clientY } = event;
    frame = requestAnimationFrame(() => {
      const bounds = figure.getBoundingClientRect();
      pointerX = ((clientX - bounds.left) / bounds.width - .5) * 10;
      pointerY = ((clientY - bounds.top) / bounds.height - .5) * 10;
    });
  }
  function reset() { cancelAnimationFrame(frame); pointerX = 0; pointerY = 0; }
</script>
<figure bind:this={figure} class="instrument" class:running={enabled && visible} onpointermove={follow} onpointerleave={reset} style={`--pointer-x:${enabled ? pointerX : 0}px;--pointer-y:${enabled ? pointerY : 0}px;--tilt-x:${enabled ? pointerY * -0.18 : 0}deg;--tilt-y:${enabled ? pointerX * 0.18 : 0}deg`}>
  <div class="instrument-drawing" role="img" aria-label="Estudo geométrico: dois planos orbitais em torno de um eixo fixo, com escala de orientação">
    <div class="instrument-ring">
      <svg class="calibration-scale" viewBox="0 0 400 400" fill="none" aria-hidden="true"><g stroke="currentColor" stroke-width="1">{#each ticks as tick}<path d={`M200 12v${tick % 5 === 0 ? 12 : 5}`} transform={`rotate(${tick * 6} 200 200)`}/>{/each}</g><circle cx="200" cy="200" r="172" stroke="currentColor" stroke-dasharray="1 9"/></svg>
      <span class="axis horizontal"></span><span class="axis vertical"></span>
      <span class="orbit"><i class="satellite"></i></span><span class="orbit other"><i class="satellite"></i></span>
      <span class="instrument-signal"></span>
      <span class="instrument-label n">N / 00</span><span class="instrument-label e">90</span><span class="instrument-label s">180</span><span class="instrument-label w">270</span>
      <svg class="instrument-center" viewBox="0 0 132 132" fill="none" aria-hidden="true"><path d="M66 4v124M4 66h124" stroke="currentColor" opacity=".25"/><circle cx="66" cy="66" r="40" stroke="currentColor" opacity=".65"/><circle cx="66" cy="66" r="26" stroke="currentColor" opacity=".2"/><path d="M39 93 93 39" stroke="currentColor" stroke-width="1.5"/><circle cx="93" cy="39" r="4" fill="currentColor"/><path d="M42 42h11v11" stroke="currentColor" opacity=".5"/></svg>
    </div>
  </div>
</figure>
<style>
  .instrument{margin:0;min-width:0;width:min(100%,360px);justify-self:center;position:relative;display:grid;gap:var(--space-6);transform:perspective(1000px) translate3d(var(--pointer-x),var(--pointer-y),0) rotateX(var(--tilt-x)) rotateY(var(--tilt-y));transform-style:preserve-3d;transition:transform var(--motion-reveal) var(--ease-soft)}
  .instrument-drawing{position:relative;display:grid;place-items:center;aspect-ratio:1;isolation:isolate}
  .instrument-drawing::before{content:'';position:absolute;inset:-6%;z-index:-1;background:radial-gradient(circle,var(--color-ink-800),transparent 68%);opacity:.5;animation:ambient-breath var(--motion-ambient) var(--ease-soft) infinite alternate;animation-play-state:paused}
  .instrument-ring{width:78%;aspect-ratio:1;position:relative;border:1px solid var(--border-strong);border-radius:50%;display:grid;place-items:center}
  .instrument-ring::before,.instrument-ring::after{content:'';position:absolute;border-radius:50%;pointer-events:none}.instrument-ring::before{inset:21px;border:1px dashed var(--border-subtle)}.instrument-ring::after{inset:25%;border:1px dotted var(--accent-primary);opacity:.4}
  .calibration-scale{position:absolute;inset:-8%;width:116%;height:116%;color:var(--color-fog-400);opacity:.35}
  .orbit{width:112%;aspect-ratio:1;position:absolute;z-index:2;border:1px solid var(--border-subtle);border-top-color:var(--accent-primary);border-bottom-color:var(--accent-subtle);border-radius:50%;transform:rotate(-37deg) scaleY(.75);animation:orbit-turn var(--motion-orbit) linear infinite;animation-play-state:paused}
  .orbit.other{width:92%;z-index:3;opacity:.8;transform:rotate(62deg) scaleY(.8);animation-name:orbit-counter;animation-duration:calc(var(--motion-orbit)*1.35)}
  .satellite{position:absolute;z-index:1;top:13%;left:13%;width:7px;height:7px;border:1px solid var(--surface-page);border-radius:50%;background:var(--accent-primary);box-shadow:0 0 0 2px color-mix(in srgb,var(--accent-primary) 24%,transparent)}.other .satellite{width:6px;height:6px;background:var(--text-primary);box-shadow:0 0 0 2px color-mix(in srgb,var(--text-primary) 18%,transparent)}
  .axis{position:absolute;background:var(--border-subtle)}.horizontal{left:4%;right:4%;top:50%;height:1px}.vertical{top:4%;bottom:4%;left:50%;width:1px}
  .instrument-center{position:relative;z-index:1;width:30%;height:30%;color:var(--accent-primary)}.instrument-label{position:absolute;z-index:4;font:var(--text-meta) var(--font-mono);color:var(--text-muted)}.n{top:2%;left:50%;transform:translateX(-50%)}.e{right:-7%;top:50%}.s{bottom:2%;left:50%;transform:translateX(-50%)}.w{left:-8%;top:50%}
  .instrument-signal{position:absolute;inset:-5px;border-radius:50%;border:2px solid transparent;border-top-color:var(--accent-primary);clip-path:polygon(50% 50%,50% 0,65% 0);opacity:0;animation:signal-pass var(--motion-signal) linear infinite;animation-play-state:paused}
  .running .orbit,.running .instrument-signal,.running .instrument-drawing::before{animation-play-state:running}
  @keyframes orbit-turn{from{transform:rotate(-37deg) scaleY(.75)}to{transform:rotate(323deg) scaleY(.75)}}@keyframes orbit-counter{from{transform:rotate(62deg) scaleY(.8)}to{transform:rotate(-298deg) scaleY(.8)}}@keyframes ambient-breath{from{opacity:.35}to{opacity:.65}}@keyframes signal-pass{0%,8%{transform:rotate(-40deg);opacity:0}11%,32%{opacity:.8}38%,100%{transform:rotate(320deg);opacity:0}}
  @media(max-width:42.5rem){.instrument{max-width:280px;width:100%;margin-inline:auto;gap:var(--space-4)}}
  @media(prefers-reduced-motion:reduce){.instrument{transform:none;transition:none}.orbit,.instrument-signal,.instrument-drawing::before{animation:none}.instrument-signal{opacity:.4;transform:rotate(30deg)}}
</style>
