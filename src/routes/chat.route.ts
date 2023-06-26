import { Router } from "express";
import { ChatController } from "../controllers/chat.controller";
import Route from "../interfaces/routes.interface";

export class ChateRoute implements Route {
	public path = "/chat";
	public router = Router();
	public chatController = new ChatController();

	constructor() {
		this.initializeRoutes();
	}

	private initializeRoutes() {
		this.router.get(`${this.path}`, this.chatController.index);
	}
}