<script>
	const projects = [
		{
			title: 'Sistema de Gestão de Comissões',
			company: 'Crediclass',
			description: 'Sistema full-stack completo com Go + HTMX + Templ seguindo Clean Architecture. Autenticação JWT, cálculo automatizado de comissões com regras complexas, 13 telas responsivas e integração PostgreSQL com SQLC. Dashboard com métricas em tempo real.',
			tech: ['Go', 'HTMX', 'Templ', 'PostgreSQL', 'SQLC', 'Docker'],
			link: '#',
			metric: '13 telas full-stack em produção'
		},
		{
			title: 'Sistema de Autenticação e Auditoria',
			company: 'Curva',
			description: 'Desenvolvi sistema completo com Spring Security e JWT, incluindo Proof-of-Possession, modelo granular de roles e auditoria unificada. Pipeline de otimização JSON reduzindo build em 43% e analytics com conformidade LGPD/GDPR.',
			tech: ['Java', 'Spring Boot', 'Spring Security', 'PostgreSQL', 'AWS S3'],
			link: '#',
			metric: '43% menos tempo de build'
		},
		{
			title: 'Sistema Financeiro Interno',
			company: 'Hotel Golden Tulip',
			description: 'Desenvolvi sistema completo (Python/Flask + React) para conciliação, fluxo de caixa e relatórios. Automação de conciliações bancárias e controle de inadimplência com detecção automática.',
			tech: ['Python', 'Flask', 'React', 'Pandas', 'Selenium'],
			link: '#',
			metric: '75% redução no tempo de fechamento'
		},
		{
			title: 'Sistemas Internos e Automação',
			company: 'Exército Brasileiro',
			description: 'Desenvolvimento e manutenção de sistemas internos com JavaFX, Spring Boot e Docker. Automação de escalas de serviço, restauração de servidor Samba e otimização de processos.',
			tech: ['Java', 'JavaFX', 'Spring Boot', 'Docker', 'Python'],
			link: '#',
			metric: 'Automatização completa de escalas'
		},
		{
			title: 'Microsserviço de Notificações',
			company: 'Freelance',
			description: 'Serviço assíncrono com filas internas e processamento concorrente. Estrutura completa de observabilidade com métricas (Prometheus) e dashboards (Grafana).',
			tech: ['Go', 'MongoDB', 'Prometheus', 'Grafana'],
			link: '#',
			metric: '25% redução no MTTR'
		},
		{
			title: 'Fintech Bank',
			company: 'Universitário',
			description: 'Plataforma completa simulando operações bancárias com idempotência, transações ACID, testes unitários (JUnit + Mockito) e autenticação JWT.',
			tech: ['Java', 'Spring Boot', 'OracleSQL', 'JUnit', 'Mockito'],
			link: '#',
			metric: '100% cobertura de testes'
		},
		{
			title: 'Sistema ESG',
			company: 'Universitário',
			description: 'Plataforma de logística de coleta de lixo com controle de pontos, métricas de resíduos, dashboard e requisições de coleta pelo usuário.',
			tech: ['Java', 'C#', 'OracleSQL', 'React'],
			link: '#',
			metric: 'Gestão ambiental integrada'
		}
	];
</script>

<section id="projetos">
	<h2>Projetos Destaque</h2>
	
	<div class="projects-grid">
		{#each projects as project}
			<div class="project-card">
				<div class="project-header">
					<h3>{project.title}</h3>
					<span class="project-company">{project.company}</span>
				</div>
				
				<p class="project-description">{project.description}</p>
				
				<div class="project-metric">
					<strong>{project.metric}</strong>
				</div>
				
				<div class="project-tech">
					{#each project.tech as tech}
						<span class="tech-tag">{tech}</span>
					{/each}
				</div>
			</div>
		{/each}
	</div>
</section>

<style>
	.project-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 1.5rem;
		gap: 1rem;
	}

	.project-header h3 {
		font-size: 1.1rem;
		font-weight: 600;
		margin: 0;
		color: var(--text-primary);
		line-height: 1.2;
		flex: 1;
	}

	.project-company {
		color: var(--border-light);
		font-size: 0.8rem;
		font-weight: 600;
		white-space: nowrap;
		flex-shrink: 0;
	}

	.project-description {
		margin-bottom: 1.5rem;
		flex-grow: 1;
	}

	.project-metric {
		background: var(--bg-secondary);
		padding: 0.5rem 1rem;
		border-radius: 8px;
		border-left: 3px solid var(--border-light);
		margin-bottom: 1.5rem;
	}

	.project-metric strong {
		color: var(--text-primary);
		font-size: 0.8rem;
	}

	.project-tech {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		margin-top: auto;
	}
</style>