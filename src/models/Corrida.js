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
  
  model.associate = (models) => { 
    model.belongsTo(models.Cliente, {
      foreignKey:'idUsuario', 
      as:'cliente'
    }); 
      
    model.belongsTo(models.Motorista, {
      foreignKey:'idMotorista',
      as: 'motorista'
    });
  } 

  return model;
}

module.exports = Corrida;