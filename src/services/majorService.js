import db from "../models/index";

const handleAddNewMajor = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      await db.Major.create({
        majorId: data.majorId,
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

const getAllMajors = async (majorId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let majors = "";
      if (majorId === "ALL") {
        majors = await db.Major.findAll();
      } else if (majorId && majorId !== "ALL") {
        majors = await db.Major.findOne({
          where: { id: majorId },
        });
      }
      resolve(majors);
    } catch (error) {
      reject(error);
    }
  });
};

const deleteMajor = async (majorId) => {
  return new Promise(async (resolve, reject) => {
    try {
      await db.Major.destroy({ where: { id: majorId } });
      let majorList = await getAllMajors("ALL");
      resolve(majorList);
    } catch (error) {
      reject(error);
    }
  });
};

const updateMajor = (majorId, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      await db.Major.update(data, { where: { id: majorId } });
      let majorList = await getAllMajors("ALL");
      resolve(majorList);
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  handleAddNewMajor,
  getAllMajors,
  deleteMajor,
  updateMajor,
};
