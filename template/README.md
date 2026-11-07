# Sinal & Sentido — design system v1.0

Uma identidade visual para a web construída em torno de precisão, profundidade e humanidade.

## Arquivos

- `tokens.css`: cores primitivas e semânticas, tipografia, escalas, layout, formas, sombras e motion tokens.
- `styles.css`: implementação visual, responsividade e keyframes.
- `index.html`: página de demonstração animada, sem framework.

## Uso

Abra `index.html` no navegador ou sirva a pasta com `python -m http.server 8000`.

Para levar a identidade ao seu projeto, importe `tokens.css` e utilize as variáveis semânticas:

```css
@import './tokens.css';

.card {
  background: var(--surface-raised);
  color: var(--text-primary);
  border: 1px solid var(--border-subtle);
  transition: transform var(--motion-base) var(--ease-precise);
}

.card:hover { transform: translateY(var(--hover-rise)); }
```

## Direção de movimento

- 110–340 ms: microinterações e resposta funcional.
- 720–1050 ms: entradas editoriais e mudança de estado.
- 26–64 s: ambientação lenta, sem competição com o conteúdo.
- Paralaxe limitada a ponteiro fino, sem loop de JavaScript.
- `prefers-reduced-motion`: reduz/elimina animações e preserva a composição.

## Notas

A fonte externa do Google Fonts pode exigir conexão com a internet. Fontes de fallback estão definidas. A demonstração não depende de nenhum framework ou serviço de compilação.
