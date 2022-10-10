import express from "express";
import useController from "../controllers/userController";

let router = express.Router();

let initWebRoutes = (app) => {

  // POST
  router.post("/api/login", useController.handleLogin);
  router.post("/api/register", useController.handleRegister);

  // GET
  router.get("/api/users", useController.getUsers)

  return app.use("/", router);
};

module.exports = initWebRoutes;
