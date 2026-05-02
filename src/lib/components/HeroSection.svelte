<section class="hero">
  <div class="container hero-grid">
    <div>
      <div class="eyebrow" style="font-size: 0.7rem;">Gustavo Siqueira — Backend Developer</div>

      <h1 style="font-size: clamp(2rem, 5vw, 3.5rem);">Desenvolvedor Backend & Consultor</h1>

      <p style="max-width: 600px; margin-top: 14px; font-size: 0.95rem; line-height: 1.6;">
        Especializado em <strong>Go</strong> e <strong>Java</strong>, com 4+ anos de experiência.
        Construindo sistemas escaláveis, arquiteturas limpas e observabilidade.
      </p>

      <div class="hero-actions" style="margin-top: 20px;">
        <a href="#projetos" class="btn btn-primary" style="padding: 10px 16px; font-size: 0.85rem;">Ver projetos</a>
        <a href="#contato" class="btn btn-secondary" style="padding: 10px 16px; font-size: 0.85rem;">Contato</a>
        <a href="https://github.com/G-shiy" class="btn btn-ghost" target="_blank" rel="noopener noreferrer" style="padding: 10px 16px; font-size: 0.85rem;">
          GitHub ↗
        </a>
      </div>

      <div class="badge-row" style="margin-top: 16px; gap: 6px;">
        <span class="badge" style="font-size: 0.68rem; padding: 5px 8px;">Go</span>
        <span class="badge" style="font-size: 0.68rem; padding: 5px 8px;">Java</span>
        <span class="badge" style="font-size: 0.68rem; padding: 5px 8px;">PostgreSQL</span>
        <span class="badge" style="font-size: 0.68rem; padding: 5px 8px;">Docker</span>
        <span class="badge accent" style="font-size: 0.68rem; padding: 5px 8px;">System Design</span>
        <span class="badge neutral" style="font-size: 0.68rem; padding: 5px 8px;">Observability</span>
      </div>
    </div>

    <aside class="terminal-card" aria-label="Painel técnico simulado" style="min-height: 320px;">
      <div class="terminal-header">
        <span class="dot red"></span>
        <span class="dot yellow"></span>
        <span class="dot green"></span>
        <span class="mono muted" style="margin-left: 8px; font-size: 0.75rem;">gustavo-siqueira.log</span>
      </div>

      <div class="terminal-body" style="font-size: 0.78rem;">
        <div class="log-line">
          <span class="log-type">INFO</span>
          <span>backend developer initialized</span>
        </div>
        <div class="log-line">
          <span class="log-type log-ok">OK</span>
          <span>go + postgresql connection stable</span>
        </div>
        <div class="log-line">
          <span class="log-type">TRACE</span>
          <span>api latency p95 under target</span>
        </div>
        <div class="log-line">
          <span class="log-type log-ok">PASS</span>
          <span>domain boundaries validated</span>
        </div>

        <div class="metrics" style="gap: 10px; margin-top: 16px;">
          <div class="metric" style="padding: 10px;">
            <strong style="font-size: 1.1rem;">4+</strong>
            <span style="font-size: 0.68rem;">anos exp.</span>
          </div>
          <div class="metric" style="padding: 10px;">
            <strong style="font-size: 1.1rem;">7+</strong>
            <span style="font-size: 0.68rem;">projetos</span>
          </div>
          <div class="metric" style="padding: 10px;">
            <strong style="font-size: 1.1rem;">4</strong>
            <span style="font-size: 0.68rem;">empresas</span>
          </div>
        </div>
      </div>
    </aside>
  </div>
</section>

<style>
  .hero {
    position: relative;
    padding: 72px 0 48px;
  }

  .hero-grid {
    display: grid;
    grid-template-columns: 1.15fr 0.85fr;
    gap: 40px;
    align-items: center;
  }

  .hero-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  @media (max-width: 900px) {
    .hero-grid {
      grid-template-columns: 1fr;
    }
    .hero {
      padding-top: 48px;
    }
  }

  @media (max-width: 560px) {
    .hero-actions {
      flex-direction: column;
    }
    .btn {
      width: 100%;
      justify-content: center;
    }
  }
</style>
