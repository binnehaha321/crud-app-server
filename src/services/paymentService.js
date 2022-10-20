import db from "../models/index";

const handleAddNewPayment = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      await db.Payment.create({
        paymentId: data.paymentId,
        paymentSchedule: data.paymentSchedule,
        billNumber: data.billNumber,
        amountPaid: data.amountPaid,
        paymentDate: data.paymentDate,
        studentId: data.studentId,
      });
      resolve({
        errCode: 0,
        message: "Created payment successfully!",
      });
    } catch (error) {
      reject(error);
    }
  });
};

const getAllPayments = async (paymentId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let payments = "";
      if (paymentId === "ALL") {
        payments = await db.Payment.findAll();
      } else if (paymentId && paymentId !== "ALL") {
        payments = await db.Payment.findOne({
          where: { id: paymentId },
        });
      }
      resolve(payments);
    } catch (error) {
      reject(error);
    }
  });
};

const deleteMajor = async (paymentId) => {
  return new Promise(async (resolve, reject) => {
    try {
      await db.Major.destroy({ where: { id: paymentId } });
      let majorList = await getAllPayments("ALL");
      resolve(majorList);
    } catch (error) {
      reject(error);
    }
  });
};

const updateMajor = (paymentId, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      await db.Major.update(data, { where: { id: paymentId } });
      let majorList = await getAllPayments("ALL");
      resolve(majorList);
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  handleAddNewPayment,
  getAllPayments,
  deleteMajor,
  updateMajor,
};
