<script>
  const projects = [
    {
      title: 'Commission Engine API',
      meta: 'featured / backend architecture',
      description: 'Sistema backend para cálculo de comissões, autenticação, regras financeiras e gestão operacional com separação clara entre domínio, serviços e persistência.',
      tech: ['Go', 'PostgreSQL', 'JWT'],
      techAccent: ['Clean Boundaries'],
      link: '#',
      featured: true
    },
    {
      title: 'Sistema de Autenticação e Auditoria',
      meta: 'case study / api platform',
      description: 'API para centralizar fluxos internos, autenticação, regras de negócio e persistência. O projeto prioriza separação de responsabilidades, logging estruturado e evolução segura.',
      tech: ['Java', 'Spring Boot', 'PostgreSQL', 'Docker'],
      techAccent: ['Zap Logger', 'Migrations'],
      link: '#'
    },
    {
      title: 'Microsserviço de Notificações',
      meta: 'stack / infrastructure',
      description: 'Serviço assíncrono com filas internas e processamento concorrente. Estrutura completa de observabilidade com métricas e dashboards.',
      tech: ['Go', 'MongoDB'],
      techAccent: ['Prometheus', 'Grafana'],
      link: '#'
    },
    {
      title: 'Sistema Financeiro Interno',
      meta: 'case study / data',
      description: 'Sistema completo para conciliação, fluxo de caixa e relatórios. Automação de conciliações bancárias e controle de inadimplência.',
      tech: ['Python', 'Flask', 'React'],
      techAccent: ['Pandas', 'Selenium'],
      link: '#'
    },
    {
      title: 'Fintech Bank',
      meta: 'universitário / fintech',
      description: 'Plataforma simulando operações bancárias com idempotência, transações ACID, testes unitários e autenticação JWT.',
      tech: ['Java', 'Spring Boot'],
      techAccent: ['OracleSQL', 'JUnit', 'Mockito'],
      link: '#'
    },
    {
      title: 'Sistema ESG',
      meta: 'universitário / logistics',
      description: 'Plataforma de logística de coleta de lixo com controle de pontos, métricas de resíduos, dashboard e requisições de coleta.',
      tech: ['Java', 'C#'],
      techAccent: ['OracleSQL', 'React'],
      link: '#'
    }
  ];
</script>

<section id="projetos" class="section">
  <div class="container">
    <div class="section-header reveal">
      <div class="eyebrow">Projetos</div>
      <h2>Superfícies discretas para organizar informação técnica.</h2>
      <p class="lead">
        Projetos que mostram problema, arquitetura, trade-offs, regras de negócio e impacto.
      </p>
    </div>

    <div class="grid-3 reveal">
      {#each projects as project}
        <article class="card" class:featured-card={project.featured}>
          <div>
            <div class="card-meta">{project.meta}</div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <div class="badge-row">
              {#each project.tech as tech}
                <span class="badge neutral">{tech}</span>
              {/each}
              {#each project.techAccent as tech}
                <span class="badge accent">{tech}</span>
              {/each}
            </div>
          </div>

          <a href={project.link} class="external-link">Ver projeto ↗</a>
        </article>
      {/each}
    </div>
  </div>
</section>

<style>
  @media (max-width: 900px) {
    .grid-3 {
      grid-template-columns: 1fr;
    }
    .featured-card {
      grid-column: span 1;
    }
  }
</style>
