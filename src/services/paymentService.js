import db from "../models/index";

const handleAddNewMajor = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      await db.Major.create({
        paymentId: data.paymentId,
        majorName_EN: data.majorName_EN,
        majorName_VI: data.majorName_VI,
        description: data.description,
      });
      resolve({
        errCode: 0,
        message: "Created major successfully!",
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
  handleAddNewMajor,
  getAllPayments,
  deleteMajor,
  updateMajor,
};
