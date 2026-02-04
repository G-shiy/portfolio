import "clsx";
import { F as ensure_array_like } from "../../chunks/index.js";
import { k as escape_html } from "../../chunks/context.js";
function HeroSection($$renderer) {
  $$renderer.push(`<section style="padding: 6rem 0 4rem 0;" class="svelte-tibptj"><div style="display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center;" class="svelte-tibptj"><div><div style="display: inline-block; background: var(--bg-card); padding: 0.4rem 1rem; border-radius: 20px; border: 1px solid var(--border); margin-bottom: 1.5rem;"><span style="color: var(--border-light); font-size: 0.8rem; font-weight: 600;">💼 Prestando Serviços</span></div> <h1 style="margin-bottom: 1.5rem;">Gustavo Siqueira</h1> <p style="font-size: 1rem; color: var(--text-secondary); margin-bottom: 2rem; line-height: 1.7;">Desenvolvedor backend prestando serviços de <strong>consultoria</strong> e <strong>desenvolvimento de software</strong>. Especializado em <strong>Go</strong> e <strong>Java</strong>, com foco em sistemas escaláveis, arquitetura
        limpa e observabilidade.</p> <div style="display: flex; gap: 1rem; margin-bottom: 2rem;"><a href="#projetos" class="btn">Ver projetos</a> <a href="#contato" class="btn btn-secondary">Contato</a></div> <div style="display: flex; gap: 2rem; color: var(--text-secondary); font-size: 0.85rem;"><div><div style="color: var(--text-primary); font-size: 1.5rem; font-weight: 700; margin-bottom: 0.25rem;">4+</div> <div>Anos de experiência</div></div> <div><div style="color: var(--text-primary); font-size: 1.5rem; font-weight: 700; margin-bottom: 0.25rem;">7+</div> <div>Projetos entregues</div></div> <div><div style="color: var(--text-primary); font-size: 1.5rem; font-weight: 700; margin-bottom: 0.25rem;">4</div> <div>Empresas</div></div></div></div> <div style="position: relative;"><div style="background: var(--bg-card); border: 1px solid var(--border); border-radius: 16px; padding: 2rem; position: relative;"><div style="position: absolute; top: 0; left: 0; right: 0; height: 2px; background: var(--border-light);"></div> <div style="margin-bottom: 1.5rem;"><h4 style="margin-bottom: 1rem; font-size: 0.9rem;">Stack Completa</h4> <div class="project-tech" style="margin-top: 1rem;"><span class="tech-tag">Go</span> <span class="tech-tag">Java</span> <span class="tech-tag">Spring Boot</span> <span class="tech-tag">PostgreSQL</span> <span class="tech-tag">MongoDB</span> <span class="tech-tag">Docker</span> <span class="tech-tag">Kubernetes</span></div> <div class="project-tech" style="margin-top: 0.5rem;"><span class="tech-tag">Prometheus</span> <span class="tech-tag">Grafana</span> <span class="tech-tag">Linux</span> <span class="tech-tag">Git</span> <span class="tech-tag">Node.js</span> <span class="tech-tag">React</span> <span class="tech-tag">Svelte</span></div></div> <div><h4 style="margin-bottom: 1rem; font-size: 0.9rem;">Foco Técnico</h4> <div style="display: flex; flex-direction: column; gap: 0.75rem; font-size: 0.85rem; color: var(--text-secondary);"><div style="display: flex; align-items: center; gap: 0.75rem;"><div style="width: 4px; height: 4px; background: var(--border-light); border-radius: 50%;"></div> <span>Arquitetura de Microsserviços</span></div> <div style="display: flex; align-items: center; gap: 0.75rem;"><div style="width: 4px; height: 4px; background: var(--border-light); border-radius: 50%;"></div> <span>APIs RESTful &amp; gRPC</span></div> <div style="display: flex; align-items: center; gap: 0.75rem;"><div style="width: 4px; height: 4px; background: var(--border-light); border-radius: 50%;"></div> <span>Observabilidade &amp; Monitoramento</span></div> <div style="display: flex; align-items: center; gap: 0.75rem;"><div style="width: 4px; height: 4px; background: var(--border-light); border-radius: 50%;"></div> <span>CI/CD &amp; DevOps</span></div></div></div></div></div></div></section>`);
}
function ProjectsSection($$renderer) {
  const projects = [
    {
      title: "Sistema de Gestão de Comissões",
      company: "Crediclass",
      description: "Sistema full-stack completo com Go + HTMX + Templ seguindo Clean Architecture. Autenticação JWT, cálculo automatizado de comissões com regras complexas, 13 telas responsivas e integração PostgreSQL com SQLC. Dashboard com métricas em tempo real.",
      tech: ["Go", "HTMX", "Templ", "PostgreSQL", "SQLC", "Docker"],
      link: "#",
      metric: "13 telas full-stack em produção"
    },
    {
      title: "Sistema de Autenticação e Auditoria",
      company: "Curva",
      description: "Desenvolvi sistema completo com Spring Security e JWT, incluindo Proof-of-Possession, modelo granular de roles e auditoria unificada. Pipeline de otimização JSON reduzindo build em 43% e analytics com conformidade LGPD/GDPR.",
      tech: [
        "Java",
        "Spring Boot",
        "Spring Security",
        "PostgreSQL",
        "AWS S3"
      ],
      link: "#",
      metric: "43% menos tempo de build"
    },
    {
      title: "Sistema Financeiro Interno",
      company: "Hotel Golden Tulip",
      description: "Desenvolvi sistema completo (Python/Flask + React) para conciliação, fluxo de caixa e relatórios. Automação de conciliações bancárias e controle de inadimplência com detecção automática.",
      tech: ["Python", "Flask", "React", "Pandas", "Selenium"],
      link: "#",
      metric: "75% redução no tempo de fechamento"
    },
    {
      title: "Sistemas Internos e Automação",
      company: "Exército Brasileiro",
      description: "Desenvolvimento e manutenção de sistemas internos com JavaFX, Spring Boot e Docker. Automação de escalas de serviço, restauração de servidor Samba e otimização de processos.",
      tech: ["Java", "JavaFX", "Spring Boot", "Docker", "Python"],
      link: "#",
      metric: "Automatização completa de escalas"
    },
    {
      title: "Microsserviço de Notificações",
      company: "Freelance",
      description: "Serviço assíncrono com filas internas e processamento concorrente. Estrutura completa de observabilidade com métricas (Prometheus) e dashboards (Grafana).",
      tech: ["Go", "MongoDB", "Prometheus", "Grafana"],
      link: "#",
      metric: "25% redução no MTTR"
    },
    {
      title: "Fintech Bank",
      company: "Universitário",
      description: "Plataforma completa simulando operações bancárias com idempotência, transações ACID, testes unitários (JUnit + Mockito) e autenticação JWT.",
      tech: ["Java", "Spring Boot", "OracleSQL", "JUnit", "Mockito"],
      link: "#",
      metric: "100% cobertura de testes"
    },
    {
      title: "Sistema ESG",
      company: "Universitário",
      description: "Plataforma de logística de coleta de lixo com controle de pontos, métricas de resíduos, dashboard e requisições de coleta pelo usuário.",
      tech: ["Java", "C#", "OracleSQL", "React"],
      link: "#",
      metric: "Gestão ambiental integrada"
    }
  ];
  $$renderer.push(`<section id="projetos"><h2>Projetos Destaque</h2> <div class="projects-grid"><!--[-->`);
  const each_array = ensure_array_like(projects);
  for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
    let project = each_array[$$index_1];
    $$renderer.push(`<div class="project-card"><div class="project-header svelte-1adnqlh"><h3 class="svelte-1adnqlh">${escape_html(project.title)}</h3> <span class="project-company svelte-1adnqlh">${escape_html(project.company)}</span></div> <p class="project-description svelte-1adnqlh">${escape_html(project.description)}</p> <div class="project-metric svelte-1adnqlh"><strong class="svelte-1adnqlh">${escape_html(project.metric)}</strong></div> <div class="project-tech svelte-1adnqlh"><!--[-->`);
    const each_array_1 = ensure_array_like(project.tech);
    for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
      let tech = each_array_1[$$index];
      $$renderer.push(`<span class="tech-tag">${escape_html(tech)}</span>`);
    }
    $$renderer.push(`<!--]--></div></div>`);
  }
  $$renderer.push(`<!--]--></div></section>`);
}
function AboutSection($$renderer) {
  $$renderer.push(`<section id="sobre"><h2>Sobre Mim</h2> <div style="display: grid; grid-template-columns: 1.5fr 1fr; gap: 2rem; margin-bottom: 3rem;"><div><p>Olá! Me chamo Gustavo, tenho 22 anos e atuo como desenvolvedor backend, 
        atualmente estou prestando serviços de consultoria e desenvolvimento de 
        software. Possuo foco em Golang, mas tenho experiências com Python Flask, 
        Java Spring, Svelte e React.</p> <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-top: 2rem;"><div style="background: var(--bg-card); padding: 1rem; border-radius: 12px; border: 1px solid var(--border);"><p style="margin: 0; color: var(--text-primary); font-size: 0.8rem;">🎓 <strong>Systems Analysis</strong><br/> 📊 <strong>Monitoring &amp; Reliability</strong><br/> ☕ <strong>Coffee-driven Solver</strong></p></div> <div style="background: var(--bg-card); padding: 1rem; border-radius: 12px; border: 1px solid var(--border);"><p style="margin: 0; color: var(--text-primary); font-size: 0.8rem;">📚 <strong>Economics &amp; Philosophy</strong><br/> 🔭 <strong>Backend Engineer</strong><br/> 🚀 <strong>Curva Tech Startup</strong></p></div></div></div> <div style="background: var(--bg-card); padding: 1.5rem; border-radius: 16px; border: 1px solid var(--border);"><h4 style="margin-bottom: 1rem;">Stack Principal</h4> <div class="project-tech" style="margin-top: 1rem;"><span class="tech-tag">Go</span> <span class="tech-tag">PostgreSQL</span> <span class="tech-tag">MongoDB</span> <span class="tech-tag">Docker</span></div> <div class="project-tech" style="margin-top: 0.5rem;"><span class="tech-tag">Linux</span> <span class="tech-tag">Git</span> <span class="tech-tag">Svelte</span></div></div></div> <h3 style="font-size: 1.8rem; margin-bottom: 2rem;">Experiência</h3> <div class="experience-grid svelte-22v3ng"><div class="experience-card svelte-22v3ng"><div class="experience-header svelte-22v3ng"><h4 class="svelte-22v3ng">Crediclass — Desenvolvedor Backend</h4> <span class="experience-date svelte-22v3ng">01/2026 – Atualmente</span></div> <p>Sistema completo de gestão de comissões com <strong>Go + HTMX + Templ</strong>. Implementei arquitetura clean em camadas, autenticação JWT com
        bcrypt, cálculo automatizado de comissões com múltiplas regras, e
        interface moderna com <strong>13 telas responsivas</strong>.</p> <div class="experience-metric svelte-22v3ng"><strong class="svelte-22v3ng">Sistema full-stack completo em produção</strong></div></div> <div class="experience-card svelte-22v3ng"><div class="experience-header svelte-22v3ng"><h4 class="svelte-22v3ng">Curva — Desenvolvedor Backend</h4> <span class="experience-date svelte-22v3ng">08/2025 – 12/2025</span></div> <p>Implementei autenticação com Spring Security/JWT, Proof-of-Possession e
        modelo granular de roles. Sistema de auditoria unificado otimizando
        performance em <strong>43%</strong>.</p> <div class="experience-metric svelte-22v3ng"><strong class="svelte-22v3ng">43% otimização de performance</strong></div></div> <div class="experience-card svelte-22v3ng"><div class="experience-header svelte-22v3ng"><h4 class="svelte-22v3ng">Golden Tulip — Automação Financeira</h4> <span class="experience-date svelte-22v3ng">02/2024 – 06/2025</span></div> <p>Sistema financeiro completo (Python/Flask + React), reduzindo tempo de
        fechamento em <strong>75%</strong>. Automação de conciliações bancárias
        e controle de inadimplência.</p> <div class="experience-metric svelte-22v3ng"><strong class="svelte-22v3ng">75% redução no tempo de fechamento</strong></div></div> <div class="experience-card svelte-22v3ng"><div class="experience-header svelte-22v3ng"><h4 class="svelte-22v3ng">Exército Brasileiro — Comunicações</h4> <span class="experience-date svelte-22v3ng">03/2023 – 02/2024</span></div> <p>Sistemas internos com JavaFX, Spring Boot e Docker. Automação de escalas
        com Python, restauração de servidor Samba e suporte técnico crítico em
        operações de rádio.</p> <div class="experience-metric svelte-22v3ng"><strong class="svelte-22v3ng">Automação completa de sistemas</strong></div></div></div></section>`);
}
function ContactSection($$renderer) {
  $$renderer.push(`<section id="contato" style="text-align: center;"><h2>Contato</h2> <p style="max-width: 600px; margin: 0 auto 2rem auto;">Interessado em conversar sobre projetos, tecnologia ou oportunidades? Fique
    à vontade para entrar em contato.</p> <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; max-width: 800px; margin: 0 auto 3rem auto;"><div style="background: var(--bg-card); padding: 1.5rem; border-radius: 12px; border: 1px solid var(--border); text-align: left;"><p style="margin: 0; color: var(--text-primary);">📞 <strong>Telefone:</strong><br/> +55 12 98856-8980</p></div> <div style="background: var(--bg-card); padding: 1.5rem; border-radius: 12px; border: 1px solid var(--border); text-align: left;"><p style="margin: 0; color: var(--text-primary);">📧 <strong>Email:</strong><br/> siqgustavo2@hotmail.com</p></div></div> <div class="contact-links" style="justify-content: center;"><a href="https://github.com/G-shiy" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">💻 GitHub</a> <a href="https://www.linkedin.com/in/siqgustavo/" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">💼 LinkedIn</a> <a href="tel:+5512988568980" class="btn btn-secondary">📞 Ligar</a></div></section>`);
}
function _page($$renderer) {
  HeroSection($$renderer);
  $$renderer.push(`<!----> `);
  AboutSection($$renderer);
  $$renderer.push(`<!----> `);
  ProjectsSection($$renderer);
  $$renderer.push(`<!----> `);
  ContactSection($$renderer);
  $$renderer.push(`<!---->`);
}
export {
  _page as default
};
