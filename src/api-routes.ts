import { trektypesApi } from "./api/trektypes-api.js";
import { placemarksApi } from "./api/placemarks-api.js";
import { userApi } from "./api/users-api.js";

export const apiRoutes = [
  { method: "GET" as const, path: "/api/users", config: userApi.find },
  { method: "POST" as const, path: "/api/users", config: userApi.create },
  { method: "DELETE" as const, path: "/api/users", config: userApi.deleteAll },
  { method: "GET" as const, path: "/api/users/{id}", config: userApi.findOne },
  { method: "POST" as const, path: "/api/users/authenticate", config: userApi.authenticate },

  { method: "GET" as const, path: "/api/trektypes", config: trektypesApi.find },
  { method: "GET" as const, path: "/api/trektypes/{id}", config: trektypesApi.findOne },
  { method: "POST" as const, path: "/api/trektypes", config: trektypesApi.create },
  { method: "DELETE" as const, path: "/api/trektypes/{id}", config: trektypesApi.deleteOne },
  { method: "DELETE" as const, path: "/api/trektypes", config: trektypesApi.deleteAll },

  { method: "GET" as const, path: "/api/placemarks", config: placemarksApi.findAll },
  { method: "GET" as const, path: "/api/trektypes/{id}/placemarks", config: placemarksApi.findByTrektype },
  { method: "POST" as const, path: "/api/trektypes/{id}/placemarks", config: placemarksApi.makePlacemark },
  { method: "DELETE" as const, path: "/api/placemarks", config: placemarksApi.deleteAll },
];