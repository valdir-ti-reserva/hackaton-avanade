'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Motoristas", [
      {
        name: "John Doe",
        email: "example@example.com",
        telefone: "11912341234",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Josef Climber",
        email: "josef@example.com",
        telefone: "11912341234",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Elisabeth Maya",
        email: "elisa@example.com",
        telefone: "11912341234",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Motoristas", null, {});
  },
};
