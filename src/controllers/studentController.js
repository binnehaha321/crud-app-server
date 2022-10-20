import studentService from "../services/studentService";

let handleAddStudent = async (req, res) => {
  const bodyData = await req.body;
  let student = {
    studentId: bodyData.studentId,
    email: bodyData.email,
    fullName: bodyData.fullName,
    gender: bodyData.gender,
    avatar: bodyData.avatar,
    phoneNumber: bodyData.phoneNumber,
    address: bodyData.address,
    enrollNumber: bodyData.enrollNumber,
    dateOfAdmission: bodyData.dateOfAdmission,
    majorId: bodyData.majorId,
    classId: bodyData.classId,
  };
  if (!bodyData.studentId) {
    return res.status(500).json({
      message: "Missing inputs",
    });
  }
  let studentData = await studentService.handleAddNewStudent({ ...student });
  return res.status(200).json({
    errCode: studentData?.errCode,
    message: studentData?.message,
  });
};

let getStudents = async (req, res) => {
  let studentId = req.query.studentId;

  const students = await studentService.getAllStudents(studentId);
  return res.status(200).json({
    message: "Get students successfully!",
    students,
  });
};

let deleteStudentById = async (req, res) => {
  let studentId = req.query.studentId;

  if (!studentId) {
    return res.status(500).json({
      message: "Missing required params",
      students: [],
    });
  }

  const students = await studentService.deleteStudent(studentId);
  return res.status(200).json({
    message: "Delete student successfully!",
    students,
  });
};

let updateStudentById = async (req, res) => {
  // GET STUDENT BY ID
  let studentId = req.query.studentId;
  if (!studentId) {
    return res.status(500).json({
      message: "Missing required params",
      students: [],
    });
  }

  // GET BODY DATA
  const bodyData = await req.body;
  const studentData = await studentService.updateUser(studentId, bodyData);
  return res.status(200).json({
    message: "Update student successfully!",
    students: studentData,
  });
};
module.exports = {
  handleAddStudent,
  getStudents,
  deleteStudentById,
  updateStudentById,
};
