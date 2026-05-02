<section id="leituras" class="section" style="padding: 48px 0;">
  <div class="container">
    <div class="section-header reveal" style="margin-bottom: 24px;">
      <div class="eyebrow" style="font-size: 0.7rem;">Leituras</div>
      <h2 style="font-size: clamp(1.6rem, 3vw, 2.2rem);">Minha Biblioteca Técnica</h2>
      <p class="lead" style="font-size: clamp(1.05rem, 2vw, 1.25rem); line-height: 1.75;">
        Livros que moldaram meu pensamento. Cada um deixou uma marca na forma como vejo código, arquitetura e engenharia.
      </p>
    </div>

    <div class="readings-grid reveal">
      <div class="reading-card">
        <div class="reading-icon">📐</div>
        <div class="reading-content">
          <strong class="reading-title">Entendendo Algoritmos</strong>
          <span class="reading-author">Aditya Y. Bhargava</span>
          <p class="reading-desc">Abasei minha lógica e pensamento algorítmico. Leitura que transformou minha forma de resolver problemas.</p>
        </div>
      </div>

      <div class="reading-card">
        <div class="reading-icon">📘</div>
        <div class="reading-content">
          <strong class="reading-title">Engenharia de Software</strong>
          <span class="reading-author">Raul Sidnei Wazlawick</span>
          <p class="reading-desc">Conceitos fundamentais que aplico até hoje em análise e design de sistemas.</p>
        </div>
      </div>

      <div class="reading-card">
        <div class="reading-icon">📚</div>
        <div class="reading-content">
          <strong class="reading-title">The Art of Computer Programming</strong>
          <span class="reading-author">Donald E. Knuth (Vol. 1)</span>
          <p class="reading-desc">A obra definitiva. Me ensinou rigor matemático e precisão em algoritmos.</p>
        </div>
      </div>

      <div class="reading-card">
        <div class="reading-icon">💻</div>
        <div class="reading-content">
          <strong class="reading-title">Arquitetura e Organização de Computadores</strong>
          <span class="reading-author">William Stallings</span>
          <p class="reading-desc">Entender o hardware mudou minha perspectiva sobre performance e otimização.</p>
        </div>
      </div>

      <div class="reading-card">
        <div class="reading-icon">✨</div>
        <div class="reading-content">
          <strong class="reading-title">Clean Code</strong>
          <span class="reading-author">Robert C. Martin</span>
          <p class="reading-desc">Fundamental para escrever código limpo, manutenível e profissional.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .readings-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 24px;
  }

  .reading-card {
    display: flex;
    gap: 16px;
    padding: 20px;
    border: 1px solid var(--border);
    border-radius: var(--radius-md);
    background: rgba(16, 24, 33, 0.88);
    backdrop-filter: blur(10px);
    transition: var(--transition);
    border-left: 3px solid var(--accent);
  }

  .reading-card:hover {
    transform: translateY(-2px);
    border-color: var(--accent);
    background: rgba(20, 31, 42, 0.92);
  }

  .reading-icon {
    font-size: 1.8rem;
    flex-shrink: 0;
    margin-top: 2px;
  }

  .reading-content {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .reading-title {
    font-size: 0.95rem;
    color: var(--text);
    font-family: "Space Grotesk", sans-serif;
    font-weight: 600;
    letter-spacing: -0.02em;
  }

  .reading-author {
    font-size: 0.78rem;
    color: var(--accent);
    font-family: "JetBrains Mono", monospace;
  }

  .reading-desc {
    font-size: 0.82rem;
    line-height: 1.5;
    color: var(--text-secondary);
    margin: 0;
  }

  @media (max-width: 900px) {
    .readings-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
