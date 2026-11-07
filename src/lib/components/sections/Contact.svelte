<script lang="ts">
  import { base } from '$app/paths';
  import { profile } from '$lib/data/profile';
  import Arrow from '$lib/components/ui/Arrow.svelte';
</script>
<section class="section container contact" id="contato" aria-labelledby="contact-title">
  <div>
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
    grid-template-columns: minmax(0, 1.1fr) minmax(0, 1fr);
    gap: var(--column-gap);
    align-items: end;
  }
  h2 {
    font: 300 var(--text-heading) / 1.08 var(--font-display);
    letter-spacing: -.03em;
  }
  .contact > div > p {
    margin-top: var(--space-5);
    color: var(--text-secondary);
    font-size: var(--text-label);
  }
  .email {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--space-4);
    padding-block: var(--space-4);
    border-bottom: 1px solid var(--accent-primary);
    font-size: clamp(1rem, 1.6vw, 1.3rem);
    overflow-wrap: anywhere;
  }
  .email:hover {
    color: var(--accent-primary);
  }
  .contact-links .actions {
    margin-top: var(--space-3);
  }
  .contact-links .location {
    font: var(--text-meta) / 1.5 var(--font-mono);
    color: var(--text-muted);
    margin-top: var(--space-4);
  }
  @media (max-width: 42.5rem) {
    .contact {
      grid-template-columns: 1fr;
      gap: var(--space-8);
    }
  }
</style>