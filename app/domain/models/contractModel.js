const { DataTypes } = require('sequelize');
const sequelize = require('../../application/config/sequelize');
const Client = require('./clientModel');
const Service = require('./serviceModel');
const PaymentMethod = require('./paymentMethodModel');

const Contract = sequelize.define('Contract', {
    contractid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    startdate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    enddate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    statuscontract_statusid: {
        type: DataTypes.STRING(3),
        allowNull: false,
    },
    active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    },
}, {
    tableName: 'contract',
    timestamps: false,
});

Contract.belongsTo(Client, { foreignKey: 'client_clientid', as: 'client' });
Contract.belongsTo(Service, { foreignKey: 'service_serviceid', as: 'service' });
Contract.belongsTo(PaymentMethod, { foreignKey: 'methodpayment_methodpaymentid', as: 'paymentMethod' });

module.exports = Contract;
