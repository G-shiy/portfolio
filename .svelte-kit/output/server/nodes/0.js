import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.BSvLvclx.js","_app/immutable/chunks/C9gN_ybW.js","_app/immutable/chunks/D3nXEM-o.js","_app/immutable/chunks/kwpgJbtV.js","_app/immutable/chunks/D1znKDG5.js","_app/immutable/chunks/uvmfFl_T.js"];
export const stylesheets = ["_app/immutable/assets/0.BTup9ckQ.css"];
export const fonts = [];
