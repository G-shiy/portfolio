<script lang="ts">
  import { base } from '$app/paths';
  import { profile } from '$lib/data/profile';
  import OrbitalInstrument from '$lib/components/motion/OrbitalInstrument.svelte';
  import Arrow from '$lib/components/ui/Arrow.svelte';
  let { enabled }: { enabled: boolean } = $props();
</script>
<section class="hero container" id="inicio" aria-labelledby="name">
  <div class="intro">
    <h1 id="name">Olá, sou <em>Gustavo.</em></h1>
    <p class="hero-tagline">Gosto de entender como as coisas funcionam — e de construir coisas que façam sentido.</p>
    <p class="hero-copy">{profile.introduction}</p>
    <p class="hero-personal">Fora do código, gosto de boas histórias, jogos, música e de experimentar novas maneiras de configurar meu ambiente Linux.</p>
    <div class="actions">
      <a class="button" href="#projetos">Ver projetos <Arrow /></a>
      <a class="text-link" href="https://github.com/G-shiy" target="_blank" rel="noopener">GitHub <Arrow diagonal /></a>
    </div>
  </div>
  <OrbitalInstrument {enabled} />
</section>
<style>
  .hero {
    position: relative;
    display: grid;
    grid-template-columns: minmax(0, 1.08fr) minmax(0, 1fr);
    gap: var(--space-8) var(--space-12);
    align-items: center;
    padding-block: clamp(40px, 5vw, 72px) var(--space-6);
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
    margin-top: var(--space-6);
    color: var(--text-primary);
    font-size: clamp(1.1rem, 1.6vw, 1.35rem);
    line-height: 1.4;
    max-width: 55ch;
  }
  .hero-copy {
    max-width: 48ch;
    margin-top: var(--space-5);
    color: var(--text-secondary);
    font-size: var(--text-md);
    line-height: var(--leading-body);
  }
  .hero-personal {
    max-width: 52ch;
    margin-top: var(--space-5);
    color: var(--text-muted);
    font-size: var(--text-label);
    line-height: var(--leading-body);
  }
  .actions {
    margin-top: var(--space-8);
  }
  @media (prefers-reduced-motion: no-preference) {
    h1 {
      animation: title-arrival var(--motion-title) var(--ease-enter) both;
    }
  }
  @keyframes title-arrival {
    from {
      opacity: .6;
      transform: translateX(-6px);
    }
    to {
      opacity: 1;
      transform: none;
    }
  }
  @media (max-width: 62.5rem) {
    .hero {
      gap: var(--space-6);
    }
    h1 {
      font-size: clamp(3.5rem, 8vw, 6rem);
    }
  }
  @media (max-width: 42.5rem) {
    .hero {
      grid-template-columns: 1fr;
      padding-top: var(--space-10);
    }
    h1 {
      font-size: clamp(3.75rem, 17vw, 5.5rem);
    }
    .intro {
      padding-bottom: var(--space-3);
    }
  }
</style>