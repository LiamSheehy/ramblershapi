import { Request, ResponseToolkit } from "@hapi/hapi";
import { db } from "../models/db.js";

export const placemarksController = {
  index: {
    handler: async function (request: Request, h: ResponseToolkit) {
      const loggedInUser = request.auth.credentials;
      const trektypes = await db.trektypeStore.find();
      return h.view("trails", {
        title: "Trail Creation",
        user: loggedInUser,
        trektypes: trektypes,
      });
    },
  },
  trails: {
    handler: async function (request: Request, h: ResponseToolkit) {
      try {
        const loggedInUser = request.auth.credentials;
        const placemarkPayload = request.payload as any;
        const placemark = {
          poi: placemarkPayload.poi,
          level: placemarkPayload.level,
          member: loggedInUser._id,
          trektype: placemarkPayload.trektype, // Assigning the title instead of the ID
          lat: placemarkPayload.lat,
          lng: placemarkPayload.lng,
        };

        await db.placemarkStore.add(placemark);

        return h.redirect("/trails");
      } catch (err: any) {
        return h.view("main", { errors: [{ message: err.message }] });
      }
    },
  },
  report: {
    handler: async function (request: Request, h: ResponseToolkit) {
      const loggedInUser = request.auth.credentials;
      const placemarks = await db.placemarkStore.find();
      return h.view("report", {
        title: "Report",
        user: loggedInUser,
        placemarks: placemarks,
      });
    },
  },
};
