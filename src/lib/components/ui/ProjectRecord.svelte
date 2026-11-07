<script lang="ts">
  import type { Project } from '$lib/data/projects';
  import Arrow from './Arrow.svelte';
  let { project, prominent = false }: { project: Project; prominent?: boolean } = $props();
</script>
<article class="project-record" class:prominent id={project.id} aria-labelledby={`${project.id}-title`}>
  <div class="project-identity">
    <p class="meta">{project.context}</p>
    <h3 id={`${project.id}-title`}>{project.name}</h3>
    {#if project.freelance}
      <span class="freelance-tag">Freelancer</span>
    {/if}
  </div>
  <div class="project-content">
    <p class="project-thesis">{project.title}</p>
    <p>{project.summary}</p>
    <details>
      <summary>Decisões de engenharia <span aria-hidden="true">+</span></summary>
      <ul>
        {#each project.decisions as decision}
          <li>{decision}</li>
        {/each}
      </ul>
    </details>
    {#if project.achievement}
      <p class="achievement">{project.achievement}</p>
    {/if}
    <p class="stack">{project.stack.join(' · ')}</p>
    {#if project.repository || project.demo}
      <div class="actions">
        {#if project.repository}
          <a class="text-link" href={project.repository}>Código <Arrow diagonal /></a>
        {/if}
        {#if project.demo}
          <a class="text-link" href={project.demo}>Ver projeto <Arrow diagonal /></a>
        {/if}
      </div>
    {/if}
  </div>
</article>
<style>
  .project-record {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1.75fr);
    gap: var(--column-gap);
    padding-block: var(--space-10);
    border-top: 1px solid var(--border-subtle);
    position: relative;
  }
  .project-record::before {
    content: '';
    position: absolute;
    inset: -1px auto auto 0;
    width: 72px;
    height: 1px;
    background: var(--accent-primary);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform var(--motion-reveal) var(--ease-precise);
  }
  .project-record:hover::before,
  .project-record:focus-within::before {
    transform: scaleX(1);
  }
  h3 {
    font: 400 clamp(1.75rem, 2.7vw, 2.5rem) / 1.15 var(--font-display);
    letter-spacing: -.02em;
    margin-top: var(--space-3);
  }
  .meta {
    font: var(--text-meta) / 1.5 var(--font-mono);
    color: var(--text-muted);
  }
  .freelance-tag {
    display: inline-block;
    margin-top: var(--space-2);
    font: var(--text-meta) / 1.5 var(--font-mono);
    color: var(--accent-subtle);
    background: var(--surface-raised);
    padding: var(--space-1) var(--space-2);
    border-radius: var(--radius-sm);
    border: 1px solid var(--border-subtle);
  }
  .project-content > p {
    max-width: var(--measure-body);
    color: var(--text-secondary);
    line-height: var(--leading-relaxed);
    font-size: var(--text-md);
  }
  .project-content .project-thesis {
    font-weight: 500;
    color: var(--text-primary);
    margin-bottom: var(--space-4);
    font-size: var(--text-lg);
  }
  .project-content .stack {
    margin-top: var(--space-6);
    font: var(--text-meta) / 1.8 var(--font-mono);
    color: var(--text-muted);
  }
  .project-content .achievement {
    margin-top: var(--space-4);
    font: var(--text-meta) / 1.6 var(--font-mono);
    color: var(--accent-primary);
  }
  details {
    margin-top: var(--space-5);
  }
  summary {
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: var(--space-3);
    min-height: 44px;
    width: fit-content;
    font-size: var(--text-label);
    color: var(--accent-primary);
    list-style: none;
  }
  summary::-webkit-details-marker {
    display: none;
  }
  summary span {
    font-size: 1.25rem;
    transition: transform var(--motion-base) var(--ease-precise);
  }
  details[open] summary span {
    transform: rotate(45deg);
  }
  ul {
    padding-left: 1.2em;
    max-width: var(--measure-body);
    color: var(--text-secondary);
    margin-top: var(--space-3);
    font-size: var(--text-md);
    line-height: var(--leading-relaxed);
  }
  li + li {
    margin-top: var(--space-4);
  }
  .prominent {
    padding-block: var(--space-12);
  }
  .prominent h3 {
    font-size: clamp(2rem, 3.2vw, 3rem);
  }
  @media (max-width: 42.5rem) {
    .project-record {
      grid-template-columns: 1fr;
      gap: var(--space-5);
      padding-block: var(--space-8);
    }
    h3 {
      margin-top: var(--space-2);
    }
  }
  @media (prefers-reduced-motion: reduce) {
    .project-record::before,
    summary span {
      transition: none;
    }
  }
</style>