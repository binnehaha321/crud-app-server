"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Subjects extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Subjects.init(
    {
      subjectId: DataTypes.STRING,
      subjectName_EN: DataTypes.STRING,
      subjectName_VI: DataTypes.STRING,
      description: DataTypes.TEXT,
      classroomId: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Subjects",
    }
  );
  return Subjects;
};
