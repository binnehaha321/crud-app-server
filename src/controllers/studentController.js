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
  if (!student.studentId) {
    return res.status(500).json({
      errCode: 1,
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
    let id = req.query.id;

    if (!id) {
      return res.status(500).json({
        errCode: 1,
        message: "Missing required params",
        students: [],
      });
    }

    const students = await studentService.getAllStudents(id);
    return res.status(200).json({
      errCode: 0,
      message: "Get students successfully!",
      students,
    });
};

module.exports = {
  handleAddStudent,
  getStudents,
};
