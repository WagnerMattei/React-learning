const express = require("express");

module.exports = function(server) {
  const router = express.Router();
  server.use("/api", router);

  const alumnoService = require("../api/schema/alumnoService");
  alumnoService.register(router, "/alumnos");

  const asignaturaService = require("../api/schema/asignaturaService");
  asignaturaService.register(router, "/asignaturas");

  const userService = require("../api/schema/userService");
  userService.register(router, "/users");

  const paisService = require("../api/schema/paisService");
  paisService.register(router, "/paises");
};
