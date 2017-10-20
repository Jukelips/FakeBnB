var mongoose = require('mongoose');

var HousingSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true,
        required: true,
    },
    address: {
        type: String,
        unique: true,
        required: true,
    },
    zipCode: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    numberRoom: {
        type: Number,
        required: true,
    },
    numberBathRoom: {
        type: Number,
        required: false,
    },
    numberTraveler: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    start: {
        type: Date,
        required: true,
    },
    end: {
        type: Date,
        required: true,
    },
    description :{
        type : String,
        required : false,
    }
});



var Housing = mongoose.model('Housing', HousingSchema);
module.exports = Housing;