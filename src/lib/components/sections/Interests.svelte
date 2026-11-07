<script lang="ts">
  import OrbitalInstrument from '$lib/components/motion/OrbitalInstrument.svelte';
  import CompassRose from '$lib/components/motion/CompassRose.svelte';
  import { interests } from '$lib/data/interests';

  let { enabled }: { enabled: boolean } = $props();
</script>

<section class="section container interests" id="interesses" aria-labelledby="interests-title">
  <header class="section-heading">
    <h2 id="interests-title">Fora do editor.</h2>
    <div class="interests-intro">
      <p>Outras coisas que gosto de explorar, configurar, ler e ouvir.</p>
      <CompassRose />
    </div>
  </header>

  <div class="interests-composition">
    <div class="orbit-stage">
      <OrbitalInstrument {enabled} />
      <p class="orbit-caption"><span>Instrumento orbital</span><span>Estudo de direção e movimento</span></p>
    </div>

    <div class="interests-grid">
      {#each interests as category (category.id)}
        <article
          class="interest-category"
          class:narratives={category.id === 'narrativas'}
          class:computing={category.id === 'computacao'}
          class:creativity={category.id === 'criatividade'}
        >
          <h3>{category.label}</h3>
          {#each category.items as item (item.title)}
            <div class="interest-item">
              <p>{item.description}</p>
              <ul class="highlights" aria-label={`Referências de ${category.label}`}>
                {#each item.highlights as highlight (highlight)}
                  <li>{highlight}</li>
                {/each}
              </ul>
            </div>
          {/each}
        </article>
      {/each}
    </div>
  </div>
</section>

<style>
  .interests-composition {
    display: grid;
    grid-template-columns: minmax(280px, .8fr) minmax(0, 1.2fr);
    align-items: start;
    gap: clamp(var(--space-8), 6vw, var(--space-16));
  }

  .interests-intro {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    align-items: center;
    gap: clamp(var(--space-3), 2vw, var(--space-6));
  }

  .interests-intro p {
    max-width: 34ch;
  }

  .interests-intro :global(.compass-rose) {
    width: clamp(5rem, 8vw, 7rem);
  }

  .orbit-stage {
    position: relative;
    isolation: isolate;
    display: grid;
    justify-items: center;
    align-content: center;
    min-width: 0;
    padding: var(--space-4);
  }

  .orbit-stage::before {
    content: '';
    position: absolute;
    z-index: -1;
    inset: 7%;
    border-radius: 50%;
    background: radial-gradient(circle, color-mix(in srgb, var(--accent-subtle) 13%, transparent), transparent 69%);
    pointer-events: none;
  }

  .orbit-stage :global(.instrument) {
    width: min(100%, 400px);
    justify-self: center;
  }

  .orbit-caption {
    display: flex;
    justify-content: space-between;
    gap: var(--space-3);
    width: min(100%, 400px);
    margin-top: var(--space-2);
    color: var(--text-muted);
    font: var(--text-meta) / 1.6 var(--font-mono);
  }

  .interests-grid {
    display: grid;
    grid-template-columns: repeat(6, minmax(0, 1fr));
    align-content: center;
    gap: clamp(var(--space-8), 4vw, var(--space-10)) var(--space-8);
  }

  .interest-category {
    min-width: 0;
  }

  .interest-category.narratives {
    grid-column: 1 / -1;
  }

  .interest-category.computing,
  .interest-category.creativity {
    grid-column: span 3;
  }

  .interest-category h3 {
    margin: 0 0 var(--space-4);
    color: var(--text-primary);
    font: 400 clamp(1.65rem, 2.2vw, 2.125rem) / 1.12 var(--font-display);
    letter-spacing: -.02em;
    transition: color var(--motion-base) var(--ease-precise);
  }

  .interest-item p {
    color: var(--text-secondary);
    font-size: var(--text-md);
    line-height: var(--leading-body);
  }

  .highlights {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-2) var(--space-3);
    margin: var(--space-4) 0 0;
    padding: 0;
    list-style: none;
  }

  .highlights li {
    color: var(--text-secondary);
    font-size: var(--text-sm);
    line-height: 1.55;
    transition: color var(--motion-fast) var(--ease-precise);
  }

  .highlights li + li::before {
    content: '·';
    margin-right: var(--space-3);
    color: var(--accent-primary);
  }

  @media (hover: hover) and (pointer: fine) {
    .interest-category:hover h3 {
      color: var(--accent-primary);
    }

    .highlights li:hover {
      color: var(--text-primary);
    }
  }

  @media (max-width: 75rem) {
    .interests-grid {
      grid-template-columns: minmax(0, 1fr);
      gap: var(--space-8);
    }

    .interest-category.narratives,
    .interest-category.computing,
    .interest-category.creativity {
      grid-column: 1 / -1;
    }
  }

  @media (max-width: 62.5rem) {
    .interests-composition {
      grid-template-columns: minmax(200px, .7fr) minmax(0, 1.3fr);
      gap: var(--space-8);
    }

    .interests-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: var(--space-8) var(--space-6);
    }

    .interests-intro {
      max-width: 45rem;
    }

    .interest-category.computing,
    .interest-category.creativity {
      grid-column: 1 / -1;
    }
  }

  @media (max-width: 42.5rem) {
    .interests-composition {
      grid-template-columns: 1fr;
      gap: var(--space-8);
    }

    .interests-intro :global(.compass-rose) {
      width: 5rem;
    }

    .orbit-stage {
      padding: 0;
    }

    .orbit-stage :global(.instrument),
    .orbit-caption {
      width: min(76vw, 280px);
    }

    .interests-grid {
      grid-template-columns: 1fr;
      gap: var(--space-8);
    }

    .interest-category.narratives,
    .interest-category.computing,
    .interest-category.creativity {
      grid-column: 1;
    }
  }
</style>
