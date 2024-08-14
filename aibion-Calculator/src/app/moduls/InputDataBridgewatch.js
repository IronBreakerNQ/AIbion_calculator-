const axios = require('axios');

const cheerio = require('cheerio');

//gather raw
const hide_T2 = 'https://albiononlinetools.com/economy/item.php?itemPrice=T2_HIDE&server=east#price_search';
const hide_T3 = 'https://albiononlinetools.com/economy/item.php?itemPrice=T3_HIDE&server=east#price_search';
const hide_T4 = 'https://albiononlinetools.com/economy/item.php?itemPrice=T4_HIDE&server=east#price_search';
const hide_T5 = 'https://albiononlinetools.com/economy/item.php?itemPrice=T5_HIDE&server=east#price_search';
const hide_T6 = 'https://albiononlinetools.com/economy/item.php?itemPrice=T6_HIDE&server=east#price_search';
const hide_T7 = 'https://albiononlinetools.com/economy/item.php?itemPrice=T7_HIDE&server=east#price_search';
const hide_T8 = 'https://albiononlinetools.com/economy/item.php?itemPrice=T8_HIDE&server=east#price_search';
//refine 


// farming
const T2_BEAN = 'https://albiononlinetools.com/economy/item.php?itemPrice=T2_BEAN&server=east';
const T4_MILK = 'https://albiononlinetools.com/economy/item.php?itemPrice=T4_MILK&server=east';
const T5_TEASEL = "https://albiononlinetools.com/economy/item.php?itemPrice=T5_TEASEL&server=east";
const T7_CORN = "https://albiononlinetools.com/economy/item.php?itemPrice=T7_CORN&server=east";
//craft
const T4_MEAT = 'https://albiononlinetools.com/economy/item.php?itemPrice=T4_MEAT&server=east';

const T5_2H_CROSSBOWLARGE = 'https://albiononlinetools.com/economy/item.php?itemPrice=T5_2H_CROSSBOWLARGE&server=east';
const T5_2H_CROSSBOWLARGE1 ='https://albiononlinetools.com/economy/item.php?itemPrice=T5_2H_CROSSBOWLARGE@1&server=east';
const T6_2H_CROSSBOWLARGE = 'https://albiononlinetools.com/economy/item.php?itemPrice=T6_2H_CROSSBOWLARGE&server=east';

const T5_2H_CROSSBOW = 'https://albiononlinetools.com/economy/item.php?itemPrice=T5_2H_CROSSBOW&server=east';
const T5_2H_CROSSBOW1 = 'https://albiononlinetools.com/economy/item.php?itemPrice=T5_2H_CROSSBOW@1&server=east';
const T6_2H_CROSSBOW = 'https://albiononlinetools.com/economy/item.php?itemPrice=T6_2H_CROSSBOW&server=east';

const T5_MAIN_1HCROSSBOW = 'https://albiononlinetools.com/economy/item.php?itemPrice=T5_MAIN_1HCROSSBOW&server=east';
const T5_MAIN_1HCROSSBOW1 = 'https://albiononlinetools.com/economy/item.php?itemPrice=T5_MAIN_1HCROSSBOW@1&server=east';
const T6_MAIN_1HCROSSBOW = 'https://albiononlinetools.com/economy/item.php?itemPrice=T6_MAIN_1HCROSSBOW&server=east';

const T5_MAIN_DAGGER = 'https://albiononlinetools.com/economy/item.php?itemPrice=T5_MAIN_DAGGER&server=east';
const T5_MAIN_DAGGER1 = 'https://albiononlinetools.com/economy/item.php?itemPrice=T5_MAIN_DAGGER@1&server=east';
const T6_MAIN_DAGGER = 'https://albiononlinetools.com/economy/item.php?itemPrice=T6_MAIN_DAGGER&server=east';

const T5_2H_DAGGERPAIR = 'https://albiononlinetools.com/economy/item.php?itemPrice=T5_2H_DAGGERPAIR&server=east';
const T5_2H_DAGGERPAIR1 = 'https://albiononlinetools.com/economy/item.php?itemPrice=T5_2H_DAGGERPAIR@1&server=east';
const T6_2H_DAGGERPAIR = 'https://albiononlinetools.com/economy/item.php?itemPrice=T6_2H_DAGGERPAIR&server=east';

const T5_2H_CLAWPAIR = 'https://albiononlinetools.com/economy/item.php?itemPrice=T5_2H_CLAWPAIR&server=east';
const T5_2H_CLAWPAIR1 = 'https://albiononlinetools.com/economy/item.php?itemPrice=T5_2H_CLAWPAIR1&server=east';
const T6_2H_CLAWPAIR = 'https://albiononlinetools.com/economy/item.php?itemPrice=T6_2H_CLAWPAIR&server=east';


const T5_2H_CURSEDSTAFF = 'https://albiononlinetools.com/economy/item.php?itemPrice=T5_2H_CURSEDSTAFF&server=east';
const T5_2H_CURSEDSTAFF1 = 'https://albiononlinetools.com/economy/item.php?itemPrice=T5_2H_CURSEDSTAFF1&server=east';
const T6_2H_CURSEDSTAFF = 'https://albiononlinetools.com/economy/item.php?itemPrice=T6_2H_CURSEDSTAFF&server=east';

const T5_2H_DEMONICSTAFF = "https://albiononlinetools.com/economy/item.php?itemPrice=T5_2H_DEMONICSTAFF&server=east";
const T5_2H_DEMONICSTAFF1 = "https://albiononlinetools.com/economy/item.php?itemPrice=T5_2H_DEMONICSTAFF&server=east";
const T6_2H_DEMONICSTAFF = "https://albiononlinetools.com/economy/item.php?itemPrice=T6_2H_DEMONICSTAFF&server=east";

const T5_MAIN_CURSEDSTAFF = 'https://albiononlinetools.com/economy/item.php?itemPrice=T5_MAIN_CURSEDSTAFF&server=east';
const T5_MAIN_CURSEDSTAFF1 = 'https://albiononlinetools.com/economy/item.php?itemPrice=T5_MAIN_CURSEDSTAFF1&server=east';
const T6_MAIN_CURSEDSTAFF = 'https://albiononlinetools.com/economy/item.php?itemPrice=T6_MAIN_CURSEDSTAFF&server=east';

const T5_ARMOR_PLATE_SET3='https://albiononlinetools.com/economy/item.php?itemPrice=T5_ARMOR_PLATE_SET3&server=east';
const T5_ARMOR_PLATE_SET31='https://albiononlinetools.com/economy/item.php?itemPrice=T5_ARMOR_PLATE_SET31&server=east';
const T6_ARMOR_PLATE_SET3='https://albiononlinetools.com/economy/item.php?itemPrice=T6_ARMOR_PLATE_SET3&server=east';

const T5_ARMOR_PLATE_SET1='https://albiononlinetools.com/economy/item.php?itemPrice=T5_ARMOR_PLATE_SET1&server=east';
const T5_ARMOR_PLATE_SET11='https://albiononlinetools.com/economy/item.php?itemPrice=T5_ARMOR_PLATE_SET11&server=east';
const T6_ARMOR_PLATE_SET1='https://albiononlinetools.com/economy/item.php?itemPrice=T6_ARMOR_PLATE_SET1&server=east';

const T5_ARMOR_PLATE_SET2='https://albiononlinetools.com/economy/item.php?itemPrice=T5_ARMOR_PLATE_SET2&server=east';
const T5_ARMOR_PLATE_SET21='https://albiononlinetools.com/economy/item.php?itemPrice=T5_ARMOR_PLATE_SET21&server=east';
const T6_ARMOR_PLATE_SET2='https://albiononlinetools.com/economy/item.php?itemPrice=T6_ARMOR_PLATE_SET2&server=east';

const T5_SHOES_CLOTH_SET1='https://albiononlinetools.com/economy/item.php?itemPrice=T5_SHOES_CLOTH_SET1&server=east';
const T5_SHOES_CLOTH_SET11='https://albiononlinetools.com/economy/item.php?itemPrice=T5_SHOES_CLOTH_SET11&server=east';
const T6_SHOES_CLOTH_SET1='https://albiononlinetools.com/economy/item.php?itemPrice=T6_SHOES_CLOTH_SET1&server=east';

const T5_SHOES_CLOTH_SET2='https://albiononlinetools.com/economy/item.php?itemPrice=T5_SHOES_CLOTH_SET2&server=east';
const T5_SHOES_CLOTH_SET21='https://albiononlinetools.com/economy/item.php?itemPrice=T5_SHOES_CLOTH_SET21&server=east';
const T6_SHOES_CLOTH_SET2='https://albiononlinetools.com/economy/item.php?itemPrice=T6_SHOES_CLOTH_SET2&server=east';

const T5_SHOES_CLOTH_SET3='https://albiononlinetools.com/economy/item.php?itemPrice=T5_SHOES_CLOTH_SET3&server=east';
const T5_SHOES_CLOTH_SET31='https://albiononlinetools.com/economy/item.php?itemPrice=T5_SHOES_CLOTH_SET31&server=east';
const T6_SHOES_CLOTH_SET3='https://albiononlinetools.com/economy/item.php?itemPrice=T6_SHOES_CLOTH_SET3&server=east';




class InputDBridgewatch {
    //gather table
    async hide_T2() {
        try {
            const response = await axios.get(hide_T2);
            const $ = cheerio.load(response.data);

            // Hàm tìm kiếm các hàng chứa tên thành phố cụ thể
            const findOrderByCity = (tableSelector, cityName) => {
                const orderRows = $(tableSelector + ' tbody tr');
                let orderData = null;

                orderRows.each(function () {
                    const city = $(this).find('td:nth-child(2)').text().trim();
                    if (city.includes(cityName)) {
                        orderData = {
                            city: city,
                            price: $(this).find('td:nth-child(3)').text().trim(),
                            lastUpdate: $(this).find('td:nth-child(4)').text().trim(),
                        };
                        return false; // Dừng vòng lặp khi tìm thấy hàng đầu tiên chứa tên thành phố cụ thể
                    }
                });

                return orderData;
            };

            // Tìm dữ liệu từ Sell Orders ở Martlock và Buy Orders ở Bridgewatch
            const sellOrderData = await findOrderByCity('#sellOrders', 'Bridgewatch');
            const buyOrderData = await findOrderByCity('#buyOrders', 'Bridgewatch');

            const data = {
                name: "Hide_T2",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }

    async hide_T3() {
        try {
            const response = await axios.get(hide_T3);
            const $ = cheerio.load(response.data);

            // Hàm tìm kiếm các hàng chứa tên thành phố cụ thể
            const findOrderByCity = (tableSelector, cityName) => {
                const orderRows = $(tableSelector + ' tbody tr');
                let orderData = null;

                orderRows.each(function () {
                    const city = $(this).find('td:nth-child(2)').text().trim();
                    if (city.includes(cityName)) {
                        orderData = {
                            city: city,
                            price: $(this).find('td:nth-child(3)').text().trim(),
                            lastUpdate: $(this).find('td:nth-child(4)').text().trim(),
                        };
                        return false; // Dừng vòng lặp khi tìm thấy hàng đầu tiên chứa tên thành phố cụ thể
                    }
                });

                return orderData;
            };

            // Tìm dữ liệu từ Sell Orders ở Martlock và Buy Orders ở Bridgewatch
            const sellOrderData = await findOrderByCity('#sellOrders', 'Bridgewatch');
            const buyOrderData = await findOrderByCity('#buyOrders', 'Bridgewatch');

            const data = {
                name: "Hide_T3",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }

    async hide_T4() {
        try {
            const response = await axios.get(hide_T4);
            const $ = cheerio.load(response.data);

            // Hàm tìm kiếm các hàng chứa tên thành phố cụ thể
            const findOrderByCity = (tableSelector, cityName) => {
                const orderRows = $(tableSelector + ' tbody tr');
                let orderData = null;

                orderRows.each(function () {
                    const city = $(this).find('td:nth-child(2)').text().trim();
                    if (city.includes(cityName)) {
                        orderData = {
                            city: city,
                            price: $(this).find('td:nth-child(3)').text().trim(),
                            lastUpdate: $(this).find('td:nth-child(4)').text().trim(),
                        };
                        return false; // Dừng vòng lặp khi tìm thấy hàng đầu tiên chứa tên thành phố cụ thể
                    }
                });

                return orderData;
            };

            // Tìm dữ liệu từ Sell Orders ở Martlock và Buy Orders ở Bridgewatch
            const sellOrderData = await findOrderByCity('#sellOrders', 'Bridgewatch');
            const buyOrderData = await findOrderByCity('#buyOrders', 'Bridgewatch');

            const data = {
                name: "Hide_T4",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }



    async hide_T5() {
        try {
            const response = await axios.get(hide_T5);
            const $ = cheerio.load(response.data);

            // Hàm tìm kiếm các hàng chứa tên thành phố cụ thể
            const findOrderByCity = (tableSelector, cityName) => {
                const orderRows = $(tableSelector + ' tbody tr');
                let orderData = null;

                orderRows.each(function () {
                    const city = $(this).find('td:nth-child(2)').text().trim();
                    if (city.includes(cityName)) {
                        orderData = {
                            city: city,
                            price: $(this).find('td:nth-child(3)').text().trim(),
                            lastUpdate: $(this).find('td:nth-child(4)').text().trim(),
                        };
                        return false; // Dừng vòng lặp khi tìm thấy hàng đầu tiên chứa tên thành phố cụ thể
                    }
                });

                return orderData;
            };

            // Tìm dữ liệu từ Sell Orders ở Martlock và Buy Orders ở Bridgewatch
            const sellOrderData = await findOrderByCity('#sellOrders', 'Bridgewatch');
            const buyOrderData = await findOrderByCity('#buyOrders', 'Bridgewatch');

            const data = {
                name: "Hide_T5",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }


    async hide_T6() {
        try {
            const response = await axios.get(hide_T6);
            const $ = cheerio.load(response.data);

            // Hàm tìm kiếm các hàng chứa tên thành phố cụ thể
            const findOrderByCity = (tableSelector, cityName) => {
                const orderRows = $(tableSelector + ' tbody tr');
                let orderData = null;

                orderRows.each(function () {
                    const city = $(this).find('td:nth-child(2)').text().trim();
                    if (city.includes(cityName)) {
                        orderData = {
                            city: city,
                            price: $(this).find('td:nth-child(3)').text().trim(),
                            lastUpdate: $(this).find('td:nth-child(4)').text().trim(),
                        };
                        return false; // Dừng vòng lặp khi tìm thấy hàng đầu tiên chứa tên thành phố cụ thể
                    }
                });

                return orderData;
            };

            // Tìm dữ liệu từ Sell Orders ở Martlock và Buy Orders ở Bridgewatch
            const sellOrderData = await findOrderByCity('#sellOrders', 'Bridgewatch');
            const buyOrderData = await findOrderByCity('#buyOrders', 'Bridgewatch');

            const data = {
                name: "Hide_T6",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }

    async hide_T7() {
        try {
            const response = await axios.get(hide_T7);
            const $ = cheerio.load(response.data);

            // Hàm tìm kiếm các hàng chứa tên thành phố cụ thể
            const findOrderByCity = (tableSelector, cityName) => {
                const orderRows = $(tableSelector + ' tbody tr');
                let orderData = null;

                orderRows.each(function () {
                    const city = $(this).find('td:nth-child(2)').text().trim();
                    if (city.includes(cityName)) {
                        orderData = {
                            city: city,
                            price: $(this).find('td:nth-child(3)').text().trim(),
                            lastUpdate: $(this).find('td:nth-child(4)').text().trim(),
                        };
                        return false; // Dừng vòng lặp khi tìm thấy hàng đầu tiên chứa tên thành phố cụ thể
                    }
                });

                return orderData;
            };

            // Tìm dữ liệu từ Sell Orders ở Martlock và Buy Orders ở Bridgewatch
            const sellOrderData = await findOrderByCity('#sellOrders', 'Bridgewatch');
            const buyOrderData = await findOrderByCity('#buyOrders', 'Bridgewatch');

            const data = {
                name: "Hide_T7",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }


    async hide_T8() {
        try {
            const response = await axios.get(hide_T8);
            const $ = cheerio.load(response.data);

            // Hàm tìm kiếm các hàng chứa tên thành phố cụ thể
            const findOrderByCity = (tableSelector, cityName) => {
                const orderRows = $(tableSelector + ' tbody tr');
                let orderData = null;

                orderRows.each(function () {
                    const city = $(this).find('td:nth-child(2)').text().trim();
                    if (city.includes(cityName)) {
                        orderData = {
                            city: city,
                            price: $(this).find('td:nth-child(3)').text().trim(),
                            lastUpdate: $(this).find('td:nth-child(4)').text().trim(),
                        };
                        return false; // Dừng vòng lặp khi tìm thấy hàng đầu tiên chứa tên thành phố cụ thể
                    }
                });

                return orderData;
            };

            // Tìm dữ liệu từ Sell Orders ở Martlock và Buy Orders ở Bridgewatch
            const sellOrderData = await findOrderByCity('#sellOrders', 'Bridgewatch');
            const buyOrderData = await findOrderByCity('#buyOrders', 'Bridgewatch');

            const data = {
                name: "Hide_T8",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }

    // farming
    async T2_BEAN() {
        try {
            const response = await axios.get(T2_BEAN);
            const $ = cheerio.load(response.data);

            // Hàm tìm kiếm các hàng chứa tên thành phố cụ thể
            const findOrderByCity = (tableSelector, cityName) => {
                const orderRows = $(tableSelector + ' tbody tr');
                let orderData = null;

                orderRows.each(function () {
                    const city = $(this).find('td:nth-child(2)').text().trim();
                    if (city.includes(cityName)) {
                        orderData = {
                            city: city,
                            price: $(this).find('td:nth-child(3)').text().trim(),
                            lastUpdate: $(this).find('td:nth-child(4)').text().trim(),
                        };
                        return false; // Dừng vòng lặp khi tìm thấy hàng đầu tiên chứa tên thành phố cụ thể
                    }
                });

                return orderData;
            };

            // Tìm dữ liệu từ Sell Orders ở Martlock và Buy Orders ở Bridgewatch
            const sellOrderData = await findOrderByCity('#sellOrders', 'Bridgewatch');
            const buyOrderData = await findOrderByCity('#buyOrders', 'Bridgewatch');

            const data = {
                name: "T2_BEAN",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }

    async T4_MILK() {
        try {
            const response = await axios.get(T4_MILK);
            const $ = cheerio.load(response.data);

            // Hàm tìm kiếm các hàng chứa tên thành phố cụ thể
            const findOrderByCity = (tableSelector, cityName) => {
                const orderRows = $(tableSelector + ' tbody tr');
                let orderData = null;

                orderRows.each(function () {
                    const city = $(this).find('td:nth-child(2)').text().trim();
                    if (city.includes(cityName)) {
                        orderData = {
                            city: city,
                            price: $(this).find('td:nth-child(3)').text().trim(),
                            lastUpdate: $(this).find('td:nth-child(4)').text().trim(),
                        };
                        return false; // Dừng vòng lặp khi tìm thấy hàng đầu tiên chứa tên thành phố cụ thể
                    }
                });

                return orderData;
            };

            // Tìm dữ liệu từ Sell Orders ở Martlock và Buy Orders ở Bridgewatch
            const sellOrderData = await findOrderByCity('#sellOrders', 'Bridgewatch');
            const buyOrderData = await findOrderByCity('#buyOrders', 'Bridgewatch');

            const data = {
                name: "T4_MILK",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }

    async T5_TEASEL() {
        try {
            const response = await axios.get(T5_TEASEL);
            const $ = cheerio.load(response.data);

            // Hàm tìm kiếm các hàng chứa tên thành phố cụ thể
            const findOrderByCity = (tableSelector, cityName) => {
                const orderRows = $(tableSelector + ' tbody tr');
                let orderData = null;

                orderRows.each(function () {
                    const city = $(this).find('td:nth-child(2)').text().trim();
                    if (city.includes(cityName)) {
                        orderData = {
                            city: city,
                            price: $(this).find('td:nth-child(3)').text().trim(),
                            lastUpdate: $(this).find('td:nth-child(4)').text().trim(),
                        };
                        return false; // Dừng vòng lặp khi tìm thấy hàng đầu tiên chứa tên thành phố cụ thể
                    }
                });

                return orderData;
            };

            // Tìm dữ liệu từ Sell Orders ở Martlock và Buy Orders ở Bridgewatch
            const sellOrderData = await findOrderByCity('#sellOrders', 'Bridgewatch');
            const buyOrderData = await findOrderByCity('#buyOrders', 'Bridgewatch');

            const data = {
                name: "T5_TEASEL",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }

    async T7_CORN() {
        try {
            const response = await axios.get(T7_CORN);
            const $ = cheerio.load(response.data);

            // Hàm tìm kiếm các hàng chứa tên thành phố cụ thể
            const findOrderByCity = (tableSelector, cityName) => {
                const orderRows = $(tableSelector + ' tbody tr');
                let orderData = null;

                orderRows.each(function () {
                    const city = $(this).find('td:nth-child(2)').text().trim();
                    if (city.includes(cityName)) {
                        orderData = {
                            city: city,
                            price: $(this).find('td:nth-child(3)').text().trim(),
                            lastUpdate: $(this).find('td:nth-child(4)').text().trim(),
                        };
                        return false; // Dừng vòng lặp khi tìm thấy hàng đầu tiên chứa tên thành phố cụ thể
                    }
                });

                return orderData;
            };

            // Tìm dữ liệu từ Sell Orders ở Martlock và Buy Orders ở Bridgewatch
            const sellOrderData = await findOrderByCity('#sellOrders', 'Bridgewatch');
            const buyOrderData = await findOrderByCity('#buyOrders', 'Bridgewatch');

            const data = {
                name: "T7_CORN",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    //refine


    //craft
    async T5_2H_CROSSBOWLARGE() {
        try {
            const response = await axios.get(T5_2H_CROSSBOWLARGE);
            const $ = cheerio.load(response.data);

            // Hàm tìm kiếm các hàng chứa tên thành phố cụ thể
            const findOrderByCity = (tableSelector, cityName) => {
                const orderRows = $(tableSelector + ' tbody tr');
                let orderData = null;

                orderRows.each(function () {
                    const city = $(this).find('td:nth-child(2)').text().trim();
                    if (city.includes(cityName)) {
                        orderData = {
                            city: city,
                            price: $(this).find('td:nth-child(3)').text().trim(),
                            lastUpdate: $(this).find('td:nth-child(4)').text().trim(),
                        };
                        return false; // Dừng vòng lặp khi tìm thấy hàng đầu tiên chứa tên thành phố cụ thể
                    }
                });

                return orderData;
            };

            // Tìm dữ liệu từ Sell Orders ở Martlock và Buy Orders ở Bridgewatch
            const sellOrderData = await findOrderByCity('#sellOrders', 'Black Market');
            const buyOrderData = await findOrderByCity('#buyOrders', 'Black Market');

            const data = {
                name: "Expert's Heavy Crossbow T5",

                material1: "T5_PLANKS",
                material2:"T5_METALBAR",

                quantity1: 20,
                quantity2: 12,

                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T5_2H_CROSSBOWLARGE1() {
        try {
            const response = await axios.get(T5_2H_CROSSBOWLARGE1);
            const $ = cheerio.load(response.data);

            // Hàm tìm kiếm các hàng chứa tên thành phố cụ thể
            const findOrderByCity = (tableSelector, cityName) => {
                const orderRows = $(tableSelector + ' tbody tr');
                let orderData = null;

                orderRows.each(function () {
                    const city = $(this).find('td:nth-child(2)').text().trim();
                    if (city.includes(cityName)) {
                        orderData = {
                            city: city,
                            price: $(this).find('td:nth-child(3)').text().trim(),
                            lastUpdate: $(this).find('td:nth-child(4)').text().trim(),
                        };
                        return false; // Dừng vòng lặp khi tìm thấy hàng đầu tiên chứa tên thành phố cụ thể
                    }
                });

                return orderData;
            };

            // Tìm dữ liệu từ Sell Orders ở Martlock và Buy Orders ở Bridgewatch
            const sellOrderData = await findOrderByCity('#sellOrders', 'Black Market');
            const buyOrderData = await findOrderByCity('#buyOrders', 'Black Market');

            const data = {
                name: "Expert's Heavy Crossbow 5.1",

                material1: "T5_PLANKS",
                material2:"T5_METALBAR",

                quantity1: 20,
                quantity2: 12,

                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T6_2H_CROSSBOWLARGE() {
        try {
            const response = await axios.get(T6_2H_CROSSBOWLARGE);
            const $ = cheerio.load(response.data);

            // Hàm tìm kiếm các hàng chứa tên thành phố cụ thể
            const findOrderByCity = (tableSelector, cityName) => {
                const orderRows = $(tableSelector + ' tbody tr');
                let orderData = null;

                orderRows.each(function () {
                    const city = $(this).find('td:nth-child(2)').text().trim();
                    if (city.includes(cityName)) {
                        orderData = {
                            city: city,
                            price: $(this).find('td:nth-child(3)').text().trim(),
                            lastUpdate: $(this).find('td:nth-child(4)').text().trim(),
                        };
                        return false; // Dừng vòng lặp khi tìm thấy hàng đầu tiên chứa tên thành phố cụ thể
                    }
                });

                return orderData;
            };

            // Tìm dữ liệu từ Sell Orders ở Martlock và Buy Orders ở Bridgewatch
            const sellOrderData = await findOrderByCity('#sellOrders', 'Black Market');
            const buyOrderData = await findOrderByCity('#buyOrders', 'Black Market');

            const data = {
                name: "Expert's Heavy Crossbow T6",

                material1: "T6_PLANKS",
                material2:"T6_METALBAR",

                quantity1: 20,
                quantity2: 12,

                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }

    async T5_2H_CROSSBOW() {
        try {
            const response = await axios.get(T5_2H_CROSSBOW);
            const $ = cheerio.load(response.data);

            // Hàm tìm kiếm các hàng chứa tên thành phố cụ thể
            const findOrderByCity = (tableSelector, cityName) => {
                const orderRows = $(tableSelector + ' tbody tr');
                let orderData = null;

                orderRows.each(function () {
                    const city = $(this).find('td:nth-child(2)').text().trim();
                    if (city.includes(cityName)) {
                        orderData = {
                            city: city,
                            price: $(this).find('td:nth-child(3)').text().trim(),
                            lastUpdate: $(this).find('td:nth-child(4)').text().trim(),
                        };
                        return false; // Dừng vòng lặp khi tìm thấy hàng đầu tiên chứa tên thành phố cụ thể
                    }
                });

                return orderData;
            };

            // Tìm dữ liệu từ Sell Orders ở Martlock và Buy Orders ở Bridgewatch
            const sellOrderData = await findOrderByCity('#sellOrders', 'Black Market');
            const buyOrderData = await findOrderByCity('#buyOrders', 'Black Market');

            const data = {
                name: "Expert's Crossbow T5",

                
                material1: "T5_PLANKS",
                material2:"T5_METALBAR",

                quantity1: 20,
                quantity2: 12,

                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T5_2H_CROSSBOW1() {
        try {
            const response = await axios.get(T5_2H_CROSSBOW1);
            const $ = cheerio.load(response.data);

            // Hàm tìm kiếm các hàng chứa tên thành phố cụ thể
            const findOrderByCity = (tableSelector, cityName) => {
                const orderRows = $(tableSelector + ' tbody tr');
                let orderData = null;

                orderRows.each(function () {
                    const city = $(this).find('td:nth-child(2)').text().trim();
                    if (city.includes(cityName)) {
                        orderData = {
                            city: city,
                            price: $(this).find('td:nth-child(3)').text().trim(),
                            lastUpdate: $(this).find('td:nth-child(4)').text().trim(),
                        };
                        return false; // Dừng vòng lặp khi tìm thấy hàng đầu tiên chứa tên thành phố cụ thể
                    }
                });

                return orderData;
            };

            // Tìm dữ liệu từ Sell Orders ở Martlock và Buy Orders ở Bridgewatch
            const sellOrderData = await findOrderByCity('#sellOrders', 'Black Market');
            const buyOrderData = await findOrderByCity('#buyOrders', 'Black Market');

            const data = {
                name: "Expert's Crossbow T5.1",

                
                material1: "T5_PLANKS",
                material2:"T5_METALBAR",

                quantity1: 20,
                quantity2: 12,


                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T6_2H_CROSSBOW() {
        try {
            const response = await axios.get(T6_2H_CROSSBOW);
            const $ = cheerio.load(response.data);

            // Hàm tìm kiếm các hàng chứa tên thành phố cụ thể
            const findOrderByCity = (tableSelector, cityName) => {
                const orderRows = $(tableSelector + ' tbody tr');
                let orderData = null;

                orderRows.each(function () {
                    const city = $(this).find('td:nth-child(2)').text().trim();
                    if (city.includes(cityName)) {
                        orderData = {
                            city: city,
                            price: $(this).find('td:nth-child(3)').text().trim(),
                            lastUpdate: $(this).find('td:nth-child(4)').text().trim(),
                        };
                        return false; // Dừng vòng lặp khi tìm thấy hàng đầu tiên chứa tên thành phố cụ thể
                    }
                });

                return orderData;
            };

            // Tìm dữ liệu từ Sell Orders ở Martlock và Buy Orders ở Bridgewatch
            const sellOrderData = await findOrderByCity('#sellOrders', 'Black Market');
            const buyOrderData = await findOrderByCity('#buyOrders', 'Black Market');

            const data = {
                name: "Expert's Crossbow T6",

                
                material1: "T6_PLANKS",
                material2:"T6_METALBAR",

                quantity1: 20,
                quantity2: 12,


                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }

    async T5_MAIN_1HCROSSBOW() {
        try {
            const response = await axios.get(T5_MAIN_1HCROSSBOW);
            const $ = cheerio.load(response.data);

            // Hàm tìm kiếm các hàng chứa tên thành phố cụ thể
            const findOrderByCity = (tableSelector, cityName) => {
                const orderRows = $(tableSelector + ' tbody tr');
                let orderData = null;

                orderRows.each(function () {
                    const city = $(this).find('td:nth-child(2)').text().trim();
                    if (city.includes(cityName)) {
                        orderData = {
                            city: city,
                            price: $(this).find('td:nth-child(3)').text().trim(),
                            lastUpdate: $(this).find('td:nth-child(4)').text().trim(),
                        };
                        return false; // Dừng vòng lặp khi tìm thấy hàng đầu tiên chứa tên thành phố cụ thể
                    }
                });

                return orderData;
            };

            // Tìm dữ liệu từ Sell Orders ở Martlock và Buy Orders ở Bridgewatch
            const sellOrderData = await findOrderByCity('#sellOrders', 'Black Market');
            const buyOrderData = await findOrderByCity('#buyOrders', 'Black Market');

            const data = {
                name: "Expert's Light Crossbow T5",

                
                material1: "T5_PLANKS",
                material2:"T5_METALBAR",

                quantity1: 16,
                quantity2: 8,


                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T5_MAIN_1HCROSSBOW1() {
        try {
            const response = await axios.get(T5_MAIN_1HCROSSBOW1);
            const $ = cheerio.load(response.data);

            // Hàm tìm kiếm các hàng chứa tên thành phố cụ thể
            const findOrderByCity = (tableSelector, cityName) => {
                const orderRows = $(tableSelector + ' tbody tr');
                let orderData = null;

                orderRows.each(function () {
                    const city = $(this).find('td:nth-child(2)').text().trim();
                    if (city.includes(cityName)) {
                        orderData = {
                            city: city,
                            price: $(this).find('td:nth-child(3)').text().trim(),
                            lastUpdate: $(this).find('td:nth-child(4)').text().trim(),
                        };
                        return false; // Dừng vòng lặp khi tìm thấy hàng đầu tiên chứa tên thành phố cụ thể
                    }
                });

                return orderData;
            };

            // Tìm dữ liệu từ Sell Orders ở Martlock và Buy Orders ở Bridgewatch
            const sellOrderData = await findOrderByCity('#sellOrders', 'Black Market');
            const buyOrderData = await findOrderByCity('#buyOrders', 'Black Market');

            const data = {
                name: "Expert's Light Crossbow T5.1",

                material1: "T5_PLANKS",
                material2:"T5_METALBAR",

                quantity1: 16,
                quantity2: 8,

                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T6_MAIN_1HCROSSBOW() {
        try {
            const response = await axios.get(T6_MAIN_1HCROSSBOW);
            const $ = cheerio.load(response.data);

            // Hàm tìm kiếm các hàng chứa tên thành phố cụ thể
            const findOrderByCity = (tableSelector, cityName) => {
                const orderRows = $(tableSelector + ' tbody tr');
                let orderData = null;

                orderRows.each(function () {
                    const city = $(this).find('td:nth-child(2)').text().trim();
                    if (city.includes(cityName)) {
                        orderData = {
                            city: city,
                            price: $(this).find('td:nth-child(3)').text().trim(),
                            lastUpdate: $(this).find('td:nth-child(4)').text().trim(),
                        };
                        return false; // Dừng vòng lặp khi tìm thấy hàng đầu tiên chứa tên thành phố cụ thể
                    }
                });

                return orderData;
            };

            // Tìm dữ liệu từ Sell Orders ở Martlock và Buy Orders ở Bridgewatch
            const sellOrderData = await findOrderByCity('#sellOrders', 'Black Market');
            const buyOrderData = await findOrderByCity('#buyOrders', 'Black Market');

            const data = {
                name: "Expert's Light Crossbow T6",

                material1: "T6_PLANKS",
                material2:"T6_METALBAR",

                quantity1: 16,
                quantity2: 8,

                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    
    async T5_MAIN_DAGGER() {
        try {
            const response = await axios.get(T5_MAIN_DAGGER);
            const $ = cheerio.load(response.data);

            // Hàm tìm kiếm các hàng chứa tên thành phố cụ thể
            const findOrderByCity = (tableSelector, cityName) => {
                const orderRows = $(tableSelector + ' tbody tr');
                let orderData = null;

                orderRows.each(function () {
                    const city = $(this).find('td:nth-child(2)').text().trim();
                    if (city.includes(cityName)) {
                        orderData = {
                            city: city,
                            price: $(this).find('td:nth-child(3)').text().trim(),
                            lastUpdate: $(this).find('td:nth-child(4)').text().trim(),
                        };
                        return false; // Dừng vòng lặp khi tìm thấy hàng đầu tiên chứa tên thành phố cụ thể
                    }
                });

                return orderData;
            };

            // Tìm dữ liệu từ Sell Orders ở Martlock và Buy Orders ở Bridgewatch
            const sellOrderData = await findOrderByCity('#sellOrders', 'Black Market');
            const buyOrderData = await findOrderByCity('#buyOrders', 'Black Market');

            const data = {
                name: "Expert's Dagger T5",

                material1: "T5_CLOTH",
                material2:"T5_METALBAR",

                quantity1: 12,
                quantity2: 12,

                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T5_MAIN_DAGGER1() {
        try {
            const response = await axios.get(T5_MAIN_DAGGER1);
            const $ = cheerio.load(response.data);

            // Hàm tìm kiếm các hàng chứa tên thành phố cụ thể
            const findOrderByCity = (tableSelector, cityName) => {
                const orderRows = $(tableSelector + ' tbody tr');
                let orderData = null;

                orderRows.each(function () {
                    const city = $(this).find('td:nth-child(2)').text().trim();
                    if (city.includes(cityName)) {
                        orderData = {
                            city: city,
                            price: $(this).find('td:nth-child(3)').text().trim(),
                            lastUpdate: $(this).find('td:nth-child(4)').text().trim(),
                        };
                        return false; // Dừng vòng lặp khi tìm thấy hàng đầu tiên chứa tên thành phố cụ thể
                    }
                });

                return orderData;
            };

            // Tìm dữ liệu từ Sell Orders ở Martlock và Buy Orders ở Bridgewatch
            const sellOrderData = await findOrderByCity('#sellOrders', 'Black Market');
            const buyOrderData = await findOrderByCity('#buyOrders', 'Black Market');

            const data = {
                name: "Expert's Dagger T5.1",

                material1: "T5_LEATHER",
                material2:"T5_METALBAR",

                quantity1: 12,
                quantity2: 12,

                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T6_MAIN_DAGGER() {
        try {
            const response = await axios.get(T6_MAIN_DAGGER);
            const $ = cheerio.load(response.data);

            // Hàm tìm kiếm các hàng chứa tên thành phố cụ thể
            const findOrderByCity = (tableSelector, cityName) => {
                const orderRows = $(tableSelector + ' tbody tr');
                let orderData = null;

                orderRows.each(function () {
                    const city = $(this).find('td:nth-child(2)').text().trim();
                    if (city.includes(cityName)) {
                        orderData = {
                            city: city,
                            price: $(this).find('td:nth-child(3)').text().trim(),
                            lastUpdate: $(this).find('td:nth-child(4)').text().trim(),
                        };
                        return false; // Dừng vòng lặp khi tìm thấy hàng đầu tiên chứa tên thành phố cụ thể
                    }
                });

                return orderData;
            };

            // Tìm dữ liệu từ Sell Orders ở Martlock và Buy Orders ở Bridgewatch
            const sellOrderData = await findOrderByCity('#sellOrders', 'Black Market');
            const buyOrderData = await findOrderByCity('#buyOrders', 'Black Market');

            const data = {
                name: "Expert's Dagger T6",

                material1: "T6_LEATHER",
                material2:"T6_METALBAR",

                quantity1: 12,
                quantity2: 12,

                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }

    async T5_2H_DAGGERPAIR() {
        try {
            const response = await axios.get(T5_2H_DAGGERPAIR);
            const $ = cheerio.load(response.data);

            // Hàm tìm kiếm các hàng chứa tên thành phố cụ thể
            const findOrderByCity = (tableSelector, cityName) => {
                const orderRows = $(tableSelector + ' tbody tr');
                let orderData = null;

                orderRows.each(function () {
                    const city = $(this).find('td:nth-child(2)').text().trim();
                    if (city.includes(cityName)) {
                        orderData = {
                            city: city,
                            price: $(this).find('td:nth-child(3)').text().trim(),
                            lastUpdate: $(this).find('td:nth-child(4)').text().trim(),
                        };
                        return false; // Dừng vòng lặp khi tìm thấy hàng đầu tiên chứa tên thành phố cụ thể
                    }
                });

                return orderData;
            };

            // Tìm dữ liệu từ Sell Orders ở Martlock và Buy Orders ở Bridgewatch
            const sellOrderData = await findOrderByCity('#sellOrders', 'Black Market');
            const buyOrderData = await findOrderByCity('#buyOrders', 'Black Market');

            const data = {
                name: "Expert's Dagger Pair T5",

                material1: "T5_LEATHER",
                material2:"T5_METALBAR",

                quantity1: 20,
                quantity2: 12,

                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T5_2H_DAGGERPAIR1() {
        try {
            const response = await axios.get(T5_2H_DAGGERPAIR1);
            const $ = cheerio.load(response.data);

            // Hàm tìm kiếm các hàng chứa tên thành phố cụ thể
            const findOrderByCity = (tableSelector, cityName) => {
                const orderRows = $(tableSelector + ' tbody tr');
                let orderData = null;

                orderRows.each(function () {
                    const city = $(this).find('td:nth-child(2)').text().trim();
                    if (city.includes(cityName)) {
                        orderData = {
                            city: city,
                            price: $(this).find('td:nth-child(3)').text().trim(),
                            lastUpdate: $(this).find('td:nth-child(4)').text().trim(),
                        };
                        return false; // Dừng vòng lặp khi tìm thấy hàng đầu tiên chứa tên thành phố cụ thể
                    }
                });

                return orderData;
            };

            // Tìm dữ liệu từ Sell Orders ở Martlock và Buy Orders ở Bridgewatch
            const sellOrderData = await findOrderByCity('#sellOrders', 'Black Market');
            const buyOrderData = await findOrderByCity('#buyOrders', 'Black Market');

            const data = {
                name: "Expert's Dagger Pair T5.1",

                material1: "T5_LEATHER",
                material2:"T5_METALBAR",

                quantity1: 20,
                quantity2: 12,

                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T6_2H_DAGGERPAIR() {
        try {
            const response = await axios.get(T6_2H_DAGGERPAIR);
            const $ = cheerio.load(response.data);

            // Hàm tìm kiếm các hàng chứa tên thành phố cụ thể
            const findOrderByCity = (tableSelector, cityName) => {
                const orderRows = $(tableSelector + ' tbody tr');
                let orderData = null;

                orderRows.each(function () {
                    const city = $(this).find('td:nth-child(2)').text().trim();
                    if (city.includes(cityName)) {
                        orderData = {
                            city: city,
                            price: $(this).find('td:nth-child(3)').text().trim(),
                            lastUpdate: $(this).find('td:nth-child(4)').text().trim(),
                        };
                        return false; // Dừng vòng lặp khi tìm thấy hàng đầu tiên chứa tên thành phố cụ thể
                    }
                });

                return orderData;
            };

            // Tìm dữ liệu từ Sell Orders ở Martlock và Buy Orders ở Bridgewatch
            const sellOrderData = await findOrderByCity('#sellOrders', 'Black Market');
            const buyOrderData = await findOrderByCity('#buyOrders', 'Black Market');

            const data = {
                name: "Expert's Dagger Pair T6",

                material1: "T6_LEATHER",
                material2:"T6_METALBAR",

                quantity1: 20,
                quantity2: 12,

                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }

    async T5_2H_CLAWPAIR () {
        try {
            const response = await axios.get(T5_2H_CLAWPAIR );
            const $ = cheerio.load(response.data);

            // Hàm tìm kiếm các hàng chứa tên thành phố cụ thể
            const findOrderByCity = (tableSelector, cityName) => {
                const orderRows = $(tableSelector + ' tbody tr');
                let orderData = null;

                orderRows.each(function () {
                    const city = $(this).find('td:nth-child(2)').text().trim();
                    if (city.includes(cityName)) {
                        orderData = {
                            city: city,
                            price: $(this).find('td:nth-child(3)').text().trim(),
                            lastUpdate: $(this).find('td:nth-child(4)').text().trim(),
                        };
                        return false; // Dừng vòng lặp khi tìm thấy hàng đầu tiên chứa tên thành phố cụ thể
                    }
                });

                return orderData;
            };

            // Tìm dữ liệu từ Sell Orders ở Martlock và Buy Orders ở Bridgewatch
            const sellOrderData = await findOrderByCity('#sellOrders', 'Black Market');
            const buyOrderData = await findOrderByCity('#buyOrders', 'Black Market');

            const data = {
                name: "Expert's Claws T5",

                material1: "T5_LEATHER",
                material2:"T5_METALBAR",

                quantity1: 20,
                quantity2: 12,

                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T5_2H_CLAWPAIR1() {
        try {
            const response = await axios.get(T5_2H_CLAWPAIR1);
            const $ = cheerio.load(response.data);

            // Hàm tìm kiếm các hàng chứa tên thành phố cụ thể
            const findOrderByCity = (tableSelector, cityName) => {
                const orderRows = $(tableSelector + ' tbody tr');
                let orderData = null;

                orderRows.each(function () {
                    const city = $(this).find('td:nth-child(2)').text().trim();
                    if (city.includes(cityName)) {
                        orderData = {
                            city: city,
                            price: $(this).find('td:nth-child(3)').text().trim(),
                            lastUpdate: $(this).find('td:nth-child(4)').text().trim(),
                        };
                        return false; // Dừng vòng lặp khi tìm thấy hàng đầu tiên chứa tên thành phố cụ thể
                    }
                });

                return orderData;
            };

            // Tìm dữ liệu từ Sell Orders ở Martlock và Buy Orders ở Bridgewatch
            const sellOrderData = await findOrderByCity('#sellOrders', 'Black Market');
            const buyOrderData = await findOrderByCity('#buyOrders', 'Black Market');

            const data = {
                name: "Expert's Claws T5.1",

                material1: "T5_LEATHER",
                material2:"T5_METALBAR",

                quantity1: 20,
                quantity2: 12,

                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T6_2H_CLAWPAIR () {
        try {
            const response = await axios.get(T6_2H_CLAWPAIR );
            const $ = cheerio.load(response.data);

            // Hàm tìm kiếm các hàng chứa tên thành phố cụ thể
            const findOrderByCity = (tableSelector, cityName) => {
                const orderRows = $(tableSelector + ' tbody tr');
                let orderData = null;

                orderRows.each(function () {
                    const city = $(this).find('td:nth-child(2)').text().trim();
                    if (city.includes(cityName)) {
                        orderData = {
                            city: city,
                            price: $(this).find('td:nth-child(3)').text().trim(),
                            lastUpdate: $(this).find('td:nth-child(4)').text().trim(),
                        };
                        return false; // Dừng vòng lặp khi tìm thấy hàng đầu tiên chứa tên thành phố cụ thể
                    }
                });

                return orderData;
            };

            // Tìm dữ liệu từ Sell Orders ở Martlock và Buy Orders ở Bridgewatch
            const sellOrderData = await findOrderByCity('#sellOrders', 'Black Market');
            const buyOrderData = await findOrderByCity('#buyOrders', 'Black Market');

            const data = {
                name: "Expert's Claws T6",

                material1: "T5_LEATHER",
                material2:"T5_METALBAR",

                quantity1: 20,
                quantity2: 12,

                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    //
    async T5_2H_CURSEDSTAFF () {
        try {
            const response = await axios.get(T5_2H_CURSEDSTAFF );
            const $ = cheerio.load(response.data);

            // Hàm tìm kiếm các hàng chứa tên thành phố cụ thể
            const findOrderByCity = (tableSelector, cityName) => {
                const orderRows = $(tableSelector + ' tbody tr');
                let orderData = null;

                orderRows.each(function () {
                    const city = $(this).find('td:nth-child(2)').text().trim();
                    if (city.includes(cityName)) {
                        orderData = {
                            city: city,
                            price: $(this).find('td:nth-child(3)').text().trim(),
                            lastUpdate: $(this).find('td:nth-child(4)').text().trim(),
                        };
                        return false; // Dừng vòng lặp khi tìm thấy hàng đầu tiên chứa tên thành phố cụ thể
                    }
                });

                return orderData;
            };

            // Tìm dữ liệu từ Sell Orders ở Martlock và Buy Orders ở Bridgewatch
            const sellOrderData = await findOrderByCity('#sellOrders', 'Black Market');
            const buyOrderData = await findOrderByCity('#buyOrders', 'Black Market');

            const data = {
                name: "Expert's Great Cursed Staff T5",

                material1: "T5_PLANKS",
                material2:"T5_METALBAR",

                quantity1: 20,
                quantity2: 12,

                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T5_2H_CURSEDSTAFF1() {
        try {
            const response = await axios.get(T5_2H_CURSEDSTAFF1);
            const $ = cheerio.load(response.data);

            // Hàm tìm kiếm các hàng chứa tên thành phố cụ thể
            const findOrderByCity = (tableSelector, cityName) => {
                const orderRows = $(tableSelector + ' tbody tr');
                let orderData = null;

                orderRows.each(function () {
                    const city = $(this).find('td:nth-child(2)').text().trim();
                    if (city.includes(cityName)) {
                        orderData = {
                            city: city,
                            price: $(this).find('td:nth-child(3)').text().trim(),
                            lastUpdate: $(this).find('td:nth-child(4)').text().trim(),
                        };
                        return false; // Dừng vòng lặp khi tìm thấy hàng đầu tiên chứa tên thành phố cụ thể
                    }
                });

                return orderData;
            };

            // Tìm dữ liệu từ Sell Orders ở Martlock và Buy Orders ở Bridgewatch
            const sellOrderData = await findOrderByCity('#sellOrders', 'Black Market');
            const buyOrderData = await findOrderByCity('#buyOrders', 'Black Market');

            const data = {
                name: "Expert's Great Cursed Staff T5.1",

                material1: "T5_PLANKS",
                material2:"T5_METALBAR",

                quantity1: 20,
                quantity2: 12,

                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T6_2H_CURSEDSTAFF () {
        try {
            const response = await axios.get(T6_2H_CURSEDSTAFF );
            const $ = cheerio.load(response.data);

            // Hàm tìm kiếm các hàng chứa tên thành phố cụ thể
            const findOrderByCity = (tableSelector, cityName) => {
                const orderRows = $(tableSelector + ' tbody tr');
                let orderData = null;

                orderRows.each(function () {
                    const city = $(this).find('td:nth-child(2)').text().trim();
                    if (city.includes(cityName)) {
                        orderData = {
                            city: city,
                            price: $(this).find('td:nth-child(3)').text().trim(),
                            lastUpdate: $(this).find('td:nth-child(4)').text().trim(),
                        };
                        return false; // Dừng vòng lặp khi tìm thấy hàng đầu tiên chứa tên thành phố cụ thể
                    }
                });

                return orderData;
            };

            // Tìm dữ liệu từ Sell Orders ở Martlock và Buy Orders ở Bridgewatch
            const sellOrderData = await findOrderByCity('#sellOrders', 'Black Market');
            const buyOrderData = await findOrderByCity('#buyOrders', 'Black Market');

            const data = {
                name: "Expert's Great Cursed Staff T6",

                material1: "T6_PLANKS",
                material2:"T6_METALBAR",

                quantity1: 20,
                quantity2: 12,

                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }

    async T5_2H_DEMONICSTAFF () {
        try {
            const response = await axios.get(T5_2H_DEMONICSTAFF );
            const $ = cheerio.load(response.data);

            // Hàm tìm kiếm các hàng chứa tên thành phố cụ thể
            const findOrderByCity = (tableSelector, cityName) => {
                const orderRows = $(tableSelector + ' tbody tr');
                let orderData = null;

                orderRows.each(function () {
                    const city = $(this).find('td:nth-child(2)').text().trim();
                    if (city.includes(cityName)) {
                        orderData = {
                            city: city,
                            price: $(this).find('td:nth-child(3)').text().trim(),
                            lastUpdate: $(this).find('td:nth-child(4)').text().trim(),
                        };
                        return false; // Dừng vòng lặp khi tìm thấy hàng đầu tiên chứa tên thành phố cụ thể
                    }
                });

                return orderData;
            };

            // Tìm dữ liệu từ Sell Orders ở Martlock và Buy Orders ở Bridgewatch
            const sellOrderData = await findOrderByCity('#sellOrders', 'Black Market');
            const buyOrderData = await findOrderByCity('#buyOrders', 'Black Market');

            const data = {
                name: "Expert's Demonic Staff T5",

                material1: "T5_PLANKS",
                material2:"T5_METALBAR",

                quantity1: 20,
                quantity2: 12,

                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T5_2H_DEMONICSTAFF1() {
        try {
            const response = await axios.get(T5_2H_DEMONICSTAFF1);
            const $ = cheerio.load(response.data);

            // Hàm tìm kiếm các hàng chứa tên thành phố cụ thể
            const findOrderByCity = (tableSelector, cityName) => {
                const orderRows = $(tableSelector + ' tbody tr');
                let orderData = null;

                orderRows.each(function () {
                    const city = $(this).find('td:nth-child(2)').text().trim();
                    if (city.includes(cityName)) {
                        orderData = {
                            city: city,
                            price: $(this).find('td:nth-child(3)').text().trim(),
                            lastUpdate: $(this).find('td:nth-child(4)').text().trim(),
                        };
                        return false; // Dừng vòng lặp khi tìm thấy hàng đầu tiên chứa tên thành phố cụ thể
                    }
                });

                return orderData;
            };

            // Tìm dữ liệu từ Sell Orders ở Martlock và Buy Orders ở Bridgewatch
            const sellOrderData = await findOrderByCity('#sellOrders', 'Black Market');
            const buyOrderData = await findOrderByCity('#buyOrders', 'Black Market');

            const data = {
                name: "Expert's Demonic Staff T5.1",

                material1: "T5_PLANKS",
                material2:"T5_METALBAR",

                quantity1: 20,
                quantity2: 12,

                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T6_2H_DEMONICSTAFF () {
        try {
            const response = await axios.get(T6_2H_DEMONICSTAFF );
            const $ = cheerio.load(response.data);

            // Hàm tìm kiếm các hàng chứa tên thành phố cụ thể
            const findOrderByCity = (tableSelector, cityName) => {
                const orderRows = $(tableSelector + ' tbody tr');
                let orderData = null;

                orderRows.each(function () {
                    const city = $(this).find('td:nth-child(2)').text().trim();
                    if (city.includes(cityName)) {
                        orderData = {
                            city: city,
                            price: $(this).find('td:nth-child(3)').text().trim(),
                            lastUpdate: $(this).find('td:nth-child(4)').text().trim(),
                        };
                        return false; // Dừng vòng lặp khi tìm thấy hàng đầu tiên chứa tên thành phố cụ thể
                    }
                });

                return orderData;
            };

            // Tìm dữ liệu từ Sell Orders ở Martlock và Buy Orders ở Bridgewatch
            const sellOrderData = await findOrderByCity('#sellOrders', 'Black Market');
            const buyOrderData = await findOrderByCity('#buyOrders', 'Black Market');

            const data = {
                name: "Expert's Demonic Staff T6",

                material1: "T6_PLANKS",
                material2:"T6_METALBAR",

                quantity1: 20,
                quantity2: 12,

                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }

    async T5_MAIN_CURSEDSTAFF () {
        try {
            const response = await axios.get(T5_MAIN_CURSEDSTAFF );
            const $ = cheerio.load(response.data);

            // Hàm tìm kiếm các hàng chứa tên thành phố cụ thể
            const findOrderByCity = (tableSelector, cityName) => {
                const orderRows = $(tableSelector + ' tbody tr');
                let orderData = null;

                orderRows.each(function () {
                    const city = $(this).find('td:nth-child(2)').text().trim();
                    if (city.includes(cityName)) {
                        orderData = {
                            city: city,
                            price: $(this).find('td:nth-child(3)').text().trim(),
                            lastUpdate: $(this).find('td:nth-child(4)').text().trim(),
                        };
                        return false; // Dừng vòng lặp khi tìm thấy hàng đầu tiên chứa tên thành phố cụ thể
                    }
                });

                return orderData;
            };

            // Tìm dữ liệu từ Sell Orders ở Martlock và Buy Orders ở Bridgewatch
            const sellOrderData = await findOrderByCity('#sellOrders', 'Black Market');
            const buyOrderData = await findOrderByCity('#buyOrders', 'Black Market');

            const data = {
                name: "Expert's Cursed Staff T5",

                material1: "T5_PLANKS",
                material2:"T5_METALBAR",

                quantity1: 16,
                quantity2: 18,

                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T5_MAIN_CURSEDSTAFF1() {
        try {
            const response = await axios.get(T5_MAIN_CURSEDSTAFF1);
            const $ = cheerio.load(response.data);

            // Hàm tìm kiếm các hàng chứa tên thành phố cụ thể
            const findOrderByCity = (tableSelector, cityName) => {
                const orderRows = $(tableSelector + ' tbody tr');
                let orderData = null;

                orderRows.each(function () {
                    const city = $(this).find('td:nth-child(2)').text().trim();
                    if (city.includes(cityName)) {
                        orderData = {
                            city: city,
                            price: $(this).find('td:nth-child(3)').text().trim(),
                            lastUpdate: $(this).find('td:nth-child(4)').text().trim(),
                        };
                        return false; // Dừng vòng lặp khi tìm thấy hàng đầu tiên chứa tên thành phố cụ thể
                    }
                });

                return orderData;
            };

            // Tìm dữ liệu từ Sell Orders ở Martlock và Buy Orders ở Bridgewatch
            const sellOrderData = await findOrderByCity('#sellOrders', 'Black Market');
            const buyOrderData = await findOrderByCity('#buyOrders', 'Black Market');

            const data = {
                name: "Expert's Cursed Staff T5.1",

                material1: "T5_PLANKS",
                material2:"T5_METALBAR",

                quantity1: 16,
                quantity2: 18,

                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T6_MAIN_CURSEDSTAFF () {
        try {
            const response = await axios.get(T6_MAIN_CURSEDSTAFF );
            const $ = cheerio.load(response.data);

            // Hàm tìm kiếm các hàng chứa tên thành phố cụ thể
            const findOrderByCity = (tableSelector, cityName) => {
                const orderRows = $(tableSelector + ' tbody tr');
                let orderData = null;

                orderRows.each(function () {
                    const city = $(this).find('td:nth-child(2)').text().trim();
                    if (city.includes(cityName)) {
                        orderData = {
                            city: city,
                            price: $(this).find('td:nth-child(3)').text().trim(),
                            lastUpdate: $(this).find('td:nth-child(4)').text().trim(),
                        };
                        return false; // Dừng vòng lặp khi tìm thấy hàng đầu tiên chứa tên thành phố cụ thể
                    }
                });

                return orderData;
            };

            // Tìm dữ liệu từ Sell Orders ở Martlock và Buy Orders ở Bridgewatch
            const sellOrderData = await findOrderByCity('#sellOrders', 'Black Market');
            const buyOrderData = await findOrderByCity('#buyOrders', 'Black Market');

            const data = {
                name: "Expert's Cursed Staff T6",

                material1: "T6_PLANKS",
                material2:"T6_METALBAR",

                quantity1: 16,
                quantity2: 18,

                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }

    async T5_ARMOR_PLATE_SET3 () {
        try {
            const response = await axios.get(T5_ARMOR_PLATE_SET3 );
            const $ = cheerio.load(response.data);

            // Hàm tìm kiếm các hàng chứa tên thành phố cụ thể
            const findOrderByCity = (tableSelector, cityName) => {
                const orderRows = $(tableSelector + ' tbody tr');
                let orderData = null;

                orderRows.each(function () {
                    const city = $(this).find('td:nth-child(2)').text().trim();
                    if (city.includes(cityName)) {
                        orderData = {
                            city: city,
                            price: $(this).find('td:nth-child(3)').text().trim(),
                            lastUpdate: $(this).find('td:nth-child(4)').text().trim(),
                        };
                        return false; // Dừng vòng lặp khi tìm thấy hàng đầu tiên chứa tên thành phố cụ thể
                    }
                });

                return orderData;
            };

            // Tìm dữ liệu từ Sell Orders ở Martlock và Buy Orders ở Bridgewatch
            const sellOrderData = await findOrderByCity('#sellOrders', 'Black Market');
            const buyOrderData = await findOrderByCity('#buyOrders', 'Black Market');

            const data = {
                name: "Expert's Guardian Armor T5",

                material1: "",
                material2:"T5_METALBAR",

                quantity1: 0,
                quantity2: 16,

                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T5_ARMOR_PLATE_SET31() {
        try {
            const response = await axios.get(T5_ARMOR_PLATE_SET31);
            const $ = cheerio.load(response.data);

            // Hàm tìm kiếm các hàng chứa tên thành phố cụ thể
            const findOrderByCity = (tableSelector, cityName) => {
                const orderRows = $(tableSelector + ' tbody tr');
                let orderData = null;

                orderRows.each(function () {
                    const city = $(this).find('td:nth-child(2)').text().trim();
                    if (city.includes(cityName)) {
                        orderData = {
                            city: city,
                            price: $(this).find('td:nth-child(3)').text().trim(),
                            lastUpdate: $(this).find('td:nth-child(4)').text().trim(),
                        };
                        return false; // Dừng vòng lặp khi tìm thấy hàng đầu tiên chứa tên thành phố cụ thể
                    }
                });

                return orderData;
            };

            // Tìm dữ liệu từ Sell Orders ở Martlock và Buy Orders ở Bridgewatch
            const sellOrderData = await findOrderByCity('#sellOrders', 'Black Market');
            const buyOrderData = await findOrderByCity('#buyOrders', 'Black Market');

            const data = {
                name: "Expert's Guardian Armor T5.1",

                material1: "",
                material2:"T5_METALBAR",

                quantity1: 0,
                quantity2: 16,

                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T6_ARMOR_PLATE_SET3 () {
        try {
            const response = await axios.get(T6_ARMOR_PLATE_SET3 );
            const $ = cheerio.load(response.data);

            // Hàm tìm kiếm các hàng chứa tên thành phố cụ thể
            const findOrderByCity = (tableSelector, cityName) => {
                const orderRows = $(tableSelector + ' tbody tr');
                let orderData = null;

                orderRows.each(function () {
                    const city = $(this).find('td:nth-child(2)').text().trim();
                    if (city.includes(cityName)) {
                        orderData = {
                            city: city,
                            price: $(this).find('td:nth-child(3)').text().trim(),
                            lastUpdate: $(this).find('td:nth-child(4)').text().trim(),
                        };
                        return false; // Dừng vòng lặp khi tìm thấy hàng đầu tiên chứa tên thành phố cụ thể
                    }
                });

                return orderData;
            };

            // Tìm dữ liệu từ Sell Orders ở Martlock và Buy Orders ở Bridgewatch
            const sellOrderData = await findOrderByCity('#sellOrders', 'Black Market');
            const buyOrderData = await findOrderByCity('#buyOrders', 'Black Market');

            const data = {
                name: "Expert's Guardian Armor T6",

                material1: "",
                material2:"T6_METALBAR",

                quantity1: 0,
                quantity2: 16,

                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }

    async T5_ARMOR_PLATE_SET2 () {
        try {
            const response = await axios.get(T5_ARMOR_PLATE_SET2 );
            const $ = cheerio.load(response.data);

            // Hàm tìm kiếm các hàng chứa tên thành phố cụ thể
            const findOrderByCity = (tableSelector, cityName) => {
                const orderRows = $(tableSelector + ' tbody tr');
                let orderData = null;

                orderRows.each(function () {
                    const city = $(this).find('td:nth-child(2)').text().trim();
                    if (city.includes(cityName)) {
                        orderData = {
                            city: city,
                            price: $(this).find('td:nth-child(3)').text().trim(),
                            lastUpdate: $(this).find('td:nth-child(4)').text().trim(),
                        };
                        return false; // Dừng vòng lặp khi tìm thấy hàng đầu tiên chứa tên thành phố cụ thể
                    }
                });

                return orderData;
            };

            // Tìm dữ liệu từ Sell Orders ở Martlock và Buy Orders ở Bridgewatch
            const sellOrderData = await findOrderByCity('#sellOrders', 'Black Market');
            const buyOrderData = await findOrderByCity('#buyOrders', 'Black Market');

            const data = {
                name: "Expert's Knight Armor T5",

                material1: "",
                material2:"T5_METALBAR",

                quantity1: 0,
                quantity2: 16,

                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T5_ARMOR_PLATE_SET21() {
        try {
            const response = await axios.get(T5_ARMOR_PLATE_SET21);
            const $ = cheerio.load(response.data);

            // Hàm tìm kiếm các hàng chứa tên thành phố cụ thể
            const findOrderByCity = (tableSelector, cityName) => {
                const orderRows = $(tableSelector + ' tbody tr');
                let orderData = null;

                orderRows.each(function () {
                    const city = $(this).find('td:nth-child(2)').text().trim();
                    if (city.includes(cityName)) {
                        orderData = {
                            city: city,
                            price: $(this).find('td:nth-child(3)').text().trim(),
                            lastUpdate: $(this).find('td:nth-child(4)').text().trim(),
                        };
                        return false; // Dừng vòng lặp khi tìm thấy hàng đầu tiên chứa tên thành phố cụ thể
                    }
                });

                return orderData;
            };

            // Tìm dữ liệu từ Sell Orders ở Martlock và Buy Orders ở Bridgewatch
            const sellOrderData = await findOrderByCity('#sellOrders', 'Black Market');
            const buyOrderData = await findOrderByCity('#buyOrders', 'Black Market');

            const data = {
                name: "Expert's Knight Armor T5.1",

                material1: "",
                material2:"T5_METALBAR",

                quantity1: 0,
                quantity2: 16,

                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T6_ARMOR_PLATE_SET2 () {
        try {
            const response = await axios.get(T6_ARMOR_PLATE_SET2 );
            const $ = cheerio.load(response.data);

            // Hàm tìm kiếm các hàng chứa tên thành phố cụ thể
            const findOrderByCity = (tableSelector, cityName) => {
                const orderRows = $(tableSelector + ' tbody tr');
                let orderData = null;

                orderRows.each(function () {
                    const city = $(this).find('td:nth-child(2)').text().trim();
                    if (city.includes(cityName)) {
                        orderData = {
                            city: city,
                            price: $(this).find('td:nth-child(3)').text().trim(),
                            lastUpdate: $(this).find('td:nth-child(4)').text().trim(),
                        };
                        return false; // Dừng vòng lặp khi tìm thấy hàng đầu tiên chứa tên thành phố cụ thể
                    }
                });

                return orderData;
            };

            // Tìm dữ liệu từ Sell Orders ở Martlock và Buy Orders ở Bridgewatch
            const sellOrderData = await findOrderByCity('#sellOrders', 'Black Market');
            const buyOrderData = await findOrderByCity('#buyOrders', 'Black Market');

            const data = {
                name: "Expert's Knight Armor T6",

                material1: "",
                material2:"T6_METALBAR",

                quantity1: 0,
                quantity2: 16,

                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }

    async T5_ARMOR_PLATE_SET1 () {
        try {
            const response = await axios.get(T5_ARMOR_PLATE_SET1 );
            const $ = cheerio.load(response.data);

            // Hàm tìm kiếm các hàng chứa tên thành phố cụ thể
            const findOrderByCity = (tableSelector, cityName) => {
                const orderRows = $(tableSelector + ' tbody tr');
                let orderData = null;

                orderRows.each(function () {
                    const city = $(this).find('td:nth-child(2)').text().trim();
                    if (city.includes(cityName)) {
                        orderData = {
                            city: city,
                            price: $(this).find('td:nth-child(3)').text().trim(),
                            lastUpdate: $(this).find('td:nth-child(4)').text().trim(),
                        };
                        return false; // Dừng vòng lặp khi tìm thấy hàng đầu tiên chứa tên thành phố cụ thể
                    }
                });

                return orderData;
            };

            // Tìm dữ liệu từ Sell Orders ở Martlock và Buy Orders ở Bridgewatch
            const sellOrderData = await findOrderByCity('#sellOrders', 'Black Market');
            const buyOrderData = await findOrderByCity('#buyOrders', 'Black Market');

            const data = {
                name: "Expert's Soldier Armor T5",

                material1: "",
                material2:"T5_METALBAR",

                quantity1: 0,
                quantity2: 16,

                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T5_ARMOR_PLATE_SET11() {
        try {
            const response = await axios.get(T5_ARMOR_PLATE_SET11);
            const $ = cheerio.load(response.data);

            // Hàm tìm kiếm các hàng chứa tên thành phố cụ thể
            const findOrderByCity = (tableSelector, cityName) => {
                const orderRows = $(tableSelector + ' tbody tr');
                let orderData = null;

                orderRows.each(function () {
                    const city = $(this).find('td:nth-child(2)').text().trim();
                    if (city.includes(cityName)) {
                        orderData = {
                            city: city,
                            price: $(this).find('td:nth-child(3)').text().trim(),
                            lastUpdate: $(this).find('td:nth-child(4)').text().trim(),
                        };
                        return false; // Dừng vòng lặp khi tìm thấy hàng đầu tiên chứa tên thành phố cụ thể
                    }
                });

                return orderData;
            };

            // Tìm dữ liệu từ Sell Orders ở Martlock và Buy Orders ở Bridgewatch
            const sellOrderData = await findOrderByCity('#sellOrders', 'Black Market');
            const buyOrderData = await findOrderByCity('#buyOrders', 'Black Market');

            const data = {
                name: "Expert's Soldier Armor T5.1",

                material1: "",
                material2:"T5_METALBAR",

                quantity1: 0,
                quantity2: 16,

                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T6_ARMOR_PLATE_SET1 () {
        try {
            const response = await axios.get(T6_ARMOR_PLATE_SET1 );
            const $ = cheerio.load(response.data);

            // Hàm tìm kiếm các hàng chứa tên thành phố cụ thể
            const findOrderByCity = (tableSelector, cityName) => {
                const orderRows = $(tableSelector + ' tbody tr');
                let orderData = null;

                orderRows.each(function () {
                    const city = $(this).find('td:nth-child(2)').text().trim();
                    if (city.includes(cityName)) {
                        orderData = {
                            city: city,
                            price: $(this).find('td:nth-child(3)').text().trim(),
                            lastUpdate: $(this).find('td:nth-child(4)').text().trim(),
                        };
                        return false; // Dừng vòng lặp khi tìm thấy hàng đầu tiên chứa tên thành phố cụ thể
                    }
                });

                return orderData;
            };

            // Tìm dữ liệu từ Sell Orders ở Martlock và Buy Orders ở Bridgewatch
            const sellOrderData = await findOrderByCity('#sellOrders', 'Black Market');
            const buyOrderData = await findOrderByCity('#buyOrders', 'Black Market');

            const data = {
                name: "Expert's Soldier Armor T6",

                material1: "",
                material2:"T5_METALBAR",

                quantity1: 0,
                quantity2: 16,

                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
   
    async T5_SHOES_CLOTH_SET3 () {
        try {
            const response = await axios.get(T5_SHOES_CLOTH_SET3 );
            const $ = cheerio.load(response.data);

            // Hàm tìm kiếm các hàng chứa tên thành phố cụ thể
            const findOrderByCity = (tableSelector, cityName) => {
                const orderRows = $(tableSelector + ' tbody tr');
                let orderData = null;

                orderRows.each(function () {
                    const city = $(this).find('td:nth-child(2)').text().trim();
                    if (city.includes(cityName)) {
                        orderData = {
                            city: city,
                            price: $(this).find('td:nth-child(3)').text().trim(),
                            lastUpdate: $(this).find('td:nth-child(4)').text().trim(),
                        };
                        return false; // Dừng vòng lặp khi tìm thấy hàng đầu tiên chứa tên thành phố cụ thể
                    }
                });

                return orderData;
            };

            // Tìm dữ liệu từ Sell Orders ở Martlock và Buy Orders ở Bridgewatch
            const sellOrderData = await findOrderByCity('#sellOrders', 'Black Market');
            const buyOrderData = await findOrderByCity('#buyOrders', 'Black Market');

            const data = {
                name: "Expert's Mage Sandals T5",

                material1: "",
                material2:"T5_CLOTH",

                quantity1: 0,
                quantity2: 8,

                

                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T5_SHOES_CLOTH_SET31() {
        try {
            const response = await axios.get(T5_SHOES_CLOTH_SET31);
            const $ = cheerio.load(response.data);

            // Hàm tìm kiếm các hàng chứa tên thành phố cụ thể
            const findOrderByCity = (tableSelector, cityName) => {
                const orderRows = $(tableSelector + ' tbody tr');
                let orderData = null;

                orderRows.each(function () {
                    const city = $(this).find('td:nth-child(2)').text().trim();
                    if (city.includes(cityName)) {
                        orderData = {
                            city: city,
                            price: $(this).find('td:nth-child(3)').text().trim(),
                            lastUpdate: $(this).find('td:nth-child(4)').text().trim(),
                        };
                        return false; // Dừng vòng lặp khi tìm thấy hàng đầu tiên chứa tên thành phố cụ thể
                    }
                });

                return orderData;
            };

            // Tìm dữ liệu từ Sell Orders ở Martlock và Buy Orders ở Bridgewatch
            const sellOrderData = await findOrderByCity('#sellOrders', 'Black Market');
            const buyOrderData = await findOrderByCity('#buyOrders', 'Black Market');

            const data = {
                name: "Expert's Mage Sandals T5.1",

                material1: "",
                material2:"T5_CLOTH",

                quantity1: 0,
                quantity2: 8,

                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T6_SHOES_CLOTH_SET3 () {
        try {
            const response = await axios.get(T6_SHOES_CLOTH_SET3 );
            const $ = cheerio.load(response.data);

            // Hàm tìm kiếm các hàng chứa tên thành phố cụ thể
            const findOrderByCity = (tableSelector, cityName) => {
                const orderRows = $(tableSelector + ' tbody tr');
                let orderData = null;

                orderRows.each(function () {
                    const city = $(this).find('td:nth-child(2)').text().trim();
                    if (city.includes(cityName)) {
                        orderData = {
                            city: city,
                            price: $(this).find('td:nth-child(3)').text().trim(),
                            lastUpdate: $(this).find('td:nth-child(4)').text().trim(),
                        };
                        return false; // Dừng vòng lặp khi tìm thấy hàng đầu tiên chứa tên thành phố cụ thể
                    }
                });

                return orderData;
            };

            // Tìm dữ liệu từ Sell Orders ở Martlock và Buy Orders ở Bridgewatch
            const sellOrderData = await findOrderByCity('#sellOrders', 'Black Market');
            const buyOrderData = await findOrderByCity('#buyOrders', 'Black Market');

            const data = {
                name: "Expert's Mage Sandals T6",

                material1: "",
                material2:"T6_CLOTH",

                quantity1: 0,
                quantity2: 8,

                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }

    async T5_SHOES_CLOTH_SET2 () {
        try {
            const response = await axios.get(T5_SHOES_CLOTH_SET2 );
            const $ = cheerio.load(response.data);

            // Hàm tìm kiếm các hàng chứa tên thành phố cụ thể
            const findOrderByCity = (tableSelector, cityName) => {
                const orderRows = $(tableSelector + ' tbody tr');
                let orderData = null;

                orderRows.each(function () {
                    const city = $(this).find('td:nth-child(2)').text().trim();
                    if (city.includes(cityName)) {
                        orderData = {
                            city: city,
                            price: $(this).find('td:nth-child(3)').text().trim(),
                            lastUpdate: $(this).find('td:nth-child(4)').text().trim(),
                        };
                        return false; // Dừng vòng lặp khi tìm thấy hàng đầu tiên chứa tên thành phố cụ thể
                    }
                });

                return orderData;
            };

            // Tìm dữ liệu từ Sell Orders ở Martlock và Buy Orders ở Bridgewatch
            const sellOrderData = await findOrderByCity('#sellOrders', 'Black Market');
            const buyOrderData = await findOrderByCity('#buyOrders', 'Black Market');

            const data = {
                name: "Expert's Cleric Sandals T5",

                material1: "",
                material2:"T5_CLOTH",

                quantity1: 0,
                quantity2: 8,

                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T5_SHOES_CLOTH_SET21() {
        try {
            const response = await axios.get(T5_SHOES_CLOTH_SET21);
            const $ = cheerio.load(response.data);

            // Hàm tìm kiếm các hàng chứa tên thành phố cụ thể
            const findOrderByCity = (tableSelector, cityName) => {
                const orderRows = $(tableSelector + ' tbody tr');
                let orderData = null;

                orderRows.each(function () {
                    const city = $(this).find('td:nth-child(2)').text().trim();
                    if (city.includes(cityName)) {
                        orderData = {
                            city: city,
                            price: $(this).find('td:nth-child(3)').text().trim(),
                            lastUpdate: $(this).find('td:nth-child(4)').text().trim(),
                        };
                        return false; // Dừng vòng lặp khi tìm thấy hàng đầu tiên chứa tên thành phố cụ thể
                    }
                });

                return orderData;
            };

            // Tìm dữ liệu từ Sell Orders ở Martlock và Buy Orders ở Bridgewatch
            const sellOrderData = await findOrderByCity('#sellOrders', 'Black Market');
            const buyOrderData = await findOrderByCity('#buyOrders', 'Black Market');

            const data = {
                name: "Expert's Cleric Sandals T5.1",

                material1: "",
                material2:"T5_CLOTH",

                quantity1: 0,
                quantity2: 8,

                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T6_SHOES_CLOTH_SET2 () {
        try {
            const response = await axios.get(T6_SHOES_CLOTH_SET2 );
            const $ = cheerio.load(response.data);

            // Hàm tìm kiếm các hàng chứa tên thành phố cụ thể
            const findOrderByCity = (tableSelector, cityName) => {
                const orderRows = $(tableSelector + ' tbody tr');
                let orderData = null;

                orderRows.each(function () {
                    const city = $(this).find('td:nth-child(2)').text().trim();
                    if (city.includes(cityName)) {
                        orderData = {
                            city: city,
                            price: $(this).find('td:nth-child(3)').text().trim(),
                            lastUpdate: $(this).find('td:nth-child(4)').text().trim(),
                        };
                        return false; // Dừng vòng lặp khi tìm thấy hàng đầu tiên chứa tên thành phố cụ thể
                    }
                });

                return orderData;
            };

            // Tìm dữ liệu từ Sell Orders ở Martlock và Buy Orders ở Bridgewatch
            const sellOrderData = await findOrderByCity('#sellOrders', 'Black Market');
            const buyOrderData = await findOrderByCity('#buyOrders', 'Black Market');

            const data = {
                name: "Expert's Cleric Sandals T6",

                material1: "",
                material2:"T6_CLOTH",

                quantity1: 0,
                quantity2: 8,

                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }

    async T5_SHOES_CLOTH_SET1 () {
        try {
            const response = await axios.get(T5_SHOES_CLOTH_SET1 );
            const $ = cheerio.load(response.data);

            // Hàm tìm kiếm các hàng chứa tên thành phố cụ thể
            const findOrderByCity = (tableSelector, cityName) => {
                const orderRows = $(tableSelector + ' tbody tr');
                let orderData = null;

                orderRows.each(function () {
                    const city = $(this).find('td:nth-child(2)').text().trim();
                    if (city.includes(cityName)) {
                        orderData = {
                            city: city,
                            price: $(this).find('td:nth-child(3)').text().trim(),
                            lastUpdate: $(this).find('td:nth-child(4)').text().trim(),
                        };
                        return false; // Dừng vòng lặp khi tìm thấy hàng đầu tiên chứa tên thành phố cụ thể
                    }
                });

                return orderData;
            };

            // Tìm dữ liệu từ Sell Orders ở Martlock và Buy Orders ở Bridgewatch
            const sellOrderData = await findOrderByCity('#sellOrders', 'Black Market');
            const buyOrderData = await findOrderByCity('#buyOrders', 'Black Market');

            const data = {
                name: "Expert's Scholar Sandals T5",

                material1: "",
                material2:"T5_CLOTH",

                quantity1: 0,
                quantity2: 8,

                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T5_SHOES_CLOTH_SET11() {
        try {
            const response = await axios.get(T5_SHOES_CLOTH_SET11);
            const $ = cheerio.load(response.data);

            // Hàm tìm kiếm các hàng chứa tên thành phố cụ thể
            const findOrderByCity = (tableSelector, cityName) => {
                const orderRows = $(tableSelector + ' tbody tr');
                let orderData = null;

                orderRows.each(function () {
                    const city = $(this).find('td:nth-child(2)').text().trim();
                    if (city.includes(cityName)) {
                        orderData = {
                            city: city,
                            price: $(this).find('td:nth-child(3)').text().trim(),
                            lastUpdate: $(this).find('td:nth-child(4)').text().trim(),
                        };
                        return false; // Dừng vòng lặp khi tìm thấy hàng đầu tiên chứa tên thành phố cụ thể
                    }
                });

                return orderData;
            };

            // Tìm dữ liệu từ Sell Orders ở Martlock và Buy Orders ở Bridgewatch
            const sellOrderData = await findOrderByCity('#sellOrders', 'Black Market');
            const buyOrderData = await findOrderByCity('#buyOrders', 'Black Market');

            const data = {
                name: "Expert's Scholar Sandals T5.1",

                material1: "",
                material2:"T5_CLOTH",

                quantity1: 0,
                quantity2: 8,

                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T6_SHOES_CLOTH_SET1 () {
        try {
            const response = await axios.get(T6_SHOES_CLOTH_SET1 );
            const $ = cheerio.load(response.data);

            // Hàm tìm kiếm các hàng chứa tên thành phố cụ thể
            const findOrderByCity = (tableSelector, cityName) => {
                const orderRows = $(tableSelector + ' tbody tr');
                let orderData = null;

                orderRows.each(function () {
                    const city = $(this).find('td:nth-child(2)').text().trim();
                    if (city.includes(cityName)) {
                        orderData = {
                            city: city,
                            price: $(this).find('td:nth-child(3)').text().trim(),
                            lastUpdate: $(this).find('td:nth-child(4)').text().trim(),
                        };
                        return false; // Dừng vòng lặp khi tìm thấy hàng đầu tiên chứa tên thành phố cụ thể
                    }
                });

                return orderData;
            };

            // Tìm dữ liệu từ Sell Orders ở Martlock và Buy Orders ở Bridgewatch
            const sellOrderData = await findOrderByCity('#sellOrders', 'Black Market');
            const buyOrderData = await findOrderByCity('#buyOrders', 'Black Market');

            const data = {
                name: "Expert's Scholar Sandals T6",

                material1: "",
                material2:"T6_CLOTH",

                quantity1: 0,
                quantity2: 8,

                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }



   
}

module.exports = new InputDBridgewatch;
