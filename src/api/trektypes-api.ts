import Boom from "@hapi/boom";
import { Request, ResponseToolkit } from "@hapi/hapi";
import { db } from "../models/db.js";

export const trektypesApi = {
  find: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request: Request, h: ResponseToolkit) {
      const trektypes = await db.trektypeStore.find();
      return h.response(trektypes).code(200);
    },
  },

  findOne: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request: Request, h: ResponseToolkit) {
      try {
        const trektype = await db.trektypeStore.findOne(request.params.id);
        if (trektype === null) {
          return Boom.notFound("No Trektype with this id");
        }
        return h.response(trektype).code(200);
      } catch (err) {
        return Boom.notFound("No Trektype with this id");
      }
    },
  },

  create: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request: Request, h: ResponseToolkit) {
      const trektype = await db.trektypeStore.add(request.payload);
      if (trektype !== null) {
        return h.response(trektype).code(201);
      }
      return Boom.badImplementation("error creating trektype");
    },
  },

  deleteAll: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request: Request, h: ResponseToolkit) {
      await db.trektypeStore.delete();
      return h.response().code(204);
    },
  },

  deleteOne: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request: Request, h: ResponseToolkit) {
      await db.trektypeStore.deleteOne(request.params.id);
      return h.response().code(204);
    },
  },
};