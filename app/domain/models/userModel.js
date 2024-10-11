const { DataTypes } = require('sequelize');
const sequelize = require('../../application/config/sequelize');

const User = sequelize.define('User', {
    userid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    username: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: {
            len: [8, 50],
            is: /^[A-Za-z\d]+$/i,
        },
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        },
    },
    password: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
            len: [8, 30],
            is: /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]+$/i,
        },
    },
    rol_rolid: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    usercreate: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    createdate: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    dateapproval: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    userstatus_statusid: {
        type: DataTypes.STRING(3),
        allowNull: false,
    },
    active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    }
}, {
    freezeTableName: true,
    tableName: 'user',
    timestamps: false,
});

module.exports = User;
