<section id="contato" class="section">
  <div class="container">
    <div class="section-header reveal">
      <div class="eyebrow">Contato</div>
      <h2>Uma chamada profissional, simples e objetiva.</h2>
      <p class="lead">
        Estou aberto a conversas sobre backend, arquitetura de software,
        APIs, sistemas internos e produtos que exigem base técnica sólida.
      </p>
    </div>

    <div class="grid-2 reveal">
      <form class="card form">
        <div class="field">
          <label for="name">Nome</label>
          <input id="name" type="text" placeholder="Seu nome" />
        </div>

        <div class="field">
          <label for="email">E-mail</label>
          <input id="email" type="email" placeholder="voce@email.com" />
        </div>

        <div class="field">
          <label for="message">Mensagem</label>
          <textarea
            id="message"
            placeholder="Conte brevemente sobre o projeto ou oportunidade."
          ></textarea>
        </div>

        <button class="btn btn-primary" type="button">
          Enviar mensagem
        </button>
      </form>

      <aside class="card">
        <div class="card-meta">availability / professional contact</div>
        <h3>Vamos conversar sobre sistemas bem projetados.</h3>
        <p>
          Prefiro conversas objetivas, com contexto técnico, escopo claro
          e problemas reais. Se o projeto envolve backend, dados,
          integrações ou arquitetura, faz sentido conversar.
        </p>

        <div class="badge-row">
          <span class="badge neutral">Email</span>
          <span class="badge neutral">LinkedIn</span>
          <span class="badge neutral">GitHub</span>
          <span class="badge neutral">WhatsApp</span>
        </div>

        <a href="https://www.linkedin.com/in/siqgustavo/" class="external-link" target="_blank" rel="noopener noreferrer">
          Abrir LinkedIn ↗
        </a>
      </aside>
    </div>
  </div>
</section>

<style>
  @media (max-width: 900px) {
    .grid-2 {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 560px) {
    .btn {
      width: 100%;
    }
  }
</style>
