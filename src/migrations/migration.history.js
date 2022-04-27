'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('history', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            patientID: {
                type: Sequelize.STRING
            },
            doctorID: {
                type: Sequelize.STRING
            },
            description: {
                type: Sequelize.TEXT
            },
            timeID: {
                type: Sequelize.STRING
            },
            doctorID: {
                type: Sequelize.STRING
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('history');
    }
};