'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('booking', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            statusID: {
                type: Sequelize.STRING
            },
            doctorID: {
                type: Sequelize.STRING
            },
            patientID: {
                type: Sequelize.STRING
            },
            date: {
                type: Sequelize.DATE
            },
            timeID: {
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
        await queryInterface.dropTable('booking');
    }
};