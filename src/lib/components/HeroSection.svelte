<section class="hero">
  <div class="container">
    <div class="section-header reveal" style="margin-bottom: 24px;">
      <div class="eyebrow">Gustavo Siqueira — Backend Developer</div>

      <h1 style="font-size: clamp(2rem, 5vw, 3.5rem);">Desenvolvedor Backend & Consultor</h1>

      <p style="max-width: 680px; margin-top: 16px; font-size: 1rem; line-height: 1.6;">
        Especializado em <strong>Go</strong> e <strong>Java</strong>, com 4+ anos de experiência
        construindo sistemas escaláveis, arquiteturas limpas e observabilidade.
        4 empresas atendidas, 7+ projetos entregues.
      </p>
    </div>

    <div class="hero-actions" style="margin-top: 24px;">
      <a href="#projetos" class="btn btn-primary">Ver projetos</a>
      <a href="#contato" class="btn btn-secondary">Contato</a>
      <a href="https://github.com/G-shiy" class="btn btn-ghost" target="_blank" rel="noopener noreferrer">
        GitHub ↗
      </a>
    </div>

    <div class="badge-row" style="margin-top: 20px;">
      <span class="badge">Go</span>
      <span class="badge">Java</span>
      <span class="badge">PostgreSQL</span>
      <span class="badge">Docker</span>
      <span class="badge accent">System Design</span>
      <span class="badge neutral">Observability</span>
    </div>

    <div class="card" style="margin-top: 36px; max-width: 580px;">
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
          <span class="log-type log-ok">PASS</span>
          <span>domain boundaries validated</span>
        </div>

        <div class="metrics">
          <div class="metric"><strong>4+</strong><span>anos exp.</span></div>
          <div class="metric"><strong>7+</strong><span>projetos</span></div>
          <div class="metric"><strong>4</strong><span>empresas</span></div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .hero {
    position: relative;
    padding: 72px 0 48px;
  }

  .hero-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
  }

  @media (max-width: 560px) {
    .hero-actions {
      flex-direction: column;
    }
    .btn {
      width: 100%;
    }
    .hero {
      padding: 48px 0 32px;
    }
  }
</style>
