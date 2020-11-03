const sequelize = require("sequelize");

const Cliente = (sequelize, dataTypes) => {
    const model = sequelize.define('Cliente', {
        id: {
            primaryKey: true,
            type: dataTypes.INTEGER,
            autoIncrement: true,
          },
          name: {
            type:dataTypes.STRING(250),
            allowNull: false
          },
          email: {
            allowNull: false,
            type: dataTypes.STRING(150),
            unique: true,
          },
          telefone:{
            allowNull: false,
            type: dataTypes.STRING(150),
          },
          createdAt: {
            allowNull: false,
            type: dataTypes.DATE,
          },
          updatedAt: {
            allowNull: false,
            type: dataTypes.DATE,
          },
    })
    return model
}

module.exports = Cliente;