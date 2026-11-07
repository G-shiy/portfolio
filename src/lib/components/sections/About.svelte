<script lang="ts">
  import { base } from '$app/paths';
  import { profile } from '$lib/data/profile';
  import { interests } from '$lib/data/interests';
</script>
<section class="section container about" id="sobre" aria-labelledby="about-title">
  <header class="about-header">
    <h2 id="about-title">Entender antes<br>de implementar.</h2>
  </header>

  <div class="about-narrative">
    <div class="narrative-text">
      {#each profile.about as paragraph}
        <p>{paragraph}</p>
      {/each}
    </div>
  </div>

  <div class="about-trajectory">
    <h3>Trajetória</h3>
    <div class="trajectory-content">{@html profile.trajectory}</div>
    <p class="resume-hint">Detalhes completos no <a href={`${base}${profile.resume}`} download>currículo em PDF</a>.</p>
  </div>

  <div class="about-education">
    <h3>Formação</h3>
    <ul>
      {#each profile.education as item}
        <li>
          <strong>{item.institution}</strong>: {item.course} ({item.period}) · {item.status}
        </li>
      {/each}
    </ul>
    <p class="languages">{profile.languages.join(' · ')}</p>
  </div>

  <div class="about-interests">
    <h3>Fora do editor</h3>
    <p class="interests-intro">O que me interessa quando não estou escrevendo código. Curiosidades, referências e pequenas obsessões.</p>

    <div class="interests-groups">
      <article class="interest-group" data-group="narrativas">
        <header>
          <span class="group-label">Narrativas e universos</span>
        </header>
        <div class="group-content">
          <p>Gosto de exploração, construção de mundos, atmosferas densas, personagens complexos e escolhas com consequências reais.</p>
          <ul class="group-highlights">
            <li>Clair Obscur: Expedition 33</li>
            <li>Elden Ring</li>
            <li>Dark Souls</li>
            <li>Fullmetal Alchemist: Brotherhood</li>
          </ul>
        </div>
      </article>

      <article class="interest-group" data-group="computacao">
        <header>
          <span class="group-label">Computação e personalização</span>
        </header>
        <div class="group-content">
          <p>Tenho curiosidade por ferramentas configuráveis, ambientes de desenvolvimento adaptáveis e objetos com identidade própria.</p>
          <ul class="group-highlights">
            <li>Linux, Fedora, KDE, Niri</li>
            <li>Neovim, tmux, Fish shell</li>
            <li>Computadores retrô, terminais, teclados mecânicos</li>
          </ul>
        </div>
      </article>

      <article class="interest-group" data-group="criatividade">
        <header>
          <span class="group-label">Criatividade e cotidiano</span>
        </header>
        <div class="group-content">
          <p>Escrevo, leio fantasia e ficção científica, construo mundos e deixo a música acompanhar o trabalho e as pausas.</p>
          <ul class="group-highlights">
            <li>Escrita e worldbuilding</li>
            <li>Leitura densa e consequente</li>
            <li>Música como camada de contexto</li>
          </ul>
        </div>
      </article>
    </div>
  </div>
</section>
<style>
  .about-header {
    margin-bottom: var(--space-12);
    text-align: left;
  }

  h2 {
    font: 300 var(--text-heading) / 1.05 var(--font-display);
    letter-spacing: -.035em;
    margin-bottom: var(--space-4);
  }

  h3 {
    font: 400 var(--text-subheading) / 1.15 var(--font-display);
    letter-spacing: -.02em;
    color: var(--text-primary);
    margin-bottom: var(--space-5);
  }

  .narrative-text {
    margin-bottom: var(--space-16);
  }

  .narrative-text p {
    max-width: var(--measure-wide);
    color: var(--text-secondary);
    line-height: var(--leading-relaxed);
    font-size: var(--text-md);
  }

  .narrative-text p + p {
    margin-top: var(--space-7);
  }

  .about-trajectory {
    margin-bottom: var(--space-16);
    padding-bottom: var(--space-12);
    border-bottom: 1px solid var(--border-subtle);
  }

  .trajectory-content {
    color: var(--text-secondary);
    line-height: var(--leading-relaxed);
    max-width: var(--measure-wide);
    font-size: var(--text-md);
  }

  :global(.trajectory-content strong) {
    color: var(--text-primary);
  }

  :global(.trajectory-content p) {
    margin-bottom: var(--space-5);
  }

  :global(.trajectory-content p:last-child) {
    margin-bottom: 0;
  }

  .resume-hint {
    margin-top: var(--space-8);
    font: var(--text-meta) / 1.6 var(--font-mono);
    color: var(--text-muted);
  }

  .resume-hint a {
    color: var(--accent-primary);
    text-decoration: underline;
    text-underline-offset: 3px;
  }

  .resume-hint a:hover {
    color: var(--accent-hover);
  }

  .about-education {
    margin-bottom: var(--space-16);
    padding-bottom: var(--space-12);
    border-bottom: 1px solid var(--border-subtle);
  }

  .about-education ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .about-education li {
    color: var(--text-secondary);
    margin-top: var(--space-5);
    line-height: var(--leading-relaxed);
    font-size: var(--text-md);
  }

  .about-education li:first-child {
    margin-top: 0;
  }

  .about-education strong {
    color: var(--text-primary);
  }

  .languages {
    margin-top: var(--space-7);
    font: var(--text-meta) / 1.6 var(--font-mono);
    color: var(--text-muted);
  }

  /* Fora do editor - grouped editorial layout */
  .about-interests {
    margin-top: var(--space-4);
  }

  .interests-intro {
    max-width: var(--measure-body);
    color: var(--text-secondary);
    margin-bottom: var(--space-10);
    font-size: var(--text-label);
    line-height: var(--leading-relaxed);
  }

  .interests-groups {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--column-gap);
  }

  .interest-group {
    background: var(--surface-raised);
    border: 1px solid var(--border-subtle);
    border-radius: var(--radius-lg);
    padding: var(--space-8);
    transition: border-color var(--motion-base) var(--ease-precise);
  }

  .interest-group:hover {
    border-color: var(--border-strong);
  }

  .group-label {
    display: inline-block;
    font: var(--text-meta) / 1.6 var(--font-mono);
    color: var(--accent-primary);
    text-transform: uppercase;
    letter-spacing: .08em;
    margin-bottom: var(--space-5);
  }

  .group-content p {
    color: var(--text-secondary);
    line-height: var(--leading-relaxed);
    margin-bottom: var(--space-6);
    font-size: var(--text-sm);
  }

  .group-highlights {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: var(--space-3);
  }

  .group-highlights li {
    font: var(--text-sm) / 1.5 var(--font-body);
    color: var(--text-secondary);
    padding-left: var(--space-4);
    position: relative;
  }

  .group-highlights li::before {
    content: '→';
    position: absolute;
    left: 0;
    color: var(--accent-primary);
    font: var(--text-meta) var(--font-mono);
  }

  @media (max-width: 62.5rem) {
    .interests-groups {
      grid-template-columns: 1fr;
      gap: var(--space-8);
    }

    .interest-group {
      padding: var(--space-6);
    }
  }

  @media (max-width: 42.5rem) {
    .about-header {
      margin-bottom: var(--space-8);
    }

    h2 {
      font-size: clamp(2.5rem, 10vw, 3.75rem);
    }

    .about-trajectory,
    .about-education {
      margin-bottom: var(--space-12);
      padding-bottom: var(--space-8);
    }

    .interests-groups {
      gap: var(--space-6);
    }

    .interest-group {
      padding: var(--space-5);
    }
  }
</style>