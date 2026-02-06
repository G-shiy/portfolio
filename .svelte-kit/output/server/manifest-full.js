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
		client: {start:"_app/immutable/entry/start.DNYSGcDd.js",app:"_app/immutable/entry/app.BPls1y9H.js",imports:["_app/immutable/entry/start.DNYSGcDd.js","_app/immutable/chunks/CYIQ9dI_.js","_app/immutable/chunks/Cd5p3PAn.js","_app/immutable/chunks/B-y_wmV7.js","_app/immutable/chunks/Dce5S-A0.js","_app/immutable/entry/app.BPls1y9H.js","_app/immutable/chunks/Cd5p3PAn.js","_app/immutable/chunks/DPTbCkPj.js","_app/immutable/chunks/Dce5S-A0.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
