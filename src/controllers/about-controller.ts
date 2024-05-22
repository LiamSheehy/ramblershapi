import { Request, ResponseToolkit } from "@hapi/hapi";
import { db } from "../models/db.js";

export const aboutController = {
  index: {
    handler: async function (request: Request, h: ResponseToolkit) {
      try {
        const loggedInUser = request.auth.credentials; // Retrieve the logged-in user from the request credentials

        const viewData = {
          title: "About Rustic Ramblers",
          user: loggedInUser, // Pass the user to the view
        };

        return h.view("about-view", viewData);
      } catch (error) {
        return h.view("error-view", { error: "An error occurred" }).code(500);
      }
    },
  },
};
