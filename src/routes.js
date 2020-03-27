const express = require("express");
const routes = express.Router();
const ongsController = require("./controllers/ongsController")
const incidentsController = require("./controllers/incidentController")
const profileController = require("./controllers/profileController")
const sessionController = require("./controllers/sessionController")

routes.get('/profile', profileController.listIncidentsByOngId);
routes.post('/session', sessionController.create)

routes.get('/incidents', incidentsController.listAll);
routes.post('/incidents', incidentsController.create);
routes.delete('/incidents/:id', incidentsController.delete);

routes.get("/ongs", ongsController.listAll);
routes.post("/ongs", ongsController.create);

module.exports = routes;
