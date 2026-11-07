<script lang="ts">
  import { navigation, type SectionId } from '$lib/data/profile';
  let { active, paused, reduced, ontoggle }: { active: SectionId; paused: boolean; reduced: boolean; ontoggle: () => void } = $props();
</script>
<header class="site-header">
  <div class="container header-inner">
    <a class="identity" href="#inicio" aria-label="Gustavo Siqueira, início">
      <svg class="symbol" width="32" height="32" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <path d="M4 20h32M20 4v32" stroke="currentColor" stroke-width=".8" opacity=".6" />
        <path d="M29 8A15 15 0 1 0 32 29M12 28 28 12" stroke="currentColor" stroke-width="1.5" />
        <circle cx="28" cy="12" r="2" fill="currentColor" />
      </svg>
      <span>GS.</span>
    </a>
    <nav aria-label="Navegação principal">
      {#each navigation as item (item.id)}
        <a href={`#${item.id}`} aria-current={active === item.id ? 'location' : undefined}>
          {item.label}
        </a>
      {/each}
    </nav>
    <button
      class="motion-toggle"
      type="button"
      disabled={reduced}
      aria-pressed={paused || reduced}
      onclick={ontoggle}
      aria-label={reduced ? 'Movimento reduzido pelo sistema' : paused ? 'Retomar animações' : 'Pausar animações'}
    >
      <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true" fill="currentColor">
        {#if paused || reduced}
          <path d="m5 3 8 5-8 5z" />
        {:else}
          <path d="M4 3h2v10H4zm6 0h2v10h-2z" />
        {/if}
      </svg>
      <span>{reduced ? 'Reduzido' : paused ? 'Retomar' : 'Pausar'}</span>
    </button>
  </div>
</header>
<style>
  .site-header {
    position: sticky;
    top: 0;
    z-index: 30;
    background: var(--surface-page);
    border-bottom: 1px solid var(--border-subtle);
  }
  .header-inner {
    min-height: var(--nav-height);
    display: flex;
    align-items: center;
    gap: var(--space-8);
    justify-content: space-between;
  }
  .identity {
    display: flex;
    align-items: center;
    gap: var(--space-3);
    min-height: 44px;
    font-size: var(--text-lg);
    font-weight: 500;
    letter-spacing: -.02em;
  }
  .symbol {
    color: var(--accent-primary);
    flex-shrink: 0;
  }
  nav {
    display: flex;
    gap: var(--space-6);
    margin-left: auto;
  }
  nav a {
    position: relative;
    display: flex;
    align-items: center;
    min-height: 44px;
    font-size: var(--text-label);
    color: var(--text-secondary);
  }
  nav a::after {
    content: '';
    position: absolute;
    inset: auto 0 5px;
    height: 1px;
    background: var(--accent-primary);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform var(--motion-base) var(--ease-precise);
  }
  nav a:hover,
  nav a[aria-current] {
    color: var(--text-primary);
  }
  nav a:hover::after,
  nav a[aria-current]::after,
  nav a:focus-visible::after {
    transform: scaleX(1);
  }
  .motion-toggle {
    display: flex;
    align-items: center;
    gap: var(--space-2);
    min-height: 44px;
    padding: 8px 12px;
    border: 1px solid var(--border-strong);
    font: var(--text-meta) var(--font-mono);
    background: transparent;
    color: var(--text-secondary);
    cursor: pointer;
  }
  .motion-toggle:hover,
  .motion-toggle[aria-pressed=true] {
    border-color: var(--accent-primary);
    color: var(--text-primary);
  }
  .motion-toggle:disabled {
    cursor: default;
  }
  @media (max-width: 42.5rem) {
    .header-inner {
      min-height: 0;
      padding-block: 12px;
      flex-wrap: wrap;
      gap: 4px 16px;
    }
    .identity {
      order: 0;
    }
    .motion-toggle {
      order: 1;
      margin-left: auto;
    }
    nav {
      order: 2;
      width: 100%;
      justify-content: space-between;
      gap: 12px;
      margin: 0;
    }
    nav a {
      font-size: .8125rem;
    }
  }
</style>