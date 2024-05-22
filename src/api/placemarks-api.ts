import Boom from "@hapi/boom";
import { Request, ResponseToolkit } from "@hapi/hapi";
import { db } from "../models/db.js";
import { Trektype, Placemark } from "../types/placemark-types.js";
import fs from "fs";
import path from "path";

// Utility function to log errors to a file
function logErrorToFile(error: any) {
  const logFilePath = path.join(__dirname, "../logs/error.log");
  const logMessage = `${new Date().toISOString()} - ${error.stack || error}\n`;
  fs.appendFile(logFilePath, logMessage, (err) => {
    if (err) console.error("Failed to write to log file:", err);
  });
}

export const placemarksApi = {
  findAll: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request: Request, h: ResponseToolkit) {
      try {
        const placemarks = await db.placemarkStore.find();
        return h.response(placemarks).code(200);
      } catch (err) {
        logErrorToFile(err);
        return Boom.serverUnavailable("Database Error");
      }
    },
  },

  findByTrektype: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request: Request, h: ResponseToolkit) {
      try {
        const placemarks = await db.placemarkStore.findBy(request.params.id) as Placemark;
        return h.response(placemarks).code(200);
      } catch (err) {
        logErrorToFile(err);
        return Boom.serverUnavailable("Error finding placemarks by trektype");
      }
    },
  },

  makePlacemark: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request: Request, h: ResponseToolkit) {
      try {
        const trektype = await db.trektypeStore.findOne(request.params.id) as Trektype;
        if (trektype === null) {
          return Boom.notFound("No Trektype with this id");
        }
        const placemarkPayload = request.payload as Placemark;
        const placemark = {
          poi: placemarkPayload.poi,
          level: placemarkPayload.level,
          member: request.auth.credentials._id,
          trektype: trektype,
          lat: placemarkPayload.lat,
          lng: placemarkPayload.lng,
        };
        const newPlacemark = await db.placemarkStore.add(placemark) as Placemark;
        return h.response(newPlacemark).code(200);
      } catch (err) {
        logErrorToFile(err);
        return Boom.serverUnavailable("Error creating placemark");
      }
    },
  },

  deleteAll: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request: Request, h: ResponseToolkit) {
      try {
        console.log("delete...");
        await db.placemarkStore.delete();
        return h.response().code(204);
      } catch (err) {
        logErrorToFile(err);
        return Boom.serverUnavailable("Error deleting placemarks");
      }
    },
  },
};
