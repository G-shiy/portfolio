export interface Experience {
  id: string; company: string; role: string; period: string; start: string;
  end: string | null; location: string; responsibilities: string[]; stack: string[];
  result?: string;
}
export const experiences: Experience[] = [
  {
    id: 'highlands', company: 'Highlands Camps Brasil', role: 'Desenvolvedor Full Stack',
    period: 'desde fev. 2026', start: '2026-02', end: null, location: 'Remoto',
    responsibilities: [
      'Desenvolvi a plataforma de gestão de voluntários: cadastro, inscrições e processos operacionais, com APIs REST em Go, SQLC e Goose.',
      'Implementei JWT em cookies HTTP-only, rate limiting e bloqueio após tentativas inválidas. Configurei Docker e Traefik com SSL e roteamento.',
      'Atuei como tradutor e apoio à comunicação em inglês entre equipes brasileiras e americanas em operações com mais de 20 participantes.'
    ], stack: ['Go', 'PostgreSQL', 'Svelte 5', 'Docker', 'Traefik']
  },
  {
    id: 'crediclass', company: 'Crediclass', role: 'Desenvolvedor Full Stack / Cloud Engineer',
    period: 'mar. a jun. 2026', start: '2026-03', end: '2026-06', location: 'Freelancer · remoto',
    responsibilities: [
      'Desenvolvi a plataforma de gestão de comissões com Gin, SQLC, Goose, Templ e HTMX, automatizando cálculos antes manuais.',
      'Provisionei AWS com Terraform: EC2 Auto Scaling, RDS PostgreSQL Multi-AZ, S3, CloudFront e WAF. A configuração de ambientes passou de cerca de 2 horas para menos de 30 minutos.',
      'Implementei CI/CD no GitHub Actions com estratégia de deploy blue/green.'
    ], stack: ['Go', 'PostgreSQL', 'AWS', 'Terraform', 'GitHub Actions'],
    result: 'Cálculo de comissões: de cerca de 15 minutos para segundos.'
  },
  {
    id: 'curva', company: 'Curva', role: 'Desenvolvedor Backend',
    period: 'ago. 2025 a mar. 2026', start: '2025-08', end: '2026-03', location: 'Remoto',
    responsibilities: [
      'Implementei autenticação com Spring Security, JWT e tokens de acesso e renovação, verificação de e-mail, bloqueio de contas e permissões por empresa, equipe e recurso.',
      'Desenvolvi Proof-of-Possession, auditoria de eventos críticos, módulos de negócio e integração com AWS S3.',
      'Padronizei cache, CORS, validações e tratamento de exceções.'
    ], stack: ['Java', 'Spring Boot', 'Spring Security', 'JWT', 'AWS S3']
  },
  {
    id: 'tcs', company: 'Projeto via Tata Consultancy Services', role: 'Desenvolvedor Backend Go',
    period: 'jul. a ago. 2025', start: '2025-07', end: '2025-08', location: 'Freelancer · observabilidade de microsserviços',
    responsibilities: [
      'Implementei logs estruturados com Zap e métricas com Prometheus e Grafana em um serviço Go em produção, facilitando a identificação de falhas e instâncias indisponíveis.',
      'Desenvolvi circuit breaker, fallback e throttling; otimizei consultas redundantes e padrões N+1.',
      'Trabalhei com RabbitMQ, goroutines, channels, worker pools, alertas no Telegram e logs de falhas no MongoDB.'
    ], stack: ['Go', 'RabbitMQ', 'Prometheus', 'Grafana', 'MongoDB']
  },
  {
    id: 'golden-tulip', company: 'Hotel Golden Tulip', role: 'Analista de Automação e Processos Financeiros',
    period: 'fev. 2024 a jun. 2025', start: '2024-02', end: '2025-06', location: 'São José dos Campos, SP',
    responsibilities: [
      'Desenvolvi um sistema financeiro interno em Python e React para conciliação, fluxo de caixa e relatórios, contribuindo para reduzir o fechamento mensal.',
      'Automatizei conciliações com Pandas e Selenium e rotinas de NFe. Integrei ERP, API de balancete e relatórios Excel.'
    ], stack: ['Python', 'Flask', 'React', 'Pandas', 'Selenium']
  },
  {
    id: 'exercito', company: 'Exército Brasileiro · 6º BIL', role: 'Soldado de Comunicações',
    period: 'mar. 2023 a fev. 2024', start: '2023-03', end: '2024-02', location: 'Caçapava, SP',
    responsibilities: [
      'Desenvolvi e mantive sistemas administrativos com JavaFX, Spring Boot, Spring Security e Docker.',
      'Automatizei escalas com Python e reorganizei o servidor Samba.'
    ], stack: ['Java', 'Python', 'Spring Boot', 'Docker', 'Samba']
  }
];