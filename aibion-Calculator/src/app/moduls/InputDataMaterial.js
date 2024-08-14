
const axios = require('axios');

const cheerio = require('cheerio');

const T2_STONEBLOC = "https://albiononlinetools.com/economy/item.php?itemPrice=T2_STONEBLOCK&server=east";
const T3_STONEBLOC = "https://albiononlinetools.com/economy/item.php?itemPrice=T3_STONEBLOCK&server=east";
const T4_STONEBLOC = "https://albiononlinetools.com/economy/item.php?itemPrice=T4_STONEBLOCK&server=east";
const T5_STONEBLOC = "https://albiononlinetools.com/economy/item.php?itemPrice=T5_STONEBLOCK&server=east";
const T6_STONEBLOC = "https://albiononlinetools.com/economy/item.php?itemPrice=T6_STONEBLOCK&server=east";
const T7_STONEBLOC = "https://albiononlinetools.com/economy/item.php?itemPrice=T7_STONEBLOCK&server=east";
const T8_STONEBLOC = "https://albiononlinetools.com/economy/item.php?itemPrice=T8_STONEBLOCK&server=east";

const T2_PLANKS = "https://albiononlinetools.com/economy/item.php?itemPrice=T2_PLANKS&server=east";
const T3_PLANKS = "https://albiononlinetools.com/economy/item.php?itemPrice=T3_PLANKS&server=east";
const T4_PLANKS = "https://albiononlinetools.com/economy/item.php?itemPrice=T4_PLANKS&server=east";
const T5_PLANKS = "https://albiononlinetools.com/economy/item.php?itemPrice=T5_PLANKS&server=east";
const T6_PLANKS = "https://albiononlinetools.com/economy/item.php?itemPrice=T6_PLANKS&server=east";
const T7_PLANKS = "https://albiononlinetools.com/economy/item.php?itemPrice=T7_PLANKS&server=east";
const T8_PLANKS = "https://albiononlinetools.com/economy/item.php?itemPrice=T8_PLANKS&server=east";

const T2_METALBAR = "https://albiononlinetools.com/economy/item.php?itemPrice=T2_METALBAR&server=east";
const T3_METALBAR = "https://albiononlinetools.com/economy/item.php?itemPrice=T3_METALBAR&server=east";
const T4_METALBAR = "https://albiononlinetools.com/economy/item.php?itemPrice=T4_METALBAR&server=east";
const T5_METALBAR = "https://albiononlinetools.com/economy/item.php?itemPrice=T5_METALBAR&server=east";
const T6_METALBAR = "https://albiononlinetools.com/economy/item.php?itemPrice=T6_METALBAR&server=east";
const T7_METALBAR = "https://albiononlinetools.com/economy/item.php?itemPrice=T7_METALBAR&server=east";
const T8_METALBAR = "https://albiononlinetools.com/economy/item.php?itemPrice=T8_METALBAR&server=east";

const T2_LEATHER = "https://albiononlinetools.com/economy/item.php?itemPrice=T2_LEATHER&server=east";
const T3_LEATHER = "https://albiononlinetools.com/economy/item.php?itemPrice=T3_LEATHER&server=east";
const T4_LEATHER = "https://albiononlinetools.com/economy/item.php?itemPrice=T4_LEATHER&server=east";
const T5_LEATHER = "https://albiononlinetools.com/economy/item.php?itemPrice=T5_LEATHER&server=east";
const T6_LEATHER = "https://albiononlinetools.com/economy/item.php?itemPrice=T6_LEATHER&server=east";
const T7_LEATHER = "https://albiononlinetools.com/economy/item.php?itemPrice=T7_LEATHER&server=east";
const T8_LEATHER = "https://albiononlinetools.com/economy/item.php?itemPrice=T8_LEATHER&server=east";

const T2_CLOTH = "https://albiononlinetools.com/economy/item.php?itemPrice=T2_CLOTH&server=east";
const T3_CLOTH = "https://albiononlinetools.com/economy/item.php?itemPrice=T3_CLOTH&server=east";
const T4_CLOTH = "https://albiononlinetools.com/economy/item.php?itemPrice=T4_CLOTH&server=east";
const T5_CLOTH = "https://albiononlinetools.com/economy/item.php?itemPrice=T5_CLOTH&server=east";
const T6_CLOTH = "https://albiononlinetools.com/economy/item.php?itemPrice=T6_CLOTH&server=east";
const T7_CLOTH = "https://albiononlinetools.com/economy/item.php?itemPrice=T7_CLOTH&server=east";
const T8_CLOTH = "https://albiononlinetools.com/economy/item.php?itemPrice=T8_CLOTH&server=east";

class InputDataMaterial {
        //Material
        async T2_STONEBLOC() {
            try {
                const response = await axios.get(T2_STONEBLOC);
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
                    name: "T2_STONEBLOC",

                

                    sellOrder: sellOrderData,
                    buyOrder: buyOrderData,
                };
    
                return data;
            } catch (error) {
                console.error('Lỗi khi lấy dữ liệu:', error);
                throw error;
            }
        }
        async T3_STONEBLOC() {
            try {
                const response = await axios.get(T3_STONEBLOC);
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
                    name: "T3_STONEBLOC",

                    material1: "T2_STONEBLOC",
                    material2: "T3_ROCK",

                    quantity1:1,
                    quantity2:2,

                    sellOrder: sellOrderData,
                    buyOrder: buyOrderData,
                };
    
                return data;
            } catch (error) {
                console.error('Lỗi khi lấy dữ liệu:', error);
                throw error;
            }
        }
    
        async T4_STONEBLOC() {
            try {
                const response = await axios.get(T4_STONEBLOC);
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
                    name: "T4_STONEBLOC",

                    material1: "T3_STONEBLOC",
                    material2: "T4_ROCK",

                    quantity1:1,
                    quantity2:2,

                    sellOrder: sellOrderData,
                    buyOrder: buyOrderData,
                };
    
                return data;
            } catch (error) {
                console.error('Lỗi khi lấy dữ liệu:', error);
                throw error;
            }
        }
    
        async T5_STONEBLOC() {
            try {
                const response = await axios.get(T5_STONEBLOC);
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
                    name: "T5_STONEBLOC",

                    material1: "T4_STONEBLOC",
                    material2: "T5_ROCK",

                    quantity1:1,
                    quantity2:3,

                    sellOrder: sellOrderData,
                    buyOrder: buyOrderData,
                };
    
                return data;
            } catch (error) {
                console.error('Lỗi khi lấy dữ liệu:', error);
                throw error;
            }
        }
    
        async T6_STONEBLOC() {
            try {
                const response = await axios.get(T6_STONEBLOC);
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
                    name: "T6_STONEBLOC",

                    material1: "T5_STONEBLOC",
                    material2: "T6_ROCK",

                    quantity1:1,
                    quantity2:4,

                    sellOrder: sellOrderData,
                    buyOrder: buyOrderData,
                };
    
                return data;
            } catch (error) {
                console.error('Lỗi khi lấy dữ liệu:', error);
                throw error;
            }
        }
    
        async T7_STONEBLOC() {
            try {
                const response = await axios.get(T7_STONEBLOC);
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
                    name: "T7_STONEBLOC",

                    material1: "T6_STONEBLOC",
                    material2: "T7_ROCK",

                    quantity1:1,
                    quantity2:5,

                    sellOrder: sellOrderData,
                    buyOrder: buyOrderData,
                };
    
                return data;
            } catch (error) {
                console.error('Lỗi khi lấy dữ liệu:', error);
                throw error;
            }
        }
    
        async T8_STONEBLOC() {
            try {
                const response = await axios.get(T8_STONEBLOC);
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
                    name: "T8_STONEBLOC",

                    material1: "T7_STONEBLOC",
                    material2: "T8_ROCK",

                    quantity1:1,
                    quantity2:5,

                    sellOrder: sellOrderData,
                    buyOrder: buyOrderData,
                };
    
                return data;
            } catch (error) {
                console.error('Lỗi khi lấy dữ liệu:', error);
                throw error;
            }
        }


        async T2_PLANKS() {
            try {
                const response = await axios.get(T2_PLANKS);
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
                const sellOrderData = await findOrderByCity('#sellOrders', 'Fort Sterling');
                const buyOrderData = await findOrderByCity('#buyOrders', 'Fort Sterling');
    
                const data = {
                    name: "T2_PLANKS",
                    sellOrder: sellOrderData,
                    buyOrder: buyOrderData,
                };
    
                return data;
            } catch (error) {
                console.error('Lỗi khi lấy dữ liệu:', error);
                throw error;
            }
        }

        async T3_PLANKS() {
            try {
                const response = await axios.get(T3_PLANKS);
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
                const sellOrderData = await findOrderByCity('#sellOrders', 'Fort Sterling');
                const buyOrderData = await findOrderByCity('#buyOrders', 'Fort Sterling');
    
                const data = {
                    name: "T3_PLANKS",

                    material1: "T2_PLANKS",
                    material2: "T3_WOOD",

                    quantity1:1,
                    quantity2:2,

                    sellOrder: sellOrderData,
                    buyOrder: buyOrderData,
                };
    
                return data;
            } catch (error) {
                console.error('Lỗi khi lấy dữ liệu:', error);
                throw error;
            }
        }
    
        async T4_PLANKS() {
            try {
                const response = await axios.get(T4_PLANKS);
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
    
                // Tìm dữ liệu từ Sell Orders ở Martlock và Buy Orders ở Fort Sterling
                const sellOrderData = await findOrderByCity('#sellOrders', 'Fort Sterling');
                const buyOrderData = await findOrderByCity('#buyOrders', 'Fort Sterling');
    
                const data = {
                    name: "T4_PLANKS",

                    material1: "T3_PLANKS",
                    material2: "T4_WOOD",

                    quantity1:1,
                    quantity2:2,

                    sellOrder: sellOrderData,
                    buyOrder: buyOrderData,
                };
    
                return data;
            } catch (error) {
                console.error('Lỗi khi lấy dữ liệu:', error);
                throw error;
            }
        }
    
        async T5_PLANKS() {
            try {
                const response = await axios.get(T5_PLANKS);
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
    
                // Tìm dữ liệu từ Sell Orders ở Martlock và Buy Orders ở Fort Sterling
                const sellOrderData = await findOrderByCity('#sellOrders', 'Fort Sterling');
                const buyOrderData = await findOrderByCity('#buyOrders', 'Fort Sterling');
    
                const data = {
                    name: "T5_PLANKS",

                    material1: "T4_PLANKS",
                    material2: "T5_WOOD",

                    quantity1:1,
                    quantity2:3,

                    sellOrder: sellOrderData,
                    buyOrder: buyOrderData,
                };
    
                return data;
            } catch (error) {
                console.error('Lỗi khi lấy dữ liệu:', error);
                throw error;
            }
        }
    
        async T6_PLANKS() {
            try {
                const response = await axios.get(T6_PLANKS);
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
    
                // Tìm dữ liệu từ Sell Orders ở Martlock và Buy Orders ở Fort Sterling
                const sellOrderData = await findOrderByCity('#sellOrders', 'Fort Sterling');
                const buyOrderData = await findOrderByCity('#buyOrders', 'Fort Sterling');
    
                const data = {
                    name: "T6_PLANKS",

                    material1: "T5_PLANKS",
                    material2: "T6_WOOD",

                    quantity1:1,
                    quantity2:4,

                    sellOrder: sellOrderData,
                    buyOrder: buyOrderData,
                };
    
                return data;
            } catch (error) {
                console.error('Lỗi khi lấy dữ liệu:', error);
                throw error;
            }
        }
    
        async T7_PLANKS() {
            try {
                const response = await axios.get(T7_PLANKS);
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
    
                // Tìm dữ liệu từ Sell Orders ở Martlock và Buy Orders ở Fort Sterling
                const sellOrderData = await findOrderByCity('#sellOrders', 'Fort Sterling');
                const buyOrderData = await findOrderByCity('#buyOrders', 'Fort Sterling');
    
                const data = {
                    name: "T7_PLANKS",

                    material1: "T6_PLANKS",
                    material2: "T7_WOOD",

                    quantity1:1,
                    quantity2:5,

                    sellOrder: sellOrderData,
                    buyOrder: buyOrderData,
                };
    
                return data;
            } catch (error) {
                console.error('Lỗi khi lấy dữ liệu:', error);
                throw error;
            }
        }
    
        async T8_PLANKS() {
            try {
                const response = await axios.get(T8_PLANKS);
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
    
                // Tìm dữ liệu từ Sell Orders ở Martlock và Buy Orders ở Fort Sterling
                const sellOrderData = await findOrderByCity('#sellOrders', 'Fort Sterling');
                const buyOrderData = await findOrderByCity('#buyOrders', 'Fort Sterling');
    
                const data = {
                    name: "T8_PLANKS",

                    material1: "T7_PLANKS",
                    material2: "T8_WOOD",

                    quantity1:1,
                    quantity2:5,

                    sellOrder: sellOrderData,
                    buyOrder: buyOrderData,
                };
    
                return data;
            } catch (error) {
                console.error('Lỗi khi lấy dữ liệu:', error);
                throw error;
            }
        }

        
        async T2_METALBAR() {
            try {
                const response = await axios.get(T2_METALBAR);
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
                const sellOrderData = await findOrderByCity('#sellOrders', 'Thetford');
                const buyOrderData = await findOrderByCity('#buyOrders', 'Thetford');
    
                const data = {
                    name: "T2_METALBAR",
                    sellOrder: sellOrderData,
                    buyOrder: buyOrderData,
                };
    
                return data;
            } catch (error) {
                console.error('Lỗi khi lấy dữ liệu:', error);
                throw error;
            }
        }
        async T3_METALBAR() {
            try {
                const response = await axios.get(T3_METALBAR);
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
                const sellOrderData = await findOrderByCity('#sellOrders', 'Thetford');
                const buyOrderData = await findOrderByCity('#buyOrders', 'Thetford');
    
                const data = {
                    name: "T3_METALBAR",

                    material1: "T2_METALBAR",
                    material2: "T3_ORE",

                    quantity1:1,
                    quantity2:2,

                    sellOrder: sellOrderData,
                    buyOrder: buyOrderData,
                };
    
                return data;
            } catch (error) {
                console.error('Lỗi khi lấy dữ liệu:', error);
                throw error;
            }
        }
    
        async T4_METALBAR() {
            try {
                const response = await axios.get(T4_METALBAR);
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
    
                // Tìm dữ liệu từ Sell Orders ở Martlock và Buy Orders ở Thetford
                const sellOrderData = await findOrderByCity('#sellOrders', 'Thetford');
                const buyOrderData = await findOrderByCity('#buyOrders', 'Thetford');
    
                const data = {
                    name: "T4_METALBAR",

                    material1: "T3_METALBAR",
                    material2: "T4_ORE",

                    quantity1:1,
                    quantity2:2,

                    sellOrder: sellOrderData,
                    buyOrder: buyOrderData,
                };
    
                return data;
            } catch (error) {
                console.error('Lỗi khi lấy dữ liệu:', error);
                throw error;
            }
        }
    
        async T5_METALBAR() {
            try {
                const response = await axios.get(T5_METALBAR);
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
    
                // Tìm dữ liệu từ Sell Orders ở Martlock và Buy Orders ở Thetford
                const sellOrderData = await findOrderByCity('#sellOrders', 'Thetford');
                const buyOrderData = await findOrderByCity('#buyOrders', 'Thetford');
    
                const data = {
                    name: "T5_METALBAR",

                    material1: "T4_METALBAR",
                    material2: "T5_ORE",

                    quantity1:1,
                    quantity2:3,

                    sellOrder: sellOrderData,
                    buyOrder: buyOrderData,
                };
    
                return data;
            } catch (error) {
                console.error('Lỗi khi lấy dữ liệu:', error);
                throw error;
            }
        }
    
        async T6_METALBAR() {
            try {
                const response = await axios.get(T6_METALBAR);
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
    
                // Tìm dữ liệu từ Sell Orders ở Martlock và Buy Orders ở Thetford
                const sellOrderData = await findOrderByCity('#sellOrders', 'Thetford');
                const buyOrderData = await findOrderByCity('#buyOrders', 'Thetford');
    
                const data = {
                    name: "T6_METALBAR",

                    material1: "T5_METALBAR",
                    material2: "T6_ORE",

                    quantity1:1,
                    quantity2:4,

                    sellOrder: sellOrderData,
                    buyOrder: buyOrderData,
                };
    
                return data;
            } catch (error) {
                console.error('Lỗi khi lấy dữ liệu:', error);
                throw error;
            }
        }
    
        async T7_METALBAR() {
            try {
                const response = await axios.get(T7_METALBAR);
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
    
                // Tìm dữ liệu từ Sell Orders ở Martlock và Buy Orders ở Thetford
                const sellOrderData = await findOrderByCity('#sellOrders', 'Thetford');
                const buyOrderData = await findOrderByCity('#buyOrders', 'Thetford');
    
                const data = {
                    name: "T7_METALBAR",

                    material1: "T6_METALBAR",
                    material2: "T7_ORE",

                    quantity1:1,
                    quantity2:5,

                    sellOrder: sellOrderData,
                    buyOrder: buyOrderData,
                };
    
                return data;
            } catch (error) {
                console.error('Lỗi khi lấy dữ liệu:', error);
                throw error;
            }
        }
    
        async T8_METALBAR() {
            try {
                const response = await axios.get(T8_METALBAR);
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
    
                // Tìm dữ liệu từ Sell Orders ở Martlock và Buy Orders ở Thetford
                const sellOrderData = await findOrderByCity('#sellOrders', 'Thetford');
                const buyOrderData = await findOrderByCity('#buyOrders', 'Thetford');
    
                const data = {
                    name: "T8_METALBAR",

                    material1: "T7_METALBAR",
                    material2: "T8_ORE",

                    quantity1:1,
                    quantity2:5,

                    sellOrder: sellOrderData,
                    buyOrder: buyOrderData,
                };
    
                return data;
            } catch (error) {
                console.error('Lỗi khi lấy dữ liệu:', error);
                throw error;
            }
        }
    

        async T2_LEATHER() {
            try {
                const response = await axios.get(T2_LEATHER);
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
                const sellOrderData = await findOrderByCity('#sellOrders', 'Martlock');
                const buyOrderData = await findOrderByCity('#buyOrders', 'Martlock');
    
                const data = {
                    name: "T2_LEATHER",
                    sellOrder: sellOrderData,
                    buyOrder: buyOrderData,
                };
    
                return data;
            } catch (error) {
                console.error('Lỗi khi lấy dữ liệu:', error);
                throw error;
            }
        }

        async T3_LEATHER() {
            try {
                const response = await axios.get(T3_LEATHER);
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
                const sellOrderData = await findOrderByCity('#sellOrders', 'Martlock');
                const buyOrderData = await findOrderByCity('#buyOrders', 'Martlock');
    
                const data = {
                    name: "T3_LEATHER",

                    material1: "T2_LEATHER",
                    material2: "Hide_T3",

                    quantity1:1,
                    quantity2:2,

                    sellOrder: sellOrderData,
                    buyOrder: buyOrderData,
                };
    
                return data;
            } catch (error) {
                console.error('Lỗi khi lấy dữ liệu:', error);
                throw error;
            }
        }
    
        async T4_LEATHER() {
            try {
                const response = await axios.get(T4_LEATHER);
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
    
                // Tìm dữ liệu từ Sell Orders ở Martlock và Buy Orders ở Martlock
                const sellOrderData = await findOrderByCity('#sellOrders', 'Martlock');
                const buyOrderData = await findOrderByCity('#buyOrders', 'Martlock');
    
                const data = {
                    name: "T4_LEATHER",

                    material1: "T3_LEATHER",
                    material2: "Hide_T4",

                    quantity1:1,
                    quantity2:2,

                    sellOrder: sellOrderData,
                    buyOrder: buyOrderData,
                };
    
                return data;
            } catch (error) {
                console.error('Lỗi khi lấy dữ liệu:', error);
                throw error;
            }
        }
    
        async T5_LEATHER() {
            try {
                const response = await axios.get(T5_LEATHER);
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
    
                // Tìm dữ liệu từ Sell Orders ở Martlock và Buy Orders ở Martlock
                const sellOrderData = await findOrderByCity('#sellOrders', 'Martlock');
                const buyOrderData = await findOrderByCity('#buyOrders', 'Martlock');
    
                const data = {
                    name: "T5_LEATHER",

                    material1: "T4_LEATHER",
                    material2: "Hide_T5",

                    quantity1:1,
                    quantity2:3,

                    sellOrder: sellOrderData,
                    buyOrder: buyOrderData,
                };
    
                return data;
            } catch (error) {
                console.error('Lỗi khi lấy dữ liệu:', error);
                throw error;
            }
        }
    
        async T6_LEATHER() {
            try {
                const response = await axios.get(T6_LEATHER);
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
    
                // Tìm dữ liệu từ Sell Orders ở Martlock và Buy Orders ở Martlock
                const sellOrderData = await findOrderByCity('#sellOrders', 'Martlock');
                const buyOrderData = await findOrderByCity('#buyOrders', 'Martlock');
    
                const data = {
                    name: "T6_LEATHER",

                    material1: "T5_LEATHER",
                    material2: "Hide_T6",

                    quantity1:1,
                    quantity2:4,

                    sellOrder: sellOrderData,
                    buyOrder: buyOrderData,
                };
    
                return data;
            } catch (error) {
                console.error('Lỗi khi lấy dữ liệu:', error);
                throw error;
            }
        }
    
        async T7_LEATHER() {
            try {
                const response = await axios.get(T7_LEATHER);
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
    
                // Tìm dữ liệu từ Sell Orders ở Martlock và Buy Orders ở Martlock
                const sellOrderData = await findOrderByCity('#sellOrders', 'Martlock');
                const buyOrderData = await findOrderByCity('#buyOrders', 'Martlock');
    
                const data = {
                    name: "T7_LEATHER",

                    material1: "T6_LEATHER",
                    material2: "Hide_T7",

                    quantity1:1,
                    quantity2:5,

                    sellOrder: sellOrderData,
                    buyOrder: buyOrderData,
                };
    
                return data;
            } catch (error) {
                console.error('Lỗi khi lấy dữ liệu:', error);
                throw error;
            }
        }
    
        async T8_LEATHER() {
            try {
                const response = await axios.get(T8_LEATHER);
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
    
                // Tìm dữ liệu từ Sell Orders ở Martlock và Buy Orders ở Martlock
                const sellOrderData = await findOrderByCity('#sellOrders', 'Martlock');
                const buyOrderData = await findOrderByCity('#buyOrders', 'Martlock');
    
                const data = {
                    name: "T8_LEATHER",

                    material1: "T7_LEATHER",
                    material2: "Hide_T8",

                    quantity1:1,
                    quantity2:5,

                    sellOrder: sellOrderData,
                    buyOrder: buyOrderData,
                };
    
                return data;
            } catch (error) {
                console.error('Lỗi khi lấy dữ liệu:', error);
                throw error;
            }
        }
    
        async T2_CLOTH() {
            try {
                const response = await axios.get(T2_CLOTH);
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
                const sellOrderData = await findOrderByCity('#sellOrders', 'Lymhurst');
                const buyOrderData = await findOrderByCity('#buyOrders', 'Lymhurst');
    
                const data = {
                    name: "T2_CLOTH",
                    sellOrder: sellOrderData,
                    buyOrder: buyOrderData,
                };
    
                return data;
            } catch (error) {
                console.error('Lỗi khi lấy dữ liệu:', error);
                throw error;
            }
        }
        
        async T3_CLOTH() {
            try {
                const response = await axios.get(T3_CLOTH);
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
                const sellOrderData = await findOrderByCity('#sellOrders', 'Lymhurst');
                const buyOrderData = await findOrderByCity('#buyOrders', 'Lymhurst');
    
                const data = {
                    name: "T3_CLOTH",

                    material1: "T2_CLOTH",
                    material2: "T3_FIBER",

                    quantity1:1,
                    quantity2:2,

                    sellOrder: sellOrderData,
                    buyOrder: buyOrderData,
                };
    
                return data;
            } catch (error) {
                console.error('Lỗi khi lấy dữ liệu:', error);
                throw error;
            }
        }
    
        async T4_CLOTH() {
            try {
                const response = await axios.get(T4_CLOTH);
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
    
                // Tìm dữ liệu từ Sell Orders ở Lymhurst và Buy Orders ở Lymhurst
                const sellOrderData = await findOrderByCity('#sellOrders', 'Lymhurst');
                const buyOrderData = await findOrderByCity('#buyOrders', 'Lymhurst');
    
                const data = {
                    name: "T4_CLOTH",

                    material1: "T3_CLOTH",
                    material2: "T4_FIBER",

                    quantity1:1,
                    quantity2:2,

                    sellOrder: sellOrderData,
                    buyOrder: buyOrderData,
                };
    
                return data;
            } catch (error) {
                console.error('Lỗi khi lấy dữ liệu:', error);
                throw error;
            }
        }
    
        async T5_CLOTH() {
            try {
                const response = await axios.get(T5_CLOTH);
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
    
                // Tìm dữ liệu từ Sell Orders ở Lymhurst và Buy Orders ở Lymhurst
                const sellOrderData = await findOrderByCity('#sellOrders', 'Lymhurst');
                const buyOrderData = await findOrderByCity('#buyOrders', 'Lymhurst');
    
                const data = {
                    name: "T5_CLOTH",

                    material1: "T4_CLOTH",
                    material2: "T5_FIBER",

                    quantity1:1,
                    quantity2:3,

                    sellOrder: sellOrderData,
                    buyOrder: buyOrderData,
                };
    
                return data;
            } catch (error) {
                console.error('Lỗi khi lấy dữ liệu:', error);
                throw error;
            }
        }
    
        async T6_CLOTH() {
            try {
                const response = await axios.get(T6_CLOTH);
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
    
                // Tìm dữ liệu từ Sell Orders ở Lymhurst và Buy Orders ở Lymhurst
                const sellOrderData = await findOrderByCity('#sellOrders', 'Lymhurst');
                const buyOrderData = await findOrderByCity('#buyOrders', 'Lymhurst');
    
                const data = {
                    name: "T6_CLOTH",

                    material1: "T5_CLOTH",
                    material2: "T6_FIBER",

                    quantity1:1,
                    quantity2:4,

                    sellOrder: sellOrderData,
                    buyOrder: buyOrderData,
                };
    
                return data;
            } catch (error) {
                console.error('Lỗi khi lấy dữ liệu:', error);
                throw error;
            }
        }
    
        async T7_CLOTH() {
            try {
                const response = await axios.get(T7_CLOTH);
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
    
                // Tìm dữ liệu từ Sell Orders ở Lymhurst và Buy Orders ở Lymhurst
                const sellOrderData = await findOrderByCity('#sellOrders', 'Lymhurst');
                const buyOrderData = await findOrderByCity('#buyOrders', 'Lymhurst');
    
                const data = {
                    name: "T7_CLOTH",

                    material1: "T6_CLOTH",
                    material2: "T7_FIBER",

                    quantity1:1,
                    quantity2:5,

                    sellOrder: sellOrderData,
                    buyOrder: buyOrderData,
                };
    
                return data;
            } catch (error) {
                console.error('Lỗi khi lấy dữ liệu:', error);
                throw error;
            }
        }
    
        async T8_CLOTH() {
            try {
                const response = await axios.get(T8_CLOTH);
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
    
                // Tìm dữ liệu từ Sell Orders ở Lymhurst và Buy Orders ở Lymhurst
                const sellOrderData = await findOrderByCity('#sellOrders', 'Lymhurst');
                const buyOrderData = await findOrderByCity('#buyOrders', 'Lymhurst');
    
                const data = {
                    name: "T8_CLOTH",

                    material1: "T7_CLOTH",
                    material2: "T8_FIBER",

                    quantity1:1,
                    quantity2:5,

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

module.exports = new InputDataMaterial;