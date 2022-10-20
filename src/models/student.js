"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Students extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Students.init(
    {
      studentId: DataTypes.STRING,
      email: DataTypes.STRING,
      fullName: DataTypes.STRING,
      gender: DataTypes.STRING,
      avatar: DataTypes.STRING,
      phoneNumber: DataTypes.STRING,
      address: DataTypes.STRING,
      enrollNumber: DataTypes.INTEGER,
      dateOfAdmission: DataTypes.DATE,
      balanceAmount: DataTypes.INTEGER,
      majorId: DataTypes.STRING,
      classId: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Students",
    }
  );
  Students.removeAttribute("id");
  return Students;
};
