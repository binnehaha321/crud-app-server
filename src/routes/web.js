import express from "express";
import authenController from "../controllers/authenController";
import studentController from "../controllers/studentController";
import majorController from "../controllers/majorController";
import paymentController from "../controllers/paymentController";

let router = express.Router();

let initWebRoutes = (app) => {
  // POST
  router.post("/login", authenController.handleLogin);
  router.post("/register", authenController.handleRegister);
  router.post("/students/add", studentController.handleAddStudent);
  router.post("/majors/add", majorController.handleAddMajor);
  router.post("/payments/add", paymentController.handleAddPayment);

  // GET
  router.get("/users", authenController.getUsers);
  router.get("/students", studentController.getStudents);
  router.get("/majors", majorController.getMajors);
  router.get("/payments", paymentController.getPayments);

  // DELETE
  router.delete("/users", authenController.deleteUserById);
  router.delete("/students", studentController.deleteStudentById);
  router.delete("/majors", majorController.deleteMajorById);

  // PUT
  router.put("/users", authenController.updateUserById);
  router.put("/students", studentController.updateStudentById);
  router.put("/majors", majorController.updateMajorById);

  return app.use("/api", router);
};

module.exports = initWebRoutes;
