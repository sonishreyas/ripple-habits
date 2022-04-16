import { Response } from "miragejs";
/**
 * All the routes related to Category are present here.
 * These are Publicly accessible routes.
 * */

/**
 * This handler handles gets all categories in the db.
 * send GET Request at /api/categories
 * */

export const getAllCategoriesHandler = function () {
	try {
		return new Response(200, {}, { categories: this.db.categories });
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

/**
 * This handler handles gets all categories in the db.
 * send GET Request at /api/user/category/:categoryId
 * */

export const getCategoryHandler = function (schema, request) {
	const { categoryId } = request.params;
	try {
		const category = schema.categories.findBy({ _id: categoryId }).attrs;
		return new Response(200, {}, { category });
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

/**
 * This handler handles adding playlist to user's playlists.
 * send POST Request at /api/user/playlists
 * body contains {playlist: {title: "foo", description:"bar bar bar" }}
 * */

export const addNewPlaylistHandler = function (schema, request) {
	const user = requiresAuth.call(this, request);
	if (user) {
		const { playlist } = JSON.parse(request.requestBody);
		if (user.playlists.some((item) => item.name === playlist.name)) {
			return new Response(
				409,
				{},
				{
					errors: ["The playlist already exists."],
				}
			);
		}
		user.playlists.push({ ...playlist, videos: [], _id: uuid() });
		return new Response(201, {}, { playlists: user.playlists });
	}
	return new Response(
		404,
		{},
		{
			errors: ["The email you entered is not Registered. Not Found error"],
		}
	);
};

/**
 * This handler handles removing videos from user's playlists.
 * send DELETE Request at /api/user/playlists/:playlistId
 * */

export const updatePlaylistHandler = function (schema, request) {
	const user = requiresAuth.call(this, request);
	if (user) {
		const playlistId = request.params.playlistId;
		const { playlist } = JSON.parse(request.requestBody);
		const filteredPlaylists = user.playlists.reduce(
			(prev, curr) =>
				curr._id === playlistId
					? [...prev, { ...curr, ...playlist }]
					: [...prev, { ...curr }],
			[]
		);
		this.db.users.update({ playlists: filteredPlaylists });
		return new Response(200, {}, { playlists: filteredPlaylists });
	}
	return new Response(
		404,
		{},
		{ errors: ["The user you request does not exist. Not Found error."] }
	);
};

/**
 * This handler handles removing videos from user's playlists.
 * send DELETE Request at /api/user/playlists/:playlistId
 * */

export const removePlaylistHandler = function (schema, request) {
	const user = requiresAuth.call(this, request);
	if (user) {
		const playlistId = request.params.playlistId;
		const filteredPlaylists = user.playlists.filter(
			(item) => item._id !== playlistId
		);
		this.db.users.update({ playlists: filteredPlaylists });
		return new Response(200, {}, { playlists: filteredPlaylists });
	}
	return new Response(
		404,
		{},
		{ errors: ["The user you request does not exist. Not Found error."] }
	);
};
