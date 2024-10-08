# AIbion_calculator-
## Ý Tưởng
```plaintext
  Đây là 1 app dùng để check giá trị và tính toán công thức craft được các món
  đồ ở market của aibion , dựa vào dữ liệu từ trang web (https://albiononlinetools.com/)
  get từ axios và phân tích nó bằng cheerio
```
## Getting Started
### 1. Download ZIP or Git Clone
```plaintext
git clone https://github.com/modularcode/modular-admin-html.git
```
### 2. Build the project
### 2.1 Nodejs
The cloned/downloaded repository doesn't contain prebuilt version of the project and you need to build it. You need to have NodeJs (v8+) with npm (v3+) installed.
Install npm dependencies.
```plaintext
npm install
```
### 2.2 Connect String
Chage connect string in Config/db/index 
```plaintext
"mongodb://127.0.0.1:27017/yourconnectstring"
```
### 2.2 Start
Build the project and start local web server
```plaintext
npm start
```
## Pages
  ### Lym 
  ```plaintext
      Lym Raws
      Lym Crafting
      Lym Farming
  ```
  ### Fort Sterling
  ```plaintext
     Giống Lym
  ```
  ### Bridgewatch
  ```plaintext
       Giống Lym
  ```
  ### Martlock
  ```plaintext
       Giống Lym
  ```
 ### Thetford
  ```plaintext
       Giống Lym
  ```
 ### Caerleon
  ```plaintext
      Caerleon Crafting
      Caerleon Farming
      Black Market Check
  ```
 ### Material
  ```plaintext
      Material
  ```
 ### Descriptions

  ```plaintext
      Cấu hình dữ liệu và pages
      Raws,Farm:
      https://wiki.albiononline.com/wiki/Local_Production_Bonus
      Craft:
      https://wiki.albiononline.com/wiki/Crafting
      Refine:
      https://albiononline.com/news/guide-refining
  ```
  ```plaintext
      Raws:
      -Raw Table(name,sellOrder,buyOrder,price,fiveAvg,tenAvg,lastUpdate)
      Farming:
      -Farm Table(name,sellOrder,buyOrder,price,fiveAvg,tenAvg,lastUpdate)
      Crafting:
      -Craft Table (name,sellOrder,buyOrder,price,fiveAvg,tenAvg,lastUpdate)(material1,material2,quantity1,quantity2,Principal)
      Black Market Check:
      -BM Table (SellOrder,buyOrder)(material1,material2,quantity1,quantity2,Principal);
      Material:
      -Raw Table(name,sellOrder,buyOrder,price,fiveAvg,tenAvg,lastUpdate)
      -Refine Table(name,sellOrder,buyOrder,price,fiveAvg,tenAvg,lastUpdate)(material1,material2,quantity1,quantity2,Principal)
  ```
## Database
### Lym
```plaintext
  LymCraft:
    name: { type: String},
    material1: {type: String},
    material2: {type: String},
    quantity1:{type: Number},
    quantity2:{type: Number},
    sellOrder:{
            city: { type: String },
            price: { type: String },
            lastUpdate: {type: String},
    },
    buyOrder: {
            city: { type: String },
            price: { type: String },
            lastUpdate: {type: String},
    }


  LymFarm:
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
```
### Fort_Sterling
```plaintext
     Giống Lym
  ```
### Bridgewatch
```plaintext
     Giống Lym
  ```
### Martlock
```plaintext
     Giống Lym
  ```
### Thetford
```plaintext
     Giống Lym
```
### Material
```plaintext
 Raw:
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

Refine:
  name: { type: String},
    material1: {type: String},
    material2: {type: String},

    quantity1:{type: Number},
    quantity2:{type: Number},
    
    Principal:{type: Number},
    
    sellOrder:{
            city: { type: String },
            price: { type: String },
            fiveAvg:{type:Number},
            tenAvg:{type:Number},
            lastUpdate: {type: String},
    },
    buyOrder: {
            city: { type: String },
            price: { type: String },
            fiveAvg:{type:Number},
            tenAvg:{type:Number},
            lastUpdate: {type: String},
    }
```
###  Caerleon
```plaintext
     name: { type: String},
    material1: {type: String},
    material2: {type: String},

    quantity1:{type: Number},
    quantity2:{type: Number},
    
    Principal:{type: Number},
    
    sellOrder:{
            price: { type: String },
            lastUpdate: {type: String},
    },
    buyOrder: {
            price: { type: String },
            lastUpdate: {type: String},
    }
```
## Technology:
```plaintext
   MVC,axios,cheerio,express,express-handlebars,mongoose,morgan,node-sass,nodemon
```
