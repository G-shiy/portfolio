export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "portfolio/_app",
	assets: new Set([".nojekyll","favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.DR0ToLKM.js",app:"_app/immutable/entry/app.w6SimMrF.js",imports:["_app/immutable/entry/start.DR0ToLKM.js","_app/immutable/chunks/C_cj4m7F.js","_app/immutable/chunks/Cd5p3PAn.js","_app/immutable/chunks/B1E1PBS-.js","_app/immutable/chunks/Dce5S-A0.js","_app/immutable/entry/app.w6SimMrF.js","_app/immutable/chunks/Cd5p3PAn.js","_app/immutable/chunks/DPTbCkPj.js","_app/immutable/chunks/Dce5S-A0.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		remotes: {
			
		},
		routes: [
			
		],
		prerendered_routes: new Set(["/portfolio/"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
