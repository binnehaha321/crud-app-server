'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Users", [
      {
        userId: 1,
        email: "nhuhoang@gmail.com",
        fullName: "Hoang Nhu",
        gender: 1,
        avatar: "",
        phoneNumber: "0902340111",
        roleId: 2,
        username: "nhuhoang",
        password: "123456",
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
