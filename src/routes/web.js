import express from "express";
import userController from "../controllers/userController";
import studentController from "../controllers/studentController";
import majorController from "../controllers/majorController";
import paymentController from "../controllers/paymentController";

let router = express.Router();

let initWebRoutes = (app) => {
  // POST
  router.post("/login", userController.handleLogin);
  router.post("/register", userController.handleRegister);
  router.post("/students/add", studentController.handleAddStudent);
  router.post("/majors/add", majorController.handleAddMajor);

  // GET
  router.get("/users", userController.getUsers);
  router.get("/students", studentController.getStudents);
  router.get("/majors", majorController.getMajors);
  router.get("/payments", paymentController.getPayments);

  // DELETE
  router.delete("/users", userController.deleteUserById);
  router.delete("/students", studentController.deleteStudentById);
  router.delete("/majors", majorController.deleteMajorById);

  // PUT
  router.put("/users", userController.updateUserById);
  router.put("/students", studentController.updateStudentById);
  router.put("/majors", majorController.updateMajorById);

  return app.use("/api", router);
};

module.exports = initWebRoutes;
