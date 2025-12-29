const __vite_import_meta_env__ = { "BASE_URL": "/apps/nsh/", "DEV": false, "MODE": "production", "PROD": true, "SSR": false, "VITE_BUILD_TARGET": "es2015", "VITE_SUPABASE_KEY": "dummy" };
var define_process_env_default = {};
function useViteBasePrefix() {
  let viteBasePrefix = "/";
  try {
    if (typeof process !== "undefined" && define_process_env_default && (define_process_env_default.VITE_BASE_URL || define_process_env_default.BASE_URL)) {
      viteBasePrefix = define_process_env_default.VITE_BASE_URL || define_process_env_default.BASE_URL || "/";
    } else {
      try {
        if (import.meta && __vite_import_meta_env__ && "/apps/nsh/") {
          viteBasePrefix = "/apps/nsh/";
        }
      } catch (err) {
      }
    }
    if (viteBasePrefix !== "/" && viteBasePrefix.endsWith("/")) {
      viteBasePrefix = viteBasePrefix.replace(/\/\/+$/, "");
    }
  } catch (e) {
    viteBasePrefix = "/";
  }
  return viteBasePrefix;
}
export {
  useViteBasePrefix
};
