<section id="sobre" class="section" style="padding: 48px 0;">
  <div class="container">
    <div class="section-header reveal" style="margin-bottom: 24px;">
      <div class="eyebrow" style="font-size: 0.7rem;">Sobre mim</div>
      <h2 style="font-size: clamp(1.6rem, 3vw, 2.2rem);">Resumo profissional</h2>
    </div>

     <div class="reveal" style="display: grid; grid-template-columns: 1.3fr 1fr; gap: 48px; align-items: start;">
      <div>
        <p style="font-size: 0.92rem; line-height: 1.7; color: var(--text-secondary); margin: 0; padding-top: 12px;">
          Olá, me chamo Gustavo, tenho 22 anos. Sou alguém curioso por natureza, que gosta de entender as coisas com profundidade, mas sem perder o bom humor no processo.
          <br /><br />
          Gosto de tecnologia, RPG, anime, perfumes e de tudo que carrega um pouco de personalidade, seja um teclado retrô, uma boa história ou uma ideia diferente que prende minha atenção. Tenho facilidade em me envolver com aquilo que desperta minha curiosidade e gosto de transformar interesses simples em algo com significado.
          <br /><br />
          No fim, sou uma mistura de intensidade e leveza: penso bastante, gosto de aprender, valorizo boas conversas e tento levar para a vida um pouco dessa vontade de criar, descobrir e evoluir.
        </p>

        <div class="callout" style="margin-top: 24px; font-size: 0.88rem; border-left: 3px solid var(--primary);">
          <div style="font-size: 0.92rem; line-height: 1.7; color: var(--text-secondary);">
            "A felicidade não é fazer o que se quer, mas querer o que se faz." — <strong>Agostinho de Hipona</strong>
          </div>
        </div>
      </div>

       <div style="display: flex; flex-direction: column; gap: 16px; max-width: 400px; margin-top: -24px;">
         <article class="card" style="padding: 16px; border-left: 3px solid var(--primary); background: linear-gradient(135deg, rgba(92, 200, 255, 0.08), transparent); box-shadow: 0 4px 20px rgba(92, 200, 255, 0.1);">
           <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 12px;">
             <div style="font-size: 1.3rem;">🎓</div>
             <h3 style="font-size: 1.05rem; margin: 0;">Formação</h3>
           </div>
           <p style="font-size: 0.85rem; line-height: 1.5; margin-bottom: 10px;">
             <strong>Análise de Sistemas</strong><br />
             Monitoramento & Confiabilidade<br />
             Economia & Filosofia
           </p>
           <div class="badge-row" style="gap: 5px;">
             <span class="badge go" style="font-size: 0.65rem; padding: 3px 7px;">Go</span>
             <span class="badge database" style="font-size: 0.65rem; padding: 3px 7px;">PostgreSQL</span>
             <span class="badge infrastructure" style="font-size: 0.65rem; padding: 3px 7px;">Docker</span>
           </div>
         </article>

         <article class="card" style="padding: 16px; border-left: 3px solid var(--accent); background: linear-gradient(135deg, rgba(244, 184, 96, 0.08), transparent); box-shadow: 0 4px 20px rgba(244, 184, 96, 0.1);">
           <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 12px;">
             <div style="font-size: 1.3rem;">💼</div>
             <h3 style="font-size: 1.05rem; margin: 0;">Experiência</h3>
           </div>
           <p style="font-size: 0.85rem; line-height: 1.5; margin-bottom: 10px;">
             <strong>Crediclass</strong> (01/2026–Atual)<br />
             <strong>Curva</strong> (08/2025–12/2025)<br />
             <strong>Golden Tulip</strong> (02/2024–06/2025)<br />
             <strong>Exército Brasileiro</strong> (03/2023–02/2024)
           </p>
           <div class="badge-row" style="gap: 5px;">
             <span class="badge go" style="font-size: 0.65rem; padding: 3px 7px;">Go</span>
             <span class="badge java" style="font-size: 0.65rem; padding: 3px 7px;">Java</span>
             <span class="badge infrastructure" style="font-size: 0.65rem; padding: 3px 7px;">System Design</span>
           </div>
         </article>
       </div>
    </div>
  </div>
</section>

<style>
  @media (max-width: 900px) {
    div[style*="grid-template-columns: 1.3fr 1fr"] {
      grid-template-columns: 1fr !important;
    }
    div[style*="display: flex; flex-direction: column;"] {
      margin-top: 24px !important;
      max-width: 100% !important;
    }
  }
</style>
