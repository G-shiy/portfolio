<script lang="ts">
  import { featuredProjects, secondaryProjects } from '$lib/data/projects';
  import ProjectMap from '$lib/components/ui/ProjectMap.svelte';
  import ProjectRecord from '$lib/components/ui/ProjectRecord.svelte';
</script>
<section class="section container" id="projetos" aria-labelledby="projects-title">
  <div class="section-heading">
    <h2 id="projects-title">Projetos selecionados.</h2>
    <p>Integração, dados e regras de negócio.<br>O que construí e as decisões por trás.</p>
  </div>
  {#each featuredProjects as project (project.id)}
    <article class="featured" aria-labelledby={`${project.id}-title`}>
      <div class="featured-content">
        <p class="award">{project.achievement}</p>
        <h3 id={`${project.id}-title`}>{project.name}</h3>
        <p class="context">{project.context}</p>
        <p class="thesis">{project.title}</p>
        <p>{project.summary}</p>
        <ul>
          {#each project.decisions as decision}
            <li>{decision}</li>
          {/each}
        </ul>
        {#if project.freelance}
          <p class="freelance-badge">Projeto freelancer</p>
        {/if}
        <p class="stack">{project.stack.join(' · ')}</p>
      </div>
      {#if project.id === 'wtc'}
        <ProjectMap />
      {:else}
        <div class="featured-visual" aria-hidden="true"></div>
      {/if}
    </article>
  {/each}
  <div class="secondary-projects">
    <h3>Outros projetos</h3>
    <div class="projects-list">
      {#each secondaryProjects as project (project.id)}
        <ProjectRecord {project} />
      {/each}
    </div>
  </div>
</section>
<style>
  .featured {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    gap: var(--column-gap);
    align-items: start;
    padding-bottom: var(--space-16);
    border-bottom: 1px solid var(--border-subtle);
  }
  .featured:last-of-type {
    border-bottom: none;
    padding-bottom: 0;
  }
  .award {
    font: var(--text-meta) / 1.6 var(--font-mono);
    color: var(--accent-primary);
    max-width: 40ch;
    margin-bottom: var(--space-5);
  }
  h3 {
    font: 300 clamp(2.75rem, 4.5vw, 4.5rem) / 1.05 var(--font-display);
    letter-spacing: -.03em;
  }
  .context {
    font-size: var(--text-label);
    color: var(--text-muted);
    margin-top: var(--space-3);
  }
  .featured-content > p:not(.award):not(.context):not(.thesis):not(.stack):not(.freelance-badge) {
    color: var(--text-secondary);
  }
  .thesis {
    font-weight: 500;
    margin-block: var(--space-6) var(--space-3);
  }
  ul {
    padding-left: 1.2em;
    margin-block: var(--space-5);
    color: var(--text-secondary);
  }
  li + li {
    margin-top: var(--space-3);
  }
  .freelance-badge {
    font: var(--text-meta) / 1.6 var(--font-mono);
    color: var(--accent-subtle);
    margin-top: var(--space-3);
    display: inline-block;
  }
  .stack {
    font: var(--text-meta) / 1.8 var(--font-mono);
    color: var(--text-muted);
    margin-top: var(--space-5);
  }
  .featured-visual {
    aspect-ratio: 1;
    background: var(--surface-raised);
    border: 1px solid var(--border-subtle);
    border-radius: var(--radius-md);
    display: grid;
    place-items: center;
    color: var(--text-muted);
    font: var(--text-meta) var(--font-mono);
  }
  .secondary-projects {
    margin-top: var(--space-16);
    padding-top: var(--space-16);
    border-top: 1px solid var(--border-subtle);
  }
  .secondary-projects h3 {
    font: 400 var(--text-subheading) / 1.2 var(--font-display);
    letter-spacing: -.02em;
    margin-bottom: var(--space-8);
  }
  .projects-list {
    display: grid;
    gap: var(--space-6);
  }
  @media (max-width: 62.5rem) {
    .featured {
      grid-template-columns: 1fr;
      gap: var(--space-8);
    }
    .featured-content {
      max-width: 70ch;
    }
  }
</style>