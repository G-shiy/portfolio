import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.DN5NRoNk.js","_app/immutable/chunks/DgGQDgHo.js","_app/immutable/chunks/KyuJroYO.js","_app/immutable/chunks/C2_qwZKk.js","_app/immutable/chunks/CfKKok68.js","_app/immutable/chunks/COVj9NnE.js","_app/immutable/chunks/DzOMCB1I.js"];
export const stylesheets = ["_app/immutable/assets/0.BS8oTKYR.css"];
export const fonts = [];
