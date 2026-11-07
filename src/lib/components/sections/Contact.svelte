<script lang="ts">
  import { base } from '$app/paths';
  import { profile } from '$lib/data/profile';
  import Arrow from '$lib/components/ui/Arrow.svelte';
</script>
<section class="section container contact" id="contato" aria-labelledby="contact-title">
  <div class="contact-main">
    <h2 id="contact-title">Tem algo interessante<br>em mente?</h2>
    <p>Gosto de conversar sobre tecnologia, projetos e boas ideias.<br>Se quiser trocar uma ideia, é só chamar.</p>
  </div>
  <div class="contact-links">
    <a class="email" href={`mailto:${profile.email}`}>
      {profile.email}
      <Arrow diagonal />
    </a>
    <div class="actions">
      <a class="text-link" href={profile.github} target="_blank" rel="noopener">GitHub <Arrow diagonal /></a>
      <a class="text-link" href={profile.linkedin} target="_blank" rel="noopener">LinkedIn <Arrow diagonal /></a>
      <a class="text-link" href={`${base}${profile.resume}`} download="Gustavo-Siqueira-Curriculo.pdf">Baixar currículo <Arrow /></a>
    </div>
    <p class="location">{profile.location}</p>
  </div>
</section>
<style>
  .contact {
    display: grid;
    grid-template-columns: minmax(0, 1.2fr) minmax(0, 0.9fr);
    gap: var(--column-gap);
    align-items: start;
  }

  .contact-main {
    padding-top: var(--space-4);
  }

  h2 {
    font: 300 var(--text-heading) / 1.05 var(--font-display);
    letter-spacing: -.035em;
  }

  .contact-main > p {
    margin-top: var(--space-7);
    color: var(--text-secondary);
    font-size: var(--text-lg);
    line-height: var(--leading-relaxed);
    max-width: 50ch;
  }

  .email {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--space-4);
    padding-block: var(--space-5);
    border-bottom: 1px solid var(--accent-primary);
    font-size: clamp(1.1rem, 1.8vw, 1.45rem);
    line-height: 1.3;
    overflow-wrap: anywhere;
    transition: color var(--motion-fast);
  }

  .email:hover {
    color: var(--accent-primary);
  }

  .contact-links .actions {
    margin-top: var(--space-6);
    display: flex;
    flex-direction: column;
    gap: var(--space-4);
  }

  .contact-links .actions .text-link {
    font-size: var(--text-label);
    padding: var(--space-2) 0;
    border-radius: var(--radius-sm);
    transition: color var(--motion-fast), background-color var(--motion-fast);
  }

  .contact-links .actions .text-link:hover {
    background: var(--surface-raised);
  }

  .contact-links .location {
    margin-top: var(--space-8);
    font: var(--text-meta) / 1.6 var(--font-mono);
    color: var(--text-muted);
  }

  @media (max-width: 62.5rem) {
    .contact {
      grid-template-columns: 1fr;
      gap: var(--space-12);
    }

    .contact-main {
      padding-top: 0;
    }

    .contact-links .actions {
      flex-direction: row;
      flex-wrap: wrap;
    }
  }

  @media (max-width: 42.5rem) {
    h2 {
      font-size: clamp(2.5rem, 10vw, 3.75rem);
    }

    .contact-main > p {
      font-size: var(--text-md);
    }

    .email {
      font-size: clamp(1rem, 4vw, 1.2rem);
    }

    .contact-links .actions {
      flex-direction: column;
    }
  }
</style>