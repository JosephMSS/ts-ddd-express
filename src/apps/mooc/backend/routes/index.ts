import { Router } from 'express';
import glob from 'glob';
/**
 * *Escanea todos los ficheros con la extensión .route. y los carga en el
 * *router.register que se espera que tenga ese archivo
 * @param router
 */
export function registerRoutes(router: Router): void {
  const routes = glob.sync(`${__dirname}/**/*.route.*`);//no son expresiones regulares pero es para especificar el path, en este caso  ** significa que sea a cualquier nivel
  routes.map(route => register(route, router));
}

function register(routePath: string, router: Router) {
  // eslint-disable-next-line @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires
  const { register } = require(routePath) as { register: (router: Router) => void };
  register(router);
}
