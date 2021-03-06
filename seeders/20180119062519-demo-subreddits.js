'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('subreddits', [{
        name: 'Funny',
        subscribers: 900000,
        createdAt: '2018-01-19 05:54:32',
        updatedAt: '2018-01-19 05:54:32'
      },
      {
        name: 'facts',
        subscribers: 8000,
        createdAt: '2018-01-19 05:54:32',
        updatedAt: '2018-01-19 05:54:32'
      },
      {
        name: 'funFacts',
        subscribers: 20,
        createdAt: '2018-01-19 05:54:32',
        updatedAt: '2018-01-19 05:54:32'
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
