'use strict';

const bootcampData = require('./bootcampData.json')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Bootcamps', bootcampData, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', null, {});

  }
};
