<script lang="ts">
  import { storyReadingSeries, studyReadingGroups } from '$lib/data/readings';
</script>

<section class="section container readings" id="leituras" aria-labelledby="readings-title">
  <header class="section-heading">
    <h2 id="readings-title">Biblioteca.</h2>
    <p>Livros para estudar com atenção e histórias para habitar por algum tempo.</p>
  </header>

  <div class="reading-layout">
    <article class="reading-collection study-collection" aria-labelledby="study-title">
      <div class="collection-heading">
        <span class="collection-mark" aria-hidden="true">A</span>
        <div>
          <h3 id="study-title">Formação e ofício</h3>
          <p>Ideias, sistemas e fundamentos que gosto de explorar.</p>
        </div>
      </div>

      <div class="study-groups">
        {#each studyReadingGroups as group (group.id)}
          <section class="study-group" aria-labelledby={`group-${group.id}`}>
            <h4 id={`group-${group.id}`}>{group.label}</h4>
            <ol>
              {#each group.books as book (book.title)}
                <li>
                  <span class="book-title">{book.title}</span>
                  <span class="book-author">{book.author}</span>
                  <div class="reading-progress-row">
                    <span class="progress-value">{book.progress}%</span>
                    <div
                      class="book-progress-meter"
                      role="progressbar"
                      aria-label={`Progresso de leitura: ${book.title}`}
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-valuenow={book.progress}
                      style={`--reading-progress: ${book.progress}%`}
                    ></div>
                  </div>
                </li>
              {/each}
            </ol>
          </section>
        {/each}
      </div>
    </article>

    <div class="story-column">
      <article class="reading-collection story-collection" aria-labelledby="stories-title">
        <div class="collection-heading">
          <span class="collection-mark" aria-hidden="true">B</span>
          <div>
            <h3 id="stories-title">Histórias e mundos</h3>
          <p>Romances e mundos de ficção para acompanhar com calma.</p>
          </div>
        </div>

        <ul class="series-list">
          {#each storyReadingSeries as series (series.title)}
            <li class="series-entry">
              <span class="series-title">{series.title}</span>
              <span class="series-author">{series.author}</span>
              {#if series.note}<span class="series-note">{series.note}</span>{/if}
              <div class="reading-progress-row">
                <span class="progress-value">{series.progress}%</span>
                <div
                  class="book-progress-meter"
                  role="progressbar"
                  aria-label={`Progresso de leitura: ${series.title}`}
                  aria-valuemin="0"
                  aria-valuemax="100"
                  aria-valuenow={series.progress}
                  style={`--reading-progress: ${series.progress}%`}
                ></div>
              </div>
            </li>
          {/each}
        </ul>
      </article>

      <div class="drawing-note">
        <svg class="renaissance-plate" viewBox="0 0 440 230" fill="none" role="img" aria-label="Desenho geométrico de linhas, círculos e eixos">
          <g class="plate-fine" stroke="currentColor" stroke-width=".8">
            <path d="M20 115h400M220 14v202M62 30l316 170M62 200 378 30" />
            <circle cx="220" cy="115" r="88" />
            <circle cx="220" cy="115" r="64" stroke-dasharray="2 5" />
            <circle cx="220" cy="115" r="34" />
            <path d="M132 115a88 88 0 0 1 176 0M156 115a64 64 0 0 0 128 0" />
            <path d="m220 27 8 88-8 88-8-88 8-88Zm-88 88 88-8 88 8-88 8-88-8Z" />
            <path d="M58 26h30M58 26v30M382 174h-30m30 0v30" />
            <path d="M104 210h64m168-190h-64" stroke-dasharray="3 4" />
          </g>
          <g class="plate-marks" fill="currentColor">
            <circle cx="220" cy="27" r="2.5" />
            <circle cx="308" cy="115" r="2.5" />
            <circle cx="220" cy="203" r="2.5" />
            <circle cx="132" cy="115" r="2.5" />
          </g>
        </svg>
      </div>
    </div>
  </div>
</section>

<style>
  .reading-layout {
    display: grid;
    grid-template-columns: minmax(0, 1.35fr) minmax(17rem, .75fr);
    gap: clamp(var(--space-8), 6vw, var(--space-16));
    align-items: start;
  }

  .reading-collection,
  .story-column,
  .study-groups,
  .study-group {
    min-inline-size: 0;
  }

  .collection-heading {
    display: grid;
    grid-template-columns: auto minmax(0, 1fr);
    gap: var(--space-4);
    align-items: start;
    padding-block-end: var(--space-5);
    border-block-end: 1px solid var(--border-subtle);
  }

  .collection-mark {
    display: grid;
    place-items: center;
    inline-size: 2rem;
    aspect-ratio: 1;
    border: 1px solid var(--border-strong);
    border-radius: 50%;
    color: var(--accent-primary);
    font: var(--text-xs) / 1 var(--font-mono);
  }

  .collection-heading h3 {
    margin: 0;
    color: var(--text-primary);
    font: 400 clamp(1.65rem, 2.3vw, 2.125rem) / 1.12 var(--font-display);
    letter-spacing: -.02em;
  }

  .collection-heading p {
    max-inline-size: 42ch;
    margin-block-start: var(--space-2);
    color: var(--text-secondary);
    font-size: var(--text-sm);
    line-height: var(--leading-body);
  }

  .study-groups {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: var(--space-8) clamp(var(--space-5), 3vw, var(--space-8));
    padding-block-start: var(--space-6);
  }

  .study-group h4 {
    margin: 0 0 var(--space-3);
    color: var(--color-fog-400);
    font: 500 var(--text-xs) / 1.4 var(--font-mono);
    letter-spacing: .04em;
  }

  .study-group ol,
  .series-list {
    display: grid;
    gap: 0;
    margin: 0;
    padding: 0;
    list-style: none;
    counter-reset: reading;
  }

  .study-group li {
    position: relative;
    padding-block: .55rem;
    padding-inline-start: 2rem;
    border-block-end: 1px solid var(--border-subtle);
    color: var(--text-secondary);
    font-size: var(--text-sm);
    line-height: 1.55;
    counter-increment: reading;
    transition: color var(--motion-fast) var(--ease-precise), padding-inline-start var(--motion-fast) var(--ease-precise);
  }

  .book-title,
  .book-author,
  .series-author {
    display: block;
  }

  .reading-progress-row {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    gap: .35rem;
    margin-block-start: var(--space-2);
  }

  .book-progress-meter {
    display: block;
    inline-size: 100%;
    block-size: 6px;
    border-radius: var(--radius-round);
    overflow: hidden;
    background: linear-gradient(
      90deg,
      var(--accent-primary) 0 var(--reading-progress),
      color-mix(in srgb, var(--accent-primary) 42%, var(--surface-inset)) var(--reading-progress) 100%
    );
  }

  .progress-value {
    min-inline-size: 2.75em;
    color: var(--text-muted);
    font: var(--text-xs) / 1.4 var(--font-mono);
    font-variant-numeric: tabular-nums;
    text-align: end;
  }

  .book-author,
  .series-author {
    color: var(--text-muted);
    font-size: var(--text-xs);
    line-height: 1.45;
  }

  .study-group li::before {
    content: counter(reading, decimal-leading-zero);
    position: absolute;
    inset-inline-start: 0;
    color: var(--text-muted);
    font: var(--text-xs) / 1.8 var(--font-mono);
    font-variant-numeric: tabular-nums;
    transition: color var(--motion-fast) var(--ease-precise);
  }

  .story-column {
    display: grid;
    gap: clamp(var(--space-8), 5vw, var(--space-12));
  }

  .series-list {
    padding-block-start: var(--space-3);
  }

  .series-entry {
    display: grid;
    gap: var(--space-1);
    padding-block: var(--space-4);
    border-block-end: 1px solid var(--border-subtle);
    transition: padding-inline-start var(--motion-fast) var(--ease-precise), border-color var(--motion-fast) var(--ease-precise);
  }

  .series-title {
    color: var(--text-primary);
    font-size: var(--text-md);
    line-height: var(--leading-body);
  }

  .series-author {
    color: var(--text-secondary);
  }

  .series-note {
    color: var(--text-muted);
    font: var(--text-xs) / 1.5 var(--font-mono);
  }

  .drawing-note {
    position: relative;
    display: grid;
    place-items: center;
    padding: var(--space-3);
  }

  .renaissance-plate {
    inline-size: min(100%, 27.5rem);
    min-inline-size: 0;
    color: color-mix(in srgb, var(--color-copper-400) 76%, var(--color-fog-400));
    opacity: .8;
    transition: opacity var(--motion-base) var(--ease-precise), transform var(--motion-slow) var(--ease-soft);
  }

  @media (hover: hover) and (pointer: fine) {
    .study-group li:hover {
      padding-inline-start: 2.25rem;
      color: var(--text-primary);
    }

    .study-group li:hover::before {
      color: var(--accent-primary);
    }

    .series-entry:hover {
      padding-inline-start: var(--space-2);
      border-color: var(--accent-primary);
    }

    .renaissance-plate:hover,
    .drawing-note:hover .renaissance-plate {
      opacity: 1;
      transform: rotate(-1deg) scale(1.025);
    }
  }

  @media (max-width: 62.5rem) {
    .reading-layout {
      grid-template-columns: minmax(0, 1.15fr) minmax(15rem, .85fr);
      gap: var(--space-8);
    }

    .study-groups {
      grid-template-columns: minmax(0, 1fr);
      gap: var(--space-6);
    }

    .renaissance-plate {
      max-inline-size: 22rem;
    }
  }

  @media (max-width: 42.5rem) {
    .reading-layout {
      grid-template-columns: minmax(0, 1fr);
      gap: var(--space-10);
    }

    .study-groups {
      gap: var(--space-6);
    }

    .renaissance-plate {
      max-inline-size: none;
    }
  }

  @media (max-width: 24rem) {
    .renaissance-plate {
      max-inline-size: 18rem;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .study-group li,
    .study-group li::before,
    .series-entry,
    .renaissance-plate {
      transition: none;
    }

  }
</style>
