import { NextFunction, Request, Response } from "express";

class IndexController {
	public index = (req: Request, res: Response, next: NextFunction) => {
		try {
			res.render("chat", {
				// passing the values to the ejs template file
				heading: "The title I want to render",
				text: "The text I want to render",
				time: new Date().toUTCString(),
			});
		} catch (error) {
			next(error);
		}
	};

	public post = (req: Request, res: Response, next: NextFunction) => {
		console.log(req.body);
		
		const tag = req.body.queryResult.intent.displayName;

		let jsonResponse = {};
		if (tag === "Default Welcome Intent") {
			//fulfillment response to be sent to the agent if the request tag is equal to "welcome tag"
			jsonResponse = {
				fulfillment_messages: [
					{
						text: {
							//fulfillment text response to be sent to the agent
							text: ["Hello from a GCF Webhook"],
						},
					},
				],
			};
		} else if (tag === "get-name") {
			//fulfillment response to be sent to the agent if the request tag is equal to "welcome tag"
			jsonResponse = {
				fulfillment_messages: [
					{
						text: {
							//fulfillment text response to be sent to the agent
							text: ["My name is Flowhook"],
						},
					},
				],
			};
		} else {
			jsonResponse = {
				//fulfillment text response to be sent to the agent if there are no defined responses for the specified tag
				fulfillment_messages: [
					{
						text: {
							////fulfillment text response to be sent to the agent
							text: [
								"Hello from a GCF Webhook",
							],
						},
					},
				],
			};
		}
		res.send(jsonResponse);
	};
}

export default IndexController;
