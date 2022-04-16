import { Response } from "miragejs";
/**
 * All the routes related to Category are present here.
 * These are Publicly accessible routes.
 * */

/**
 * This handler handles gets all categories in the db.
 * send GET Request at /api/colors
 * */

export const getColorsHandler = function () {
	try {
		return new Response(200, {}, { colors: this.db.colors });
	} catch (error) {
		return new Response(
			500,
			{},
			{
				error,
			}
		);
	}
};
