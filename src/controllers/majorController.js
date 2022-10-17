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
      errCode: 1,
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
    let id = req.query.id;

    if (!id) {
      return res.status(500).json({
        errCode: 1,
        message: "Missing required params",
        majors: [],
      });
    }

    const majors = await majorService.getAllMajors(id);
    return res.status(200).json({
      errCode: 0,
      message: "Get majors successfully!",
      majors,
    });
};

let deleteMajorById = async (req, res) => {
  let id = req.query.id;

  if (!id) {
    return res.status(500).json({
      errCode: 1,
      message: "Missing required params",
      majors: [],
    });
  } else if (!Number(id)) {
    return res.status(500).json({
      errCode: 2,
      message: "Param is invalid",
      majors: [],
    });
  }

  const majors = await majorService.deleteMajor(id);
  return res.status(200).json({
    errCode: 0,
    message: "Delete major successfully!",
    majors,
  });
};

let updateMajorById = async (req, res) => {
  // GET MAJOR BY ID
  let majorId = req.query.id;
  if (!majorId) {
    return res.status(500).json({
      errCode: 1,
      message: "Missing required params",
      majors: [],
    });
  } else if (!Number(majorId)) {
    return res.status(500).json({
      errCode: 2,
      message: "Param is invalid",
      majors: [],
    });
  }

  // GET BODY DATA
  const bodyData = await req.body;
  const majorData = await majorService.updateMajor(majorId, bodyData);
  return res.status(200).json({
    errCode: 0,
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
