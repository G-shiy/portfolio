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
		client: {start:"_app/immutable/entry/start.dI8VVdaS.js",app:"_app/immutable/entry/app.BvJ_evuK.js",imports:["_app/immutable/entry/start.dI8VVdaS.js","_app/immutable/chunks/jjdAjfmh.js","_app/immutable/chunks/KyuJroYO.js","_app/immutable/chunks/DzOMCB1I.js","_app/immutable/chunks/CfKKok68.js","_app/immutable/entry/app.BvJ_evuK.js","_app/immutable/chunks/KyuJroYO.js","_app/immutable/chunks/DgGQDgHo.js","_app/immutable/chunks/CfKKok68.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
