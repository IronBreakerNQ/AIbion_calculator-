const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MFarmSchema = new Schema({
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

const MFarm = mongoose.model('MFarm', MFarmSchema);

module.exports =MFarm;
