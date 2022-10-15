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
        errCode: 0,
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
      if (studentId === "ALL") {
        students = await db.Students.findAll();
      } else if (studentId && studentId !== "ALL") {
        students = await db.Students.findOne({
          where: { id: studentId },
        });
      }
      resolve(students);
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  handleAddNewStudent,
  getAllStudents,
};
