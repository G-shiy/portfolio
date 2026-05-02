<script>
  import '../app.css';
  import { onMount } from 'svelte';
  import { base } from '$app/paths';

  let mobileMenuOpen = false;

  function toggleMobileMenu() {
    mobileMenuOpen = !mobileMenuOpen;
  }

  function closeMobileMenu() {
    mobileMenuOpen = false;
  }

  onMount(() => {
    const canvas = document.getElementById('telemetryCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let particles = [];
    let pulseTimer = 0;

    const colors = {
      primary: '92, 200, 255',
      accent: '244, 184, 96',
      success: '103, 211, 145',
    };

    function resizeCanvas() {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.max(42, Math.min(85, Math.floor(width / 22)));
      particles = Array.from({ length: count }, () => createParticle());
    }

    function createParticle() {
      const palette = [colors.primary, colors.accent, colors.success];
      const color = palette[Math.floor(Math.random() * palette.length)];

      return {
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.24,
        vy: (Math.random() - 0.5) * 0.24,
        r: Math.random() * 1.65 + 0.75,
        alpha: Math.random() * 0.45 + 0.15,
        color,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.03 + 0.012,
        activity: Math.random() > 0.84,
      };
    }

    function drawBackgroundGlow() {
      const gradient1 = ctx.createRadialGradient(
        width * 0.18,
        height * 0.12,
        0,
        width * 0.18,
        height * 0.12,
        width * 0.28,
      );
      gradient1.addColorStop(0, 'rgba(92, 200, 255, 0.08)');
      gradient1.addColorStop(1, 'rgba(92, 200, 255, 0)');

      const gradient2 = ctx.createRadialGradient(
        width * 0.82,
        height * 0.18,
        0,
        width * 0.82,
        height * 0.18,
        width * 0.24,
      );
      gradient2.addColorStop(0, 'rgba(244, 184, 96, 0.06)');
      gradient2.addColorStop(1, 'rgba(244, 184, 96, 0)');

      const gradient3 = ctx.createRadialGradient(
        width * 0.5,
        height * 0.68,
        0,
        width * 0.5,
        height * 0.68,
        width * 0.3,
      );
      gradient3.addColorStop(0, 'rgba(103, 211, 145, 0.03)');
      gradient3.addColorStop(1, 'rgba(103, 211, 145, 0)');

      ctx.fillStyle = gradient1;
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = gradient2;
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = gradient3;
      ctx.fillRect(0, 0, width, height);
    }

    function drawConnections() {
      const maxDistance = Math.min(170, width * 0.12);

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            const opacity = (1 - distance / maxDistance) * 0.17;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(92, 200, 255, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
    }

    function drawParticles(time) {
      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.pulse += particle.pulseSpeed;

        if (particle.x < -20) particle.x = width + 20;
        if (particle.x > width + 20) particle.x = -20;
        if (particle.y < -20) particle.y = height + 20;
        if (particle.y > height + 20) particle.y = -20;

        const pulsing = 0.5 + Math.sin(particle.pulse) * 0.5;
        const radius = particle.r + pulsing * 0.8;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${particle.color}, ${particle.alpha + pulsing * 0.15})`;
        ctx.shadowBlur = particle.activity ? 12 : 6;
        ctx.shadowColor = `rgba(${particle.color}, 0.35)`;
        ctx.fill();
        ctx.shadowBlur = 0;

        if (particle.activity && Math.sin(time * 0.0015 + index) > 0.985) {
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, radius + 8, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(${particle.color}, 0.16)`;
          ctx.lineWidth = 1;
          ctx.stroke();

          ctx.beginPath();
          ctx.arc(particle.x, particle.y, radius + 15, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(${particle.color}, 0.08)`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      });
    }

    function drawTelemetryBars(time) {
      const columns = 8;
      const colGap = width / (columns + 1);

      for (let i = 1; i <= columns; i++) {
        const x = colGap * i;
        const yBase = height * (0.75 + (i % 2) * 0.04);
        const active = 14 + Math.floor((Math.sin(time * 0.001 + i) + 1) * 8);

        for (let b = 0; b < 26; b++) {
          const h = 4;
          const gap = 5;
          const y = yBase + b * (h + gap);
          const isActive = b < active;

          ctx.fillStyle = isActive
            ? `rgba(92, 200, 255, ${0.05 + b * 0.006})`
            : 'rgba(255,255,255,0.012)';
          ctx.fillRect(x, y, 2, h);
        }
      }
    }

    function animate(time = 0) {
      ctx.clearRect(0, 0, width, height);
      drawBackgroundGlow();
      drawConnections();
      drawParticles(time);
      drawTelemetryBars(time);

      pulseTimer += 1;
      requestAnimationFrame(animate);
    }

    resizeCanvas();
    animate();

    let resizeTimeout;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(resizeCanvas, 120);
    });
  });
</script>

<div class="background-system" aria-hidden="true">
  <canvas class="bg-canvas" id="telemetryCanvas"></canvas>
  <div class="bg-grid"></div>
  <div class="bg-noise"></div>
  <div class="bg-orb bg-orb-1"></div>
  <div class="bg-orb bg-orb-2"></div>
  <div class="bg-orb bg-orb-3"></div>

  <div class="bg-observability">
    <div class="pulse-ring ring-1"></div>
    <div class="pulse-ring ring-2"></div>
    <div class="pulse-ring ring-3"></div>
  </div>

  <div class="bg-scanline"></div>
  <div class="bg-vignette"></div>
</div>

<nav class="nav">
  <div class="container nav-inner">
    <a href="{base}/" class="brand" aria-label="Página inicial">
      <span class="brand-mark">GS</span>
      <span>Gustavo Siqueira</span>
    </a>

    <button class="hamburger" class:active={mobileMenuOpen} on:click={toggleMobileMenu} aria-label="Menu">
      <span></span>
      <span></span>
      <span></span>
    </button>

    <nav class="nav-links" class:mobile-open={mobileMenuOpen} aria-label="Navegação principal">
      <a href="#sobre" on:click={closeMobileMenu}>Sobre</a>
      <a href="#projetos" on:click={closeMobileMenu}>Projetos</a>
      <a href="#contato" on:click={closeMobileMenu}>Contato</a>
      <a href="https://github.com/G-shiy" target="_blank" rel="noopener noreferrer" on:click={closeMobileMenu}>GitHub ↗</a>
    </nav>
  </div>
</nav>

<main>
  <slot />
</main>

<footer class="footer">
  <div class="container footer-inner">
    <p>© 2026 Gustavo Siqueira</p>
    <div class="footer-links">
      <a href="https://github.com/G-shiy" target="_blank" rel="noopener noreferrer">GitHub</a>
      <a href="https://www.linkedin.com/in/siqgustavo/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      <a href="mailto:siqgustavo2@hotmail.com">Email</a>
    </div>
  </div>
</footer>

<style>
  .nav {
    position: sticky;
    top: 0;
    z-index: 100;
    backdrop-filter: blur(18px);
    background: rgba(7, 10, 15, 0.78);
    border-bottom: 1px solid rgba(31, 45, 58, 0.75);
  }

  .nav-inner {
    height: 72px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .brand {
    display: flex;
    align-items: center;
    gap: 12px;
    font-weight: 700;
    letter-spacing: -0.03em;
    text-decoration: none;
  }

  .brand-mark {
    width: 36px;
    height: 36px;
    display: grid;
    place-items: center;
    border-radius: 12px;
    border: 1px solid var(--primary-border);
    background:
      linear-gradient(135deg, rgba(92, 200, 255, 0.16), rgba(244, 184, 96, 0.08)),
      var(--surface);
    color: var(--primary);
    font-family: "JetBrains Mono", monospace;
    font-weight: 700;
    font-size: 0.85rem;
    box-shadow: 0 0 30px rgba(92, 200, 255, 0.08);
  }

  .hamburger {
    display: none;
    flex-direction: column;
    gap: 5px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
  }

  .hamburger span {
    width: 25px;
    height: 2px;
    background: var(--text-primary);
    transition: all 0.3s ease;
    border-radius: 2px;
  }

  .hamburger.active span:nth-child(1) {
    transform: rotate(45deg) translate(7px, 7px);
  }

  .hamburger.active span:nth-child(2) {
    opacity: 0;
  }

  .hamburger.active span:nth-child(3) {
    transform: rotate(-45deg) translate(7px, -7px);
  }

  .nav-links {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .nav-links a {
    padding: 8px 12px;
    border-radius: 999px;
    color: var(--text-secondary);
    font-size: 0.875rem;
    transition: var(--transition);
    text-decoration: none;
  }

  .nav-links a:hover {
    color: var(--text);
    background: rgba(255, 255, 255, 0.04);
  }

  @media (max-width: 900px) {
    .hamburger {
      display: flex;
    }

    .nav-links {
      position: fixed;
      top: 0;
      right: -100%;
      height: 100vh;
      width: 70%;
      max-width: 300px;
      background: rgba(22, 22, 22, 0.98);
      backdrop-filter: blur(20px);
      flex-direction: column;
      justify-content: center;
      gap: 2rem;
      padding: 2rem;
      transition: right 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      border-left: 1px solid var(--border);
    }

    .nav-links.mobile-open {
      right: 0;
    }
  }

  main {
    padding-top: 0;
  }
</style>
