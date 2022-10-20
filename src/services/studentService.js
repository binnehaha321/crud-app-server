import db from "../models/index";

const handleAddNewStudent = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      await db.Students.create({
        studentId: data.studentId,
        email: data.email,
        fullName: data.fullName,
        gender: data.gender,
        avatar: data.avatar,
        phoneNumber: data.phoneNumber,
        address: data.address,
        enrollNumber: data.enrollNumber,
        dateOfAdmission: data.dateOfAdmission,
        majorId: data.majorId,
        classId: data.classId,
      });
      resolve({
        message: "Created student successfully!",
      });
    } catch (error) {
      reject(error);
    }
  });
};

const getAllStudents = async (studentId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let students = "";
      if (!studentId) {
        students = await db.Students.findAll();
      } else {
        students = await db.Students.findOne({
          where: { studentId },
          raw: true,
        });
      }
      resolve(students);
    } catch (error) {
      reject(error);
    }
  });
};

const deleteStudent = async (studentId) => {
  return new Promise(async (resolve, reject) => {
    try {
      await db.Students.destroy({ where: { studentId } });
      let studentList = await getAllStudents();
      resolve(studentList);
    } catch (error) {
      reject(error);
    }
  });
};

const updateUser = (studentId, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      await db.Students.update(data, { where: { studentId } });
      let studentList = await getAllStudents();
      resolve(studentList);
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  handleAddNewStudent,
  getAllStudents,
  deleteStudent,
  updateUser,
};
