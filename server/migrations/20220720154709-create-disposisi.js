'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('disposisis', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_surat: {
        type: Sequelize.INTEGER
      },
      tujuan: {
        type: Sequelize.STRING
      },
      perihal: {
        type: Sequelize.STRING
      },
      catatan: {
        type: Sequelize.STRING
      },
      waktu_catat: {
        type: Sequelize.DATE
      },
      waktu_pengiriman: {
        type: Sequelize.DATE
      },
      id_user: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('disposisis');
  }
};