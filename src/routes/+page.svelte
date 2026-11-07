<script lang="ts">
  import { onMount } from 'svelte';
  import { base } from '$app/paths';
  import { profile, navigation, type SectionId } from '$lib/data/profile';
  import Header from '$lib/components/layout/Header.svelte';
  import Hero from '$lib/components/sections/Hero.svelte';
  import About from '$lib/components/sections/About.svelte';
  import Interests from '$lib/components/sections/Interests.svelte';
  import Projects from '$lib/components/sections/Projects.svelte';
  import Contact from '$lib/components/sections/Contact.svelte';
  import displayFont from '$lib/assets/fonts/newsreader-normal.woff2?url';
  let paused = $state(false);
  let reduced = $state(true);
  let hidden = $state(false);
  let active = $state<SectionId>('inicio');
  let enabled = $derived(!paused && !reduced && !hidden);
  const canonical = `${profile.siteOrigin}${base}/`;
  onMount(() => {
    const preference = matchMedia('(prefers-reduced-motion: reduce)');
    const updatePreference = () => { reduced = preference.matches; };
    const updateVisibility = () => { hidden = document.hidden; };
    updatePreference();
    updateVisibility();
    preference.addEventListener('change', updatePreference);
    document.addEventListener('visibilitychange', updateVisibility);
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) if (entry.isIntersecting) active = entry.target.id as SectionId;
    }, { rootMargin: '-15% 0px -65% 0px', threshold: 0 });
    for (const id of ['inicio', ...navigation.map(item => item.id)]) {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    }
    const footerObserver = new IntersectionObserver(([entry]) => { if (entry?.isIntersecting) active = 'contato'; }, { threshold: .1 });
    const footer = document.querySelector('footer');
    if (footer) footerObserver.observe(footer);
    return () => { footerObserver.disconnect(); observer.disconnect(); preference.removeEventListener('change', updatePreference); document.removeEventListener('visibilitychange', updateVisibility); };
  });
</script>
<svelte:head>
  <title>Gustavo Siqueira — Software Engineer</title>
  <meta name="description" content={profile.description} />
  <meta name="theme-color" content="#0b1112" />
  <meta name="author" content={profile.name} />
  <link rel="canonical" href={canonical} />
  <link rel="icon" href={`${base}/favicon.svg`} type="image/svg+xml" />
  <link rel="preload" href={displayFont} as="font" type="font/woff2" crossorigin="anonymous" />
  <meta property="og:type" content="website" />
  <meta property="og:locale" content="pt_BR" />
  <meta property="og:title" content="Gustavo Siqueira — Software Engineer" />
  <meta property="og:description" content={profile.description} />
  <meta property="og:url" content={canonical} />
  <meta property="og:site_name" content="Gustavo Siqueira · Sinal & Sentido" />
  <meta property="og:image" content={`${canonical}social.png`} />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content="Gustavo Siqueira, Software Engineer. Identidade Sinal & Sentido." />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>
<div class="portfolio" class:motion-paused={paused || hidden || reduced}>
  <div class="reading-progress" aria-hidden="true"></div>
  <a class="skip-link" href="#conteudo">Pular para o conteúdo</a>
  <Header {active} {paused} {reduced} ontoggle={() => (paused = !paused)} />
  <main id="conteudo">
    <Hero {enabled} />
    <About />
    <Interests />
    <Projects />
    <Contact />
  </main>
  <footer class="site-footer container">
    <span>Gustavo Siqueira · Sinal & Sentido</span>
    <a href="#inicio">Voltar ao início ↑</a>
  </footer>
</div>