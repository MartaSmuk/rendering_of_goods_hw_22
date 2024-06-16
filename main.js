"use strict";
let kitchenProducts = [
	{
		type: 'Grater',
		price: 10
	},
	{
		type: 'Pastry-Bag',
		price: 25
	},
	{
		type: 'Scale',
		price: 5
	},
	{
		type: 'Whisk',
		price: 15
	}
];

let devicesProducts = [
	{
		type: 'Desktop',
		price: [100,1000]
	},
	{
		type: 'Laptop',
		price: [50,1500]
	},
	{
		type: 'Smartphone',
		price: [80,2000]
	},
	{
		type: 'Tablet',
		price: [20,1300]
	}
];

let cosmeticsProducts = [
	{
		type: 'Blush',
		price: 100
	},
	{
		type: 'Eyeshadow',
		price: 50
	},
	{
		type: 'Lipstick',
		price: 80
	},
	{
		type: 'Nail-Polish',
		price: 200
	},
	{
		type: 'Perfume',
		price: 300,
	}
];

// 1. Для кожної категорії створити об'єкт, який має лише одну властивість 
// category, де буде ім'я категорії. Наприклад, let Kitchen = {category: 'kitchen'};

let Kitchen = {
    category: "kitchen",
}

let Devices = {
    category: "devices",
}

let Cosmetics = {
    category: "cosmetics",
}

//Всім товарам з массивів kitchenProducts, devicesProducts, cosmeticsProducts
//добавити в якості об'єкта-прототипа об'єкти, створені на першому кроці. 
//Після цього, доповнити кожен товар своїми властивостями.
// let grater = Object.create(Kitchen);
// grater.type = 'grater';
// grater.price = 10;
// console.log(Kitchen);
// console.log(grater);

let aProds = [
    kitchenProducts = kitchenProducts.map(item => Object.assign(Object.create(Kitchen), item)),
    devicesProducts = devicesProducts.map(item => Object.assign(Object.create(Devices), item)),
    cosmeticsProducts = cosmeticsProducts.map(item => Object.assign(Object.create(Cosmetics), item)),
]

let showKitchenProds = [];
kitchenProducts.map(prod => {
    showKitchenProds.push(
        `<div class="product__cell">
            <div class="product__image">
                <img src="img/kitchen/${prod.type}.svg" alt="${prod.type}">
            </div>
            <div class="product__desc">
                <p>Name: <span class="product__name">${prod.type}</span></p>
                <p>Price: <span class="product__name">$${prod.price}</span></p>
            </div>
        </div>`
    )
})

let showDevicesProducts = [];
devicesProducts.map(prod => {
    showDevicesProducts.push(
       `<div class="product__cell">
            <div class="product__image">
                <img src="img/devices/${prod.type}.svg" alt="${prod.type}">
            </div>
            <div class="product__desc">
                <p>Name: <span class="product__name">${prod.type}</span></p>
                <p>Price: <span class="product__name">$${Array.isArray(prod.price) === true ? String(prod.price[0])+ "-" +String(prod.price[1]) : prod.price}</span></p>
            </div>
        </div>` 
    )
})

let showCosmeticsProducts = [];
cosmeticsProducts.map(prod => {
    showCosmeticsProducts.push(
       `<div class="product__cell">
            <div class="product__image">
                <img src="img/cosmetics/${prod.type}.svg" alt="${prod.type}">
            </div>
            <div class="product__desc">
                <p>Name: <span class="product__name">${prod.type}</span></p>
                <p>Price: <span class="product__name">$${prod.price}</span></p>
            </div>
        </div>` 
    )
})

document.write(
    `<div class="categories">
        <div class="kitchen">
            <h2>Category: Kitchen</h2>
            <div class="category__kitchen">${showKitchenProds.join(" ")}</div>
        </div>
        <div class="devices">
            <h2>Category: Devices</h2>
            <div class="category__kitchen">${showDevicesProducts.join(" ")}</div>
        </div>
        <div class="devices">
            <h2>Category: Cosmetics</h2>
            <div class="category__kitchen">${showCosmeticsProducts.join(" ")}</div>
        </div>
    </div>`
);

