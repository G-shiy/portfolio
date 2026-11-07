export interface Project {
  id: string;
  name: string;
  context: string;
  title: string;
  summary: string;
  decisions: string[];
  stack: string[];
  achievement?: string;
  repository: string | null;
  demo: string | null;
  featured?: boolean;
  freelance?: boolean;
}

// Missing project URLs are intentional. Populate only after verifying the public destination.
export const projects: Project[] = [
  {
    id: 'wtc',
    name: 'WTC Connect',
    context: 'Challenge World Trade Center SP / FIAP · NEXT FIAP',
    title: 'Relacionamento, com o backend no centro.',
    summary:
      'Participei da definição da arquitetura e do desenvolvimento do backend de uma solução para clientes, segmentos, campanhas, tarefas e perfil 360°. A Gear API reúne mais de 40 endpoints.',
    decisions: [
      'Desenvolvi APIs com autenticação JWT e renovação de tokens.',
      'Implementei chat em tempo real com SignalR, armazenamento de arquivos no MinIO e integração com Firebase Cloud Messaging.',
      'Adicionei validações com FluentValidation e logs com Serilog.',
    ],
    stack: ['C#', 'ASP.NET Core', 'MongoDB', 'SignalR', 'MinIO', 'Firebase', 'Docker Compose'],
    achievement: '3º lugar · Challenge WTC SP / NEXT FIAP',
    repository: null,
    demo: null,
    featured: true,
  },
  {
    id: 'vigia',
    name: 'Vigia de Queimadas',
    context: 'Projeto de portfólio',
    title: 'Do dado geoespacial ao alerta.',
    summary:
      'Desenvolvi um backend que ingere dados reais do INPE, remove duplicidades e permite consultas por ponto e raio com PostGIS.',
    decisions: [
      'Separei API e worker em um monólito modular, com autenticação JWT.',
      'Implementei notificações idempotentes por Telegram, e-mail e webhook.',
      'Estruturei pytest, Ruff, CI/CD para testes e migrações e métricas de ingestão e latência. Validei alertas com dados históricos.',
    ],
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'PostGIS', 'Alembic', 'Docker Compose', 'GitHub Actions'],
    repository: null,
    demo: null,
    featured: true,
  },
  {
    id: 'crediclass',
    name: 'Plataforma Crediclass',
    context: 'Projeto profissional · Freelancer',
    title: 'Automação financeira com infraestrutura como código.',
    summary:
      'Desenvolvi a plataforma de gestão de comissões automatizando cálculos antes manuais, com infraestrutura provisionada via Terraform e pipeline de deploy blue/green.',
    decisions: [
      'Backend em Go com Gin, SQLC, Goose; frontend com HTMX e Templ.',
      'AWS provisionada com Terraform: EC2 Auto Scaling, RDS PostgreSQL Multi-AZ, S3, CloudFront, WAF.',
      'CI/CD no GitHub Actions com estratégia de deploy blue/green.',
    ],
    stack: ['Go', 'Gin', 'PostgreSQL', 'SQLC', 'Goose', 'HTMX', 'Templ', 'AWS', 'Terraform', 'GitHub Actions'],
    achievement: 'Cálculo de comissões: de ~15 min para segundos',
    repository: null,
    demo: null,
    freelance: true,
  },
  {
    id: 'solo',
    name: 'Solo Vivo',
    context: 'Projeto pessoal',
    title: 'Regras para plantas e canteiros.',
    summary:
      'Implementei cadastro de plantas e canteiros, autenticação JWT e um motor de regras para interações espaciais e rotação de culturas.',
    decisions: [
      'Modelei o motor de regras com funções puras.',
      'Usei SQLAlchemy e migrações Alembic com PostgreSQL, além de uma interface em React.',
    ],
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'SQLAlchemy', 'Alembic', 'React'],
    repository: null,
    demo: null,
  },
  {
    id: 'fintech',
    name: 'Fintech Bank',
    context: 'Projeto universitário',
    title: 'Operações bancárias com consistência.',
    summary:
      'Desenvolvi uma simulação bancária com depósitos, saques e transferências.',
    decisions: [
      'Implementei transações ACID e idempotência para as operações.',
      'Adicionei autenticação JWT e testes unitários com JUnit e Mockito.',
    ],
    stack: ['Java', 'Spring Boot', 'Oracle', 'JWT', 'JUnit', 'Mockito'],
    repository: null,
    demo: null,
  },
  {
    id: 'esg',
    name: 'Sistema ESG',
    context: 'Projeto universitário',
    title: 'Organizar a operação de coleta.',
    summary:
      'Desenvolvi o backend para solicitações, pontos de coleta, agendamento e atribuição de coletores.',
    decisions: ['Implementei indicadores e dashboard, com autenticação e testes.'],
    stack: ['Java', 'C#', 'Oracle'],
    repository: null,
    demo: null,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const secondaryProjects = projects.filter((p) => !p.featured);

export const wtcResponsibilities = [
  { id: 'api', label: 'Gear API', technology: 'ASP.NET Core 10', description: 'APIs para clientes, segmentos, campanhas, tarefas e perfil 360°, com JWT e renovação de tokens.' },
  { id: 'data', label: 'Dados', technology: 'MongoDB', description: 'MongoDB compõe a camada de dados da solução. Aqui, o foco é a responsabilidade de persistência, sem representar coleções ou relações internas.' },
  { id: 'chat', label: 'Chat', technology: 'SignalR', description: 'Implementei o chat em tempo real com SignalR para a comunicação na solução.' },
  { id: 'files', label: 'Arquivos', technology: 'MinIO', description: 'Implementei o armazenamento de arquivos com MinIO.' },
  { id: 'push', label: 'Notificações', technology: 'Firebase Cloud Messaging', description: 'Integrei Firebase Cloud Messaging para as notificações da solução.' },
] as const;