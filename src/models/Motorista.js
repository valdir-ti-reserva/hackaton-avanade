const sequelize = require("sequelize");

const Motorista = (sequelize, dataTypes) => {
  const model = sequelize.define("Motorista", {
    id: {
      primaryKey: true,
      type: dataTypes.INTEGER,
      autoIncrement: true,
    },
    idCarro: {
      primaryKey: true,
      type: dataTypes.INTEGER,
    },
    name: {
      type: dataTypes.STRING(250),
      allowNull: false,
    },
    email: {
      allowNull: false,
      type: dataTypes.STRING(150),
      unique: true,
    },
    telefone: {
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

  model.associate = (models) => {
    model.belongsTo(models.Carro, { foreignKey: "idCarro", as: "carros" });
  };

  return model;
};

module.exports = Motorista;
