import express from "express";
import useController from "../controllers/userController";

let router = express.Router();

let initWebRoutes = (app) => {
  // POST
  router.post("/login", useController.handleLogin);
  router.post("/register", useController.handleRegister);

  // GET
  router.get("/users", useController.getUsers);

  // DELETE
  router.delete("/users", useController.deleteUserById);

  // PUT
  router.put("/users", useController.updateUserById);

  return app.use("/api", router);
};

module.exports = initWebRoutes;
