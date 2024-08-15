const axios = require('axios');

const cheerio = require('cheerio');


const T3_ROCK = "https://albiononlinetools.com/economy/item.php?itemPrice=T3_ROCK&server=east";
const T4_ROCK = "https://albiononlinetools.com/economy/item.php?itemPrice=T4_ROCK&server=east";
const T5_ROCK = "https://albiononlinetools.com/economy/item.php?itemPrice=T5_ROCK&server=east";
const T6_ROCK = "https://albiononlinetools.com/economy/item.php?itemPrice=T6_ROCK&server=east";
const T7_ROCK = "https://albiononlinetools.com/economy/item.php?itemPrice=T7_ROCK&server=east";
const T8_ROCK = "https://albiononlinetools.com/economy/item.php?itemPrice=T8_ROCK&server=east";
//farm
const T3_WHEAT = "https://albiononlinetools.com/economy/item.php?itemPrice=T3_WHEAT&server=east";
const T6_POTATO = "https://albiononlinetools.com/economy/item.php?itemPrice=T6_POTATO&server=east";
const T6_FOXGLOVE = "https://albiononlinetools.com/economy/item.php?itemPrice=T6_FOXGLOVE&server=east";
const T8_MILK = "https://albiononlinetools.com/economy/item.php?itemPrice=T8_MILK&server=east";

//craft

const T5_MAIN_AXE = "https://albiononlinetools.com/economy/item.php?itemPrice=T5_MAIN_AXE&server=east";
const T5_MAIN_AXE1 = "https://albiononlinetools.com/economy/item.php?itemPrice=T5_MAIN_AXE@1&server=east";
const T6_MAIN_AXE = "https://albiononlinetools.com/economy/item.php?itemPrice=T6_MAIN_AXE&server=east";

const T5_2H_AXE = "https://albiononlinetools.com/economy/item.php?itemPrice=T5_2H_AXE&server=east";
const T5_2H_AXE1 = "https://albiononlinetools.com/economy/item.php?itemPrice=T5_2H_AXE@1&server=east";
const T6_2H_AXE = "https://albiononlinetools.com/economy/item.php?itemPrice=T6_2H_AXE&server=east";

const T5_2H_HALBERD = "https://albiononlinetools.com/economy/item.php?itemPrice=T5_2H_HALBERD&server=east";
const T5_2H_HALBERD1 = "https://albiononlinetools.com/economy/item.php?itemPrice=T5_2H_HALBERD@1&server=east";
const T6_2H_HALBERD = "https://albiononlinetools.com/economy/item.php?itemPrice=T6_2H_HALBERD&server=east";

const T5_2H_QUARTERSTAFF = "https://albiononlinetools.com/economy/item.php?itemPrice=T5_2H_QUARTERSTAFF&server=east";
const T5_2H_QUARTERSTAFF1 = "https://albiononlinetools.com/economy/item.php?itemPrice=T5_2H_QUARTERSTAFF@1&server=east";
const T6_2H_QUARTERSTAFF = "https://albiononlinetools.com/economy/item.php?itemPrice=T6_2H_QUARTERSTAFF&server=east";

const T5_2H_IRONCLADEDSTAFF = "https://albiononlinetools.com/economy/item.php?itemPrice=T5_2H_IRONCLADEDSTAFF&server=east";
const T5_2H_IRONCLADEDSTAFF1 = "https://albiononlinetools.com/economy/item.php?itemPrice=T5_2H_IRONCLADEDSTAFF@1&server=east";
const T6_2H_IRONCLADEDSTAFF = "https://albiononlinetools.com/economy/item.php?itemPrice=T6_2H_IRONCLADEDSTAFF&server=east";

const T5_2H_DOUBLEBLADEDSTAFF = "https://albiononlinetools.com/economy/item.php?itemPrice=T5_2H_DOUBLEBLADEDSTAFF&server=east";
const T5_2H_DOUBLEBLADEDSTAFF1 = "https://albiononlinetools.com/economy/item.php?itemPrice=T5_2H_DOUBLEBLADEDSTAFF@1&server=east";
const T6_2H_DOUBLEBLADEDSTAFF = "https://albiononlinetools.com/economy/item.php?itemPrice=T6_2H_DOUBLEBLADEDSTAFF&server=east";

const T5_2H_GLACIALSTAFF = "https://albiononlinetools.com/economy/item.php?itemPrice=T5_2H_GLACIALSTAFF&server=east";
const T5_2H_GLACIALSTAFF1 = "https://albiononlinetools.com/economy/item.php?itemPrice=T5_2H_GLACIALSTAFF@1&server=east";
const T6_2H_GLACIALSTAFF = "https://albiononlinetools.com/economy/item.php?itemPrice=T6_2H_GLACIALSTAFF&server=east";

const T5_2H_FROSTSTAFF = "https://albiononlinetools.com/economy/item.php?itemPrice=T5_2H_FROSTSTAFF&server=east";
const T5_2H_FROSTSTAFF1 = "https://albiononlinetools.com/economy/item.php?itemPrice=T5_2H_FROSTSTAFF@1&server=east";
const T6_2H_FROSTSTAFF = "https://albiononlinetools.com/economy/item.php?itemPrice=T6_2H_FROSTSTAFF&server=east";

const T5_MAIN_FROSTSTAFF = "https://albiononlinetools.com/economy/item.php?itemPrice=T5_MAIN_FROSTSTAFF&server=east";
const T5_MAIN_FROSTSTAFF1 = "https://albiononlinetools.com/economy/item.php?itemPrice=T5_MAIN_FROSTSTAFF@1&server=east";
const T6_MAIN_FROSTSTAFF = "https://albiononlinetools.com/economy/item.php?itemPrice=T6_MAIN_FROSTSTAFF&server=east";

const T5_SHOES_PLATE_SET1 = "https://albiononlinetools.com/economy/item.php?itemPrice=T5_SHOES_PLATE_SET1&server=east";
const T5_SHOES_PLATE_SET11 = "https://albiononlinetools.com/economy/item.php?itemPrice=T5_SHOES_PLATE_SET1@1&server=east";
const T6_SHOES_PLATE_SET1 = "https://albiononlinetools.com/economy/item.php?itemPrice=T6_SHOES_PLATE_SET1&server=east";

const T5_SHOES_PLATE_SET2 = "https://albiononlinetools.com/economy/item.php?itemPrice=T5_SHOES_PLATE_SET2&server=east";
const T5_SHOES_PLATE_SET21 = "https://albiononlinetools.com/economy/item.php?itemPrice=T5_SHOES_PLATE_SET2@1&server=east";
const T6_SHOES_PLATE_SET2 = "https://albiononlinetools.com/economy/item.php?itemPrice=T6_SHOES_PLATE_SET2&server=east";

const T5_SHOES_PLATE_SET3 = "https://albiononlinetools.com/economy/item.php?itemPrice=T5_SHOES_PLATE_SET3&server=east";
const T5_SHOES_PLATE_SET31 = "https://albiononlinetools.com/economy/item.php?itemPrice=T5_SHOES_PLATE_SET3@1&server=east";
const T6_SHOES_PLATE_SET3 = "https://albiononlinetools.com/economy/item.php?itemPrice=T6_SHOES_PLATE_SET3&server=east";

const T5_OFF_TORCH = "https://albiononlinetools.com/economy/item.php?itemPrice=T5_OFF_TORCH&server=east";
const T5_OFF_TORCH1 = "https://albiononlinetools.com/economy/item.php?itemPrice=T5_OFF_TORCH@1&server=east";
const T6_OFF_TORCH = "https://albiononlinetools.com/economy/item.php?itemPrice=T6_OFF_TORCH&server=east";

const T5_OFF_BOOK = "https://albiononlinetools.com/economy/item.php?itemPrice=T5_OFF_BOOK&server=east";
const T5_OFF_BOOK1 = "https://albiononlinetools.com/economy/item.php?itemPrice=T5_OFF_BOOK@1&server=east";
const T6_OFF_BOOK = "https://albiononlinetools.com/economy/item.php?itemPrice=T6_OFF_BOOK&server=east";

const T5_OFF_SHIELD = "https://albiononlinetools.com/economy/item.php?itemPrice=T5_OFF_SHIELD&server=east";
const T5_OFF_SHIELD1 = "https://albiononlinetools.com/economy/item.php?itemPrice=T5_OFF_SHIELD@1&server=east";
const T6_OFF_SHIELD = "https://albiononlinetools.com/economy/item.php?itemPrice=T6_OFF_BOOK&server=east";


class InputDataMartlock {
    async T3_ROCK() {
        try {
            const response = await axios.get(T3_ROCK);
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
            const sellOrderData = findOrderByCity('#sellOrders', 'Martlock');
            const buyOrderData = findOrderByCity('#buyOrders', 'Martlock');

            const data = {
                name: "T3_ROCK",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T4_ROCK() {
        try {
            const response = await axios.get(T4_ROCK);
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
            const sellOrderData = findOrderByCity('#sellOrders', 'Martlock');
            const buyOrderData = findOrderByCity('#buyOrders', 'Martlock');

            const data = {
                name: "T4_ROCK",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T5_ROCK() {
        try {
            const response = await axios.get(T5_ROCK);
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
            const sellOrderData = findOrderByCity('#sellOrders', 'Martlock');
            const buyOrderData = findOrderByCity('#buyOrders', 'Martlock');

            const data = {
                name: "T5_ROCK",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T6_ROCK() {
        try {
            const response = await axios.get(T6_ROCK);
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
            const sellOrderData = findOrderByCity('#sellOrders', 'Martlock');
            const buyOrderData = findOrderByCity('#buyOrders', 'Martlock');

            const data = {
                name: "T6_ROCK",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T7_ROCK() {
        try {
            const response = await axios.get(T7_ROCK);
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
            const sellOrderData = findOrderByCity('#sellOrders', 'Martlock');
            const buyOrderData = findOrderByCity('#buyOrders', 'Martlock');

            const data = {
                name: "T7_ROCK",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T8_ROCK() {
        try {
            const response = await axios.get(T8_ROCK);
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
            const sellOrderData = findOrderByCity('#sellOrders', 'Martlock');
            const buyOrderData = findOrderByCity('#buyOrders', 'Martlock');

            const data = {
                name: "T8_ROCK",
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
    async T3_WHEAT() {
        try {
            const response = await axios.get(T3_WHEAT);
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
            const sellOrderData = findOrderByCity('#sellOrders', 'Martlock');
            const buyOrderData = findOrderByCity('#buyOrders', 'Martlock');

            const data = {
                name: "T3_WHEAT",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T6_POTATO() {
        try {
            const response = await axios.get(T6_POTATO);
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
            const sellOrderData = findOrderByCity('#sellOrders', 'Martlock');
            const buyOrderData = findOrderByCity('#buyOrders', 'Martlock');

            const data = {
                name: "T6_POTATO",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T6_FOXGLOVE() {
        try {
            const response = await axios.get(T6_FOXGLOVE);
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
            const sellOrderData = findOrderByCity('#sellOrders', 'Martlock');
            const buyOrderData = findOrderByCity('#buyOrders', 'Martlock');

            const data = {
                name: "T6_FOXGLOVE",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T8_MILK() {
        try {
            const response = await axios.get(T8_MILK);
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
            const sellOrderData = findOrderByCity('#sellOrders', 'Martlock');
            const buyOrderData = findOrderByCity('#buyOrders', 'Martlock');

            const data = {
                name: "T8_MILK",
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
    async T5_MAIN_AXE() {
        try {
            const response = await axios.get(T5_MAIN_AXE);
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
                name: "T5_MAIN_AXE",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T5_MAIN_AXE1() {
        try {
            const response = await axios.get(T5_MAIN_AXE1);
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
                name: "T5_MAIN_AXE1",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T6_MAIN_AXE() {
        try {
            const response = await axios.get(T6_MAIN_AXE);
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
                name: "T6_MAIN_AXE",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }

    async T5_2H_AXE() {
        try {
            const response = await axios.get(T5_2H_AXE);
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
                name: "T5_2H_AXE",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T5_2H_AXE1() {
        try {
            const response = await axios.get(T5_2H_AXE1);
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
                name: "T5_2H_AXE1",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T6_2H_AXE() {
        try {
            const response = await axios.get(T6_2H_AXE);
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
                name: "T6_2H_AXE",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }

    async T5_2H_HALBERD() {
        try {
            const response = await axios.get(T5_2H_HALBERD);
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
                name: "T5_2H_HALBERD",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T5_2H_HALBERD1() {
        try {
            const response = await axios.get(T5_2H_HALBERD1);
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
                name: "T5_2H_HALBERD1",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T6_2H_HALBERD() {
        try {
            const response = await axios.get(T6_2H_HALBERD);
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
                name: "T6_2H_HALBERD",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }

    async T5_2H_QUARTERSTAFF() {
        try {
            const response = await axios.get(T5_2H_QUARTERSTAFF);
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
                name: "T5_2H_QUARTERSTAFF",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T5_2H_QUARTERSTAFF1() {
        try {
            const response = await axios.get(T5_2H_QUARTERSTAFF1);
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
                name: "T5_2H_QUARTERSTAFF1",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T6_2H_QUARTERSTAFF() {
        try {
            const response = await axios.get(T6_2H_QUARTERSTAFF);
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
                name: "T6_2H_QUARTERSTAFF",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }

    async T5_2H_IRONCLADEDSTAFF() {
        try {
            const response = await axios.get(T5_2H_IRONCLADEDSTAFF);
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
                name: "T5_2H_IRONCLADEDSTAFF",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T5_2H_IRONCLADEDSTAFF1() {
        try {
            const response = await axios.get(T5_2H_IRONCLADEDSTAFF1);
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
                name: "T5_2H_IRONCLADEDSTAFF1",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T6_2H_IRONCLADEDSTAFF() {
        try {
            const response = await axios.get(T6_2H_IRONCLADEDSTAFF);
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
                name: "T6_2H_IRONCLADEDSTAFF",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }

    async T5_2H_DOUBLEBLADEDSTAFF() {
        try {
            const response = await axios.get(T5_2H_DOUBLEBLADEDSTAFF);
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
                name: "T5_2H_DOUBLEBLADEDSTAFF",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T5_2H_DOUBLEBLADEDSTAFF1() {
        try {
            const response = await axios.get(T5_2H_DOUBLEBLADEDSTAFF1);
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
                name: "T5_2H_DOUBLEBLADEDSTAFF1",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T6_2H_DOUBLEBLADEDSTAFF() {
        try {
            const response = await axios.get(T6_2H_DOUBLEBLADEDSTAFF);
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
                name: "T6_2H_DOUBLEBLADEDSTAFF",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }

    async T5_2H_GLACIALSTAFF() {
        try {
            const response = await axios.get(T5_2H_GLACIALSTAFF);
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
                name: "T5_2H_GLACIALSTAFF",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T5_2H_GLACIALSTAFF1() {
        try {
            const response = await axios.get(T5_2H_GLACIALSTAFF1);
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
                name: "T5_2H_GLACIALSTAFF1",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T6_2H_GLACIALSTAFF() {
        try {
            const response = await axios.get(T6_2H_GLACIALSTAFF);
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
                name: "T6_2H_GLACIALSTAFF",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }

    async T5_2H_FROSTSTAFF() {
        try {
            const response = await axios.get(T5_2H_FROSTSTAFF);
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
                name: "T5_2H_FROSTSTAFF",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T5_2H_FROSTSTAFF1() {
        try {
            const response = await axios.get(T5_2H_FROSTSTAFF1);
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
                name: "T5_2H_FROSTSTAFF1",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T6_2H_FROSTSTAFF() {
        try {
            const response = await axios.get(T6_2H_FROSTSTAFF);
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
                name: "T6_2H_FROSTSTAFF",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }

    async T5_MAIN_FROSTSTAFF() {
        try {
            const response = await axios.get(T5_MAIN_FROSTSTAFF);
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
                name: "T5_MAIN_FROSTSTAFF",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T5_MAIN_FROSTSTAFF1() {
        try {
            const response = await axios.get(T5_MAIN_FROSTSTAFF1);
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
                name: "T5_MAIN_FROSTSTAFF1",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T6_MAIN_FROSTSTAFF() {
        try {
            const response = await axios.get(T6_MAIN_FROSTSTAFF);
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
                name: "T6_MAIN_FROSTSTAFF",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    
    async T5_SHOES_PLATE_SET1() {
        try {
            const response = await axios.get(T5_SHOES_PLATE_SET1);
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
                name: "T5_SHOES_PLATE_SET1",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T5_SHOES_PLATE_SET11() {
        try {
            const response = await axios.get(T5_SHOES_PLATE_SET11);
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
                name: "T5_SHOES_PLATE_SET11",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T6_SHOES_PLATE_SET1() {
        try {
            const response = await axios.get(T6_SHOES_PLATE_SET1);
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
                name: "T6_SHOES_PLATE_SET1",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }

    async T5_SHOES_PLATE_SET2() {
        try {
            const response = await axios.get(T5_SHOES_PLATE_SET2);
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
                name: "T5_SHOES_PLATE_SET2",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T5_SHOES_PLATE_SET21() {
        try {
            const response = await axios.get(T5_SHOES_PLATE_SET21);
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
                name: "T5_SHOES_PLATE_SET21",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T6_SHOES_PLATE_SET2() {
        try {
            const response = await axios.get(T6_SHOES_PLATE_SET2);
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
                name: "T6_SHOES_PLATE_SET2",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }

    async T5_SHOES_PLATE_SET3() {
        try {
            const response = await axios.get(T5_SHOES_PLATE_SET3);
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
                name: "T5_SHOES_PLATE_SET3",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T5_SHOES_PLATE_SET31() {
        try {
            const response = await axios.get(T5_SHOES_PLATE_SET31);
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
                name: "T5_SHOES_PLATE_SET31",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T6_SHOES_PLATE_SET3() {
        try {
            const response = await axios.get(T6_SHOES_PLATE_SET3);
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
                name: "T6_SHOES_PLATE_SET3",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }

    async T5_OFF_TORCH() {
        try {
            const response = await axios.get(T5_OFF_TORCH);
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
                name: "T5_OFF_TORCH",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T5_OFF_TORCH1() {
        try {
            const response = await axios.get(T5_OFF_TORCH1);
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
                name: "T5_OFF_TORCH1",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T6_OFF_TORCH() {
        try {
            const response = await axios.get(T6_OFF_TORCH);
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
                name: "T6_OFF_TORCH",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }

    async T5_OFF_BOOK() {
        try {
            const response = await axios.get(T5_OFF_BOOK);
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
                name: "T5_OFF_BOOK",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T5_OFF_BOOK1() {
        try {
            const response = await axios.get(T5_OFF_BOOK1);
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
                name: "T5_OFF_BOOK1",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T6_OFF_BOOK() {
        try {
            const response = await axios.get(T6_OFF_BOOK);
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
                name: "T6_OFF_BOOK",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }

    async T5_OFF_SHIELD() {
        try {
            const response = await axios.get(T5_OFF_SHIELD);
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
                name: "T5_OFF_SHIELD",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T5_OFF_SHIELD1() {
        try {
            const response = await axios.get(T5_OFF_SHIELD1);
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
                name: "T5_OFF_SHIELD1",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T6_OFF_SHIELD() {
        try {
            const response = await axios.get(T6_OFF_SHIELD);
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
                name: "T6_OFF_SHIELD",
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

module.exports = new InputDataMartlock();
