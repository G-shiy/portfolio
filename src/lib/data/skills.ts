export interface SkillGroup { name: string; evidence: string; items: string[]; }
export const skillGroups: SkillGroup[] = [
  { name: 'Backend Engineering', evidence: 'APIs e serviços nas experiências profissionais e nos projetos.', items: ['Go · Gin · Chi · SQLC', 'Python · FastAPI · Flask', 'Java · Spring Boot', 'C# · ASP.NET Core 10'] },
  { name: 'Databases', evidence: 'Dados relacionais, documentos e consultas geoespaciais.', items: ['PostgreSQL · PostGIS', 'MongoDB · Oracle · SQL', 'SQLAlchemy · Alembic · Goose'] },
  { name: 'Architecture & Integration', evidence: 'Integração, concorrência e consistência de operações.', items: ['APIs REST · microsserviços · monólito modular', 'RabbitMQ · SignalR · MinIO', 'Goroutines · channels · worker pools', 'JWT · idempotência · transações ACID'] },
  { name: 'Cloud & Infrastructure', evidence: 'Infraestrutura e entrega na Crediclass e na Highlands.', items: ['AWS · EC2 · RDS · S3 · CloudFront · WAF', 'Terraform · Docker · Docker Compose', 'Linux · Traefik · GitHub Actions · CI/CD', 'Deploy blue/green'] },
  { name: 'Observability & Reliability', evidence: 'Serviço Go em produção e ingestão de dados do INPE.', items: ['Prometheus · Grafana · Zap · Serilog', 'Logs estruturados · métricas · alertas', 'Circuit breaker · fallback · throttling'] },
  { name: 'Testing & Automation', evidence: 'Testes de backend e automação administrativa e financeira.', items: ['pytest · JUnit · Mockito · Ruff', 'Pandas · Selenium', 'Git · pipelines de testes e migrações'] }
];
