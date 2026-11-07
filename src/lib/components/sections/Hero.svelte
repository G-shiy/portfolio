<script lang="ts">
  import { base } from '$app/paths';
  import { profile } from '$lib/data/profile';
  import Arrow from '$lib/components/ui/Arrow.svelte';

  const portraitSources = {
    original: `${base}/images/gustavo-portrait.webp`,
    studyA: `${base}/images/gustavo-frame-study-a.webp`,
    studyB: `${base}/images/gustavo-frame-study-b.webp`,
  } as const;

  let currentPortrait = $state<keyof typeof portraitSources>('original');
  let portraitSrc = $derived(portraitSources[currentPortrait]);

  function showRandomPortrait() {
    currentPortrait = Math.random() < 0.5 ? 'studyA' : 'studyB';
  }

  function handlePortraitPointerEnter(event: PointerEvent) {
    if (event.pointerType === 'mouse') showRandomPortrait();
  }

  function restoreOriginalPortrait() {
    currentPortrait = 'original';
  }
</script>
<section class="hero container" id="inicio" aria-labelledby="name">
  <div class="hero-layout">
    <div class="intro">
      <p class="role-line">Engenharia de software <span aria-hidden="true">·</span> Backend, infraestrutura e DevOps</p>
      <h1 id="name">Olá, sou <em>Gustavo.</em></h1>
      <p class="hero-tagline">Gosto de entender como as coisas funcionam e de construir coisas que façam sentido.</p>
      <p class="hero-copy">{profile.introduction}</p>
      <p class="hero-personal">Fora do código, gosto de boas histórias, jogos, música e de explorar meu ambiente Linux.</p>
      <div class="actions">
        <a class="button" href="#projetos">Ver projetos <Arrow /></a>
        <a class="text-link" href="https://github.com/G-shiy" target="_blank" rel="noopener">GitHub <Arrow diagonal /></a>
      </div>
    </div>

    <div class="hero-photo-wrap">
      <figure class="hero-photo-figure">
        <button
          type="button"
          class="hero-photo-frame"
          aria-label="Retrato de Gustavo Siqueira. Passe o mouse ou use o teclado para ver uma versão artística aleatória."
          onpointerenter={handlePortraitPointerEnter}
          onpointerleave={restoreOriginalPortrait}
          onfocus={() => showRandomPortrait()}
          onblur={restoreOriginalPortrait}
          onclick={showRandomPortrait}
        >
          <img
            src={portraitSrc}
            alt="Retrato de Gustavo Siqueira."
            class="hero-photo"
            loading="eager"
            decoding="async"
            fetchpriority="high"
            width="1254"
            height="1254"
          />
        </button>
        <figcaption class="photo-caption">
          <span>Gustavo Siqueira</span>
          <span class="photo-note">Retrato pessoal</span>
        </figcaption>
      </figure>
    </div>
  </div>
</section>
<style>
  .hero {
    position: relative;
    padding-block: clamp(40px, 4.5vw, 68px) var(--space-6);
  }

  .hero-layout {
    display: grid;
    grid-template-columns: minmax(0, 1.1fr) minmax(300px, 0.9fr);
    gap: var(--column-gap);
    align-items: center;
    position: relative;
  }

  h1 {
    font: 300 var(--hero-name-size) / .92 var(--font-display);
    letter-spacing: -.04em;
    margin: 0;
  }

  .role-line {
    margin-bottom: var(--space-5);
    color: var(--text-muted);
    font-size: var(--text-label);
    letter-spacing: .015em;
  }

  h1 em {
    color: var(--accent-primary);
    font-weight: 300;
  }

  .hero-tagline {
    margin-top: var(--space-7);
    color: var(--text-primary);
    font-size: clamp(1.15rem, 1.7vw, 1.45rem);
    line-height: 1.35;
    max-width: 55ch;
  }

  .hero-copy {
    max-width: 52ch;
    margin-top: var(--space-6);
    color: var(--text-secondary);
    font-size: var(--text-md);
    line-height: var(--leading-relaxed);
  }

  .hero-personal {
    max-width: 56ch;
    margin-top: var(--space-6);
    color: var(--text-secondary);
    font-size: var(--text-md);
    line-height: var(--leading-relaxed);
  }

  .actions {
    margin-top: var(--space-10);
  }

  .hero-photo-wrap {
    display: grid;
    align-items: center;
    justify-items: end;
  }

  .hero-photo-figure {
    margin: 0;
    position: relative;
    width: min(100%, 360px);
    min-width: 0;
  }

  .hero-photo-frame {
    position: relative;
    display: block;
    width: 100%;
    aspect-ratio: 3 / 4;
    padding: 11px;
    appearance: none;
    color: inherit;
    font: inherit;
    text-align: inherit;
    cursor: pointer;
    background:
      linear-gradient(112deg, rgba(214, 177, 130, .11), transparent 17% 82%, rgba(0, 0, 0, .38)),
      repeating-linear-gradient(91deg, transparent 0 7px, rgba(234, 207, 170, .018) 7px 8px),
      linear-gradient(135deg, #49382c 0%, #241c17 34%, #38291f 66%, #1b1714 100%);
    border: 1px solid rgba(201, 154, 119, .28);
    box-shadow:
      0 30px 72px rgba(0, 0, 0, .38),
      inset 0 1px 0 rgba(242, 220, 185, .12),
      inset 0 -1px 0 rgba(0, 0, 0, .7);
  }

  .hero-photo-frame:focus-visible {
    outline: 2px solid var(--accent-primary);
    outline-offset: 5px;
  }

  .hero-photo-frame::before,
  .hero-photo-frame::after {
    content: '';
    position: absolute;
    z-index: 1;
    pointer-events: none;
  }

  .hero-photo-frame::before {
    inset: 4px;
    border: 1px solid rgba(201, 154, 119, .34);
  }

  .hero-photo-frame::after {
    inset: 8px;
    box-shadow: inset 0 0 0 1px rgba(8, 9, 8, .62);
  }

  .hero-photo {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center 30%;
    border: 1px solid rgba(239, 225, 202, .14);
    background: var(--surface-raised);
    transition:
      opacity var(--motion-photo-enter) var(--ease-photo),
      transform var(--motion-photo-enter) var(--ease-photo);
  }

  .photo-caption {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: var(--space-3);
    margin-top: var(--space-3);
  }

  .photo-caption span {
    font: var(--text-meta) var(--font-mono);
    color: var(--text-muted);
  }

  .photo-caption .photo-note {
    font: var(--text-label) / 1.4 var(--font-body);
    color: var(--text-secondary);
  }

  @media (prefers-reduced-motion: no-preference) {
    h1 {
      animation: title-arrival var(--motion-title) var(--ease-enter) both;
    }

    .hero-photo {
      animation: photo-enter var(--motion-photo-enter) var(--ease-photo) calc(var(--motion-title) * 0.6) both;
    }
  }

  @keyframes title-arrival {
    from {
      opacity: .5;
      transform: translateX(-8px);
    }
    to {
      opacity: 1;
      transform: none;
    }
  }

  @keyframes photo-enter {
    from {
      opacity: 0;
      transform: translateY(14px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 62.5rem) {
    .hero-layout {
      grid-template-columns: minmax(0, 1.15fr) minmax(220px, .85fr);
      gap: var(--space-8);
      text-align: left;
    }

    .intro {
      max-width: 52ch;
      margin-inline: 0;
    }

    .hero-tagline {
      max-width: none;
    }

    .hero-copy {
      max-width: none;
    }

    .hero-personal {
      max-width: none;
    }

    .actions {
      justify-content: flex-start;
    }

    .hero-photo-wrap { justify-items: end; }

    .hero-photo-figure {
      width: min(100%, 340px);
    }

    .photo-caption {
      align-items: start;
      flex-direction: column;
      gap: var(--space-1);
    }
  }

  @media (max-width: 42.5rem) {
    .hero {
      padding-top: var(--space-12);
    }

    .hero-layout {
      grid-template-columns: 1fr;
      gap: var(--space-8);
    }

    h1 {
      font-size: clamp(4rem, 18vw, 6.5rem);
    }

    .hero-tagline { margin-top: var(--space-5); }
    .hero-personal { margin-top: var(--space-5); }
    .actions { margin-top: var(--space-8); }

    .hero-photo-figure {
      width: min(100%, 250px);
    }

    .hero-photo-wrap {
      justify-items: center;
      order: 0;
    }

    .actions {
      flex-direction: column;
      align-items: stretch;
    }

    .button,
    .text-link {
      justify-content: center;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .hero-photo {
      opacity: 1;
      transform: none;
      animation: none;
    }
  }
</style>
