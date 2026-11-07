# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Scope

Este contexto se aplica exclusivamente ao template neutro em `template/`. O portfólio pessoal em Svelte no restante do repositório não é o produto descrito aqui. O template pessoal existente nessa pasta é uma proposta anterior a substituir, não uma autoridade de conteúdo.

## Stack

HTML semântico e CSS puro, escolhidos pelo usuário. Sem JavaScript, framework ou etapa de build. A página deve abrir diretamente no navegador, com fallbacks tipográficos locais.

## Users

Pessoas que usarão a página como referência visual e copiarão seus componentes para construir um futuro portfólio. Escopo confirmado pelo usuário na inicialização.

## Product Purpose

Fornecer uma composição completa e uma fonte de componentes reutilizáveis. Sucesso significa poder abrir a página sem instalação e copiar um componente com seu HTML, estilos correspondentes e tokens, sem depender da posição original na página.

## Operating Context

Entrega em `template/index.html`, `template/tokens.css` e `template/styles.css`. Documentação e configurações do Impeccable ficam fora da pasta de entrega. A página será avaliada em desktop e celular.

## Capabilities and Constraints

- Uma única página com cabeçalho compacto, âncoras internas, abertura com ações de exemplo, figura SVG abstrata em destaque, registros compactos, nota sobre superfície clara e rodapé.
- Conteúdo fictício e neutro; excluir nome, biografia, projetos reais, links pessoais e identidade textual do futuro dono.
- Tokens em `:root`, distinguindo paleta e papéis semânticos; incluir cores para ambas as superfícies, foco, tipografia, espaçamento, larguras, bordas, raios e transições.
- Carregar tokens antes dos estilos de página no HTML. Separar base, layout e componentes em blocos identificáveis.
- Classes de componentes independentes, incluindo `.section-heading`, `.project-row`, `.technical-figure`, `.margin-note` e `.button`.
- Navegação e ações não dependem de JavaScript.

## Brand Commitments

Referência vinculante fornecida pelo usuário: composição editorial inspirada em manuais de manutenção de equipamentos antigos, com carvão quente, marfim e cobre fosco; títulos condensados, divisórias finas, figuras numeradas e notas na margem. IBM Plex Sans Condensed como primeira opção para títulos e JetBrains Mono para índices, legendas e detalhes técnicos. A assinatura solicitada é uma prancha técnica dominante com legenda numerada e anotação cobre alinhada à margem. Desktop assimétrico e celular em uma coluna. Evitar cards iguais, gradientes luminosos, pills decorativas e terminais cenográficos. Estas são restrições do briefing, não uma nova proposta de identidade.

## Evidence on Hand

O briefing e a confirmação do usuário estabelecem propósito, conteúdo neutro, stack e escopo. Os dados pessoais e projetos presentes no repositório não devem ser reutilizados neste template. O SVG será abstrato e não documentará um sistema real.

## Product Principles

- Mostrar componentes em contexto e torná-los copiáveis.
- Manter o exemplo neutro, sem afirmações ou provas fictícias apresentadas como reais.
- Funcionar sem instalação, build ou lógica de aplicação.
- Preservar legibilidade e ordem de leitura em diferentes larguras.

## Accessibility & Inclusion

Verificar contraste nas superfícies escura e clara, foco de teclado, quebra de texto e ausência de rolagem horizontal. Utilizar HTML semântico e fallbacks tipográficos locais.
