const sequelize = require("sequelize");

const Corrida = (sequelize, dataTypes) => {
  const model = sequelize.define(
    'Corrida',
    {
      id: {
        primaryKey: true,
        autoIncrement: true,
        type: dataTypes.INTEGER,
      },
      origem: {
        type: dataTypes.STRING(300),
        allowNull: false,
      },
      destino: {
        type: dataTypes.STRING(300),
        allowNull: false,
      },
      idUsuario: {
        type: dataTypes.INTEGER, 
        references: { 
          model: 'clientes', 
          key: 'id' 
        }, 
        allowNull: false 
      },
      idMotorista: {
        type: dataTypes.INTEGER, 
        references: { 
          model: 'motoristas', 
          key: 'id' 
        }, 
        allowNull: false 
      },
      createdAt: {
        allowNull: false,
        type: dataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: dataTypes.DATE,
      },
    }
  )

  return model;
}

module.exports = Corrida;