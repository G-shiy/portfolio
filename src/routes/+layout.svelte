<script>
  import '../app.css';
  import { onMount } from 'svelte';
  import { base } from '$app/paths';

  let mobileMenuOpen = false;

  function toggleMobileMenu() {
    mobileMenuOpen = !mobileMenuOpen;
  }

  function closeMobileMenu() {
    mobileMenuOpen = false;
  }
</script>

<nav>
  <div class="container nav-inner">
    <a href="{base}/" class="brand" aria-label="Página inicial">
      <span class="brand-mark">λ</span>
      <span>Backend.Systems</span>
    </a>

    <button class="hamburger" class:active={mobileMenuOpen} on:click={toggleMobileMenu} aria-label="Menu">
      <span></span>
      <span></span>
      <span></span>
    </button>

    <nav class="nav-links" class:mobile-open={mobileMenuOpen} aria-label="Navegação principal">
      <a href="#sobre" on:click={closeMobileMenu}>Sobre</a>
      <a href="#projetos" on:click={closeMobileMenu}>Projetos</a>
      <a href="#contato" on:click={closeMobileMenu}>Contato</a>
      <a href="https://github.com/G-shiy" target="_blank" rel="noopener noreferrer" on:click={closeMobileMenu}>GitHub ↗</a>
    </nav>
  </div>
</nav>

<main>
  <slot />
</main>

<footer class="footer">
  <div class="container footer-inner">
    <p>© 2026 Backend.Systems — Gustavo Siqueira</p>
    <div class="footer-links">
      <a href="https://github.com/G-shiy" target="_blank" rel="noopener noreferrer">GitHub</a>
      <a href="https://www.linkedin.com/in/siqgustavo/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      <a href="mailto:siqgustavo2@hotmail.com">Email</a>
    </div>
  </div>
</footer>

<style>
  nav {
    position: sticky;
    top: 0;
    z-index: 100;
    backdrop-filter: blur(18px);
    background: rgba(7, 10, 15, 0.78);
    border-bottom: 1px solid rgba(31, 45, 58, 0.75);
  }

  .nav-inner {
    height: 72px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .brand {
    display: flex;
    align-items: center;
    gap: 12px;
    font-weight: 700;
    letter-spacing: -0.03em;
  }

  .brand-mark {
    width: 36px;
    height: 36px;
    display: grid;
    place-items: center;
    border-radius: 12px;
    border: 1px solid var(--primary-border);
    background:
      linear-gradient(135deg, rgba(92, 200, 255, 0.16), rgba(244, 184, 96, 0.08)),
      var(--surface);
    color: var(--primary);
    font-family: "JetBrains Mono", monospace;
    box-shadow: 0 0 30px rgba(92, 200, 255, 0.08);
  }

  .hamburger {
    display: none;
    flex-direction: column;
    gap: 5px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
  }

  .hamburger span {
    width: 25px;
    height: 2px;
    background: var(--text-primary);
    transition: all 0.3s ease;
    border-radius: 2px;
  }

  .hamburger.active span:nth-child(1) {
    transform: rotate(45deg) translate(7px, 7px);
  }

  .hamburger.active span:nth-child(2) {
    opacity: 0;
  }

  .hamburger.active span:nth-child(3) {
    transform: rotate(-45deg) translate(7px, -7px);
  }

  .nav-links {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .nav-links a {
    padding: 8px 12px;
    border-radius: 999px;
    color: var(--text-secondary);
    font-size: 0.875rem;
    transition: var(--transition);
    text-decoration: none;
  }

  .nav-links a:hover {
    color: var(--text);
    background: rgba(255, 255, 255, 0.04);
  }

  @media (max-width: 900px) {
    .hamburger {
      display: flex;
    }

    .nav-links {
      position: fixed;
      top: 0;
      right: -100%;
      height: 100vh;
      width: 70%;
      max-width: 300px;
      background: rgba(22, 22, 22, 0.98);
      backdrop-filter: blur(20px);
      flex-direction: column;
      justify-content: center;
      gap: 2rem;
      padding: 2rem;
      transition: right 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      border-left: 1px solid var(--border);
    }

    .nav-links.mobile-open {
      right: 0;
    }
  }

  main {
    padding-top: 0;
  }
</style>
