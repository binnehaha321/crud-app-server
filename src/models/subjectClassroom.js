"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class SubjectClassroom extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SubjectClassroom.init(
    {
      subjectId: DataTypes.STRING,
      classroomId: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "SubjectClassroom",
    }
  );
  return SubjectClassroom;
};
