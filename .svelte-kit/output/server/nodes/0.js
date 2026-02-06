import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.ByWiLHBm.js","_app/immutable/chunks/DPTbCkPj.js","_app/immutable/chunks/Cd5p3PAn.js","_app/immutable/chunks/CfCg2e5A.js","_app/immutable/chunks/Dce5S-A0.js","_app/immutable/chunks/BTLCzigd.js","_app/immutable/chunks/CP4zeyli.js"];
export const stylesheets = ["_app/immutable/assets/0.BxlR39-5.css"];
export const fonts = [];
