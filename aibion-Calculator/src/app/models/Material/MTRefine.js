const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MTRefineSchema = new Schema({
    name: { type: String},
    material1: {type: String},
    material2: {type: String},

    quantity1:{type: Number},
    quantity2:{type: Number},
    
    Principal:{type: Number},
    
    sellOrder:{
            city: { type: String },
            price: { type: String },
            fiveAvg:{type:Number},
            tenAvg:{type:Number},
            lastUpdate: {type: String},
    },
    buyOrder: {
            city: { type: String },
            price: { type: String },
            fiveAvg:{type:Number},
            tenAvg:{type:Number},
            lastUpdate: {type: String},
    }
});

const MTRefine = mongoose.model('MTRefine', MTRefineSchema);

module.exports =MTRefine;
