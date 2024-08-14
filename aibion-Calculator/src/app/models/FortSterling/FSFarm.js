const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FSFarmSchema = new Schema({
    name: { type: String},
    sellOrder:{
            city: { type: String },
            price: { type: Number },
            fiveAvg:{type:Number},
            tenAvg:{type:Number},
            lastUpdate: {type: String},
    },
    buyOrder: {
            city: { type: String },
            price: { type: Number },
            fiveAvg:{type:Number},
            tenAvg:{type:Number},
            lastUpdate: {type: String},
    }
});

const FSFarm = mongoose.model('FSFarm', FSFarmSchema);

module.exports =FSFarm;
