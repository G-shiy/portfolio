<section id="contato" class="contact-section">
  <h2>Contato</h2>

  <p class="contact-intro">
    Empresas e profissionais interessados em <strong>orçamentos para projetos de software</strong>, 
    consultoria em desenvolvimento ou parcerias comerciais? Entre em contato para uma 
    <strong>cotação personalizada</strong> de serviços.
  </p>

  <div class="contact-cards">
    <div class="contact-card">
      <p>
        📞 <strong>Telefone:</strong><br />
        +55 12 98856-8980
      </p>
    </div>
    <div class="contact-card">
      <p>
        📧 <strong>Email Comercial:</strong><br />
        siqgustavo2@hotmail.com
      </p>
    </div>
  </div>

  <div class="contact-links">
    <a
      href="https://github.com/G-shiy"
      class="btn btn-secondary"
      target="_blank"
      rel="noopener noreferrer"
    >
      💻 GitHub
    </a>
    <a
      href="https://www.linkedin.com/in/siqgustavo/"
      class="btn btn-secondary"
      target="_blank"
      rel="noopener noreferrer"
    >
      💼 LinkedIn
    </a>
    <a href="https://wa.me/5512988568980?text=Olá%20Gustavo!%20Tenho%20interesse%20em%20orçamento%20para%20projetos%20de%20software." class="btn btn-secondary"> 💬 Orçamento via WhatsApp </a>
  </div>
</section>

<style>
  .contact-section {
    text-align: center;
  }

  .contact-intro {
    max-width: 600px;
    margin: 0 auto 2rem auto;
  }

  .contact-cards {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    max-width: 800px;
    margin: 0 auto 3rem auto;
  }

  .contact-card {
    background: var(--bg-card);
    padding: 1.5rem;
    border-radius: 12px;
    border: 1px solid var(--border);
    text-align: left;
  }

  .contact-card p {
    margin: 0;
    color: var(--text-primary);
  }

  .contact-links {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
  }

  /* Mobile */
  @media (max-width: 768px) {
    .contact-intro {
      font-size: 0.9rem;
      margin-bottom: 1.5rem;
    }

    .contact-cards {
      grid-template-columns: 1fr;
      gap: 1rem;
      margin-bottom: 2rem;
    }

    .contact-card {
      padding: 1.25rem;
    }

    .contact-card p {
      font-size: 0.9rem;
    }

    .contact-links {
      flex-direction: column;
      gap: 0.75rem;
    }

    .contact-links .btn {
      width: 100%;
      justify-content: center;
    }
  }
</style>
