<script lang="ts">
  // Vigia de Queimadas architecture visualization
</script>
<figure class="vigia-visual" aria-label="Arquitetura do Vigia de Queimadas">
  <figcaption class="visual-caption">
    <span>Fig. 03 · Arquitetura do Vigia de Queimadas</span>
  </figcaption>
  <div class="vigia-diagram">
    <div class="vigia-layer">
      <span class="layer-label">Ingestão</span>
      <div class="layer-nodes">
        <span class="node" data-tooltip="INPE · Dados reais de queimadas">INPE API</span>
        <span class="node" data-tooltip="FastAPI · Validação e deduplicação">Worker</span>
      </div>
    </div>
    <div class="vigia-connector" aria-hidden="true"></div>
    <div class="vigia-layer">
      <span class="layer-label">Persistência</span>
      <div class="layer-nodes">
        <span class="node" data-tooltip="PostgreSQL + PostGIS · Geoespacial">PostGIS</span>
        <span class="node" data-tooltip="Alembic · Migrações versionadas">Alembic</span>
      </div>
    </div>
    <div class="vigia-connector" aria-hidden="true"></div>
    <div class="vigia-layer">
      <span class="layer-label">Notificação</span>
      <div class="layer-nodes">
        <span class="node" data-tooltip="Telegram · Idempotente">Telegram</span>
        <span class="node" data-tooltip="E-mail · SMTP">E-mail</span>
        <span class="node" data-tooltip="Webhook · Extensível">Webhook</span>
      </div>
    </div>
    <div class="vigia-connector" aria-hidden="true"></div>
    <div class="vigia-layer">
      <span class="layer-label">Observabilidade</span>
      <div class="layer-nodes">
        <span class="node" data-tooltip="Prometheus · Métricas">Prometheus</span>
        <span class="node" data-tooltip="Grafana · Dashboards">Grafana</span>
        <span class="node" data-tooltip="CI/CD · GitHub Actions">CI/CD</span>
      </div>
    </div>
  </div>
  <p class="visual-note">Backend Python/FastAPI · Dados geoespaciais reais · Alertas idempotentes</p>
</figure>
<style>
  .vigia-visual {
    margin: 0;
    height: 100%;
    min-height: 380px;
    display: flex;
    flex-direction: column;
    background: var(--surface-figure);
    border: 1px solid var(--border-subtle);
    border-radius: var(--radius-md);
    padding: var(--space-6);
    isolation: isolate;
  }

  .vigia-visual::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: -1;
    background-image:
      linear-gradient(var(--border-subtle) 1px, transparent 1px),
      linear-gradient(90deg, var(--border-subtle) 1px, transparent 1px);
    background-size: 40px 40px;
    mask-image: radial-gradient(ellipse, black, transparent 70%);
    opacity: .2;
  }

  .visual-caption {
    margin-bottom: var(--space-5);
    padding-bottom: var(--space-4);
    border-bottom: 1px solid var(--border-subtle);
  }

  .visual-caption span {
    font: var(--text-meta) var(--font-mono);
    color: var(--accent-primary);
  }

  .vigia-diagram {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: var(--space-5);
    justify-content: center;
  }

  .vigia-layer {
    display: grid;
    grid-template-columns: minmax(0, 140px) 1fr;
    gap: var(--space-5);
    align-items: center;
  }

  .layer-label {
    font: var(--text-meta) var(--font-mono);
    color: var(--accent-primary);
    text-transform: uppercase;
    letter-spacing: .06em;
    writing-mode: vertical-lr;
    text-orientation: mixed;
    height: 100%;
    min-height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .layer-nodes {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-3);
  }

  .node {
    padding: var(--space-3) var(--space-5);
    background: var(--surface-page);
    border: 1px solid var(--border-strong);
    border-radius: var(--radius-sm);
    font: var(--text-sm) var(--font-body);
    color: var(--text-secondary);
    transition: border-color var(--motion-fast), color var(--motion-fast), background-color var(--motion-fast);
    position: relative;
  }

  .node:hover {
    border-color: var(--accent-primary);
    color: var(--accent-primary);
    background: var(--surface-inset);
  }

  .node::after {
    content: attr(data-tooltip);
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    padding: var(--space-2) var(--space-3);
    background: var(--color-ink-950);
    border: 1px solid var(--border-strong);
    border-radius: var(--radius-sm);
    font: var(--text-xs) var(--font-mono);
    color: var(--text-secondary);
    white-space: nowrap;
    opacity: 0;
    visibility: hidden;
    transition: opacity var(--motion-fast), visibility var(--motion-fast);
    margin-bottom: var(--space-2);
    z-index: 10;
    max-width: 280px;
  }

  .node:hover::after {
    opacity: 1;
    visibility: visible;
  }

  .vigia-connector {
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--border-subtle);
  }

  .vigia-connector::before {
    content: '';
    width: 2px;
    height: 100%;
    background: linear-gradient(180deg, var(--border-subtle), var(--accent-primary) 50%, var(--border-subtle));
  }

  .visual-note {
    margin-top: var(--space-6);
    padding-top: var(--space-4);
    border-top: 1px solid var(--border-subtle);
    font: var(--text-meta) var(--font-mono);
    color: var(--text-muted);
    text-align: center;
  }

  @media (max-width: 62.5rem) {
    .vigia-layer {
      grid-template-columns: 1fr;
      gap: var(--space-3);
    }

    .layer-label {
      writing-mode: horizontal-tb;
      min-height: auto;
      height: auto;
      padding-bottom: var(--space-2);
      border-bottom: 1px solid var(--border-subtle);
    }
  }

  @media (max-width: 42.5rem) {
    .vigia-visual {
      padding: var(--space-4);
      min-height: 280px;
    }

    .node {
      padding: var(--space-2) var(--space-4);
      font-size: var(--text-xs);
    }
  }
</style>