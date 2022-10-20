import majorService from "../services/majorService";

let handleAddMajor = async (req, res) => {
  const bodyData = await req.body;
  let major = {
    majorId: bodyData.majorId,
    majorName_EN: bodyData.majorName_EN,
    majorName_VI: bodyData.majorName_VI,
    description: bodyData.description,
  };
  if (!major.majorId) {
    return res.status(500).json({
      message: "Missing inputs",
    });
  }
  let majorData = await majorService.handleAddNewMajor({ ...major });
  return res.status(200).json({
    errCode: majorData?.errCode,
    message: majorData?.message,
  });
};

let getMajors = async (req, res) => {
  let majorId = req.query.majorId;

  const majors = await majorService.getAllMajors(majorId);
  return res.status(200).json({
    message: "Get majors successfully!",
    majors,
  });
};

let deleteMajorById = async (req, res) => {
  let majorId = req.query.majorId;

  if (!majorId) {
    return res.status(500).json({
      message: "Missing required params",
      majors: [],
    });
  }

  const majors = await majorService.deleteMajor(majorId);
  return res.status(200).json({
    message: "Delete major successfully!",
    majors,
  });
};

let updateMajorById = async (req, res) => {
  // GET MAJOR BY ID
  let majorId = req.query.majorId;
  if (!majorId) {
    return res.status(500).json({
      message: "Missing required params",
      majors: [],
    });
  }

  // GET BODY DATA
  const bodyData = await req.body;
  const majorData = await majorService.updateMajor(majorId, bodyData);
  return res.status(200).json({
    message: "Update major successfully!",
    majors: majorData,
  });
};
module.exports = {
  handleAddMajor,
  getMajors,
  deleteMajorById,
  updateMajorById,
};
