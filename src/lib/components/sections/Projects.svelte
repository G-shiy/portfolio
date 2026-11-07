<script lang="ts">
  import { featuredProjects, secondaryProjects } from '$lib/data/projects';
  import ProjectMap from '$lib/components/ui/ProjectMap.svelte';
  import ProjectRecord from '$lib/components/ui/ProjectRecord.svelte';
  import VigiaVisual from '$lib/components/ui/VigiaVisual.svelte';
  import CrediclassVisual from '$lib/components/ui/CrediclassVisual.svelte';
</script>
<section class="section container" id="projetos" aria-labelledby="projects-title">
  <div class="section-heading">
    <h2 id="projects-title">Projetos selecionados.</h2>
    <p>Backends para integração, dados geoespaciais e automação financeira.</p>
  </div>

  {#each featuredProjects as project (project.id)}
    <article class="featured" aria-labelledby={`${project.id}-title`}>
      <div class="featured-content">
        <div class="project-meta">
          {#if project.freelance}<span class="freelance-badge">Projeto freelancer</span>{/if}
          {#if project.achievement}
            <span class="award">{project.achievement}</span>
          {:else}
            <span class="context">{project.context}</span>
          {/if}
        </div>
        <h3 id={`${project.id}-title`}>{project.name}</h3>
        <p class="thesis">{project.title}</p>
        <p>{project.summary}</p>
        <details class="project-decisions">
          <summary>Decisões de engenharia <span aria-hidden="true">+</span></summary>
          <ul>
            {#each project.decisions as decision (decision)}
              <li>{decision}</li>
            {/each}
          </ul>
        </details>
        <p class="stack">{project.stack.join(' · ')}</p>
      </div>
      <div class="featured-visual">
        {#if project.id === 'wtc'}
          <ProjectMap />
        {:else if project.id === 'vigia'}
          <VigiaVisual />
        {:else}
          <CrediclassVisual />
        {/if}
      </div>
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
    grid-template-columns: minmax(0, .94fr) minmax(0, 1.06fr);
    gap: clamp(var(--space-8), 5vw, var(--space-16));
    align-items: center;
    padding-block: var(--space-8) var(--space-12);
  }

  .section-heading h2 {
    font-size: clamp(2.05rem, 3.25vw, 3.15rem);
  }

  .featured + .featured {
    border-top: 1px solid var(--border-subtle);
  }

  .project-meta {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    gap: var(--space-2) var(--space-4);
    margin-bottom: var(--space-3);
  }

  .award {
    font: var(--text-meta) / 1.6 var(--font-mono);
    color: var(--accent-primary);
    max-width: 40ch;
    margin: 0;
  }

  .context {
    font-size: var(--text-label);
    color: var(--text-muted);
    margin: 0;
  }

  .featured-content h3 {
    font: 300 clamp(1.9rem, 2.8vw, 2.65rem) / 1.08 var(--font-display);
    letter-spacing: -.03em;
    text-wrap: balance;
    transition: color var(--motion-base) var(--ease-enter), translate var(--motion-base) var(--ease-enter);
  }

  @media (hover: hover) and (pointer: fine) {
    .featured:hover .featured-content h3 {
      color: var(--accent-primary);
      translate: 3px 0;
    }
  }

  .featured-content > p:not(.award):not(.context):not(.thesis):not(.stack):not(.freelance-badge) {
    color: var(--text-secondary);
    font-size: var(--text-md);
    line-height: var(--leading-relaxed);
  }

  .thesis {
    font-weight: 500;
    color: var(--text-primary);
    margin-block: var(--space-5) var(--space-3);
    font-size: var(--text-lg);
  }

  .project-decisions ul {
    padding-left: 1.2em;
    margin-block: var(--space-6);
    color: var(--text-secondary);
    font-size: var(--text-md);
    line-height: var(--leading-relaxed);
  }

  .project-decisions li + li {
    margin-top: var(--space-4);
  }

  .project-decisions { margin-top: var(--space-5); }

  .project-decisions summary {
    display: flex;
    align-items: center;
    gap: var(--space-3);
    width: fit-content;
    min-height: 44px;
    color: var(--accent-primary);
    cursor: pointer;
    font-size: var(--text-label);
    list-style: none;
    transition: color var(--motion-fast) var(--ease-enter), gap var(--motion-fast) var(--ease-enter);
  }

  .project-decisions summary:hover,
  .project-decisions summary:focus-visible {
    color: var(--text-primary);
  }

  .project-decisions summary:hover { gap: var(--space-4); }

  .project-decisions summary::-webkit-details-marker { display: none; }

  .project-decisions summary span {
    display: grid;
    width: 1.45rem;
    aspect-ratio: 1;
    place-items: center;
    border: 1px solid var(--border-subtle);
    border-radius: 50%;
    font-size: 1.25rem;
    transition: transform var(--motion-base) var(--ease-precise), border-color var(--motion-fast), background-color var(--motion-fast);
  }

  .project-decisions[open] summary span { transform: rotate(45deg); border-color: var(--accent-primary); background: color-mix(in srgb, var(--accent-primary) 10%, transparent); }

  .project-decisions ul {
    margin-top: var(--space-3);
  }

  .project-decisions[open] ul {
    animation: decisions-arrive var(--motion-base) var(--ease-enter) both;
  }

  @keyframes decisions-arrive {
    from { opacity: 0; transform: translateY(-5px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .freelance-badge {
    font: var(--text-meta) / 1.6 var(--font-mono);
    color: var(--accent-subtle);
    display: inline;
  }

  .stack {
    font: var(--text-meta) / 1.8 var(--font-mono);
    color: var(--text-muted);
    margin-top: var(--space-4);
  }

  .featured-visual {
    position: relative;
    min-width: 0;
  }

  .secondary-projects {
    margin-top: var(--space-12);
    padding-top: var(--space-10);
    border-top: 1px solid var(--border-subtle);
  }

  .secondary-projects h3 {
    font: 400 clamp(1.45rem, 2vw, 1.85rem) / 1.2 var(--font-display);
    letter-spacing: -.02em;
    margin-bottom: var(--space-6);
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

  @media (max-width: 42.5rem) {
    .featured { gap: var(--space-6); }
  }

  @media (prefers-reduced-motion: reduce) {
    .project-decisions summary span,
    .project-decisions summary,
    .featured-content h3 { transition: none; }
    .project-decisions[open] ul { animation: none; }
  }
</style>
