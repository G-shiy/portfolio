<script lang="ts">
  import { wtcResponsibilities } from '$lib/data/projects';
  let selected = $state<string>('api');
  let current = $derived(wtcResponsibilities.find(item => item.id === selected) ?? wtcResponsibilities[0]);
</script>
<figure class="project-map">
  <div class="map-drawing">
    <svg class="connections" viewBox="0 0 800 240" preserveAspectRatio="none" aria-hidden="true"><path d="M190 120H400M400 30V210M400 30H610M400 90H610M400 150H610M400 210H610" fill="none" stroke="currentColor" stroke-width="1" vector-effect="non-scaling-stroke"/></svg>
    <div class="api-node"><button type="button" class:active={selected==='api'} aria-pressed={selected==='api'} onclick={()=>selected='api'} onpointerenter={()=>selected='api'} onfocus={()=>selected='api'}><span>Gear API</span><small>ASP.NET Core 10</small></button></div>
    <div class="service-nodes">{#each wtcResponsibilities.slice(1) as item (item.id)}<button type="button" class:active={selected===item.id} aria-pressed={selected===item.id} onclick={()=>selected=item.id} onpointerenter={()=>selected=item.id} onfocus={()=>selected=item.id}><span>{item.label}</span><small>{item.technology}</small></button>{/each}</div>
  </div>
  <figcaption><span class="figure-reference">Mapa de responsabilidades</span><p class="map-description" aria-live="polite"><strong>{current.label}.</strong> {current.description}</p><small>Escolha um bloco para ver sua função.</small></figcaption>
</figure>
<style>
  .project-map{margin:0;min-width:0}
  .map-drawing{position:relative;display:grid;grid-template-columns:minmax(0,.85fr) minmax(0,1.15fr);gap:clamp(var(--space-5),4vw,var(--space-10));align-items:center;min-height:220px;padding:var(--space-4) var(--space-3);background:var(--surface-figure);isolation:isolate}
  .connections{position:absolute;inset:var(--space-5) 0;width:100%;height:calc(100% - 40px);color:var(--border-strong);z-index:-1}
  .connections path{stroke-dasharray:1400;stroke-dashoffset:0}
  @supports (animation-timeline:view()){
    @media(prefers-reduced-motion:no-preference){
      .connections path{animation:route-inscription 1s var(--ease-enter) both;animation-timeline:view();animation-range:entry 5% entry 55%}
    }
  }
  @keyframes route-inscription{from{stroke-dashoffset:1400;opacity:.25}to{stroke-dashoffset:0;opacity:1}}
  .service-nodes{display:grid;gap:var(--space-2)}
  button{display:grid;gap:4px;min-height:48px;width:100%;padding:8px 12px;text-align:left;color:var(--text-secondary);background:var(--surface-page);border:1px solid var(--border-strong);cursor:pointer;transition:border-color var(--motion-base),color var(--motion-base),background-color var(--motion-base),transform var(--motion-base) var(--ease-enter)}
  button span{font-size:var(--text-label)}
  button small{font:var(--text-meta)/1.5 var(--font-mono);color:var(--text-muted)}
  button.active,button:hover{border-color:var(--accent-primary);color:var(--accent-primary);background:var(--surface-inset)}
  @media(hover:hover) and (pointer:fine){button:hover{transform:translateY(-2px)}}
  button:active{transform:scale(.99)}
  button:focus-visible{outline:2px solid var(--focus-ring);outline-offset:3px}
  @media(prefers-reduced-motion:reduce){button{transition:none}button:hover,button:active{transform:none}}
  .api-node button{min-height:72px}
  figcaption{padding-top:var(--space-3)}
  .figure-reference{color:var(--accent-primary);font:var(--text-meta)/1.5 var(--font-mono)}
  .map-description{min-height:4.5em;margin-block:var(--space-2);font-size:var(--text-label);color:var(--text-secondary);line-height:1.55}
  figcaption>small{display:block;font-size:var(--text-meta);line-height:1.6;color:var(--text-muted)}
  @media(max-width:42.5rem){.map-drawing{gap:var(--space-4);padding:var(--space-4);grid-template-columns:1fr;min-height:0}.connections{display:none}.service-nodes{grid-template-columns:1fr 1fr;gap:var(--space-2)}.api-node button{min-height:58px}button{padding:8px;min-height:64px}button small{overflow-wrap:anywhere}.map-description{min-height:0}}
</style>
