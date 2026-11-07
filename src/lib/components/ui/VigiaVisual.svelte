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
        <span class="node" title="Dados reais de queimadas">INPE API</span>
        <span class="node" title="FastAPI · Validação e deduplicação">Worker</span>
      </div>
    </div>
    <div class="vigia-connector" aria-hidden="true"></div>
    <div class="vigia-layer">
      <span class="layer-label">Persistência</span>
      <div class="layer-nodes">
        <span class="node" title="PostgreSQL com dados geoespaciais">PostGIS</span>
        <span class="node" title="Migrações versionadas">Alembic</span>
      </div>
    </div>
    <div class="vigia-connector" aria-hidden="true"></div>
    <div class="vigia-layer">
      <span class="layer-label">Notificação</span>
      <div class="layer-nodes">
        <span class="node" title="Notificação idempotente">Telegram</span>
        <span class="node" title="E-mail · SMTP">E-mail</span>
        <span class="node" title="Webhook extensível">Webhook</span>
      </div>
    </div>
    <div class="vigia-connector" aria-hidden="true"></div>
    <div class="vigia-layer">
      <span class="layer-label">Observabilidade</span>
      <div class="layer-nodes">
        <span class="node" title="Métricas">Prometheus</span>
        <span class="node" title="Dashboards">Grafana</span>
        <span class="node" title="GitHub Actions">CI/CD</span>
      </div>
    </div>
  </div>
  <p class="visual-note">Backend Python/FastAPI · Dados geoespaciais reais · Alertas idempotentes</p>
</figure>
<style>
  .vigia-visual {
    display: flex;
    min-width: 0;
    flex-direction: column;
    margin: 0;
    padding: clamp(var(--space-4), 2.4vw, var(--space-6));
    background: var(--surface-figure);
    border: 1px solid var(--border-subtle);
    border-radius: var(--radius-md);
  }

  .visual-caption {
    margin-bottom: var(--space-4);
    padding-bottom: var(--space-3);
    border-bottom: 1px solid var(--border-subtle);
  }

  .visual-caption span {
    font: var(--text-meta) var(--font-mono);
    color: var(--accent-primary);
  }

  .vigia-diagram {
    display: grid;
    gap: var(--space-2);
  }

  .vigia-layer {
    display: grid;
    grid-template-columns: minmax(5.75rem, 7.5rem) minmax(0, 1fr);
    gap: var(--space-4);
    align-items: center;
    min-width: 0;
  }

  .layer-label {
    font: var(--text-meta) var(--font-mono);
    color: var(--accent-primary);
    text-transform: uppercase;
    min-width: 0;
    letter-spacing: .04em;
    text-wrap: balance;
  }

  .layer-nodes {
    display: flex;
    flex-wrap: wrap;
    min-width: 0;
    gap: var(--space-2) var(--space-3);
  }

  .node {
    padding: var(--space-1) 0;
    background: transparent;
    border: 0;
    border-radius: 0;
    font: var(--text-sm) var(--font-body);
    color: var(--text-secondary);
    overflow-wrap: anywhere;
    transition: color var(--motion-fast) var(--ease-precise);
  }

  .node:hover {
    color: var(--accent-primary);
  }

  .node + .node::before {
    content: '·';
    margin-inline-end: var(--space-3);
    color: var(--accent-primary);
  }

  .vigia-connector {
    height: 8px;
    margin-inline-start: clamp(2rem, 6vw, 3.5rem);
    border-inline-start: 1px solid var(--border-strong);
    transform-origin: top;
  }

  @supports (animation-timeline: view()) {
    @media (prefers-reduced-motion: no-preference) {
      .vigia-connector {
        animation: connector-draw 720ms var(--ease-enter) both;
        animation-timeline: view();
        animation-range: entry 5% entry 55%;
      }
    }
  }

  @keyframes connector-draw {
    from { transform: scaleY(.08); opacity: .45; }
    to { transform: scaleY(1); opacity: 1; }
  }

  .visual-note {
    margin-top: var(--space-4);
    padding-top: var(--space-3);
    border-top: 1px solid var(--border-subtle);
    font: var(--text-meta) var(--font-mono);
    color: var(--text-muted);
    text-align: start;
  }

  @media (max-width: 62.5rem) {
    .vigia-layer {
      grid-template-columns: minmax(6.5rem, 8rem) minmax(0, 1fr);
      gap: var(--space-3);
    }
  }

  @media (max-width: 42.5rem) {
    .vigia-visual {
      padding: var(--space-4);
    }

    .vigia-layer {
      grid-template-columns: 1fr;
      gap: var(--space-1);
      padding-block: var(--space-1);
    }

    .layer-label {
      font-size: var(--text-xs);
      letter-spacing: .06em;
    }

    .vigia-connector {
      margin-inline-start: var(--space-3);
    }

    .visual-note {
      text-align: start;
    }
  }
</style>
