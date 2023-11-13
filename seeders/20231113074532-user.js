'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Users",[
      {
        name: "nando",
        email: "nando@gmail.com",
        username:"nan",
        password:"123"
      },
      {
        name: "zai",
        email: "zai@gmail.com",
        username:"nz",
        password:"1222"
      },
      {
        name: "adit",
        email: "addit@gmail.com",
        username:"a",
        password:"134"
      }
    ])
  },

  async down (queryInterface, Sequelize) {
   return queryInterface.bulkDelete('Users', null, {})
  }
};
