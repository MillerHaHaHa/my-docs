export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/mnt/data1/docs/my-docs/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Home"} }],
  ["/docker%20%E6%90%AD%E5%BB%BA%20nextcloud.html", { loader: () => import(/* webpackChunkName: "docker 搭建 nextcloud.html" */"/mnt/data1/docs/my-docs/docs/.vuepress/.temp/pages/docker 搭建 nextcloud.html.js"), meta: {"title":"docker 搭建 nextcloud"} }],
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"/mnt/data1/docs/my-docs/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"title":"Get Started"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/mnt/data1/docs/my-docs/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);
