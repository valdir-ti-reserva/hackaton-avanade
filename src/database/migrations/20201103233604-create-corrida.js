'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {   
    await queryInterface.createTable('corridas', { 
      id: {
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER,
      },
      origem: {
        type: Sequelize.STRING(300),
        allowNull: false,
      },
      destino: {
        type: Sequelize.STRING(300),
        allowNull: false,
      },
      idUsuario: {
        type: Sequelize.INTEGER, 
        references: { 
          model: 'clientes', 
          key: 'id' 
        }, 
        allowNull: false 
      },
      idMotorista: {
        type: Sequelize.INTEGER, 
        references: { 
          model: 'motoristas', 
          key: 'id' 
        }, 
        allowNull: false 
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('corridas');    
  }
};
