"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class StudentSubject extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  StudentSubject.init(
    {
      studentId: DataTypes.STRING,
      subjectId: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "StudentSubject",
    }
  );
  return StudentSubject;
};
