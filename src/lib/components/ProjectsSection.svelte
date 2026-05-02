<script>
  const projects = [
    {
      title: 'Sistema de Gestão de Comissões',
      meta: 'featured / backend architecture',
      description: 'Sistema completo de gerenciamento de comissões arquitetado do zero. Go + Gin (RESTful API), HTMX + Templ (13 telas type-safe), PostgreSQL com SQLC. Clean Architecture (Handler → Service → Repository), JWT auth, Zap logging, Viper config, Goose migrations. Cálculo: Receita Bruta → Imposto → Receita Líquida → Comissão Parceiro/Consultor.',
      tech: ['Go', 'Gin', 'HTMX', 'Templ', 'PostgreSQL', 'SQLC'],
      techAccent: ['Clean Architecture', 'JWT', 'Docker', 'OWASP/LGPD', 'Idempotency', 'Zap Logger'],
      link: '#',
      featured: true
    },
    {
      title: 'Sistema de Autenticação e Auditoria',
      meta: 'case study / api platform',
      description: 'API com Spring Security/JWT, Proof-of-Possession e modelo granular de roles. Sistema de auditoria unificado, otimização JSON reduzindo build em 43%. Conformidade LGPD/GDPR.',
      tech: ['Java', 'Spring Boot', 'Spring Security', 'PostgreSQL', 'AWS S3'],
      techAccent: ['JWT', 'Zap Logger', 'Migrations', 'LGPD'],
      link: '#'
    },
    {
      title: 'Microsserviço de Notificações',
      meta: 'stack / infrastructure',
      description: 'Serviço assíncrono com filas internas e processamento concorrente. Estrutura completa de observabilidade com métricas (Prometheus) e dashboards (Grafana). 25% redução no MTTR.',
      tech: ['Go', 'MongoDB'],
      techAccent: ['Prometheus', 'Grafana', 'Observability', 'Async Processing'],
      link: '#'
    },
    {
      title: 'Sistema Financeiro Interno',
      meta: 'case study / data',
      description: 'Sistema completo (Python/Flask + React) para conciliação, fluxo de caixa e relatórios. Automação de conciliações bancárias, controle de inadimplência com detecção automática. 75% redução no tempo de fechamento.',
      tech: ['Python', 'Flask', 'React', 'Pandas', 'Selenium'],
      techAccent: ['Automation', 'Financial Reports', 'Bank Reconciliation'],
      link: '#'
    },
    {
      title: 'Fintech Bank',
      meta: 'universitário / fintech',
      description: 'Plataforma simulando operações bancárias com idempotência, transações ACID, testes unitários (JUnit + Mockito) e autenticação JWT. 100% cobertura de testes.',
      tech: ['Java', 'Spring Boot', 'OracleSQL'],
      techAccent: ['JUnit', 'Mockito', 'ACID', 'Idempotency'],
      link: '#'
    },
    {
      title: 'Sistema ESG',
      meta: 'universitário / logistics',
      description: 'Plataforma de logística de coleta de lixo com controle de pontos, métricas de resíduos, dashboard e requisições de coleta pelo usuário. Gestão ambiental integrada.',
      tech: ['Java', 'C#', 'OracleSQL', 'React'],
      techAccent: ['Environmental', 'Dashboard', 'Logistics'],
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
