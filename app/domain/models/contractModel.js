const { DataTypes } = require('sequelize');
const sequelize = require('../../application/config/sequelize');

const Contract = sequelize.define('Contract', {
    contractid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    startdate: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
            isDate: true,
            notEmpty: true,
        },
    },
    enddate: {
        type: DataTypes.DATE,
        allowNull: true,
        validate: {
            isDate: true,
        },
    },
    service_serviceid: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    statuscontract_statusid: {
        type: DataTypes.STRING(3),
        allowNull: false,
    },
    client_clientid: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    methodpayment_methodpaymentid: {
        type: DataTypes.INTEGER,
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

module.exports = Contract;
