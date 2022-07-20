'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('surats', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_user: {
        type: Sequelize.INTEGER
      },
      no_surat: {
        type: Sequelize.STRING
      },
      asal_surat: {
        type: Sequelize.STRING
      },
      tgl_surat: {
        type: Sequelize.DATE
      },
      isi: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('surats');
  }
};