/** Professional facts transcribed from Gustavo-Siqueira- (atual).pdf. */
export const profile = {
  name: 'Gustavo Siqueira',
  role: 'Software Engineer: Backend, Infraestrutura, DevOps',
  location: 'São José dos Campos, SP',
  introduction:
    'Sou desenvolvedor de software, com experiência em backend, automação e infraestrutura. Atualmente, estou aprofundando meus conhecimentos em DevOps, SRE e Platform Engineering.',
  about: [
    'Sou uma pessoa curiosa por natureza. Gosto de entender o que acontece por trás das coisas, especialmente quando envolvem tecnologia.',
    'Minha experiência começou com desenvolvimento de software, principalmente backend, mas meu interesse sempre foi além de escrever APIs. Gosto de compreender como sistemas se comunicam, como são implantados, monitorados e mantidos.',
    'Hoje, estou direcionando meus estudos para infraestrutura, DevOps e confiabilidade de sistemas.',
    'Também gosto de explorar assuntos completamente diferentes. Às vezes estou estudando alguma ferramenta Linux; em outras, jogando RPG, lendo ou tentando organizar uma nova ideia para uma história.',
  ],
  trajectory: `
Minha trajetória passa por desenvolvimento backend, automação e infraestrutura.

Em <strong>Highlands Camps Brasil</strong> (desde fev. 2026), atuo como Desenvolvedor Full Stack: plataforma operacional em Go, PostgreSQL, Svelte 5, SQLC e Goose, com autenticação, Docker e Traefik.

Na <strong>Crediclass</strong> (mar. a jun. 2026, freelancer), fui Desenvolvedor Full Stack / Cloud Engineer: sistema de comissões com Go, Gin, SQLC, HTMX e Templ; infraestrutura AWS com Terraform (EC2 Auto Scaling, RDS Multi-AZ, S3, CloudFront, WAF) e CI/CD com GitHub Actions (deploy blue/green). Redução do processamento de comissões de ~15 min para segundos.

Na <strong>Curva</strong> (ago. 2025 a mar. 2026), Desenvolvedor Backend Java/Spring Boot: autenticação, autorização, segurança, módulos de negócio, auditoria, integração AWS S3.

Em projeto via <strong>Tata Consultancy Services</strong> (jul. a ago. 2025, freelancer), Desenvolvedor Backend Go: observabilidade com Prometheus, Grafana, logs estruturados (Zap), circuit breaker, RabbitMQ, concorrência, worker pools.

No <strong>Golden Tulip</strong> (fev. 2024 a jun. 2025), Analista de Automação e Processos Financeiros: sistema financeiro em Python/Flask/React, automações com Pandas/Selenium, integrações ERP e APIs.

No <strong>Exército Brasileiro · 6º BIL</strong> (mar. 2023 a fev. 2024), Soldado de Comunicações: sistemas administrativos JavaFX/Spring Boot, automação Python, reorganização de servidor Samba.
`,
  education: [
    { institution: 'FIAP', course: 'Análise e Desenvolvimento de Sistemas', period: 'ago. 2024 a ago. 2026', status: 'Concluído' },
    { institution: 'Instituto Máximus Ribeiro Goulart', course: 'Ensino Médio Técnico em Tecnologia da Informação', period: 'fev. 2019 a dez. 2021', status: 'Concluído' },
  ],
  languages: ['Português nativo', 'Inglês B2'],
  email: 'siqgustavo2@hotmail.com',
  github: 'https://github.com/G-shiy',
  linkedin: 'https://www.linkedin.com/in/siqgustavo',
  resume: '/resume.pdf',
  siteOrigin: 'https://g-shiy.github.io',
  description: 'Portfólio de Gustavo Siqueira. Engenharia de software com direcionamento para DevOps, SRE e Platform Engineering. Backend, infraestrutura, automação, observabilidade.',
} as const;

export const navigation = [
  { id: 'inicio', label: 'Início' },
  { id: 'sobre', label: 'Sobre' },
  { id: 'projetos', label: 'Projetos' },
  { id: 'contato', label: 'Contato' },
] as const;

export type SectionId = (typeof navigation)[number]['id'];