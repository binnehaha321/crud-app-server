"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Major extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Major.init(
    {
      majorId: DataTypes.STRING,
      majorName_EN: DataTypes.STRING,
      majorName_VI: DataTypes.STRING,
      description: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Major",
    }
  );
  Major.removeAttribute("id");
  return Major;
};
