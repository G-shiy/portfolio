

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.VCnAzfJB.js","_app/immutable/chunks/DgGQDgHo.js","_app/immutable/chunks/KyuJroYO.js","_app/immutable/chunks/C2_qwZKk.js"];
export const stylesheets = ["_app/immutable/assets/2.CUv2AEAa.css"];
export const fonts = [];
