'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Todo_list extends Model {
    static associate(models) {
      Todo_list.belongsTo(models.User, { foreignKey: 'user_id' });
    }
  }

  Todo_list.init({
    title: DataTypes.STRING,
    user_id: {
      type: DataTypes.INTEGER, // Perbaiki tipe data menjadi INTEGER
      references: {
        model: 'User',
        key: 'id',
      }
    },
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Todo_list',
  });

  return Todo_list;
};
