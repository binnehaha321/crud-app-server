import express from "express";
import userController from "../controllers/userController";
import studentController from "../controllers/studentController";

let router = express.Router();

let initWebRoutes = (app) => {
  // POST
  router.post("/login", userController.handleLogin);
  router.post("/register", userController.handleRegister);
  router.post("/students/add", studentController.handleAddStudent);

  // GET
  router.get("/users", userController.getUsers);
  router.get("/students", studentController.getStudents);

  // DELETE
  router.delete("/users", userController.deleteUserById);
  router.delete("/students", studentController.deleteStudentById);

  // PUT
  router.put("/users", userController.updateUserById);
  router.put("/students", studentController.updateStudentById);

  return app.use("/api", router);
};

module.exports = initWebRoutes;
