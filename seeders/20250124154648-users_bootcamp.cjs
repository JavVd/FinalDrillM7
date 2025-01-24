'use strict';

const userBootcampsData = require('./userBootcampData.json');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('UserBootcamps', userBootcampsData, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('UserBootcamps', null, {});
  }
};
