export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "portfolio-app/_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.QerZi3cw.js",app:"_app/immutable/entry/app.D36VCnHz.js",imports:["_app/immutable/entry/start.QerZi3cw.js","_app/immutable/chunks/CaIvN4Zb.js","_app/immutable/chunks/D3nXEM-o.js","_app/immutable/chunks/D1znKDG5.js","_app/immutable/entry/app.D36VCnHz.js","_app/immutable/chunks/D3nXEM-o.js","_app/immutable/chunks/B1ZyeGGy.js","_app/immutable/chunks/C9gN_ybW.js","_app/immutable/chunks/D1znKDG5.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
