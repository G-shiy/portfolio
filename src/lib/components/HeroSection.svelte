<section class="hero-section">
  <div class="hero-grid">
    <div class="hero-content">
      <div class="hero-badge">
        <span>💼 Prestando Serviços</span>
      </div>

      <h1>Gustavo Siqueira</h1>

      <p class="hero-description">
        Desenvolvedor backend prestando serviços de <strong>consultoria</strong>
        e <strong>desenvolvimento de software</strong>. Especializado em
        <strong>Go</strong>
        e <strong>Java</strong>, com foco em sistemas escaláveis, arquitetura
        limpa e observabilidade.
      </p>

      <div class="hero-buttons">
        <a href="#projetos" class="btn">Ver projetos</a>
        <a href="#contato" class="btn btn-secondary">Contato</a>
      </div>

      <div class="hero-stats">
        <div class="stat-item">
          <div class="stat-number">4+</div>
          <div class="stat-label">Anos de experiência</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">7+</div>
          <div class="stat-label">Projetos entregues</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">4</div>
          <div class="stat-label">Empresas</div>
        </div>
      </div>
    </div>

    <div class="hero-stack-card">
      <div class="card-highlight"></div>

      <div class="stack-section">
        <h4>Stack Completa</h4>
        <div class="project-tech">
          <span class="tech-tag">Go</span>
          <span class="tech-tag">Java</span>
          <span class="tech-tag">Spring Boot</span>
          <span class="tech-tag">PostgreSQL</span>
          <span class="tech-tag">MongoDB</span>
          <span class="tech-tag">Docker</span>
          <span class="tech-tag">Kubernetes</span>
        </div>
        <div class="project-tech" style="margin-top: 0.5rem;">
          <span class="tech-tag">Prometheus</span>
          <span class="tech-tag">Grafana</span>
          <span class="tech-tag">Linux</span>
          <span class="tech-tag">Git</span>
          <span class="tech-tag">Node.js</span>
          <span class="tech-tag">React</span>
          <span class="tech-tag">Svelte</span>
        </div>
      </div>

      <div class="focus-section">
        <h4>Foco Técnico</h4>
        <div class="focus-list">
          <div class="focus-item">
            <div class="focus-dot"></div>
            <span>Arquitetura de Microsserviços</span>
          </div>
          <div class="focus-item">
            <div class="focus-dot"></div>
            <span>APIs RESTful & gRPC</span>
          </div>
          <div class="focus-item">
            <div class="focus-dot"></div>
            <span>Observabilidade & Monitoramento</span>
          </div>
          <div class="focus-item">
            <div class="focus-dot"></div>
            <span>CI/CD & DevOps</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .hero-section {
    padding: 3rem 0 4rem 0;
  }

  .hero-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
  }

  .hero-badge {
    display: inline-block;
    background: var(--bg-card);
    padding: 0.4rem 1rem;
    border-radius: 20px;
    border: 1px solid var(--border);
    margin-bottom: 1.5rem;
  }

  .hero-badge span {
    color: var(--border-light);
    font-size: 0.8rem;
    font-weight: 600;
  }

  h1 {
    margin-bottom: 1.5rem;
  }

  .hero-description {
    font-size: 1rem;
    color: var(--text-secondary);
    margin-bottom: 2rem;
    line-height: 1.7;
  }

  .hero-buttons {
    display: flex;
    gap: 1rem;
    margin-bottom: 2rem;
    flex-wrap: wrap;
  }

  .hero-stats {
    display: flex;
    gap: 2rem;
    color: var(--text-secondary);
    font-size: 0.85rem;
    flex-wrap: wrap;
  }

  .stat-number {
    color: var(--text-primary);
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 0.25rem;
  }

  .hero-stack-card {
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: 16px;
    padding: 2rem;
    position: relative;
  }

  .card-highlight {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: var(--border-light);
  }

  .stack-section {
    margin-bottom: 1.5rem;
  }

  .stack-section h4,
  .focus-section h4 {
    margin-bottom: 1rem;
    font-size: 0.9rem;
  }

  .focus-list {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    font-size: 0.85rem;
    color: var(--text-secondary);
  }

  .focus-item {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .focus-dot {
    width: 4px;
    height: 4px;
    background: var(--border-light);
    border-radius: 50%;
    flex-shrink: 0;
  }

  /* Mobile Responsive */
  @media (max-width: 768px) {
    .hero-section {
      padding: 1.5rem 0 2rem 0;
    }

    .hero-grid {
      grid-template-columns: 1fr;
      gap: 2.5rem;
    }

    .hero-badge {
      font-size: 0.75rem;
      padding: 0.35rem 0.85rem;
    }

    h1 {
      font-size: 2rem;
      margin-bottom: 1rem;
    }

    .hero-description {
      font-size: 0.9rem;
      margin-bottom: 1.5rem;
    }

    .hero-buttons {
      flex-direction: column;
      gap: 0.75rem;
    }

    .hero-buttons .btn {
      width: 100%;
      justify-content: center;
      padding: 0.85rem 1.5rem;
    }

    .hero-stats {
      gap: 1.5rem;
      justify-content: space-between;
    }

    .stat-item {
      flex: 1;
      min-width: 80px;
    }

    .stat-number {
      font-size: 1.3rem;
    }

    .stat-label {
      font-size: 0.75rem;
    }

    .hero-stack-card {
      padding: 1.5rem;
    }

    .stack-section h4,
    .focus-section h4 {
      font-size: 0.85rem;
    }

    .focus-list {
      font-size: 0.8rem;
      gap: 0.65rem;
    }
  }

  /* Small mobile */
  @media (max-width: 480px) {
    .hero-stats {
      flex-direction: column;
      gap: 1rem;
    }

    .stat-item {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .stat-number {
      font-size: 1.5rem;
      margin-bottom: 0;
    }
  }
</style>
