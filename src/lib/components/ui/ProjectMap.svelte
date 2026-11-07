<script lang="ts">
  import { wtcResponsibilities } from '$lib/data/projects';
  let selected = $state<string>('api');
  let current = $derived(wtcResponsibilities.find(item => item.id === selected) ?? wtcResponsibilities[0]);
</script>
<figure class="project-map">
  <p class="map-hint">Selecione uma parte do backend.</p>
  <div class="map-drawing">
    <svg class="connections" viewBox="0 0 800 240" preserveAspectRatio="none" aria-hidden="true"><path d="M190 120H400M400 30V210M400 30H610M400 90H610M400 150H610M400 210H610" fill="none" stroke="currentColor" stroke-width="1" vector-effect="non-scaling-stroke"/></svg>
    <div class="api-node"><button type="button" class:active={selected==='api'} aria-pressed={selected==='api'} onclick={()=>selected='api'} onpointerenter={()=>selected='api'} onfocus={()=>selected='api'}><span>Gear API</span><small>ASP.NET Core 10</small></button></div>
    <div class="service-nodes">{#each wtcResponsibilities.slice(1) as item (item.id)}<button type="button" class:active={selected===item.id} aria-pressed={selected===item.id} onclick={()=>selected=item.id} onpointerenter={()=>selected=item.id} onfocus={()=>selected=item.id}><span>{item.label}</span><small>{item.technology}</small></button>{/each}</div>
  </div>
  <figcaption><span class="figure-reference">Fig. 02 · Mapa de responsabilidades</span><p class="map-description" aria-live="polite"><strong>{current.label}.</strong> {current.description}</p><small>Visão simplificada a partir do currículo. Selecione uma parte para ler sua função.</small></figcaption>
</figure>
<style>
  .project-map{margin:0;min-width:0}.map-hint{font-size:var(--text-label);color:var(--text-muted);margin-bottom:var(--space-3)}.map-drawing{position:relative;display:grid;grid-template-columns:1fr 1fr;gap:20%;align-items:center;min-height:280px;padding:var(--space-6) var(--space-4);background:var(--surface-figure);isolation:isolate}.map-drawing::before{content:'';position:absolute;inset:0;z-index:-1;background-image:linear-gradient(var(--border-subtle) 1px,transparent 1px),linear-gradient(90deg,var(--border-subtle) 1px,transparent 1px);background-size:32px 32px;mask-image:radial-gradient(ellipse,black,transparent 75%);opacity:.3}.connections{position:absolute;inset:var(--space-6) 0;width:100%;height:calc(100% - 48px);color:var(--border-strong);z-index:-1}
  .service-nodes{display:grid;gap:var(--space-3)}button{display:grid;gap:4px;min-height:52px;width:100%;padding:10px 14px;text-align:left;color:var(--text-secondary);background:var(--surface-page);border:1px solid var(--border-strong);cursor:pointer;transition:border-color var(--motion-base),color var(--motion-base),background-color var(--motion-base)}button span{font-size:var(--text-label)}button small{font:var(--text-meta)/1.5 var(--font-mono);color:var(--text-muted)}button.active,button:hover{border-color:var(--accent-primary);color:var(--accent-primary);background:var(--surface-inset)}.api-node button{min-height:88px}
  figcaption{padding-top:var(--space-4)}.figure-reference{color:var(--accent-primary);font:var(--text-meta)/1.5 var(--font-mono)}.map-description{min-height:7em;margin-block:var(--space-3) var(--space-2);font-size:var(--text-label);color:var(--text-secondary)}figcaption>small{display:block;font-size:var(--text-meta);line-height:1.6;color:var(--text-muted)}
  @media(max-width:42.5rem){.map-drawing{gap:var(--space-5);padding:var(--space-4);grid-template-columns:1fr}.connections{display:none}.service-nodes{grid-template-columns:1fr 1fr;gap:var(--space-3)}.api-node button{min-height:64px}button{padding:10px;min-height:76px}button small{overflow-wrap:anywhere}.map-description{min-height:8em}}
</style>
