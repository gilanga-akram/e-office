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
    isi: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'surat',
  });
  return surat;
};