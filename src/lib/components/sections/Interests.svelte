<script lang="ts">
  import { interests } from '$lib/data/interests';
</script>
<section class="section container interests" id="interesses" aria-labelledby="interests-title">
  <div class="section-heading">
    <h2 id="interests-title">Fora do editor.</h2>
    <p>O que me interessa quando não estou escrevendo código.<br>Curiosidades, referências e pequenas obsessões.</p>
  </div>
  <div class="interests-grid">
    {#each interests as category (category.id)}
      <article class="interest-category">
        <header>
          <span class="category-label">{category.label}</span>
        </header>
        {#each category.items as item}
          <div class="interest-item">
            <h3>{item.title}</h3>
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
</section>
<style>
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
  .interest-item h3 {
    font: 400 var(--text-lg) / 1.2 var(--font-display);
    letter-spacing: -.02em;
    color: var(--text-primary);
    margin-bottom: var(--space-3);
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
  @media (max-width: 42.5rem) {
    .interests-grid {
      grid-template-columns: 1fr;
      gap: var(--space-8);
    }
  }
</style>