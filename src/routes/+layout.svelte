<script>
	import '../app.css';
	import { onMount } from 'svelte';

	let scrolled = false;

	onMount(() => {
		const handleScroll = () => {
			scrolled = window.scrollY > 50;
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<nav class:scrolled>
	<div class="layout nav-container">
		<a href="github.com/G-shiy" class="logo">
			<span class="logo-bracket">[</span>
			<span class="logo-name">GS</span>
			<span class="logo-bracket">]</span>
		</a>

		<div class="nav-links">
			<a href="#sobre" class="nav-link">
				<span class="nav-number">01.</span>
				<span class="nav-text">Sobre</span>
			</a>
			<a href="#projetos" class="nav-link">
				<span class="nav-number">02.</span>
				<span class="nav-text">Projetos</span>
			</a>
			<a href="#contato" class="nav-link">
				<span class="nav-number">03.</span>
				<span class="nav-text">Contato</span>
			</a>
			<a href="https://github.com/G-shiy" target="_blank" rel="noopener noreferrer" class="nav-btn">
				<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
					<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
				</svg>
				<span>GitHub</span>
			</a>
		</div>
	</div>
</nav>

<main>
	<div class="layout">
		<slot />
	</div>
</main>

<style>
	.nav-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1.5rem 4rem;
	}

	.logo {
		font-family: 'Courier New', monospace;
		font-size: 1.4rem;
		font-weight: 700;
		color: var(--text-primary);
		text-decoration: none;
		display: flex;
		align-items: center;
		gap: 0.25rem;
		transition: all 0.3s ease;
	}

	.logo-bracket {
		color: var(--border-light);
		font-size: 1.6rem;
	}

	.logo-name {
		letter-spacing: 0.1em;
	}

	.logo:hover .logo-name {
		color: var(--border-light);
	}

	.nav-links {
		display: flex;
		align-items: center;
		gap: 3rem;
	}

	.nav-link {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		color: var(--text-secondary);
		text-decoration: none;
		font-size: 0.85rem;
		font-weight: 500;
		transition: all 0.3s ease;
		position: relative;
	}

	.nav-number {
		font-family: 'Courier New', monospace;
		font-size: 0.75rem;
		color: var(--border-light);
	}

	.nav-text {
		transition: transform 0.3s ease;
	}

	.nav-link:hover {
		color: var(--text-primary);
	}

	.nav-link:hover .nav-text {
		transform: translateX(4px);
	}

	.nav-btn {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.6rem 1.2rem;
		background: transparent;
		border: 1px solid var(--border);
		border-radius: 6px;
		color: var(--text-secondary);
		text-decoration: none;
		font-size: 0.85rem;
		font-weight: 500;
		transition: all 0.3s ease;
	}

	.nav-btn svg {
		width: 14px;
		height: 14px;
		transition: transform 0.3s ease;
	}

	.nav-btn:hover {
		border-color: var(--border-light);
		color: var(--text-primary);
		transform: translateY(-2px);
	}

	.nav-btn:hover svg {
		transform: scale(1.1);
	}

	@media (max-width: 768px) {
		.nav-container {
			padding: 1rem 1.5rem;
		}

		.nav-links {
			gap: 1.5rem;
		}

		.nav-number {
			display: none;
		}

		.nav-btn span {
			display: none;
		}

		.nav-btn {
			padding: 0.6rem;
		}
	}
</style>
