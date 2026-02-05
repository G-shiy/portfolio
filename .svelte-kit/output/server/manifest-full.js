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
		client: {start:"_app/immutable/entry/start.BMtz0gAk.js",app:"_app/immutable/entry/app.C-ShqdT4.js",imports:["_app/immutable/entry/start.BMtz0gAk.js","_app/immutable/chunks/uPmvhJAA.js","_app/immutable/chunks/Cd5p3PAn.js","_app/immutable/chunks/Dg8I_9V3.js","_app/immutable/chunks/Dce5S-A0.js","_app/immutable/entry/app.C-ShqdT4.js","_app/immutable/chunks/Cd5p3PAn.js","_app/immutable/chunks/DPTbCkPj.js","_app/immutable/chunks/Dce5S-A0.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
