'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class surat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  surat.init({
    id_user: DataTypes.INTEGER,
    no_surat: DataTypes.STRING,
    asal_surat: DataTypes.STRING,
    tgl_surat: DataTypes.DATE,
    isi: DataTypes.TEXT,
    status: DataTypes.STRING,
    tipe: DataTypes.STRING, // surat cuti, surat masuk, surat keluar
    jenis: DataTypes.STRING, // internal, external
    tujuan: DataTypes.STRING,
    waktu_pengiriman: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'surat',
  });
  return surat;
};