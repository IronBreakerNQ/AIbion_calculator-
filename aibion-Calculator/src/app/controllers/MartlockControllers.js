const InputDataMartlock = require('../moduls/InputDataMartlock');

const {mutipleMongooseToObject} = require('../../util/mongoose');

const MFarm = require('../models/Martlock/MFarm');
const MCraft = require('../models/Martlock/MCraft');

const MTRefine = require('../models/Material/MTRefine');
const MTRaw = require('../models/Material/MTRaw');


class BridgewatchControllers{
    //[Get] /Martlock/get
    GetData = async (req, res, next) => {
        try {
            //farming
            const [T3_WHEAT, T6_POTATO, T6_FOXGLOVE, T8_MILK ] = await Promise.all([
                InputDataMartlock.T3_WHEAT(),
                InputDataMartlock.T6_POTATO(),
                InputDataMartlock.T6_FOXGLOVE(),
                InputDataMartlock.T8_MILK(),
                
            ]);

            
            const dataFarm= {
                T3_WHEAT,
                T6_POTATO,
                T6_FOXGLOVE,
                T8_MILK,
            };
            
            await MFarm.deleteMany({});
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
                return await MFarm.create(item);
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
                InputDataMartlock.T5_MAIN_AXE(),
                InputDataMartlock.T5_MAIN_AXE1(),
                InputDataMartlock.T6_MAIN_AXE(),

                InputDataMartlock.T5_2H_AXE(),
                InputDataMartlock.T5_2H_AXE1(),
                InputDataMartlock.T6_2H_AXE(),

                InputDataMartlock.T5_2H_HALBERD(),
                InputDataMartlock.T5_2H_HALBERD1(),
                InputDataMartlock.T6_2H_HALBERD(),

                InputDataMartlock.T5_2H_QUARTERSTAFF(),
                InputDataMartlock.T5_2H_QUARTERSTAFF1(),
                InputDataMartlock.T6_2H_QUARTERSTAFF(),

                InputDataMartlock.T5_2H_IRONCLADEDSTAFF(),
                InputDataMartlock.T5_2H_IRONCLADEDSTAFF1(),
                InputDataMartlock.T6_2H_IRONCLADEDSTAFF(),

                InputDataMartlock.T5_2H_DOUBLEBLADEDSTAFF(),
                InputDataMartlock.T5_2H_DOUBLEBLADEDSTAFF1(),
                InputDataMartlock.T6_2H_DOUBLEBLADEDSTAFF(),

                InputDataMartlock.T5_2H_GLACIALSTAFF(),
                InputDataMartlock.T5_2H_GLACIALSTAFF1(),
                InputDataMartlock.T6_2H_GLACIALSTAFF(),

                InputDataMartlock.T5_2H_FROSTSTAFF(),
                InputDataMartlock.T5_2H_FROSTSTAFF1(),
                InputDataMartlock.T6_2H_FROSTSTAFF(),
                
                InputDataMartlock.T5_MAIN_FROSTSTAFF(),
                InputDataMartlock.T5_MAIN_FROSTSTAFF1(),
                InputDataMartlock.T6_MAIN_FROSTSTAFF(),
                
                InputDataMartlock.T5_SHOES_PLATE_SET1(),
                InputDataMartlock.T5_SHOES_PLATE_SET11(),
                InputDataMartlock.T6_SHOES_PLATE_SET1(),

                InputDataMartlock.T5_SHOES_PLATE_SET2(),
                InputDataMartlock.T5_SHOES_PLATE_SET21(),
                InputDataMartlock.T6_SHOES_PLATE_SET2(),

                InputDataMartlock.T5_SHOES_PLATE_SET3(),
                InputDataMartlock.T5_SHOES_PLATE_SET31(),
                InputDataMartlock.T6_SHOES_PLATE_SET3(),

                InputDataMartlock.T5_OFF_TORCH(),
                InputDataMartlock.T5_OFF_TORCH1(),
                InputDataMartlock.T6_OFF_TORCH(),

                InputDataMartlock.T5_OFF_BOOK(),
                InputDataMartlock.T5_OFF_BOOK1(),
                InputDataMartlock.T6_OFF_BOOK(),

                InputDataMartlock.T5_OFF_SHIELD(),
                InputDataMartlock.T5_OFF_SHIELD1(),
                InputDataMartlock.T6_OFF_SHIELD(),
                
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

            await MCraft.deleteMany({});
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
                return await MCraft.create(item);
            }));


            res.json({dataFarmDb,dataRcraftdb});


        } catch (error) {
            next(error); // Properly handle errors
        }
    }

    //[GET] /Martlock/MFarm
    MFarm = async (req, res, next) => {
        try {
            // Lấy dữ liệu từ cả hai cơ sở dữ liệu
            const dataFarm = await MFarm.find();
            // Chuyển đổi dữ liệu Mongoose thành đối tượng JavaScript thuần
            const transformedDataFarm = mutipleMongooseToObject(dataFarm);

            // Gửi dữ liệu vào view
            res.render("MartlockFarm", {
                farms: transformedDataFarm,
            });
        } catch (error) {
            next(error); // Properly handle errors
        }
    }

     //[GET] /Martlock/MRefine
    MRefine = async (req, res, next) => {
        try {
            // Lấy dữ liệu từ cả hai cơ sở dữ liệu
            const dataRaw = await MTRaw.find({name : /ROCK/});
            const dataRefime = await MTRefine.find({ name: /STONEBLOC/ });

            // Chuyển đổi dữ liệu Mongoose thành đối tượng JavaScript thuần
            const transformedDataRaw = mutipleMongooseToObject(dataRaw);
            const transformedDataRefime= mutipleMongooseToObject(dataRefime);
            // Gửi dữ liệu vào view
            res.render("MartlockRefine", {
                raws: transformedDataRaw,
                refine: transformedDataRefime,
            });
        } catch (error) {
            next(error); // Properly handle errors
        }
    }

    //[GET] /Martlock/MCraft
    MCraft = async (req,res,next) => {
        try {
            // Lấy dữ liệu từ cả hai cơ sở dữ liệu
            const dataCraft = await MCraft.find();
            // Chuyển đổi dữ liệu Mongoose thành đối tượng JavaScript thuần
            const transformedDataCraft= mutipleMongooseToObject(dataCraft);
            // Gửi dữ liệu vào view
            res.render("MartlockCraft", {
                craft: transformedDataCraft,
            });
        } catch (error) {
            next(error); // Properly handle errors
        }
    }


}

module.exports = new BridgewatchControllers;