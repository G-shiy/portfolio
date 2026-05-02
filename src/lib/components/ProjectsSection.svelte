<script>
  const getBadgeClass = (tech) => {
    const goStack = ["Go", "Gin", "HTMX", "Templ", "SQLC"];
    const javaStack = [
      "Java",
      "Spring Boot",
      "Spring Security",
      "JUnit",
      "Mockito",
    ];
    const dbStack = ["PostgreSQL", "MongoDB", "OracleSQL", "AWS S3"];
    const obsStack = ["Prometheus", "Grafana", "Observability"];
    const secStack = ["JWT", "OWASP/LGPD", "LGPD", "Zap Logger", "Migrations"];
    const infraStack = ["Docker", "Clean Architecture", "Idempotency", "ACID"];
    const toolStack = [
      "Python",
      "Flask",
      "React",
      "Pandas",
      "Selenium",
      "C#",
      "Automation",
      "Financial Reports",
      "Environmental",
      "Dashboard",
      "Logistics",
    ];

    if (goStack.includes(tech)) return "go";
    if (javaStack.includes(tech)) return "java";
    if (dbStack.includes(tech)) return "database";
    if (obsStack.includes(tech)) return "observability";
    if (secStack.includes(tech)) return "security";
    if (infraStack.includes(tech)) return "infrastructure";
    if (toolStack.includes(tech)) return "tool";
    return "neutral";
  };

  const projects = [
    {
      title: "Sistema de Gestão de Comissões",
      meta: "backend architecture",
      description:
        "Sistema de gestão de comissões com Go, Gin, HTMX e Templ. Clean Architecture, JWT auth, logging estruturado e migrations automatizadas.",
      tech: ["Go", "Gin", "HTMX", "Templ", "PostgreSQL", "SQLC"],
      techAccent: [
        "Clean Architecture",
        "JWT",
        "Docker",
        "OWASP/LGPD",
        "Idempotency",
      ],
      link: "#",
    },
    {
      title: "Sistema de Autenticação e Auditoria",
      meta: "security / api",
      description:
        "API com Spring Security/JWT, Proof-of-Possession e modelo granular de roles. Auditoria unificada e conformidade LGPD/GDPR.",
      tech: ["Java", "Spring Boot", "Spring Security", "PostgreSQL", "AWS S3"],
      techAccent: ["JWT", "Zap Logger", "Migrations", "LGPD"],
      link: "#",
    },
    {
      title: "Microsserviço de Notificações",
      meta: "stack / infrastructure",
      description:
        "Serviço assíncrono com filas internas e processamento concorrente. Observabilidade com métricas e dashboards integrados.",
      tech: ["Go", "MongoDB"],
      techAccent: ["Prometheus", "Grafana", "Observability"],
      link: "#",
    },
    {
      title: "Sistema Financeiro Interno",
      meta: "tool / data",
      description:
        "Sistema completo para conciliação, fluxo de caixa e relatórios. Automação de conciliações bancárias e controle de inadimplência.",
      tech: ["Python", "Flask", "React", "Pandas", "Selenium"],
      techAccent: ["Automation", "Financial Reports"],
      link: "#",
    },
    {
      title: "Fintech Bank",
      meta: "universitário / fintech",
      description:
        "Plataforma simulando operações bancárias com idempotência, transações ACID, testes unitários e autenticação JWT.",
      tech: ["Java", "Spring Boot", "OracleSQL"],
      techAccent: ["JUnit", "Mockito", "ACID", "Idempotency"],
      link: "#",
    },
    {
      title: "Sistema ESG",
      meta: "universitário / logistics",
      description:
        "Plataforma de logística de coleta de lixo com controle de pontos, métricas de resíduos e dashboard integrado.",
      tech: ["Java", "C#", "OracleSQL", "React"],
      techAccent: ["Environmental", "Dashboard", "Logistics"],
      link: "#",
    },
  ];
</script>

<section id="projetos" class="section" style="padding: 48px 0;">
  <div class="container">
    <div class="section-header reveal" style="margin-bottom: 24px;">
      <div class="eyebrow" style="font-size: 1.0rem;">Projetos</div>
      <h2 style="font-size: clamp(1.6rem, 3vw, 2.2rem);">
        Experiência técnica
      </h2>
    </div>

    <div class="grid-3 reveal" style="gap: 40px;">
      {#each projects as project}
        <article class="project-card">
          <div class="project-header">
            <div class="card-meta" style="font-size: 0.7rem;">
              {project.meta}
            </div>
            <h3 style="font-size: 1.1rem;">{project.title}</h3>
          </div>
          <p style="font-size: 0.88rem; line-height: 1.6; flex: 1;">
            {project.description}
          </p>

          <div class="badge-row" style="gap: 6px; margin-top: auto;">
            {#each project.tech as tech}
              <span
                class="badge {getBadgeClass(tech)}"
                style="font-size: 0.68rem; padding: 5px 8px;">{tech}</span>
              >
            {/each}
            {#each project.techAccent as tech}
              <span
                class="badge {getBadgeClass(tech)}"
                style="font-size: 0.68rem; padding: 5px 8px;">{tech}</span>
              >
            {/each}
          </div>

          <a
            href={project.link}
            class="external-link"
            style="margin-top: 16px; font-size: 0.85rem;">Ver projeto ↗</a>
        </article>
      {/each}
    </div>
  </div>
</section>

<style>
  .project-card {
    display: flex;
    flex-direction: column;
    padding: 24px;
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.028), transparent),
      rgba(16, 24, 33, 0.88);
    transition: var(--transition);
    overflow: hidden;
    backdrop-filter: blur(10px);
    position: relative;
  }

  .project-card::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--primary), var(--accent));
    opacity: 0;
    transition: var(--transition);
  }

  .project-card:hover::before {
    opacity: 1;
  }

  .project-card:hover {
    transform: translateY(-3px);
    border-color: var(--primary-border);
    background: rgba(20, 31, 42, 0.92);
  }

  .project-header {
    margin-bottom: 14px;
  }

  .project-card h3 {
    margin-top: 8px;
    margin-bottom: 0;
  }

  @media (max-width: 900px) {
    .grid-3 {
      grid-template-columns: 1fr;
    }
    .featured-card {
      grid-column: span 1;
    }
  }
</style>
