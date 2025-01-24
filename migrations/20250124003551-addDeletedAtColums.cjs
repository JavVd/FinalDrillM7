'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    // Tabla a afectar || nombre de columna agregada || tipo de dato de la columna
    await queryInterface.addColumn('Users', 'deletedAt', { type: Sequelize.DATE })
    await queryInterface.addColumn('Bootcamps', 'deletedAt', { type: Sequelize.DATE })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn('Users', 'deletedAt');
    await queryInterface.removeColumn('Bootcamps', 'deletedAt');
  }
};
