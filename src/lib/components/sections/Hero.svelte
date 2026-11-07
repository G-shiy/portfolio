<script lang="ts">
  import { base } from '$app/paths';
  import { profile } from '$lib/data/profile';
  import OrbitalInstrument from '$lib/components/motion/OrbitalInstrument.svelte';
  import Arrow from '$lib/components/ui/Arrow.svelte';
  let { enabled }: { enabled: boolean } = $props();
  let photoLoaded = $state(false);
</script>
<section class="hero container" id="inicio" aria-labelledby="name">
  <div class="hero-layout">
    <div class="intro">
      <h1 id="name">Olá, sou <em>Gustavo.</em></h1>
      <p class="hero-tagline">Gosto de entender como as coisas funcionam, e de construir coisas que façam sentido.</p>
      <p class="hero-copy">{profile.introduction}</p>
      <p class="hero-personal">Fora do código, gosto de boas histórias, jogos, música e de experimentar novas maneiras de configurar meu ambiente Linux.</p>
      <div class="actions">
        <a class="button" href="#projetos">Ver projetos <Arrow /></a>
        <a class="text-link" href="https://github.com/G-shiy" target="_blank" rel="noopener">GitHub <Arrow diagonal /></a>
      </div>
    </div>

    <div class="hero-photo-wrap" aria-hidden="true">
      <figure class="hero-photo-figure">
        <img
          src={`${base}/images/gustavo-portrait.png`}
          alt="Retrato de Gustavo Siqueira."
          class="hero-photo"
          class:loaded={photoLoaded}
          onload={() => (photoLoaded = true)}
          loading="eager"
          fetchpriority="high"
          width="1254"
          height="1254"
        />
        <figcaption class="photo-caption">
          <span>Fig. 01 · Sinal & Sentido</span>
          <p>Um ponto de referência.<br>Mais de uma forma de chegar.</p>
        </figcaption>
      </figure>
      <div class="instrument-hero" aria-hidden="true">
        <OrbitalInstrument {enabled} />
      </div>
    </div>
  </div>
</section>
<style>
  .hero {
    position: relative;
    padding-block: clamp(48px, 6vw, 96px) var(--space-6);
  }

  .hero-layout {
    display: grid;
    grid-template-columns: minmax(0, 1.15fr) minmax(0, 0.95fr);
    gap: var(--column-gap);
    align-items: center;
    position: relative;
  }

  h1 {
    font: 300 var(--hero-name-size) / .92 var(--font-display);
    letter-spacing: -.04em;
    margin: 0;
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
    color: var(--text-muted);
    font-size: var(--text-label);
    line-height: var(--leading-relaxed);
  }

  .actions {
    margin-top: var(--space-10);
  }

  /* Photo composition */
  .hero-photo-wrap {
    position: relative;
    display: grid;
    align-items: center;
    justify-items: end;
  }

  .hero-photo-figure {
    margin: 0;
    position: relative;
    width: min(100%, 420px);
    aspect-ratio: 3/4;
    border-radius: var(--radius-lg);
    overflow: hidden;
    box-shadow: var(--shadow-photo);
    background: var(--surface-raised);
  }

  .hero-photo {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center 30%;
    transform: scale(1.02);
    transition:
      opacity var(--motion-photo-enter) var(--ease-photo),
      transform var(--motion-photo-enter) var(--ease-photo);
    opacity: 0;
  }

  .hero-photo-figure:has(.hero-photo.loaded) .hero-photo,
  .hero-photo.loaded {
    opacity: 1;
    transform: scale(1);
  }

  .photo-caption {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: var(--space-5) var(--space-6) var(--space-4);
    background: linear-gradient(180deg, transparent 0%, rgba(11, 17, 18, 0.85) 60%, var(--color-ink-950) 100%);
    font-size: var(--text-label);
    color: var(--text-secondary);
  }

  .photo-caption span {
    font: var(--text-meta) var(--font-mono);
    color: var(--accent-primary);
    display: block;
    margin-bottom: var(--space-2);
  }

  .photo-caption p {
    margin: 0;
    line-height: 1.5;
  }

  /* Orbital instrument positioned relative to photo */
  .instrument-hero {
    position: absolute;
    top: 50%;
    right: -15%;
    translate: 0 -50%;
    width: min(320px, 45vw);
    pointer-events: none;
    opacity: 0.6;
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
      transform: scale(1.04) translateY(16px);
    }
    to {
      opacity: 1;
      transform: scale(1) translateY(0);
    }
  }

  @media (max-width: 62.5rem) {
    .hero-layout {
      grid-template-columns: 1fr;
      gap: var(--space-10);
      text-align: center;
    }

    .intro {
      max-width: 70ch;
      margin-inline: auto;
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
      justify-content: center;
    }

    .hero-photo-wrap {
      justify-items: center;
      order: -1;
    }

    .hero-photo-figure {
      width: min(100%, 360px);
      max-width: 85vw;
    }

    .instrument-hero {
      position: static;
      translate: none;
      width: min(280px, 50vw);
      margin-top: calc(var(--space-6) * -1);
      opacity: 0.4;
    }

    .photo-caption {
      display: none;
    }
  }

  @media (max-width: 42.5rem) {
    .hero {
      padding-top: var(--space-12);
    }

    h1 {
      font-size: clamp(4rem, 18vw, 6.5rem);
    }

    .hero-photo-figure {
      width: min(100%, 300px);
      max-width: 75vw;
      border-radius: var(--radius-md);
    }

    .instrument-hero {
      display: none;
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