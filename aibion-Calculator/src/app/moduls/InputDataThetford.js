const axios = require('axios');

const cheerio = require('cheerio');

//gather raw
const T3_FIBER = 'https://albiononlinetools.com/economy/item.php?itemPrice=T3_FIBER&server=east#price_search';
const T4_FIBER = 'https://albiononlinetools.com/economy/item.php?itemPrice=T4_FIBER&server=east#price_search';
const T5_FIBER = 'https://albiononlinetools.com/economy/item.php?itemPrice=T5_FIBER&server=east#price_search';
const T6_FIBER = 'https://albiononlinetools.com/economy/item.php?itemPrice=T6_FIBER&server=east#price_search';
const T7_FIBER = 'https://albiononlinetools.com/economy/item.php?itemPrice=T7_FIBER&server=east#price_search';
const T8_FIBER = 'https://albiononlinetools.com/economy/item.php?itemPrice=T8_FIBER&server=east#price_search';
//farm
const T2_AGARIC  = 'https://albiononlinetools.com/economy/item.php?itemPrice=T2_AGARIC   &server=east#price_search';
const T5_CABBAGE = 'https://albiononlinetools.com/economy/item.php?itemPrice=T5_CABBAGE&server=east#price_search';
const T7_MULLEIN = 'https://albiononlinetools.com/economy/item.php?itemPrice=T7_MULLEIN&server=east#price_search';
//craft

const T5_MAIN_MACE = "https://albiononlinetools.com/economy/item.php?itemPrice=T5_MAIN_MACE&server=east";
const T5_MAIN_MACE1 = "https://albiononlinetools.com/economy/item.php?itemPrice=T5_MAIN_MACE@1&server=east";
const T6_MAIN_MACE = "https://albiononlinetools.com/economy/item.php?itemPrice=T6_MAIN_MACE&server=east";

const T5_2H_MACE = "https://albiononlinetools.com/economy/item.php?itemPrice=T5_2H_MACE&server=east";
const T5_2H_MACE1 = "https://albiononlinetools.com/economy/item.php?itemPrice=T5_2H_MACE@1&server=east";
const T6_2H_MACE = "https://albiononlinetools.com/economy/item.php?itemPrice=T6_2H_MACE&server=east";

const T5_2H_FLAIL = "https://albiononlinetools.com/economy/item.php?itemPrice=T5_2H_FLAIL&server=east";
const T5_2H_FLAIL1 = "https://albiononlinetools.com/economy/item.php?itemPrice=T5_2H_FLAIL@1&server=east";
const T6_2H_FLAIL = "https://albiononlinetools.com/economy/item.php?itemPrice=T6_2H_FLAIL&server=east";

const T5_MAIN_NATURESTAFF = "https://albiononlinetools.com/economy/item.php?itemPrice=T5_MAIN_NATURESTAFF&server=east";
const T5_MAIN_NATURESTAFF1 = "https://albiononlinetools.com/economy/item.php?itemPrice=T5_MAIN_NATURESTAFF@1&server=east";
const T6_MAIN_NATURESTAFF = "https://albiononlinetools.com/economy/item.php?itemPrice=T6_MAIN_NATURESTAFF&server=east";

const T5_2H_WILDSTAFF = "https://albiononlinetools.com/economy/item.php?itemPrice=T5_2H_WILDSTAFF&server=east";
const T5_2H_WILDSTAFF1 = "https://albiononlinetools.com/economy/item.php?itemPrice=T5_2H_WILDSTAFF@1&server=east";
const T6_2H_WILDSTAFF = "https://albiononlinetools.com/economy/item.php?itemPrice=T6_2H_WILDSTAFF&server=east";

const T5_2H_NATURESTAFF = "https://albiononlinetools.com/economy/item.php?itemPrice=T5_2H_NATURESTAFF&server=east";
const T5_2H_NATURESTAFF1 = "https://albiononlinetools.com/economy/item.php?itemPrice=T5_2H_NATURESTAFF@1&server=east";
const T6_2H_NATURESTAFF = "https://albiononlinetools.com/economy/item.php?itemPrice=T6_2H_NATURESTAFF&server=east";


const T5_MAIN_FIRESTAFF = "https://albiononlinetools.com/economy/item.php?itemPrice=T5_MAIN_FIRESTAFF&server=east";
const T5_MAIN_FIRESTAFF1 = "https://albiononlinetools.com/economy/item.php?itemPrice=T5_MAIN_FIRESTAFF@1&server=east";
const T6_MAIN_FIRESTAFF = "https://albiononlinetools.com/economy/item.php?itemPrice=T6_MAIN_FIRESTAFF&server=east";

const T5_2H_INFERNOSTAFF = "https://albiononlinetools.com/economy/item.php?itemPrice=T5_2H_INFERNOSTAFF&server=east";
const T5_2H_INFERNOSTAFF1 = "https://albiononlinetools.com/economy/item.php?itemPrice=T5_2H_INFERNOSTAFF@1&server=east";
const T6_2H_INFERNOSTAFF = "https://albiononlinetools.com/economy/item.php?itemPrice=T6_2H_INFERNOSTAFF&server=east";

const T5_2H_FIRESTAFF = "https://albiononlinetools.com/economy/item.php?itemPrice=T5_2H_FIRESTAFF&server=east";
const T5_2H_FIRESTAFF1 = "https://albiononlinetools.com/economy/item.php?itemPrice=T5_2H_FIRESTAFF@1&server=east";
const T6_2H_FIRESTAFF = "https://albiononlinetools.com/economy/item.php?itemPrice=T6_2H_FIRESTAFF&server=east";

const T5_ARMOR_LEATHER_SET1 = "https://albiononlinetools.com/economy/item.php?itemPrice=T5_ARMOR_LEATHER_SET1&server=east";
const T5_ARMOR_LEATHER_SET11 = "https://albiononlinetools.com/economy/item.php?itemPrice=T5_ARMOR_LEATHER_SET1@1&server=east";
const T6_ARMOR_LEATHER_SET1 = "https://albiononlinetools.com/economy/item.php?itemPrice=T6_ARMOR_LEATHER_SET1&server=east";

const T5_ARMOR_LEATHER_SET2 = "https://albiononlinetools.com/economy/item.php?itemPrice=T5_ARMOR_LEATHER_SET2&server=east";
const T5_ARMOR_LEATHER_SET21 = "https://albiononlinetools.com/economy/item.php?itemPrice=T5_ARMOR_LEATHER_SET2@1&server=east";
const T6_ARMOR_LEATHER_SET2 = "https://albiononlinetools.com/economy/item.php?itemPrice=T6_ARMOR_LEATHER_SET2&server=east";

const T5_ARMOR_LEATHER_SET3 = "https://albiononlinetools.com/economy/item.php?itemPrice=T5_ARMOR_LEATHER_SET3&server=east";
const T5_ARMOR_LEATHER_SET31 = "https://albiononlinetools.com/economy/item.php?itemPrice=T5_ARMOR_LEATHER_SET3@1&server=east";
const T6_ARMOR_LEATHER_SET3 = "https://albiononlinetools.com/economy/item.php?itemPrice=T6_ARMOR_LEATHER_SET3&server=east";


const T5_HEAD_CLOTH_SET1 = "https://albiononlinetools.com/economy/item.php?itemPrice=T5_HEAD_CLOTH_SET1&server=east";
const T5_HEAD_CLOTH_SET11 = "https://albiononlinetools.com/economy/item.php?itemPrice=T5_HEAD_CLOTH_SET1@1&server=east";
const T6_HEAD_CLOTH_SET1 = "https://albiononlinetools.com/economy/item.php?itemPrice=T6_HEAD_CLOTH_SET1&server=east";

const T5_HEAD_CLOTH_SET2 = "https://albiononlinetools.com/economy/item.php?itemPrice=T5_HEAD_CLOTH_SET2&server=east";
const T5_HEAD_CLOTH_SET21 = "https://albiononlinetools.com/economy/item.php?itemPrice=T5_HEAD_CLOTH_SET2@1&server=east";
const T6_HEAD_CLOTH_SET2 = "https://albiononlinetools.com/economy/item.php?itemPrice=T6_HEAD_CLOTH_SET2&server=east";

const T5_HEAD_CLOTH_SET3 = "https://albiononlinetools.com/economy/item.php?itemPrice=T5_HEAD_CLOTH_SET3&server=east";
const T5_HEAD_CLOTH_SET31 = "https://albiononlinetools.com/economy/item.php?itemPrice=T5_HEAD_CLOTH_SET3@1&server=east";
const T6_HEAD_CLOTH_SET3 = "https://albiononlinetools.com/economy/item.php?itemPrice=T6_HEAD_CLOTH_SET3&server=east";






class InputDataThetford{
    async T3_FIBER() {
        try {
            const response = await axios.get(T3_FIBER);
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
            const sellOrderData = findOrderByCity('#sellOrders', 'Thetford');
            const buyOrderData = findOrderByCity('#buyOrders', 'Thetford');

            const data = {
                name: "T3_FIBER",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T4_FIBER() {
        try {
            const response = await axios.get(T4_FIBER);
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

            // Tìm dữ liệu từ Sell Orders ở Thetford và Buy Orders ở Bridgewatch
            const sellOrderData = findOrderByCity('#sellOrders', 'Thetford');
            const buyOrderData = findOrderByCity('#buyOrders', 'Thetford');

            const data = {
                name: "T4_FIBER",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T5_FIBER() {
        try {
            const response = await axios.get(T5_FIBER);
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

            // Tìm dữ liệu từ Sell Orders ở Thetford và Buy Orders ở Bridgewatch
            const sellOrderData = findOrderByCity('#sellOrders', 'Thetford');
            const buyOrderData = findOrderByCity('#buyOrders', 'Thetford');

            const data = {
                name: "T5_FIBER",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T6_FIBER() {
        try {
            const response = await axios.get(T6_FIBER);
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

            // Tìm dữ liệu từ Sell Orders ở Thetford và Buy Orders ở Bridgewatch
            const sellOrderData = findOrderByCity('#sellOrders', 'Thetford');
            const buyOrderData = findOrderByCity('#buyOrders', 'Thetford');

            const data = {
                name: "T6_FIBER",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T7_FIBER() {
        try {
            const response = await axios.get(T7_FIBER);
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

            // Tìm dữ liệu từ Sell Orders ở Thetford và Buy Orders ở Bridgewatch
            const sellOrderData = findOrderByCity('#sellOrders', 'Thetford');
            const buyOrderData = findOrderByCity('#buyOrders', 'Thetford');

            const data = {
                name: "T7_FIBER",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T8_FIBER() {
        try {
            const response = await axios.get(T8_FIBER);
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

            // Tìm dữ liệu từ Sell Orders ở Thetford và Buy Orders ở Bridgewatch
            const sellOrderData = findOrderByCity('#sellOrders', 'Thetford');
            const buyOrderData = findOrderByCity('#buyOrders', 'Thetford');

            const data = {
                name: "T8_FIBER",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    
    //farm

    async T2_AGARIC() {
        try {
            const response = await axios.get(T2_AGARIC);
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

            // Tìm dữ liệu từ Sell Orders ở Thetford và Buy Orders ở Bridgewatch
            const sellOrderData = findOrderByCity('#sellOrders', 'Thetford');
            const buyOrderData = findOrderByCity('#buyOrders', 'Thetford');

            const data = {
                name: "T2_AGARIC",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T5_CABBAGE() {
        try {
            const response = await axios.get(T5_CABBAGE);
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

            // Tìm dữ liệu từ Sell Orders ở Thetford và Buy Orders ở Bridgewatch
            const sellOrderData = findOrderByCity('#sellOrders', 'Thetford');
            const buyOrderData = findOrderByCity('#buyOrders', 'Thetford');

            const data = {
                name: "T5_CABBAGE",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T7_MULLEIN() {
        try {
            const response = await axios.get(T7_MULLEIN);
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

            // Tìm dữ liệu từ Sell Orders ở Thetford và Buy Orders ở Bridgewatch
            const sellOrderData = findOrderByCity('#sellOrders', 'Thetford');
            const buyOrderData = findOrderByCity('#buyOrders', 'Thetford');

            const data = {
                name: "T7_MULLEIN",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    //craft

    async T5_MAIN_MACE() {
        try {
            const response = await axios.get(T5_MAIN_MACE);
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
            const sellOrderData = findOrderByCity('#sellOrders', 'Black Market ');
            const buyOrderData = findOrderByCity('#buyOrders', 'Black Market ');

            const data = {
                name: "T5_MAIN_MACE",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T5_MAIN_MACE1() {
        try {
            const response = await axios.get(T5_MAIN_MACE1);
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
            const sellOrderData = findOrderByCity('#sellOrders', 'Black Market ');
            const buyOrderData = findOrderByCity('#buyOrders', 'Black Market ');

            const data = {
                name: "T5_MAIN_MACE1",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T6_MAIN_MACE() {
        try {
            const response = await axios.get(T6_MAIN_MACE);
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
            const sellOrderData = findOrderByCity('#sellOrders', 'Black Market ');
            const buyOrderData = findOrderByCity('#buyOrders', 'Black Market ');

            const data = {
                name: "T6_MAIN_MACE",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }

    async T5_2H_MACE() {
        try {
            const response = await axios.get(T5_2H_MACE);
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
            const sellOrderData = findOrderByCity('#sellOrders', 'Black Market ');
            const buyOrderData = findOrderByCity('#buyOrders', 'Black Market ');

            const data = {
                name: "T5_2H_MACE",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T5_2H_MACE1() {
        try {
            const response = await axios.get(T5_2H_MACE1);
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
            const sellOrderData = findOrderByCity('#sellOrders', 'Black Market ');
            const buyOrderData = findOrderByCity('#buyOrders', 'Black Market ');

            const data = {
                name: "T5_2H_MACE1",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T6_2H_MACE() {
        try {
            const response = await axios.get(T6_2H_MACE);
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
            const sellOrderData = findOrderByCity('#sellOrders', 'Black Market ');
            const buyOrderData = findOrderByCity('#buyOrders', 'Black Market ');

            const data = {
                name: "T6_2H_MACE",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }

    async T5_2H_FLAIL() {
        try {
            const response = await axios.get(T5_2H_FLAIL);
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
            const sellOrderData = findOrderByCity('#sellOrders', 'Black Market ');
            const buyOrderData = findOrderByCity('#buyOrders', 'Black Market ');

            const data = {
                name: "T5_2H_FLAIL",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T5_2H_FLAIL1() {
        try {
            const response = await axios.get(T5_2H_FLAIL1);
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
            const sellOrderData = findOrderByCity('#sellOrders', 'Black Market ');
            const buyOrderData = findOrderByCity('#buyOrders', 'Black Market ');

            const data = {
                name: "T5_2H_FLAIL1",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T6_2H_FLAIL() {
        try {
            const response = await axios.get(T6_2H_FLAIL);
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
            const sellOrderData = findOrderByCity('#sellOrders', 'Black Market ');
            const buyOrderData = findOrderByCity('#buyOrders', 'Black Market ');

            const data = {
                name: "T6_2H_FLAIL",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }

    async T5_MAIN_NATURESTAFF() {
        try {
            const response = await axios.get(T5_MAIN_NATURESTAFF);
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
            const sellOrderData = findOrderByCity('#sellOrders', 'Black Market ');
            const buyOrderData = findOrderByCity('#buyOrders', 'Black Market ');

            const data = {
                name: "T5_MAIN_NATURESTAFF",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T5_MAIN_NATURESTAFF1() {
        try {
            const response = await axios.get(T5_MAIN_NATURESTAFF1);
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
            const sellOrderData = findOrderByCity('#sellOrders', 'Black Market ');
            const buyOrderData = findOrderByCity('#buyOrders', 'Black Market ');

            const data = {
                name: "T5_MAIN_NATURESTAFF1",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T6_MAIN_NATURESTAFF() {
        try {
            const response = await axios.get(T6_MAIN_NATURESTAFF);
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
            const sellOrderData = findOrderByCity('#sellOrders', 'Black Market ');
            const buyOrderData = findOrderByCity('#buyOrders', 'Black Market ');

            const data = {
                name: "T6_MAIN_NATURESTAFF",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }

    async T5_2H_WILDSTAFF() {
        try {
            const response = await axios.get(T5_2H_WILDSTAFF);
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
            const sellOrderData = findOrderByCity('#sellOrders', 'Black Market ');
            const buyOrderData = findOrderByCity('#buyOrders', 'Black Market ');

            const data = {
                name: "T5_2H_WILDSTAFF",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T5_2H_WILDSTAFF1() {
        try {
            const response = await axios.get(T5_2H_WILDSTAFF1);
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
            const sellOrderData = findOrderByCity('#sellOrders', 'Black Market ');
            const buyOrderData = findOrderByCity('#buyOrders', 'Black Market ');

            const data = {
                name: "T5_2H_WILDSTAFF1",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T6_2H_WILDSTAFF() {
        try {
            const response = await axios.get(T6_2H_WILDSTAFF);
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
            const sellOrderData = findOrderByCity('#sellOrders', 'Black Market ');
            const buyOrderData = findOrderByCity('#buyOrders', 'Black Market ');

            const data = {
                name: "T6_2H_WILDSTAFF",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }

    async T5_2H_NATURESTAFF() {
        try {
            const response = await axios.get(T5_2H_NATURESTAFF);
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
            const sellOrderData = findOrderByCity('#sellOrders', 'Black Market ');
            const buyOrderData = findOrderByCity('#buyOrders', 'Black Market ');

            const data = {
                name: "T5_2H_NATURESTAFF",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T5_2H_NATURESTAFF1() {
        try {
            const response = await axios.get(T5_2H_NATURESTAFF1);
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
            const sellOrderData = findOrderByCity('#sellOrders', 'Black Market ');
            const buyOrderData = findOrderByCity('#buyOrders', 'Black Market ');

            const data = {
                name: "T5_2H_NATURESTAFF1",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T6_2H_NATURESTAFF() {
        try {
            const response = await axios.get(T6_2H_NATURESTAFF);
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
            const sellOrderData = findOrderByCity('#sellOrders', 'Black Market ');
            const buyOrderData = findOrderByCity('#buyOrders', 'Black Market ');

            const data = {
                name: "T6_2H_NATURESTAFF",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }

    async T5_MAIN_FIRESTAFF() {
        try {
            const response = await axios.get(T5_MAIN_FIRESTAFF);
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
            const sellOrderData = findOrderByCity('#sellOrders', 'Black Market ');
            const buyOrderData = findOrderByCity('#buyOrders', 'Black Market ');

            const data = {
                name: "T5_MAIN_FIRESTAFF",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T5_MAIN_FIRESTAFF1() {
        try {
            const response = await axios.get(T5_MAIN_FIRESTAFF1);
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
            const sellOrderData = findOrderByCity('#sellOrders', 'Black Market ');
            const buyOrderData = findOrderByCity('#buyOrders', 'Black Market ');

            const data = {
                name: "T5_MAIN_FIRESTAFF1",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T6_MAIN_FIRESTAFF() {
        try {
            const response = await axios.get(T6_MAIN_FIRESTAFF);
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
            const sellOrderData = findOrderByCity('#sellOrders', 'Black Market ');
            const buyOrderData = findOrderByCity('#buyOrders', 'Black Market ');

            const data = {
                name: "T6_MAIN_FIRESTAFF",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }

    async T5_2H_INFERNOSTAFF() {
        try {
            const response = await axios.get(T5_2H_INFERNOSTAFF);
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
            const sellOrderData = findOrderByCity('#sellOrders', 'Black Market ');
            const buyOrderData = findOrderByCity('#buyOrders', 'Black Market ');

            const data = {
                name: "T5_2H_INFERNOSTAFF",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T5_2H_INFERNOSTAFF1() {
        try {
            const response = await axios.get(T5_2H_INFERNOSTAFF1);
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
            const sellOrderData = findOrderByCity('#sellOrders', 'Black Market ');
            const buyOrderData = findOrderByCity('#buyOrders', 'Black Market ');

            const data = {
                name: "T5_2H_INFERNOSTAFF1",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T6_2H_INFERNOSTAFF() {
        try {
            const response = await axios.get(T6_2H_INFERNOSTAFF);
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
            const sellOrderData = findOrderByCity('#sellOrders', 'Black Market ');
            const buyOrderData = findOrderByCity('#buyOrders', 'Black Market ');

            const data = {
                name: "T6_2H_INFERNOSTAFF",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }

    async T5_2H_FIRESTAFF() {
        try {
            const response = await axios.get(T5_2H_FIRESTAFF);
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
            const sellOrderData = findOrderByCity('#sellOrders', 'Black Market ');
            const buyOrderData = findOrderByCity('#buyOrders', 'Black Market ');

            const data = {
                name: "T5_2H_FIRESTAFF",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T5_2H_FIRESTAFF1() {
        try {
            const response = await axios.get(T5_2H_FIRESTAFF1);
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
            const sellOrderData = findOrderByCity('#sellOrders', 'Black Market ');
            const buyOrderData = findOrderByCity('#buyOrders', 'Black Market ');

            const data = {
                name: "T5_2H_FIRESTAFF1",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T6_2H_FIRESTAFF() {
        try {
            const response = await axios.get(T6_2H_FIRESTAFF);
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
            const sellOrderData = findOrderByCity('#sellOrders', 'Black Market ');
            const buyOrderData = findOrderByCity('#buyOrders', 'Black Market ');

            const data = {
                name: "T6_2H_FIRESTAFF",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }

    async T5_ARMOR_LEATHER_SET1() {
        try {
            const response = await axios.get(T5_ARMOR_LEATHER_SET1);
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
            const sellOrderData = findOrderByCity('#sellOrders', 'Black Market ');
            const buyOrderData = findOrderByCity('#buyOrders', 'Black Market ');

            const data = {
                name: "T5_ARMOR_LEATHER_SET1",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T5_ARMOR_LEATHER_SET11() {
        try {
            const response = await axios.get(T5_ARMOR_LEATHER_SET11);
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
            const sellOrderData = findOrderByCity('#sellOrders', 'Black Market ');
            const buyOrderData = findOrderByCity('#buyOrders', 'Black Market ');

            const data = {
                name: "T5_ARMOR_LEATHER_SET11",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T6_ARMOR_LEATHER_SET1() {
        try {
            const response = await axios.get(T6_ARMOR_LEATHER_SET1);
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
            const sellOrderData = findOrderByCity('#sellOrders', 'Black Market ');
            const buyOrderData = findOrderByCity('#buyOrders', 'Black Market ');

            const data = {
                name: "T6_ARMOR_LEATHER_SET1",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }

    async T5_ARMOR_LEATHER_SET2() {
        try {
            const response = await axios.get(T5_ARMOR_LEATHER_SET2);
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
            const sellOrderData = findOrderByCity('#sellOrders', 'Black Market ');
            const buyOrderData = findOrderByCity('#buyOrders', 'Black Market ');

            const data = {
                name: "T5_ARMOR_LEATHER_SET2",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T5_ARMOR_LEATHER_SET21() {
        try {
            const response = await axios.get(T5_ARMOR_LEATHER_SET21);
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
            const sellOrderData = findOrderByCity('#sellOrders', 'Black Market ');
            const buyOrderData = findOrderByCity('#buyOrders', 'Black Market ');

            const data = {
                name: "T5_ARMOR_LEATHER_SET21",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T6_ARMOR_LEATHER_SET2() {
        try {
            const response = await axios.get(T6_ARMOR_LEATHER_SET2);
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
            const sellOrderData = findOrderByCity('#sellOrders', 'Black Market ');
            const buyOrderData = findOrderByCity('#buyOrders', 'Black Market ');

            const data = {
                name: "T6_ARMOR_LEATHER_SET2",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }

    async T5_ARMOR_LEATHER_SET3() {
        try {
            const response = await axios.get(T5_ARMOR_LEATHER_SET3);
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
            const sellOrderData = findOrderByCity('#sellOrders', 'Black Market ');
            const buyOrderData = findOrderByCity('#buyOrders', 'Black Market ');

            const data = {
                name: "T5_ARMOR_LEATHER_SET3",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T5_ARMOR_LEATHER_SET31() {
        try {
            const response = await axios.get(T5_ARMOR_LEATHER_SET31);
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
            const sellOrderData = findOrderByCity('#sellOrders', 'Black Market ');
            const buyOrderData = findOrderByCity('#buyOrders', 'Black Market ');

            const data = {
                name: "T5_ARMOR_LEATHER_SET31",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T6_ARMOR_LEATHER_SET3() {
        try {
            const response = await axios.get(T6_ARMOR_LEATHER_SET3);
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
            const sellOrderData = findOrderByCity('#sellOrders', 'Black Market ');
            const buyOrderData = findOrderByCity('#buyOrders', 'Black Market ');

            const data = {
                name: "T6_ARMOR_LEATHER_SET3",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }

    async T5_HEAD_CLOTH_SET1() {
        try {
            const response = await axios.get(T5_HEAD_CLOTH_SET1);
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
            const sellOrderData = findOrderByCity('#sellOrders', 'Black Market ');
            const buyOrderData = findOrderByCity('#buyOrders', 'Black Market ');

            const data = {
                name: "T5_HEAD_CLOTH_SET1",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T5_HEAD_CLOTH_SET11() {
        try {
            const response = await axios.get(T5_HEAD_CLOTH_SET11);
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
            const sellOrderData = findOrderByCity('#sellOrders', 'Black Market ');
            const buyOrderData = findOrderByCity('#buyOrders', 'Black Market ');

            const data = {
                name: "T5_HEAD_CLOTH_SET11",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T6_HEAD_CLOTH_SET1() {
        try {
            const response = await axios.get(T6_HEAD_CLOTH_SET1);
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
            const sellOrderData = findOrderByCity('#sellOrders', 'Black Market ');
            const buyOrderData = findOrderByCity('#buyOrders', 'Black Market ');

            const data = {
                name: "T6_HEAD_CLOTH_SET1",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }

    async T5_HEAD_CLOTH_SET2() {
        try {
            const response = await axios.get(T5_HEAD_CLOTH_SET2);
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
            const sellOrderData = findOrderByCity('#sellOrders', 'Black Market ');
            const buyOrderData = findOrderByCity('#buyOrders', 'Black Market ');

            const data = {
                name: "T5_HEAD_CLOTH_SET2",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T5_HEAD_CLOTH_SET21() {
        try {
            const response = await axios.get(T5_HEAD_CLOTH_SET21);
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
            const sellOrderData = findOrderByCity('#sellOrders', 'Black Market ');
            const buyOrderData = findOrderByCity('#buyOrders', 'Black Market ');

            const data = {
                name: "T5_HEAD_CLOTH_SET21",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T6_HEAD_CLOTH_SET2() {
        try {
            const response = await axios.get(T6_HEAD_CLOTH_SET2);
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
            const sellOrderData = findOrderByCity('#sellOrders', 'Black Market ');
            const buyOrderData = findOrderByCity('#buyOrders', 'Black Market ');

            const data = {
                name: "T6_HEAD_CLOTH_SET2",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }

    async T5_HEAD_CLOTH_SET3() {
        try {
            const response = await axios.get(T5_HEAD_CLOTH_SET3);
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
            const sellOrderData = findOrderByCity('#sellOrders', 'Black Market ');
            const buyOrderData = findOrderByCity('#buyOrders', 'Black Market ');

            const data = {
                name: "T5_HEAD_CLOTH_SET3",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T5_HEAD_CLOTH_SET31() {
        try {
            const response = await axios.get(T5_HEAD_CLOTH_SET31);
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
            const sellOrderData = findOrderByCity('#sellOrders', 'Black Market ');
            const buyOrderData = findOrderByCity('#buyOrders', 'Black Market ');

            const data = {
                name: "T5_HEAD_CLOTH_SET31",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T6_HEAD_CLOTH_SET3() {
        try {
            const response = await axios.get(T6_HEAD_CLOTH_SET3);
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
            const sellOrderData = findOrderByCity('#sellOrders', 'Black Market ');
            const buyOrderData = findOrderByCity('#buyOrders', 'Black Market ');

            const data = {
                name: "T6_HEAD_CLOTH_SET3",
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

module.exports = new InputDataThetford;