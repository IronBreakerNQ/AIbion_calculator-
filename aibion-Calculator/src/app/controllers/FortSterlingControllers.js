const InputDataFortSterling = require('../moduls/InputDataFortSterling');

const {mutipleMongooseToObject} = require('../../util/mongoose');

const FSFarm = require('../models/FortSterling/FSFarm');
const FSCraft = require('../models/FortSterling/FSCraft');

const MTRefine = require('../models/Material/MTRefine');
const MTRaw = require('../models/Material/MTRaw');


class FortSterlingControllers{

    //[Get] /FortSterling/get
    GetData = async (req, res, next) => {
        try {
            //farming
            const [T3_EGG, T4_TURNIP, T6_MILK, T8_YARROW ] = await Promise.all([
                InputDataFortSterling.T3_EGG(),
                InputDataFortSterling.T4_TURNIP(),
                InputDataFortSterling.T6_MILK(),
                InputDataFortSterling.T8_YARROW(),
                
            ]);

            
            const dataFarm= {
                T3_EGG,
                T4_TURNIP,
                T6_MILK,
                T8_YARROW,
            };
            
            await FSFarm.deleteMany({});
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
                return await FSFarm.create(item);
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
                InputDataFortSterling.T5_2H_HAMMER(),
                InputDataFortSterling.T5_2H_HAMMER1(),
                InputDataFortSterling.T6_2H_HAMMER(),

                InputDataFortSterling.T5_MAIN_HAMMER(),
                InputDataFortSterling.T5_MAIN_HAMMER1(),
                InputDataFortSterling.T6_MAIN_HAMMER(),

                InputDataFortSterling.T5_2H_POLEHAMMER(),
                InputDataFortSterling.T5_2H_POLEHAMMER1(),
                InputDataFortSterling.T6_2H_POLEHAMMER(),

                InputDataFortSterling.T5_MAIN_SPEAR(),
                InputDataFortSterling.T5_MAIN_SPEAR1(),
                InputDataFortSterling.T6_MAIN_SPEAR(),

                InputDataFortSterling.T5_2H_SPEAR(),
                InputDataFortSterling.T5_2H_SPEAR1(),
                InputDataFortSterling.T6_2H_SPEAR(),

                InputDataFortSterling.T5_2H_GLAIVE(),
                InputDataFortSterling.T5_2H_GLAIVE1(),
                InputDataFortSterling.T6_2H_GLAIVE(),

                InputDataFortSterling.T5_MAIN_HOLYSTAFF(),
                InputDataFortSterling.T5_MAIN_HOLYSTAFF1(),
                InputDataFortSterling.T6_MAIN_HOLYSTAFF(),
                
                InputDataFortSterling.T5_2H_DIVINESTAFF(),
                InputDataFortSterling.T5_2H_DIVINESTAFF1(),
                InputDataFortSterling.T6_2H_DIVINESTAFF(),
                
                InputDataFortSterling.T5_2H_HOLYSTAFF(),
                InputDataFortSterling.T5_2H_HOLYSTAFF1(),
                InputDataFortSterling.T6_2H_HOLYSTAFF(),

                InputDataFortSterling.T5_HEAD_PLATE_SET1(),
                InputDataFortSterling.T5_HEAD_PLATE_SET11(),
                InputDataFortSterling.T6_HEAD_PLATE_SET1(),

                InputDataFortSterling.T5_HEAD_PLATE_SET2(),
                InputDataFortSterling.T5_HEAD_PLATE_SET21(),
                InputDataFortSterling.T6_HEAD_PLATE_SET2(),

                InputDataFortSterling.T5_HEAD_PLATE_SET3(),
                InputDataFortSterling.T5_HEAD_PLATE_SET31(),
                InputDataFortSterling.T6_HEAD_PLATE_SET3(),

                InputDataFortSterling.T5_ARMOR_CLOTH_SET1(),
                InputDataFortSterling.T5_ARMOR_CLOTH_SET11(),
                InputDataFortSterling.T6_ARMOR_CLOTH_SET1(),

                InputDataFortSterling.T5_ARMOR_CLOTH_SET2(),
                InputDataFortSterling.T5_ARMOR_CLOTH_SET21(),
                InputDataFortSterling.T6_ARMOR_CLOTH_SET2(),

                InputDataFortSterling.T5_ARMOR_CLOTH_SET3(),
                InputDataFortSterling.T5_ARMOR_CLOTH_SET31(),
                InputDataFortSterling.T6_ARMOR_CLOTH_SET3(),
                
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

            await FSCraft.deleteMany({});
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
                return await FSCraft.create(item);
            }));

            res.json({dataFarmDb});


        } catch (error) {
            next(error); // Properly handle errors
        }
    }

    //[GET] /FortSterling/FSFarm
    LFarm = async (req, res, next) => {
        try {
            // Lấy dữ liệu từ cả hai cơ sở dữ liệu
            const dataFarm = await FSFarm.find();
            // Chuyển đổi dữ liệu Mongoose thành đối tượng JavaScript thuần
            const transformedDataFarm = mutipleMongooseToObject(dataFarm);

            // Gửi dữ liệu vào view
            res.render("FortSterlingFarm", {
                farms: transformedDataFarm,
            });
        } catch (error) {
            next(error); // Properly handle errors
        }
    }

    //[GET] /FortSterling/FSRefine
    LRefine = async (req, res, next) => {
        try {
            // Lấy dữ liệu từ cả hai cơ sở dữ liệu
            const dataRaw = await MTRaw.find({name : /ORE/});
            const dataRefime = await MTRefine.find({ name: /PLANKS/ });

            // Chuyển đổi dữ liệu Mongoose thành đối tượng JavaScript thuần
            const transformedDataRaw = mutipleMongooseToObject(dataRaw);
            const transformedDataRefime= mutipleMongooseToObject(dataRefime);
            // Gửi dữ liệu vào view
            res.render("FortSterlingRefine", {
                raws: transformedDataRaw,
                refine: transformedDataRefime,
            });
        } catch (error) {
            next(error); // Properly handle errors
        }
    }

    //[GET] /FortSterling/FSCraft
    FSraft = async (req,res,next) => {
        try {
            // Lấy dữ liệu từ cả hai cơ sở dữ liệu
            const dataCraft = await FSCraft.find();
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
module.exports = new FortSterlingControllers;