<figure class="crediclass-visual" aria-labelledby="crediclass-visual-title">
  <figcaption id="crediclass-visual-title">Componentes documentados da plataforma</figcaption>
  <div class="delivery-flow">
    <div class="flow-step">
      <span class="step-label">Aplicação</span>
      <div class="step-content">
        <strong>Go · Gin</strong>
        <span>HTMX · Templ</span>
      </div>
    </div>
    <svg class="flow-arrow" viewBox="0 0 32 24" aria-hidden="true">
      <path d="M16 1v19m-7-7 7 7 7-7" fill="none" stroke="currentColor" stroke-width="1.2" />
    </svg>
    <div class="flow-step">
      <span class="step-label">Infraestrutura · Terraform</span>
      <div class="step-content infrastructure">
        <strong>AWS</strong>
        <ul>
          <li>EC2 Auto Scaling</li>
          <li>RDS PostgreSQL Multi-AZ</li>
          <li>S3 · CloudFront · WAF</li>
        </ul>
      </div>
    </div>
    <svg class="flow-arrow" viewBox="0 0 32 24" aria-hidden="true">
      <path d="M16 1v19m-7-7 7 7 7-7" fill="none" stroke="currentColor" stroke-width="1.2" />
    </svg>
    <div class="flow-step delivery">
      <span class="step-label">Entrega</span>
      <div class="step-content">
        <strong>GitHub Actions</strong>
        <span>Deploy blue/green</span>
      </div>
    </div>
  </div>
</figure>

<style>
  .crediclass-visual {
    margin: 0;
    min-width: 0;
    padding: clamp(var(--space-4), 2vw, var(--space-6));
    background: var(--surface-figure);
    border: 1px solid var(--border-subtle);
  }

  figcaption {
    padding-bottom: var(--space-3);
    border-bottom: 1px solid var(--border-subtle);
    color: var(--accent-primary);
    font: var(--text-meta) / 1.5 var(--font-mono);
  }

  .delivery-flow {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 24px minmax(0, 1.3fr) 24px minmax(0, 1fr);
    align-items: center;
    gap: var(--space-2);
    padding-top: var(--space-5);
  }

  .flow-step {
    display: grid;
    width: 100%;
    min-width: 0;
    grid-template-columns: 1fr;
    gap: var(--space-2);
  }

  .step-label {
    color: var(--text-muted);
    text-align: start;
    font: var(--text-meta) / 1.5 var(--font-mono);
    text-wrap: balance;
  }

  .step-content {
    display: grid;
    gap: var(--space-1);
    min-width: 0;
    padding: var(--space-3);
    background: var(--surface-page);
    border: 1px solid var(--border-strong);
    color: var(--text-secondary);
    line-height: 1.5;
    font-size: var(--text-sm);
  }

  .step-content strong {
    color: var(--text-primary);
    font-weight: 500;
  }

  .infrastructure ul {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-1) var(--space-3);
    padding: 0;
    margin: var(--space-1) 0 0;
    list-style: none;
    color: var(--text-muted);
  }

  .flow-arrow {
    width: 22px;
    height: 18px;
    color: var(--accent-primary);
    margin: 0;
    transform: rotate(-90deg);
  }

  @media (max-width: 42.5rem) {
    .delivery-flow {
      grid-template-columns: 1fr;
      gap: var(--space-1);
      padding-top: var(--space-4);
    }

    .flow-step {
      grid-template-columns: minmax(0, 6.5rem) minmax(0, 1fr);
      gap: var(--space-3);
    }

    .step-label { text-align: right; }
    .step-content { width: 100%; }

    .flow-arrow {
      width: 26px;
      height: 18px;
      margin-inline-start: 6rem;
      transform: none;
    }
  }
</style>
