"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Point extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Point.init(
    {
      pointId: DataTypes.STRING,
      pointByLetter: DataTypes.CHAR,
      pointByNumber: DataTypes.TEXT("tiny"),
      description: DataTypes.TEXT,
      classroomId: DataTypes.STRING,
      teacherId: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Point",
    }
  );
  return Point;
};