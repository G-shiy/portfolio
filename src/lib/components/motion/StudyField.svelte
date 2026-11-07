<script lang="ts">
  let { enabled }: { enabled: boolean } = $props();
  let field = $state<SVGSVGElement>();

  $effect(() => {
    if (!enabled || !field || !matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    let frame = 0;
    let shiftX = 0;
    let shiftY = 0;

    const trackPointer = (event: PointerEvent) => {
      if (event.pointerType !== 'mouse') return;
      shiftX = ((event.clientX / window.innerWidth) - 0.5) * -10;
      shiftY = ((event.clientY / window.innerHeight) - 0.5) * -8;
      if (frame) return;
      frame = requestAnimationFrame(() => {
        field?.style.setProperty('--pointer-x', `${shiftX}px`);
        field?.style.setProperty('--pointer-y', `${shiftY}px`);
        frame = 0;
      });
    };

    window.addEventListener('pointermove', trackPointer, { passive: true });
    return () => {
      window.removeEventListener('pointermove', trackPointer);
      if (frame) cancelAnimationFrame(frame);
      field?.style.removeProperty('--pointer-x');
      field?.style.removeProperty('--pointer-y');
    };
  });

  const graduations = Array.from({ length: 36 }, (_, index) => index * 10);
  const gearTeeth = Array.from({ length: 20 }, (_, index) => index * 18);
  const astrolabeMarks = Array.from({ length: 48 }, (_, index) => index * 7.5);
</script>

<div class="study-field" aria-hidden="true">
  <svg bind:this={field} viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" fill="none" role="presentation">
    <g class="engraving">
      <g class="contours">
        <path d="M-90 256c94-86 193-93 272-39s82 124 29 183-50 102 25 136 166 34 227-12" />
        <path d="M-98 279c91-77 177-77 247-30s75 107 28 161-43 91 22 120 146 33 205-14" />
        <path d="M-104 303c81-67 161-62 222-21s64 90 25 138-37 78 20 103 129 28 180-13" />
        <path d="M812 682c84-81 175-99 265-51s117 123 76 190-25 126 49 171 170 44 244-26" />
        <path d="M793 657c96-91 202-111 305-56s135 140 86 218-26 140 60 191 188 51 269-24" />
        <path d="M778 630c110-104 229-124 342-62s150 161 97 250-30 156 69 213 212 59 300-23" />
      </g>

      <g class="cartographic-rose" transform="translate(1170 205)">
        <circle r="76" />
        <circle r="66" class="dotted-ring" />
        <circle r="38" />
        <g class="rose-graduations">
          {#each graduations as angle (angle)}
            <line x1="0" y1="-69" x2="0" y2={angle % 30 === 0 ? '-59' : '-64'} transform={`rotate(${angle})`} />
          {/each}
        </g>
        <path class="rose-cardinal" d="M0-57 8-8 0-15-8-8 0-57Zm0 114-8-49 8 7 8-7-8 49ZM-57 0l49-8-7 8 7 8-49-8Zm114 0L8 8l7-8-7-8 49 8Z" />
        <path class="rose-diagonal" d="m-40-40 32 32-12-4-4 12-16-40Zm80 0L8-8l12-4 4 12 16-40ZM40 40 8 8l4 12-12 4 40 16Zm-80 0L-8 8l-4 12 12 4-40 16Z" />
        <circle r="5" />
      </g>

      <g class="gear-assembly" transform="translate(280 682)">
        <g class="gear-wheel">
          <circle r="92" />
          <circle r="76" class="dotted-ring" />
          <circle r="34" />
          {#each gearTeeth as angle (angle)}
            <line x1="0" y1="-79" x2="0" y2="-97" transform={`rotate(${angle})`} />
          {/each}
          <path d="M-60-3h120M0-60v120M-42-42l84 84m0-84-84 84" />
          <circle r="12" />
        </g>
        <circle r="110" class="outer-measure" />
        <path class="measure-line" d="M-110 0h-30m280 0h-30M0-110v-30m0 280v-30" />
      </g>

      <g class="astrolabe-plate" transform="translate(1045 590)">
        <circle r="205" />
        <circle r="188" class="dotted-ring" />
        <circle r="156" />
        <circle r="128" class="dotted-ring" />
        <circle r="92" />
        <g class="astrolabe-graduations">
          {#each astrolabeMarks as angle (angle)}
            <line x1="0" y1="-188" x2="0" y2={angle % 30 === 0 ? '-171' : '-180'} transform={`rotate(${angle})`} />
          {/each}
        </g>
        <g class="rete">
          <ellipse rx="156" ry="67" transform="rotate(-34)" />
          <ellipse rx="156" ry="67" transform="rotate(34)" />
          <path d="M0-155 20-20 0-35-20-20 0-155Zm0 310-20-135 20 15 20-15-20 135Z" />
          <path d="M-155 0-20-20-35 0-20 20-155 0Zm310 0L20 20l15-20L20-20l135 20Z" />
          <circle r="10" />
        </g>
        <g class="alidade">
          <path d="M0-174v348M-8-155l8-19 8 19m-16 310 8 19 8-19" />
          <circle r="4" />
        </g>
      </g>

      <g class="construction-lines">
        <path d="M620 60v780M580 450h780M690 110l510 650M1200 90 690 790" />
        <circle cx="940" cy="450" r="286" />
        <circle cx="940" cy="450" r="302" class="dotted-ring" />
        <path class="charted-route" d="M685 578c105-157 192-192 276-147s107 155 195 143 116-109 186-231" />
      </g>
    </g>
  </svg>
</div>

<style>
  .study-field {
    position: fixed;
    z-index: -1;
    inset: 0;
    overflow: hidden;
    pointer-events: none;
    color: var(--accent-primary);
    opacity: .085;
  }

  svg {
    inline-size: 100%;
    block-size: 100%;
    transform: translate3d(var(--pointer-x, 0px), var(--pointer-y, 0px), 0);
    transition: transform 900ms var(--ease-soft);
    will-change: transform;
  }

  .engraving,
  .contours,
  .cartographic-rose,
  .gear-assembly,
  .astrolabe-plate,
  .construction-lines,
  .rete,
  .alidade,
  .gear-wheel,
  .rose-graduations,
  .astrolabe-graduations {
    vector-effect: non-scaling-stroke;
    stroke: currentColor;
    stroke-width: .8;
  }

  .contours { opacity: .52; }
  .construction-lines { opacity: .42; }
  .dotted-ring { stroke-dasharray: 1 5; opacity: .7; }
  .rose-graduations line,
  .astrolabe-graduations line,
  .gear-wheel line { stroke-width: .65; }
  .rose-cardinal { fill: currentColor; opacity: .64; }
  .rose-diagonal { fill: var(--text-muted); opacity: .38; }
  .outer-measure { stroke-dasharray: 2 5; opacity: .6; }
  .measure-line { stroke-width: .55; }
  .rete { transform-box: fill-box; transform-origin: center; }
  .rete circle { fill: var(--surface-page); }
  .alidade { opacity: .65; }
  .charted-route { stroke-dasharray: 900; stroke-dashoffset: 0; }

  @media (prefers-reduced-motion: no-preference) {
    .rete { animation: astrolabe-turn 84s linear infinite; }
    .gear-wheel { transform-box: fill-box; transform-origin: center; animation: gear-turn 110s linear infinite; }

    @supports (animation-timeline: scroll()) {
      .study-field {
        animation: field-parallax 1s linear both;
        animation-timeline: scroll(root block);
        animation-range: 0% 100%;
      }

      .charted-route {
        animation: route-chart 1s linear both;
        animation-timeline: scroll(root block);
        animation-range: 0% 70%;
      }
    }
  }

  @keyframes astrolabe-turn {
    to { rotate: 360deg; }
  }

  @keyframes gear-turn {
    to { rotate: -360deg; }
  }

  @keyframes field-parallax {
    from { translate: 0 -16px; }
    to { translate: 0 32px; }
  }

  @keyframes route-chart {
    from { stroke-dashoffset: 900; opacity: .25; }
    to { stroke-dashoffset: 0; opacity: 1; }
  }

  @media (max-width: 42.5rem) {
    .study-field { opacity: .065; }
  }

  @media (prefers-reduced-motion: reduce) {
    svg { transition: none; transform: none; }
    .rete,
    .gear-wheel,
    .charted-route { animation: none; }
  }
</style>
