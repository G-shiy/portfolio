<section class="hero">
  <div class="container hero-grid">
    <div>
      <div class="eyebrow">Backend Developer / Portfolio</div>

      <h1>Engenharia backend com clareza, precisão e arquitetura.</h1>

      <p class="lead">
        Desenvolvedor backend especializado em <strong>Go</strong> e <strong>Java</strong>,
        construindo sistemas escaláveis, arquiteturas limpas e observabilidade.
        Foco em soluções que combinam performance e confiabilidade.
      </p>

      <div class="hero-actions">
        <a href="#projetos" class="btn btn-primary">Ver projetos</a>
        <a href="#contato" class="btn btn-secondary">Entrar em contato</a>
        <a href="https://github.com/G-shiy" class="btn btn-ghost" target="_blank" rel="noopener noreferrer">
          Ver GitHub ↗
        </a>
      </div>

      <div class="badge-row">
        <span class="badge">Go</span>
        <span class="badge">Java</span>
        <span class="badge">PostgreSQL</span>
        <span class="badge">Docker</span>
        <span class="badge accent">System Design</span>
        <span class="badge neutral">Observability</span>
      </div>
    </div>

    <aside class="terminal-card" aria-label="Painel técnico simulado">
      <div class="terminal-header">
        <span class="dot red"></span>
        <span class="dot yellow"></span>
        <span class="dot green"></span>
        <span class="mono muted" style="margin-left: 8px">gustavo-siqueira.log</span>
      </div>

      <div class="terminal-body">
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
          <span class="log-type log-warn">WARN</span>
          <span>clean architecture documented</span>
        </div>
        <div class="log-line">
          <span class="log-type log-ok">PASS</span>
          <span>domain boundaries validated</span>
        </div>

        <div class="metrics">
          <div class="metric">
            <strong>4+</strong>
            <span>anos de experiência</span>
          </div>
          <div class="metric">
            <strong>7+</strong>
            <span>projetos entregues</span>
          </div>
          <div class="metric">
            <strong>4</strong>
            <span>empresas</span>
          </div>
        </div>
      </div>
    </aside>
  </div>
</section>

<style>
  .hero {
    position: relative;
    padding: 112px 0 72px;
  }

  .hero-grid {
    display: grid;
    grid-template-columns: 1.15fr 0.85fr;
    gap: 48px;
    align-items: center;
  }

  .hero-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 32px;
  }

  @media (max-width: 900px) {
    .hero-grid {
      grid-template-columns: 1fr;
    }

    .hero {
      padding-top: 80px;
    }
  }

  @media (max-width: 560px) {
    .hero-actions {
      flex-direction: column;
    }

    .btn {
      width: 100%;
    }
  }
</style>
