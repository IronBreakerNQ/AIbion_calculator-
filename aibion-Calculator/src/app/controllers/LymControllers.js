const InputDataLym = require('../moduls/InputDataLym');

const {mutipleMongooseToObject} = require('../../util/mongoose');

const LFarm = require('../models/Lym/LFarm');
const LCraft = require('../models/Lym/LCraft');

const MTRefine = require('../models/Material/MTRefine');
const MTRaw = require('../models/Material/MTRaw');


class LymControllers{
     //[Get] /Lym/get
     GetData = async (req, res, next) => {
        try {
            //farming
            const [T1_CARROT, T4_BURDOCK, T5_EGG, T8_PUMPKI ] = await Promise.all([
                InputDataLym.T1_CARROT(),
                InputDataLym.T4_BURDOCK(),
                InputDataLym.T5_EGG(),
                InputDataLym.T8_PUMPKI(),
                
            ]);

            
            const dataFarm= {
                T1_CARROT,
                T4_BURDOCK,
                T5_EGG,
                T8_PUMPKI,
            };
            
            await LFarm.deleteMany({});
            const dataFarmDb= await Promise.all(Object.values(dataFarm).map(async (item) => {
                // Chuyển đổi giá trị giá từ chuỗi thành số
                if (item.sellOrder && item.sellOrder.price) {
                    item.sellOrder.price = parseFloat(item.sellOrder.price.replace(/,/g, '')) || 0;
                }
                if (item.buyOrder && item.buyOrder.price) {
                    item.buyOrder.price = parseFloat(item.buyOrder.price.replace(/,/g, '')) || 0;
                }

                // Tính toán giá trung bình
                if (item.sellOrder) {
                    item.sellOrder.fiveAvg = item.sellOrder.price * 0.95;
                    item.sellOrder.tenAvg = item.sellOrder.price * 0.90;
                }
                if (item.buyOrder) {
                    item.buyOrder.fiveAvg = item.buyOrder.price * 0.95;
                    item.buyOrder.tenAvg = item.buyOrder.price * 0.90;
                }

                // Tạo bản ghi mới
                return await LFarm.create(item);
            }));

            //crafting

            const [
                item1, item2, item3, 
                item4, item5, item6, 
                item7, item8, item9, 
     
                item10, item11, item12, 
                item13, item14, item15, 
                item16, item17, item18, 

                item19, item20, item21, 
                item22, item23, item24, 
                item25, item26, item27, 

                item28, item29, item30, 
                item31, item32, item33, 
                item34, item35, item36, 

                item37, item38, item39, 
                item40, item41, item42, 
                item43, item44, item45, 
            
            ] = await Promise.all([
                InputDataLym.T5_2H_CLAYMORE(),
                InputDataLym.T5_2H_CLAYMORE1(),
                InputDataLym.T6_2H_CLAYMORE(),

                InputDataLym.T5_MAIN_SWORD(),
                InputDataLym.T5_MAIN_SWORD1(),
                InputDataLym.T6_MAIN_SWORD(),

                InputDataLym.T5_2H_DUALSWORD(),
                InputDataLym.T5_2H_DUALSWORD1(),
                InputDataLym.T6_2H_DUALSWORD(),

                InputDataLym.T5_2H_BOW(),
                InputDataLym.T5_2H_BOW1(),
                InputDataLym.T6_2H_BOW(),

                InputDataLym.T5_2H_WARBOW(),
                InputDataLym.T5_2H_WARBOW1(),
                InputDataLym.T6_2H_WARBOW(),

                InputDataLym.T5_2H_LONGBOW(),
                InputDataLym.T5_2H_LONGBOW1(),
                InputDataLym.T6_2H_LONGBOW(),

                InputDataLym.T5_2H_ARCANESTAFF(),
                InputDataLym.T5_2H_ARCANESTAFF1(),
                InputDataLym.T6_2H_ARCANESTAFF(),
                
                InputDataLym.T5_2H_ENIGMATICSTAFF(),
                InputDataLym.T5_2H_ENIGMATICSTAFF1(),
                InputDataLym.T6_2H_ENIGMATICSTAFF(),
                
                InputDataLym.T5_MAIN_ARCANESTAFF(),
                InputDataLym.T5_MAIN_ARCANESTAFF1(),
                InputDataLym.T6_MAIN_ARCANESTAFF(),

                InputDataLym.T5_HEAD_LEATHER_SET1(),
                InputDataLym.T5_HEAD_LEATHER_SET11(),
                InputDataLym.T6_HEAD_LEATHER_SET1(),

                InputDataLym.T5_HEAD_LEATHER_SET3(),
                InputDataLym.T5_HEAD_LEATHER_SET31(),
                InputDataLym.T6_HEAD_LEATHER_SET3(),

                InputDataLym.T5_HEAD_LEATHER_SET2(),
                InputDataLym.T5_HEAD_LEATHER_SET21(),
                InputDataLym.T6_HEAD_LEATHER_SET2(),

                InputDataLym.T5_SHOES_LEATHER_SET1(),
                InputDataLym.T5_SHOES_LEATHER_SET11(),
                InputDataLym.T6_SHOES_LEATHER_SET1(),

                InputDataLym.T5_SHOES_LEATHER_SET2(),
                InputDataLym.T5_SHOES_LEATHER_SET21(),
                InputDataLym.T6_SHOES_LEATHER_SET2(),

                InputDataLym.T5_SHOES_LEATHER_SET3(),
                InputDataLym.T5_SHOES_LEATHER_SET31(),
                InputDataLym.T6_SHOES_LEATHER_SET3(),
                
            ]);

            const dataCraft= {
                item1, item2, item3, 
                item4, item5, item6, 
                item7, item8, item9, 
     
                item10, item11, item12, 
                item13, item14, item15, 
                item16, item17, item18, 

                item19, item20, item21, 
                item22, item23, item24, 
                item25, item26, item27, 

                item28, item29, item30, 
                item31, item32, item33, 
                item34, item35, item36, 

                item37, item38, item39, 
                item40, item41, item42, 
                item43, item44, item45, 
            
            };

            await LCraft.deleteMany({});
            const dataRcraftdb = await Promise.all(Object.values(dataCraft).map(async (item) => {
                // Chuyển đổi giá trị giá từ chuỗi thành số
                if (item.sellOrder && item.sellOrder.price) {
                    item.sellOrder.price = parseFloat(item.sellOrder.price.replace(/,/g, '')) || 0;
                }
                if (item.buyOrder && item.buyOrder.price) {
                    item.buyOrder.price = parseFloat(item.buyOrder.price.replace(/,/g, '')) || 0;
                }

                // Tính toán giá trung bình
                if (item.sellOrder) {
                    item.sellOrder.fiveAvg = item.sellOrder.price * 0.95;
                    item.sellOrder.tenAvg = item.sellOrder.price * 0.90;
                }
                if (item.buyOrder) {
                    item.buyOrder.fiveAvg = item.buyOrder.price * 0.95;
                    item.buyOrder.tenAvg = item.buyOrder.price * 0.90;
                }
                // Tạo bản ghi mới
                return await LCraft.create(item);
            }));
            
            res.json({dataFarmDb,dataRcraftdb});


        } catch (error) {
            next(error); // Properly handle errors
        }
    }

    //[GET] /Lym/LFarm
    LFarm = async (req, res, next) => {
        try {
            // Lấy dữ liệu từ cả hai cơ sở dữ liệu
            const dataFarm = await LFarm.find();
            // Chuyển đổi dữ liệu Mongoose thành đối tượng JavaScript thuần
            const transformedDataFarm = mutipleMongooseToObject(dataFarm);

            // Gửi dữ liệu vào view
            res.render("LymFarm", {
                farms: transformedDataFarm,
            });
        } catch (error) {
            next(error); // Properly handle errors
        }
    }

    //[GET] /Lym/LRefine
    LRefine = async (req, res, next) => {
        try {
            // Lấy dữ liệu từ cả hai cơ sở dữ liệu
            const dataRaw = await MTRaw.find({name : /WOOD/});
            const dataRefime = await MTRefine.find({ name: /CLOTH/ });

            // Chuyển đổi dữ liệu Mongoose thành đối tượng JavaScript thuần
            const transformedDataRaw = mutipleMongooseToObject(dataRaw);
            const transformedDataRefime= mutipleMongooseToObject(dataRefime);
            // Gửi dữ liệu vào view
            res.render("LymRefine", {
                raws: transformedDataRaw,
                refine: transformedDataRefime,
            });
        } catch (error) {
            next(error); // Properly handle errors
        }
    }

    //[GET] /Lym/Craft
    LCraft = async (req,res,next) => {
        try {
            // Lấy dữ liệu từ cả hai cơ sở dữ liệu
            const dataCraft = await LCraft.find();
            // Chuyển đổi dữ liệu Mongoose thành đối tượng JavaScript thuần
            const transformedDataCraft= mutipleMongooseToObject(dataCraft);
            // Gửi dữ liệu vào view
            res.render("LymCraft", {
                craft: transformedDataCraft,
            });
        } catch (error) {
            next(error); // Properly handle errors
        }
    }

}

module.exports = new LymControllers;