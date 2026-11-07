<script lang="ts">
  import { base } from '$app/paths';
  import { profile } from '$lib/data/profile';
  import { interests } from '$lib/data/interests';
</script>
<section class="section container about" id="sobre" aria-labelledby="about-title">
  <div class="about-narrative">
    <h2 id="about-title">Entender antes<br>de implementar.</h2>
    <div class="narrative-text">
      {#each profile.about as paragraph}
        <p>{paragraph}</p>
      {/each}
    </div>
  </div>

  <div class="about-trajectory">
    <h3>Trajetória</h3>
    <div class="trajectory-content">{@html profile.trajectory}</div>
    <p class="resume-hint">Detalhes completos no <a href={`${base}${profile.resume}`} download>currículo em PDF</a>.</p>
  </div>

  <div class="about-education">
    <h3>Formação</h3>
    <ul>
      {#each profile.education as item}
        <li>
          <strong>{item.institution}</strong>: {item.course} ({item.period}) · {item.status}
        </li>
      {/each}
    </ul>
    <p class="languages">{profile.languages.join(' · ')}</p>
  </div>

  <div class="about-interests">
    <h3>Fora do editor</h3>
    <p class="interests-intro">O que me interessa quando não estou escrevendo código. Curiosidades, referências e pequenas obsessões.</p>
    <div class="interests-grid">
      {#each interests as category (category.id)}
        <article class="interest-category">
          <header>
            <span class="category-label">{category.label}</span>
          </header>
          {#each category.items as item}
            <div class="interest-item">
              <h4>{item.title}</h4>
              <p>{item.description}</p>
              {#if item.highlights}
                <ul class="highlights">
                  {#each item.highlights as highlight}
                    <li>{highlight}</li>
                  {/each}
                </ul>
              {/if}
            </div>
          {/each}
        </article>
      {/each}
    </div>
  </div>
</section>
<style>
  .about {
    display: grid;
    grid-template-columns: minmax(0, 1.1fr) minmax(0, 1fr);
    gap: var(--column-gap);
    align-items: start;
  }
  h2 {
    font: 400 var(--text-heading) / 1.08 var(--font-display);
    letter-spacing: -.03em;
    margin-bottom: var(--space-4);
  }
  h3 {
    font: 400 var(--text-subheading) / 1.2 var(--font-display);
    letter-spacing: -.02em;
    margin-bottom: var(--space-4);
    color: var(--text-primary);
  }
  h4 {
    font: 400 var(--text-lg) / 1.2 var(--font-display);
    letter-spacing: -.02em;
    color: var(--text-primary);
    margin-bottom: var(--space-3);
  }
  .narrative-text p {
    max-width: 65ch;
    color: var(--text-secondary);
    line-height: var(--leading-body);
  }
  .narrative-text p + p {
    margin-top: var(--space-5);
  }
  .trajectory-content {
    color: var(--text-secondary);
    line-height: var(--leading-body);
    max-width: 65ch;
  }
  .resume-hint {
    margin-top: var(--space-6);
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
  .about-education {
    margin-top: var(--space-10);
  }
  .about-education ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .about-education li {
    color: var(--text-secondary);
    margin-top: var(--space-4);
    line-height: var(--leading-body);
  }
  .about-education li:first-child {
    margin-top: 0;
  }
  .about-education strong {
    color: var(--text-primary);
  }
  .languages {
    margin-top: var(--space-6);
    font: var(--text-meta) / 1.6 var(--font-mono);
    color: var(--text-muted);
  }
  .about-interests {
    margin-top: var(--space-16);
    padding-top: var(--space-12);
    border-top: 1px solid var(--border-subtle);
  }
  .interests-intro {
    max-width: 65ch;
    color: var(--text-secondary);
    margin-bottom: var(--space-8);
    font-size: var(--text-label);
  }
  .interests-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: var(--column-gap);
  }
  .interest-category {
    padding-block: var(--space-6);
    border-top: 1px solid var(--border-subtle);
  }
  .interest-category:first-child {
    border-top: none;
    padding-top: 0;
  }
  .category-label {
    display: inline-block;
    font: var(--text-meta) / 1.6 var(--font-mono);
    color: var(--accent-primary);
    text-transform: uppercase;
    letter-spacing: .08em;
    margin-bottom: var(--space-4);
  }
  .interest-item p {
    color: var(--text-secondary);
    line-height: var(--leading-body);
    max-width: 55ch;
  }
  .highlights {
    list-style: none;
    padding: 0;
    margin: var(--space-4) 0 0;
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-2) var(--space-3);
  }
  .highlights li {
    font: var(--text-sm) / 1.5 var(--font-mono);
    color: var(--text-muted);
    background: var(--surface-raised);
    padding: var(--space-1) var(--space-3);
    border-radius: var(--radius-sm);
    border: 1px solid var(--border-subtle);
  }
  @media (max-width: 62.5rem) {
    .about {
      grid-template-columns: 1fr;
      gap: var(--space-8);
    }
    .about-interests {
      margin-top: var(--space-12);
      padding-top: var(--space-8);
    }
  }
  @media (max-width: 42.5rem) {
    .interests-grid {
      grid-template-columns: 1fr;
      gap: var(--space-8);
    }
  }
</style>