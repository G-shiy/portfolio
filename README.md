# Portfólio — Gustavo Siqueira

SvelteKit 2 / Svelte 5, adapter-static, página única pré-renderizada. Referência visual em `template/`; tokens do site em `src/lib/styles/tokens.css`. Projetos tipados em `src/lib/data/projects.ts`.

## Desenvolvimento

```sh
npm ci
npm run dev
npm run check
npm run build
npm run preview
```

Dev: http://localhost:3000. Preview de produção: `/portfolio/` no endereço impresso pelo Vite. `check` sincroniza SvelteKit e compila componentes ativos, falhando em avisos de acessibilidade; não substitui uma auditoria assistiva completa nem uma checagem TypeScript completa.

## GitHub Pages

Remoto: `G-shiy/portfolio`. Base padrão de produção: `/portfolio`. Workflow existente atualizado: instala pelo lockfile, executa check, gera build e publica artefato `build/`, sem fallback SPA. Aciona por push em `main` ou manualmente com workflow_dispatch. Em Settings → Pages, selecionar GitHub Actions. Nenhum push/deploy remoto foi realizado nesta tarefa.

Para domínio próprio ou repositório `G-shiy.github.io`, definir `PAGES_BASE_PATH: ''` no workflow e gerar novamente. Localmente: `PAGES_BASE_PATH='' npm run build`. Para outro projeto: `PAGES_BASE_PATH=/nome-do-repo`. Favicon e currículo usam `$app/paths`.

## Movimento e acessibilidade

SVG decorativo em ciclo de 20s com pausa longa; controle acessível de pausa. Movimento reduzido desativa o sinal e a entrada da figura. Anotações são botões nativos com aria-pressed e descrição anunciada. O estado selecionado também muda a borda do nó. Navegação por âncoras e conteúdo inicial funcionam sem JavaScript.

## Evidências e pendências

- Highlands: diagrama próprio, explicitamente simplificado a partir da descrição. Faltam configuração sanitizada, código público ou capturas reais para um estudo completo.
- Crediclass: contexto real de comissões; explicação conceitual da idempotência, sem alegar mecanismo interno não comprovado.
- WTC: contribuição e colocação fornecidas no briefing. O currículo confirma o uso de SignalR no chat, MinIO e Firebase Cloud Messaging.
- Contatos reaproveitados do repositório; currículo copiado para `static/curriculo.pdf`. Conferir atualização do PDF antes de publicar.
- Fontes Google opcionais, com fallbacks locais.
- Sem seção de laboratório ou links fictícios.

## Conteúdo atualizado

O catálogo reúne 11 trabalhos: Highlands; Crediclass; WTC; Vigia de Queimadas; Solo Vivo; autenticação/auditoria na Curva; observabilidade/notificações via TCS; sistema financeiro Golden Tulip; automação no Exército; Fintech Bank; Sistema ESG. Fonte: currículo fornecido e componente original ProjectsSection.svelte. Detalhes usam disclosures nativos acessíveis.

Movimento: entrada da prancha em 500ms (apresentação), feedback em 160ms com cubic-bezier(0.23,1,0.32,1), simulação explicativa em 2200ms por transform/opacity, sem biblioteca adicional. A seleção pelo teclado é imediata; movimento reduzido retira deslocamentos.
