<figure class="compass-rose" aria-hidden="true">
  <svg viewBox="0 0 160 160" fill="none" role="presentation">
    <circle class="outer-ring" cx="80" cy="80" r="66" />
    <circle class="inner-ring" cx="80" cy="80" r="56" />
    <path class="crosshair" d="M80 5v18m0 114v18M5 80h18m114 0h18M27 27l13 13m80 80 13 13m0-106-13 13m-80 80-13 13" />
    <g class="graduations">
      {#each Array.from({ length: 32 }, (_, index) => index * 11.25) as angle (angle)}
        <line
          x1="80"
          y1="18"
          x2="80"
          y2={angle % 45 === 0 ? '27' : '22'}
          transform={`rotate(${angle} 80 80)`}
        />
      {/each}
    </g>
    <g class="rose-points">
      <path d="M80 31 88 72 80 66 72 72 80 31Z" />
      <path d="m129 80-41 8 6-8-6-8 41 8Z" />
      <path d="m80 129-8-41 8 6 8-6-8 41Z" />
      <path d="m31 80 41-8-6 8 6 8-41-8Z" />
      <path class="secondary-point" d="m45 45 27 27-9-3-3 9-15-33Zm70 0L88 72l9-3 3 9 15-33ZM115 115 88 88l3 9-9 3 33 15Zm-70 0 27-27-3 9 9 3-33 15Z" />
    </g>
    <g class="alidade">
      <path d="M80 39v82m-5-5 5 5 5-5" />
      <circle cx="80" cy="80" r="4" />
    </g>
    <text x="80" y="9" text-anchor="middle">N</text>
    <text x="151" y="83" text-anchor="middle">E</text>
    <text x="80" y="158" text-anchor="middle">S</text>
    <text x="9" y="83" text-anchor="middle">O</text>
  </svg>
</figure>

<style>
  .compass-rose {
    flex: none;
    margin: 0;
    color: color-mix(in srgb, var(--accent-primary) 68%, var(--text-secondary));
    transform-origin: center;
    transition: transform var(--motion-slow) var(--ease-enter), filter var(--motion-slow) var(--ease-enter);
  }

  svg {
    width: 100%;
    overflow: visible;
    filter: drop-shadow(0 5px 12px rgb(0 0 0 / .16));
  }

  .outer-ring,
  .inner-ring,
  .crosshair,
  .graduations line,
  .alidade path,
  .alidade circle {
    vector-effect: non-scaling-stroke;
    stroke: currentColor;
  }

  .outer-ring { stroke-width: .8; opacity: .58; }
  .inner-ring { stroke-width: .55; opacity: .38; stroke-dasharray: 1 3; }
  .crosshair { stroke-width: .55; opacity: .46; }
  .graduations line { stroke-width: .75; opacity: .72; }
  .rose-points path { fill: currentColor; opacity: .77; }
  .rose-points .secondary-point { fill: var(--text-muted); opacity: .4; }
  .alidade { transform-origin: 80px 80px; }
  .alidade path { stroke-width: 1.2; }
  .alidade circle { fill: var(--surface-page); stroke-width: 1.2; }
  text { fill: var(--text-muted); font: 7px var(--font-mono); }

  @media (hover: hover) and (pointer: fine) {
    .compass-rose:hover {
      transform: translateY(-2px) rotate(-2deg);
      filter: drop-shadow(0 9px 16px rgb(0 0 0 / .24));
    }
  }

  @supports (animation-timeline: view()) {
    @media (prefers-reduced-motion: no-preference) {
      .outer-ring,
      .inner-ring,
      .crosshair,
      .graduations,
      .rose-points,
      .alidade,
      text {
        animation: chart-inscription 1s var(--ease-enter) both;
        animation-timeline: view();
        animation-range: entry 5% entry 72%;
      }

      .inner-ring { animation-delay: 90ms; }
      .crosshair { animation-delay: 140ms; }
      .graduations { animation-delay: 190ms; }
      .rose-points { animation-delay: 250ms; }
      .alidade { animation: alidade-calibrate 1.2s var(--ease-enter) both; animation-timeline: view(); animation-range: entry 8% entry 76%; }
      text { animation-delay: 320ms; }
    }
  }

  @keyframes chart-inscription {
    from { opacity: .15; }
    to { opacity: 1; }
  }

  @keyframes alidade-calibrate {
    from { opacity: .45; transform: rotate(-7deg); }
    to { opacity: 1; transform: rotate(0); }
  }

  @media (prefers-reduced-motion: reduce) {
    .compass-rose { transition: none; }
    svg * { animation: none !important; }
  }
</style>
