<section id="sobre">
  <h2>Sobre Mim</h2>

  <div
    style="display: grid; grid-template-columns: 1.5fr 1fr; gap: 2rem; margin-bottom: 3rem;"
  >
    <div>
      <p>
        Olá! Me chamo Gustavo, tenho 22 anos e atuo como desenvolvedor backend, 
        atualmente estou prestando serviços de consultoria e desenvolvimento de 
        software. Possuo foco em Golang, mas tenho experiências com Python Flask, 
        Java Spring, Svelte e React.
      </p>

      <div
        style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-top: 2rem;"
      >
        <div
          style="background: var(--bg-card); padding: 1rem; border-radius: 12px; border: 1px solid var(--border);"
        >
          <p style="margin: 0; color: var(--text-primary); font-size: 0.8rem;">
            🎓 <strong>Systems Analysis</strong><br />
            📊 <strong>Monitoring & Reliability</strong><br />
            ☕ <strong>Coffee-driven Solver</strong>
          </p>
        </div>
        <div
          style="background: var(--bg-card); padding: 1rem; border-radius: 12px; border: 1px solid var(--border);"
        >
          <p style="margin: 0; color: var(--text-primary); font-size: 0.8rem;">
            📚 <strong>Economics & Philosophy</strong><br />
            🔭 <strong>Backend Engineer</strong><br />
            🚀 <strong>Curva Tech Startup</strong>
          </p>
        </div>
      </div>
    </div>

    <div
      style="background: var(--bg-card); padding: 1.5rem; border-radius: 16px; border: 1px solid var(--border);"
    >
      <h4 style="margin-bottom: 1rem;">Stack Principal</h4>
      <div class="project-tech" style="margin-top: 1rem;">
        <span class="tech-tag">Go</span>
        <span class="tech-tag">PostgreSQL</span>
        <span class="tech-tag">MongoDB</span>
        <span class="tech-tag">Docker</span>
      </div>
      <div class="project-tech" style="margin-top: 0.5rem;">
        <span class="tech-tag">Linux</span>
        <span class="tech-tag">Git</span>
        <span class="tech-tag">Svelte</span>
      </div>
    </div>
  </div>

  <h3 style="font-size: 1.8rem; margin-bottom: 2rem;">Experiência</h3>

  <div class="experience-grid">
    <div class="experience-card">
      <div class="experience-header">
        <h4>Crediclass — Desenvolvedor Backend</h4>
        <span class="experience-date">01/2026 – Atualmente</span>
      </div>
      <p>
        Sistema completo de gestão de comissões com <strong
          >Go + HTMX + Templ</strong
        >. Implementei arquitetura clean em camadas, autenticação JWT com
        bcrypt, cálculo automatizado de comissões com múltiplas regras, e
        interface moderna com <strong>13 telas responsivas</strong>.
      </p>
      <div class="experience-metric">
        <strong>Sistema full-stack completo em produção</strong>
      </div>
    </div>

    <div class="experience-card">
      <div class="experience-header">
        <h4>Curva — Desenvolvedor Backend</h4>
        <span class="experience-date">08/2025 – 12/2025</span>
      </div>
      <p>
        Implementei autenticação com Spring Security/JWT, Proof-of-Possession e
        modelo granular de roles. Sistema de auditoria unificado otimizando
        performance em <strong>43%</strong>.
      </p>
      <div class="experience-metric">
        <strong>43% otimização de performance</strong>
      </div>
    </div>

    <div class="experience-card">
      <div class="experience-header">
        <h4>Golden Tulip — Automação Financeira</h4>
        <span class="experience-date">02/2024 – 06/2025</span>
      </div>
      <p>
        Sistema financeiro completo (Python/Flask + React), reduzindo tempo de
        fechamento em <strong>75%</strong>. Automação de conciliações bancárias
        e controle de inadimplência.
      </p>
      <div class="experience-metric">
        <strong>75% redução no tempo de fechamento</strong>
      </div>
    </div>

    <div class="experience-card">
      <div class="experience-header">
        <h4>Exército Brasileiro — Comunicações</h4>
        <span class="experience-date">03/2023 – 02/2024</span>
      </div>
      <p>
        Sistemas internos com JavaFX, Spring Boot e Docker. Automação de escalas
        com Python, restauração de servidor Samba e suporte técnico crítico em
        operações de rádio.
      </p>
      <div class="experience-metric">
        <strong>Automação completa de sistemas</strong>
      </div>
    </div>
  </div>
</section>

<style>
  .experience-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin-top: 2rem;
  }

  .experience-card {
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: 16px;
    padding: 2rem;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
  }

  .experience-card::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: var(--border-light);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .experience-card:hover::before {
    opacity: 1;
  }

  .experience-card:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-hover);
    border-color: var(--border-light);
  }

  .experience-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
    gap: 1rem;
  }

  .experience-header h4 {
    font-size: 1.1rem;
    font-weight: 600;
    margin: 0;
    color: var(--text-primary);
    line-height: 1.2;
    flex: 1;
  }

  .experience-date {
    color: var(--border-light);
    font-size: 0.8rem;
    font-weight: 600;
    white-space: nowrap;
    flex-shrink: 0;
  }

  .experience-metric {
    background: var(--bg-secondary);
    padding: 0.5rem 1rem;
    border-radius: 8px;
    border-left: 3px solid var(--border-light);
    margin-top: 1.5rem;
  }

  .experience-metric strong {
    color: var(--text-primary);
    font-size: 0.8rem;
  }

  @media (min-width: 768px) {
    .experience-grid {
      grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    }
  }
</style>
