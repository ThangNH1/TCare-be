'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('doc_cli_spe', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            doctorID: {
                type: Sequelize.STRING
            },
            clinicID: {
                type: Sequelize.STRING
            },
            specialist: {
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
        await queryInterface.dropTable('doc_cli_spe');
    }
};