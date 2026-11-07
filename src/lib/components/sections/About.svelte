<script lang="ts">
  import { profile } from '$lib/data/profile';
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
  </div>
  <div class="about-education">
    <h3>Formação</h3>
    <ul>
      {#each profile.education as item}
        <li>
          <strong>{item.institution}</strong> — {item.course} ({item.period}) · {item.status}
        </li>
      {/each}
    </ul>
    <p class="languages">{profile.languages.join(' · ')}</p>
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
  @media (max-width: 62.5rem) {
    .about {
      grid-template-columns: 1fr;
      gap: var(--space-8);
    }
  }
</style>