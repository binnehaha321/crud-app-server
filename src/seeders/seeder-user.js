'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Users", [
      {
        userId: 1,
        email: "admin@admin",
        fullName: "Khanh Truong",
        gender: 1,
        avatar: "",
        address: "65 duong so 5",
        phoneNumber: "0902340111",
        roleId: 0,
        username: "khanhtq",
        password: "12345678",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
