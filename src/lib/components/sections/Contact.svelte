<script lang="ts">
  import { onDestroy } from 'svelte';
  import { base } from '$app/paths';
  import { profile } from '$lib/data/profile';
  import Arrow from '$lib/components/ui/Arrow.svelte';

  let copyState = $state<'idle' | 'copied' | 'failed'>('idle');
  let resetTimer: ReturnType<typeof setTimeout> | undefined;

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      copyState = 'copied';
    } catch {
      copyState = 'failed';
    }

    if (resetTimer) clearTimeout(resetTimer);
    resetTimer = setTimeout(() => (copyState = 'idle'), 2400);
  }

  onDestroy(() => {
    if (resetTimer) clearTimeout(resetTimer);
  });
</script>
<section class="section container contact" id="contato" aria-labelledby="contact-title">
  <div class="contact-main">
    <h2 id="contact-title">Tem algo interessante em mente?</h2>
    <p>Gosto de conversar sobre tecnologia, projetos e boas ideias. Se quiser trocar uma ideia, é só chamar.</p>
  </div>
  <div class="contact-links">
    <div class="email-row">
      <a class="email" href={`mailto:${profile.email}`}>
        {profile.email}
        <Arrow diagonal />
      </a>
      <button class="copy-email" type="button" aria-label="Copiar endereço de e-mail" onclick={copyEmail}>
        <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M7 6.5V4.75c0-.69.56-1.25 1.25-1.25h6c.69 0 1.25.56 1.25 1.25v8c0 .69-.56 1.25-1.25 1.25H12m-6-8H4.75c-.69 0-1.25.56-1.25 1.25v8c0 .69.56 1.25 1.25 1.25h6c.69 0 1.25-.56 1.25-1.25v-8c0-.69-.56-1.25-1.25-1.25H6Z" /></svg>
        <span>{copyState === 'copied' ? 'Copiado' : 'Copiar'}</span>
      </button>
    </div>
    <p class="copy-status" aria-live="polite" aria-atomic="true">
      {copyState === 'copied' ? 'E-mail copiado para a área de transferência.' : copyState === 'failed' ? 'Não foi possível copiar. Selecione o endereço e copie manualmente.' : ''}
    </p>
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
    font: 300 clamp(2.25rem, 3.8vw, 3.45rem) / 1.08 var(--font-display);
    letter-spacing: -.025em;
  }

  .contact-main > p {
    margin-top: var(--space-7);
    color: var(--text-secondary);
    font-size: var(--text-lg);
    line-height: var(--leading-relaxed);
    max-width: 50ch;
  }

  .email-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--space-4);
    border-bottom: 1px solid var(--accent-primary);
  }

  .email {
    display: flex;
    flex: 1;
    min-width: 0;
    align-items: center;
    justify-content: space-between;
    gap: var(--space-4);
    min-height: 54px;
    padding-block: var(--space-3);
    font-size: clamp(1rem, 1.35vw, 1.2rem);
    line-height: 1.3;
    overflow-wrap: anywhere;
    transition: color var(--motion-fast), translate var(--motion-fast) var(--ease-enter);
  }

  .email:hover,
  .email:focus-visible {
    color: var(--accent-primary);
  }

  .copy-email {
    display: inline-flex;
    flex: none;
    align-items: center;
    justify-content: center;
    gap: var(--space-2);
    min-height: 44px;
    padding-inline: var(--space-3);
    border: 1px solid var(--border-strong);
    border-radius: var(--radius-sm);
    background: transparent;
    color: var(--text-secondary);
    font-size: var(--text-meta);
    cursor: pointer;
    transition: color var(--motion-fast), border-color var(--motion-fast), background-color var(--motion-fast), transform var(--motion-fast) var(--ease-enter);
  }

  .copy-email svg {
    width: 1rem;
    fill: none;
    stroke: currentColor;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 1.2;
    transition: transform var(--motion-fast) var(--ease-enter);
  }

  .copy-email:hover,
  .copy-email:focus-visible {
    border-color: var(--accent-primary);
    background: var(--surface-raised);
    color: var(--accent-primary);
  }

  .copy-email:hover svg { transform: translateY(-1px) rotate(-4deg); }
  .copy-email:active { transform: scale(.97); }

  .copy-status {
    min-height: 1.6em;
    margin-top: var(--space-2);
    color: var(--accent-primary);
    font: var(--text-meta) / 1.6 var(--font-mono);
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
      font-size: clamp(2.75rem, 11vw, 3.75rem);
    }

    .contact-main > p {
      font-size: var(--text-md);
    }

    .contact-links .actions {
      flex-direction: column;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .email,
    .copy-email,
    .copy-email svg { transition: none; }
    .copy-email:hover svg { transform: none; }
    .copy-email:active { transform: none; }
  }
</style>
