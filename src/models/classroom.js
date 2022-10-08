"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Classroom extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Classroom.init(
    {
      classroomId: DataTypes.STRING,
      status: DataTypes.CHAR,
    },
    {
      sequelize,
      modelName: "Classroom",
    }
  );
  return Classroom;
};