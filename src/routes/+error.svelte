<script lang="ts">import { page } from '$app/state';import { base } from '$app/paths';</script>
<svelte:head><title>Página não encontrada — Gustavo Siqueira</title><meta name="robots" content="noindex"/></svelte:head>
<main class="container section"><h1>{page.status === 404 ? 'Este caminho não existe.' : 'Não foi possível abrir a página.'}</h1><p>Você pode voltar ao portfólio para encontrar os projetos e contatos.</p><a class="text-link" href={`${base}/`}>Voltar ao portfólio</a></main>
<style>main{min-height:70vh;padding-top:15vh}h1{font:300 var(--text-heading)/1.15 var(--font-display);margin-bottom:var(--space-6)}p{max-width:60ch;margin-bottom:var(--space-4)}</style>
