"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class StudentPoint extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  StudentPoint.init(
    {
      studentId: DataTypes.STRING,
      pointId: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "StudentPoint",
    }
  );
  return StudentPoint;
};
