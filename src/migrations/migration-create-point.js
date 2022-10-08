"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("points", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      pointId: {
        type: Sequelize.STRING,
      },
      pointByLetter: {
        type: Sequelize.CHAR,
      },
      pointByNumber: {
        type: Sequelize.TEXT("tiny"),
      },
      description: {
        type: Sequelize.TEXT,
      },
      classroomId: {
        type: Sequelize.STRING,
      },
      teacherId: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("points");
  },
};
