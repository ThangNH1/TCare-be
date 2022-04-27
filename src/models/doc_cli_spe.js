'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Doc_cli_spe extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Doc_cli_spe.init({
        doctorID: DataTypes.STRING,
        clinicID: DataTypes.STRING,
        specialistID: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'Doc_cli_spe',
    });
    return Doc_cli_spe;
};