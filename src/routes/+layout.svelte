<script>
	import '../app.css';
	import { onMount } from 'svelte';
	import { base } from '$app/paths';

	let scrolled = false;
	let mobileMenuOpen = false;

	onMount(() => {
		const handleScroll = () => {
			scrolled = window.scrollY > 50;
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});

	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}

	function closeMobileMenu() {
		mobileMenuOpen = false;
	}
</script>

<nav class:scrolled>
	<div class="layout nav-container">
		<a href="{base}/" class="logo">
			<span class="logo-bracket">[</span>
			<span class="logo-name">GS</span>
			<span class="logo-bracket">]</span>
		</a>

		<button class="hamburger" class:active={mobileMenuOpen} on:click={toggleMobileMenu} aria-label="Menu">
			<span></span>
			<span></span>
			<span></span>
		</button>

		<div class="nav-links" class:mobile-open={mobileMenuOpen}>
			<a href="#sobre" class="nav-link" on:click={closeMobileMenu}>
				<span class="nav-number">01.</span>
				<span class="nav-text">Sobre</span>
			</a>
			<a href="#projetos" class="nav-link" on:click={closeMobileMenu}>
				<span class="nav-number">02.</span>
				<span class="nav-text">Projetos</span>
			</a>
			<a href="#contato" class="nav-link" on:click={closeMobileMenu}>
				<span class="nav-number">03.</span>
				<span class="nav-text">Contato</span>
			</a>
			<a href="https://github.com/G-shiy" target="_blank" rel="noopener noreferrer" class="nav-btn" on:click={closeMobileMenu}>
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

<footer>
	<div class="layout footer-container">
		<div class="footer-content">
			<div class="footer-left">
				<div class="footer-logo">
					<span class="logo-bracket">[</span>
					<span class="logo-name">GS</span>
					<span class="logo-bracket">]</span>
				</div>
				<p class="footer-text">
					Desenvolvedor backend focado em Go, construindo sistemas escaláveis e performáticos.
				</p>
			</div>

			<div class="footer-links">
				<div class="footer-column">
					<h4>Navegação</h4>
					<a href="#sobre">Sobre</a>
					<a href="#projetos">Projetos</a>
					<a href="#contato">Contato</a>
				</div>

				<div class="footer-column">
					<h4>Social</h4>
					<a href="https://github.com/G-shiy" target="_blank" rel="noopener noreferrer">GitHub</a>
					<a href="https://www.linkedin.com/in/siqgustavo/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
					<a href="mailto:siqgustavo2@hotmail.com">Email</a>
				</div>

				<div class="footer-column">
					<h4>Contato</h4>
					<a href="tel:+5512988568980">+55 12 98856-8980</a>
					<a href="mailto:siqgustavo2@hotmail.com">siqgustavo2@hotmail.com</a>
				</div>
			</div>
		</div>

		<div class="footer-bottom">
			<p>&copy; {new Date().getFullYear()} Gustavo Siqueira. Todos os direitos reservados.</p>
			<p class="footer-tech">Feito com <span class="heart">❤</span> usando Svelte</p>
		</div>
	</div>
</footer>

<style>
	nav {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 1000;
		background: rgba(15, 15, 15, 0.7);
		transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
	}

	nav.scrolled {
		background: rgba(15, 15, 15, 0.95);
		backdrop-filter: blur(20px);
		-webkit-backdrop-filter: blur(20px);
		box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
		border-bottom: 1px solid rgba(255, 255, 255, 0.05);
	}

	.nav-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1.5rem 4rem;
	}

	/* Logo com efeito glitch */
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
		position: relative;
	}

	.logo-bracket {
		color: var(--border-light);
		font-size: 1.6rem;
		transition: all 0.3s ease;
	}

	.logo-name {
		letter-spacing: 0.1em;
		position: relative;
		transition: all 0.3s ease;
	}

	.logo:hover .logo-name {
		color: var(--border-light);
		text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
	}

	.logo:hover .logo-bracket {
		transform: scale(1.1);
	}

	/* Hamburger menu */
	.hamburger {
		display: none;
		flex-direction: column;
		gap: 5px;
		background: none;
		border: none;
		cursor: pointer;
		padding: 0.5rem;
		z-index: 1001;
	}

	.hamburger span {
		width: 25px;
		height: 2px;
		background: var(--text-primary);
		transition: all 0.3s ease;
		border-radius: 2px;
	}

	.hamburger.active span:nth-child(1) {
		transform: rotate(45deg) translate(7px, 7px);
	}

	.hamburger.active span:nth-child(2) {
		opacity: 0;
	}

	.hamburger.active span:nth-child(3) {
		transform: rotate(-45deg) translate(7px, -7px);
	}

	/* Nav links */
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

	/* Underline animado */
	.nav-link::after {
		content: '';
		position: absolute;
		bottom: -5px;
		left: 0;
		width: 0;
		height: 1px;
		background: var(--border-light);
		transition: width 0.3s ease;
	}

	.nav-link:hover::after {
		width: 100%;
	}

	.nav-number {
		font-family: 'Courier New', monospace;
		font-size: 0.75rem;
		color: var(--border-light);
		font-weight: 600;
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

	/* Botão GitHub com glow */
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
		position: relative;
		overflow: hidden;
	}

	.nav-btn::before {
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		width: 0;
		height: 0;
		border-radius: 50%;
		background: rgba(255, 255, 255, 0.1);
		transform: translate(-50%, -50%);
		transition: width 0.4s ease, height 0.4s ease;
	}

	.nav-btn:hover::before {
		width: 200px;
		height: 200px;
	}

	.nav-btn svg {
		width: 14px;
		height: 14px;
		transition: transform 0.3s ease;
		position: relative;
		z-index: 1;
	}

	.nav-btn span {
		position: relative;
		z-index: 1;
	}

	.nav-btn:hover {
		border-color: var(--border-light);
		color: var(--text-primary);
		transform: translateY(-2px);
		box-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
	}

	.nav-btn:hover svg {
		transform: scale(1.15) rotate(5deg);
	}

	/* Mobile styles */
	@media (max-width: 768px) {
		.nav-container {
			padding: 1rem 1.5rem;
		}

		.hamburger {
			display: flex;
		}

		.nav-links {
			position: fixed;
			top: 0;
			right: -100%;
			height: 100vh;
			width: 70%;
			max-width: 300px;
			background: rgba(22, 22, 22, 0.98);
			backdrop-filter: blur(20px);
			-webkit-backdrop-filter: blur(20px);
			flex-direction: column;
			justify-content: center;
			gap: 2rem;
			padding: 2rem;
			transition: right 0.4s cubic-bezier(0.4, 0, 0.2, 1);
			border-left: 1px solid var(--border);
		}

		.nav-links.mobile-open {
			right: 0;
		}

		.nav-link {
			width: 100%;
			padding: 0.5rem 0;
		}

		.nav-link::after {
			bottom: 0;
		}

		.nav-number {
			display: inline;
		}

		.nav-btn {
			width: 100%;
			justify-content: center;
		}
	}

	/* Footer Styles */
	footer {
		background: var(--bg-card);
		border-top: 1px solid var(--border);
		margin-top: 6rem;
		padding: 4rem 0 2rem;
	}

	.footer-container {
		display: flex;
		flex-direction: column;
		gap: 3rem;
	}

	.footer-content {
		display: grid;
		grid-template-columns: 1.5fr 1fr;
		gap: 4rem;
	}

	.footer-left {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.footer-logo {
		font-family: 'Courier New', monospace;
		font-size: 1.8rem;
		font-weight: 700;
		color: var(--text-primary);
		display: flex;
		align-items: center;
		gap: 0.25rem;
		margin-bottom: 0.5rem;
	}

	.footer-logo .logo-bracket {
		color: var(--border-light);
		font-size: 2rem;
	}

	.footer-logo .logo-name {
		letter-spacing: 0.1em;
	}

	.footer-text {
		color: var(--text-secondary);
		font-size: 0.95rem;
		line-height: 1.6;
		max-width: 400px;
		margin: 0;
	}

	.footer-links {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 2rem;
	}

	.footer-column {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.footer-column h4 {
		color: var(--text-primary);
		font-size: 0.9rem;
		font-weight: 600;
		margin: 0 0 0.5rem 0;
		letter-spacing: 0.05em;
		text-transform: uppercase;
	}

	.footer-column a {
		color: var(--text-secondary);
		text-decoration: none;
		font-size: 0.85rem;
		transition: all 0.3s ease;
		position: relative;
		width: fit-content;
	}

	.footer-column a::after {
		content: '';
		position: absolute;
		bottom: -2px;
		left: 0;
		width: 0;
		height: 1px;
		background: var(--border-light);
		transition: width 0.3s ease;
	}

	.footer-column a:hover {
		color: var(--text-primary);
		transform: translateX(4px);
	}

	.footer-column a:hover::after {
		width: 100%;
	}

	.footer-bottom {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-top: 2rem;
		border-top: 1px solid var(--border);
		gap: 1rem;
	}

	.footer-bottom p {
		color: var(--text-secondary);
		font-size: 0.8rem;
		margin: 0;
	}

	.footer-tech {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.heart {
		color: #ff4444;
		animation: heartbeat 1.5s ease-in-out infinite;
	}

	@keyframes heartbeat {
		0%, 100% { transform: scale(1); }
		50% { transform: scale(1.1); }
	}

	/* Footer Mobile */
	@media (max-width: 768px) {
		footer {
			padding: 3rem 0 1.5rem;
			margin-top: 4rem;
		}

		.footer-content {
			grid-template-columns: 1fr;
			gap: 2rem;
		}

		.footer-links {
			grid-template-columns: 1fr;
			gap: 1.5rem;
		}

		.footer-bottom {
			flex-direction: column;
			text-align: center;
			gap: 0.5rem;
		}

		.footer-text {
			font-size: 0.85rem;
		}
	}
</style>
