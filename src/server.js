import { Server, Model, RestSerializer } from "miragejs";
import {
	archiveHabitHandler,
	deleteFromArchivesHandler,
	getAllArchivedHabitsHandler,
	restoreFromArchivesHandler,
} from "./backend/controllers/ArchiveController";
import {
	loginHandler,
	signupHandler,
} from "./backend/controllers/AuthController";
import {
	createHabitHandler,
	deleteHabitHandler,
	editHabitHandler,
	getHabitHandler,
	getHabitsHandler,
} from "./backend/controllers/HabitController";
import { getQuotesHandler } from "./backend/controllers/QuotesController";
import {
	createLabelHandler,
	deleteLabelHandler,
	getLabelsHandler,
} from "./backend/controllers/LabelController";
import { getColorsHandler } from "./backend/controllers/ColorsController";
import { getIconsHandler } from "./backend/controllers/IconsController";
import { users } from "./backend/db/users";
import { quotes } from "./backend/db/quotes";
import { colors } from "./backend/db/colors";
import { icons } from "./backend/db/icons";
export function makeServer({ environment = "development" } = {}) {
	let server = new Server({
		serializers: {
			application: RestSerializer,
		},
		environment,
		models: {
			user: Model,
			quotes: Model,
			colors: Model,
			icons: Model,
		},

		// Runs on the start of the server
		seeds(server) {
			server.logging = false;
			quotes.forEach((item) => server.create("quote", { ...item }));

			colors.forEach((item) => server.create("color", { ...item }));

			icons.forEach((item) => {
				console.log(icons);
				server.create("icon", { ...item });
			});

			users.forEach((item) =>
				server.create("user", {
					...item,
					habits: [],
					archives: [],
					labels: [],
				})
			);
		},

		routes() {
			this.namespace = "api";
			// auth routes (public)
			this.post("/auth/signup", signupHandler.bind(this));
			this.post("/auth/login", loginHandler.bind(this));

			// quotes routes (public)
			this.get("/quotes", getQuotesHandler.bind(this));

			// colors routes (public)
			this.get("/colors", getColorsHandler.bind(this));

			// icons routes (public)
			this.get("/icons", getIconsHandler.bind(this));

			// habit routes (private)
			this.get("habits", getHabitsHandler.bind(this));
			this.get("habits/:habitId", getHabitHandler.bind(this));
			this.post("habits", createHabitHandler.bind(this));
			this.post("habits/:habitId", editHabitHandler.bind(this));
			this.delete("habits/:habitId", deleteHabitHandler.bind(this));

			// label routes (private)
			this.get("labels", getLabelsHandler.bind(this));
			this.post("labels/:labelName", createLabelHandler.bind(this));
			this.delete("labels/:labelName", deleteLabelHandler.bind(this));

			// archive routes (private)
			this.get("archives", getAllArchivedHabitsHandler.bind(this));
			this.post(
				"archives/restore/:habitId",
				restoreFromArchivesHandler.bind(this)
			);
			this.post("archives/:habitId", archiveHabitHandler.bind(this));
			this.delete("archives/:habitId", deleteFromArchivesHandler.bind(this));
		},
	});
	return server;
}
