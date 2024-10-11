const { DataTypes } = require('sequelize');
const sequelize = require('../../application/config/sequelize');

const Turn = sequelize.define('Turn', {
    turnid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    description: {
        type: DataTypes.STRING(6),
        allowNull: false,
        validate: {
            is: /^[A-Z]{2}\d{4}$/,
        },
    },
    cash_cashid: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    usergestorid: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    },
}, {
    timestamps: false,
    tableName: 'turn',
});

module.exports = Turn;
