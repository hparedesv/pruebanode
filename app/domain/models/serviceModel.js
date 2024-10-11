const { DataTypes } = require('sequelize');
const sequelize = require('../../application/config/sequelize');

const Service = sequelize.define('Service', {
    serviceid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    servicename: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    servicedescription: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    speed: {
        type: DataTypes.INTEGER,
        allowNull: true, // Velocidad del servicio en Mbps
    },
    price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
}, {
    tableName: 'service',
    timestamps: false,
});

module.exports = Service;
