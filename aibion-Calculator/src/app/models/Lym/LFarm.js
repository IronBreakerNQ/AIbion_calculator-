const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LFarmSchema = new Schema({
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

const LFarm = mongoose.model('LFarm', LFarmSchema);

module.exports =LFarm;
