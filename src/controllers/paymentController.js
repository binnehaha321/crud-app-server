import paymentService from "../services/paymentService";

let handleAddPayment = async (req, res) => {
  const bodyData = await req.body;
  let payment = {
    paymentId: bodyData.paymentId,
    paymentSchedule: bodyData.paymentSchedule,
    billNumber: bodyData.billNumber,
    amountPaid: bodyData.amountPaid,
    paymentDate: bodyData.paymentDate,
    studentId: bodyData.studentId,
  };
  if (!payment.paymentId) {
    return res.status(500).json({
      errCode: 1,
      message: "Missing inputs",
    });
  }
  let paymentData = await paymentService.handleAddNewPayment({ ...payment });
  return res.status(200).json({
    errCode: paymentData?.errCode,
    message: paymentData?.message,
  });
};

let getPayments = async (req, res) => {
  let id = req.query.id;

  if (!id) {
    return res.status(500).json({
      errCode: 1,
      message: "Missing required params",
      majors: [],
    });
  }

  const payments = await paymentService.getAllPayments(id);
  return res.status(200).json({
    errCode: 0,
    message: "Get payments successfully!",
    payments,
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

  const majors = await paymentService.deleteMajor(id);
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
  const majorData = await paymentService.updateMajor(majorId, bodyData);
  return res.status(200).json({
    errCode: 0,
    message: "Update major successfully!",
    majors: majorData,
  });
};

module.exports = {
  handleAddPayment,
  getPayments,
  deleteMajorById,
  updateMajorById,
};
