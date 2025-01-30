const { Model, DataTypes, Sequelize} = require('sequelize');
const { toDefaultValue } = require('sequelize/lib/utils');
const { USER_TABLE } = require('./user.model');

const CUSTOMER_TABLE = 'customers';

const CustomerSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },

  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },

  lastName: {
    allowNull: false,
    field: 'last_name',
    type: DataTypes.STRING,
  },

  address: {
    allowNull: false,
    type: DataTypes.STRING,
  },

  phone: {
    allowNull: false,
    type: DataTypes.STRING,
  },

  createdAt: {
    allowNull: false,
    field: 'create_at',
    type: DataTypes.DATE,
    DefaultValue: Sequelize.NOW
  },

  userId: {
    allowNull: false,
    field: 'user_id',
    type: DataTypes.INTEGER,
    unique: true,
    references: {
      model: USER_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  }
}

class Customer extends Model {
  static associate(models) {
    this.belongsTo(models.User, {as: 'user'});
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: CUSTOMER_TABLE,
      modelName: 'Customer',
      timestamp: false
    }
  }
}

module.exports = { CUSTOMER_TABLE, CustomerSchema, Customer };

