'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Booking extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Booking.init({
        statusID: DataTypes.STRING,
        doctorID: DataTypes.STRING,
        patientID: DataTypes.STRING,
        date: DataTypes.DATE,
        timeID: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'Booking',
    });
    return Booking;
};