<script lang="ts">
  import { base } from '$app/paths';
  import { profile } from '$lib/data/profile';
</script>

<section class="section container about" id="sobre" aria-labelledby="about-title">
  <header class="about-header">
    <h2 id="about-title">Entender antes de implementar.</h2>
  </header>

  <div class="narrative-text">
    {#each profile.about as paragraph}
      <p>{paragraph}</p>
    {/each}
  </div>

  <section class="about-trajectory" aria-labelledby="trajectory-title">
    <h3 id="trajectory-title">Trajetória</h3>
    <div class="trajectory-content">{@html profile.trajectory}</div>
  </section>

  <section class="about-education" aria-labelledby="education-title">
    <h3 id="education-title">Formação</h3>
    <div>
      <ul>
        {#each profile.education as item}
          <li>
            <strong>{item.institution}</strong>
            <span class="education-course">{item.course}</span>
            <span class="education-meta">{item.period} · {item.status}</span>
          </li>
        {/each}
      </ul>
    </div>
  </section>

  <section class="about-languages" aria-labelledby="languages-title">
    <h3 id="languages-title">Idiomas</h3>
    <ul class="languages-list">
      {#each profile.languages as language (language)}
        <li>{language}</li>
      {/each}
    </ul>
  </section>

  <p class="resume-hint">Detalhes completos no <a href={`${base}${profile.resume}`} download>currículo em PDF</a>.</p>
</section>

<style>
  .about {
    display: grid;
    grid-template-columns: repeat(12, minmax(0, 1fr));
    column-gap: var(--column-gap);
    row-gap: clamp(3.5rem, 7vw, 6rem);
  }

  .about-header {
    grid-column: 1 / span 4;
    align-self: start;
  }

  h2 {
    max-width: 12ch;
    margin: 0;
    font: 300 clamp(2.75rem, 3.6vw, 3.6rem) / 1.04 var(--font-display);
    letter-spacing: -.025em;
  }

  h3 {
    margin: 0;
    font: 400 clamp(1.75rem, 2.2vw, 2.125rem) / 1.2 var(--font-display);
    letter-spacing: -.02em;
    color: var(--text-primary);
  }

  .narrative-text {
    grid-column: 5 / -1;
    display: grid;
    grid-template-columns: repeat(8, minmax(0, 1fr));
    gap: var(--space-5) var(--space-8);
  }

  .narrative-text p,
  .trajectory-content {
    color: var(--text-secondary);
    line-height: var(--leading-relaxed);
    font-size: var(--text-md);
    margin: 0;
  }

  .narrative-text p:first-child,
  .narrative-text p:last-child {
    grid-column: 1 / -1;
    max-width: 72ch;
  }

  .narrative-text p:nth-child(2) {
    grid-column: 1 / span 5;
  }

  .narrative-text p:nth-child(3) {
    grid-column: 6 / span 3;
  }

  .about-trajectory {
    grid-column: 1 / -1;
    display: grid;
    grid-template-columns: minmax(0, 3fr) minmax(0, 9fr);
    column-gap: var(--column-gap);
    row-gap: var(--space-6);
    padding-top: var(--space-10);
    border-top: 1px solid var(--border-subtle);
  }

  .about-trajectory h3 {
    grid-column: 1;
  }

  .trajectory-content {
    grid-column: 2;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: var(--space-6) var(--space-8);
  }

  :global(.trajectory-content strong) {
    color: var(--text-primary);
    font-weight: 500;
  }

  :global(.trajectory-content p) {
    margin: 0;
  }

  :global(.trajectory-content p:first-child) {
    grid-column: 1 / -1;
    max-width: 64ch;
    color: var(--text-muted);
  }

  :global(.trajectory-content p:nth-child(2n + 2)) {
    grid-column: 1;
  }

  :global(.trajectory-content p:nth-child(2n + 3)) {
    grid-column: 2;
  }

  .about-education {
    grid-column: 1 / -1;
    display: grid;
    grid-template-columns: minmax(0, 3fr) minmax(0, 9fr);
    column-gap: var(--column-gap);
    align-items: start;
  }

  .about-education ul {
    list-style: none;
    grid-column: 2;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: var(--space-8) var(--space-8);
    padding: 0;
    margin: 0;
  }

  .about-education li {
    color: var(--text-secondary);
    line-height: var(--leading-body);
    font-size: var(--text-md);
  }

  .about-education strong {
    display: block;
    margin-bottom: var(--space-2);
    color: var(--text-primary);
    font-weight: 500;
  }

  .education-course {
    display: block;
  }

  .education-meta {
    display: block;
    margin-top: var(--space-2);
    font: var(--text-meta) / 1.6 var(--font-mono);
    color: var(--text-muted);
  }

  .about-languages {
    grid-column: 1 / -1;
    display: grid;
    grid-template-columns: minmax(0, 3fr) minmax(0, 9fr);
    column-gap: var(--column-gap);
    align-items: start;
    padding-top: var(--space-8);
    border-top: 1px solid var(--border-subtle);
  }

  .languages-list {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-4) var(--space-8);
    grid-column: 2;
    margin: 0;
    padding: 0;
    list-style: none;
    color: var(--text-secondary);
    font-size: var(--text-md);
    line-height: var(--leading-body);
  }

  .resume-hint {
    grid-column: 4 / -1;
    font: var(--text-meta) / 1.6 var(--font-mono);
    color: var(--text-muted);
  }

  .resume-hint a {
    color: var(--accent-primary);
    text-decoration: underline;
    text-underline-offset: 3px;
  }

  .resume-hint a:hover {
    color: var(--accent-hover);
  }

  @media (max-width: 62.5rem) {
    .about {
      grid-template-columns: repeat(8, minmax(0, 1fr));
      row-gap: var(--space-10);
    }

    .about-header {
      grid-column: 1 / span 2;
    }

    .narrative-text {
      grid-column: 3 / -1;
      grid-template-columns: repeat(6, minmax(0, 1fr));
      gap: var(--space-5) var(--space-6);
    }

    .narrative-text p:nth-child(2) {
      grid-column: 1 / span 4;
    }

    .narrative-text p:nth-child(3) {
      grid-column: 5 / span 2;
    }

    .about-trajectory {
      grid-column: 1 / -1;
      grid-template-columns: minmax(0, 2fr) minmax(0, 6fr);
    }

    .about-education {
      grid-template-columns: minmax(0, 2fr) minmax(0, 6fr);
    }

    .about-languages {
      grid-template-columns: minmax(0, 2fr) minmax(0, 6fr);
    }

    .about-education ul {
      gap: var(--space-6);
    }
  }

  @media (max-width: 42.5rem) {
    .about {
      grid-template-columns: 1fr;
      row-gap: var(--space-10);
    }

    .about-header,
    .narrative-text,
    .about-trajectory,
    .about-education,
    .about-languages {
      grid-column: 1;
    }

    .narrative-text p:nth-child(2),
    .narrative-text p:nth-child(3) {
      grid-column: 1;
    }

    h2 {
      max-width: 13ch;
      font-size: clamp(2.5rem, 10vw, 3.25rem);
    }

    .narrative-text,
    .trajectory-content {
      grid-template-columns: 1fr;
      gap: var(--space-5);
    }

    .narrative-text p,
    :global(.trajectory-content p:first-child),
    :global(.trajectory-content p:nth-child(2n + 2)),
    :global(.trajectory-content p:nth-child(2n + 3)) {
      grid-column: 1;
    }

    .about-trajectory,
    .about-education,
    .about-languages {
      grid-template-columns: 1fr;
      gap: var(--space-5);
      padding-top: var(--space-8);
    }

    .trajectory-content,
    .about-education ul,
    .languages-list {
      grid-column: 1;
    }

    .about-education ul {
      grid-template-columns: 1fr;
      gap: var(--space-6);
    }

    .resume-hint {
      grid-column: 1;
    }
  }
</style>
