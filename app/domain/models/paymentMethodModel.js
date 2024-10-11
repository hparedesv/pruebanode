const { DataTypes } = require('sequelize');
const sequelize = require('../../application/config/sequelize');

const PaymentMethod = sequelize.define('PaymentMethod', {
    methodpaymentid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    description: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
}, {
    tableName: 'methodpayment',
    timestamps: false,
});

module.exports = PaymentMethod;
