import App from "./app";
import { ChateRoute } from "./routes/chat.route";
import IndexRoute from "./routes/index.route";

const app = new App([
	new IndexRoute(),
	// new ChateRoute()
]);

app.listen();