const sequelize = require("sequelize");

const Carro = (sequelize, dataTypes) => {
    const model = sequelize.define('Carro', {
        id: {
            primaryKey: true,
            type: dataTypes.INTEGER,
            autoIncrement: true,
          },
          placa: {
            type:dataTypes.STRING(100),
            allowNull: false
          },
          modelo: {
            allowNull: false,
            type: dataTypes.STRING(100),
            unique: true,
          },
    })
    return model
}

module.exports = Carro;