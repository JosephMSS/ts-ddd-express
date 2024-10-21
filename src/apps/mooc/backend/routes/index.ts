import { NextFunction, Request, Response, Router } from 'express';
import { ValidationError, validationResult } from 'express-validator';
import glob from 'glob';
import httpStatus from 'http-status';
/**
 * *Escanea todos los ficheros con la extensión .route. y los carga en el
 * *router.register que se espera que tenga ese archivo
 * @param router
 */
export function registerRoutes(router: Router): void {
	const routes = glob.sync(`${__dirname}/**/*.route.*`); //no son expresiones regulares pero es para especificar el path, en este caso  ** significa que sea a cualquier nivel
	routes.map(route => register(route, router));
}

function register(routePath: string, router: Router): void {
	// eslint-disable-next-line @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires
	const { register } = require(routePath) as { register: (router: Router) => void };
	register(router);
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function validateReqSchema(req: Request, res: Response, next: NextFunction) {
	const validationErrors = validationResult(req);
	if (validationErrors.isEmpty()) {
		next();

		return;
	}
	const errors = validationErrors.array().map((err: ValidationError) => {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
		return { [err.param]: err.msg };
	});

	return res.status(httpStatus.UNPROCESSABLE_ENTITY).json(errors);
}
