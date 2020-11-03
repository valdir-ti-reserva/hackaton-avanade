'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("motoristas", {
      id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: true,
      },
      idCarro: {
        type: Sequelize.INTEGER,
        references: {
          model: 'carros',
          key: 'id'
        },
        allowNull: false
      },
      name: {
        type: Sequelize.STRING(250),
        allowNull: false,
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING(150),
        unique: true,
      },
      telefone: {
        allowNull: false,
        type: Sequelize.STRING(150),
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
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
