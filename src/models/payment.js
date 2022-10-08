"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Payment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Payment.init(
    {
      paymentId: DataTypes.STRING,
      paymentSchedule: DataTypes.STRING,
      billNumber: DataTypes.INTEGER,
      amountPaid: DataTypes.INTEGER,
      balanceAmount: DataTypes.INTEGER,
      paymentDate: DataTypes.DATE,
      studentId: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Payment",
    }
  );
  return Payment;
};
