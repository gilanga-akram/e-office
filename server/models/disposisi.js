'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class disposisi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  disposisi.init({
    id_surat: DataTypes.INTEGER,
    tujuan: DataTypes.STRING,
    perihal: DataTypes.STRING,
    catatan: DataTypes.STRING,
    waktu_catat: DataTypes.DATE,
    waktu_pengiriman: DataTypes.DATE,
    id_user: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'disposisi',
  });
  return disposisi;
};