import express from "express";
import useController from "../controllers/userController";

let router = express.Router();

let initWebRoutes = (app) => {

  router.post("/api/login", useController.handleLogin);
  router.post("/api/register", useController.handleRegister);

  return app.use("/", router);
};

module.exports = initWebRoutes;
