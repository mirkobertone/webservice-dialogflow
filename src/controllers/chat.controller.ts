import { NextFunction, Request, Response } from "express";

export class ChatController {
	public index = (req: Request, res: Response, next: NextFunction) => {
		res.render("chat", {
			// passing the values to the ejs template file
			heading: "The title I want to render",
			text: "The text I want to render",
			time: (new Date().toUTCString())
		});
	};
}