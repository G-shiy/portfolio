<script>
  const projects = [
    {
      title: 'Sistema de Gestão de Comissões',
      meta: 'backend architecture',
      description: 'Sistema de gestão de comissões com Go, Gin, HTMX e Templ. Clean Architecture, JWT auth, logging estruturado e migrations automatizadas.',
      tech: ['Go', 'Gin', 'HTMX', 'Templ', 'PostgreSQL', 'SQLC'],
      techAccent: ['Clean Architecture', 'JWT', 'Docker', 'OWASP/LGPD', 'Idempotency'],
      link: '#'
    },
    {
      title: 'Sistema de Autenticação e Auditoria',
      meta: 'security / api',
      description: 'API com Spring Security/JWT, Proof-of-Possession e modelo granular de roles. Auditoria unificada e conformidade LGPD/GDPR.',
      tech: ['Java', 'Spring Boot', 'Spring Security', 'PostgreSQL', 'AWS S3'],
      techAccent: ['JWT', 'Zap Logger', 'Migrations', 'LGPD'],
      link: '#'
    },
    {
      title: 'Microsserviço de Notificações',
      meta: 'stack / infrastructure',
      description: 'Serviço assíncrono com filas internas e processamento concorrente. Observabilidade com métricas e dashboards integrados.',
      tech: ['Go', 'MongoDB'],
      techAccent: ['Prometheus', 'Grafana', 'Observability'],
      link: '#'
    },
    {
      title: 'Sistema Financeiro Interno',
      meta: 'tool / data',
      description: 'Sistema completo para conciliação, fluxo de caixa e relatórios. Automação de conciliações bancárias e controle de inadimplência.',
      tech: ['Python', 'Flask', 'React', 'Pandas', 'Selenium'],
      techAccent: ['Automation', 'Financial Reports'],
      link: '#'
    },
    {
      title: 'Fintech Bank',
      meta: 'universitário / fintech',
      description: 'Plataforma simulando operações bancárias com idempotência, transações ACID, testes unitários e autenticação JWT.',
      tech: ['Java', 'Spring Boot', 'OracleSQL'],
      techAccent: ['JUnit', 'Mockito', 'ACID', 'Idempotency'],
      link: '#'
    },
    {
      title: 'Sistema ESG',
      meta: 'universitário / logistics',
      description: 'Plataforma de logística de coleta de lixo com controle de pontos, métricas de resíduos e dashboard integrado.',
      tech: ['Java', 'C#', 'OracleSQL', 'React'],
      techAccent: ['Environmental', 'Dashboard', 'Logistics'],
      link: '#'
    }
  ];
</script>

<section id="projetos" class="section" style="padding: 48px 0;">
  <div class="container">
    <div class="section-header reveal" style="margin-bottom: 24px;">
      <div class="eyebrow" style="font-size: 0.7rem;">Projetos</div>
      <h2 style="font-size: clamp(1.6rem, 3vw, 2.2rem);">Experiência técnica</h2>
    </div>

    <div class="grid-3 reveal" style="gap: 20px;">
        {#each projects as project}
        <article class="card" style="padding: 22px;">
          <div>
            <div class="card-meta" style="font-size: 0.7rem;">{project.meta}</div>
            <h3 style="font-size: 1.1rem;">{project.title}</h3>
            <p style="font-size: 0.88rem; line-height: 1.6;">{project.description}</p>

            <div class="badge-row" style="margin-top: 14px; gap: 6px;">
              {#each project.tech as tech}
                <span class="badge neutral" style="font-size: 0.68rem; padding: 5px 8px;">{tech}</span>
              {/each}
              {#each project.techAccent as tech}
                <span class="badge accent" style="font-size: 0.68rem; padding: 5px 8px;">{tech}</span>
              {/each}
            </div>
          </div>

          <a href={project.link} class="external-link" style="margin-top: 14px; font-size: 0.85rem;">Ver projeto ↗</a>
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
