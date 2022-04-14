import { Response } from "miragejs";

/**
 * This handler handles getting quotes.
 * send GET Request at /api/quotes
 * */

export const getQuotesHandler = function () {
	try {
		const index = Math.floor(Math.random() * this.db.quotes.length) + 0;
		return new Response(200, {}, { quotes: this.db.quotes[index] });
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
