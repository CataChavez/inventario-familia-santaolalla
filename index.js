document.write('<h2>App Santaolalla<h2>')
const fruits = [
    { name: "Manzana", price: 100, stock: 20 },
    { name: "Pera", price: 150, stock: 10 },
    { name: "Naranja", price: 300, stock: 10 },
    { name: "Plátano", price: 200, stock: 5 },
    { name: "Mango", price: 500, stock: 1 },
    { name: "Mandarina", price: 150, stock: 2 },
    { name: "Chirimoya", price: 500, stock: 20 },
    { name: "Clementinas", price: 50, stock: 50 },
    { name: "Piña", price: 1000, stock: 1 }
];

//Lista las frutas disponibles con stock mayor o igual a 2
document.write('<h4>Frutas disponibles:</h4>')  

const fruitsWithStock = fruits.filter(fruit => fruit.stock >= 2)
.map(fruit => `<li style="color:#2d572c">${fruit.name} - Stock:${fruit.stock}  - Precio:$${fruit.price}`)
document.write('<ul>' + fruitsWithStock.join('\n') + '</ul>')
    
//Lista las frutas disponibles con stock menor a 2 y su valor incrementado en un 30%   
document.write('<h4>Frutas con stock mínimo:</h4>')

const minStockIncrease = fruits.map((fruit) => {
    if (fruit.name && fruit.stock === 2) return fruit
    return{
        ...fruit,
         price: fruit.price * 1.3,
    }
})
//Lista las frutas con stock menor a 2
const minStock = minStockIncrease.filter(fruit => fruit.stock < 2).map(fruit => `<li style="color:#FF0000">${fruit.name} - Stock:${fruit.stock}  - Precio:$${fruit.price}`)

document.write('<ul>' + minStock.join('\n') + '</ul>')

//Indica el total de los productos en existencia por fruta y total de todos los productos

document.write('<h4>Valor de Stock disponible por fruta</h4>')

const newArrFruits = minStockIncrease.map((fruit) => {
    return {
        name: fruit.name,
        price: fruit.price,
        stock: fruit.stock,
        subTotalPerFruit: (fruit.price * fruit.stock)
    }
})


const showProductsSubTotal = newArrFruits.map(fruit => `<li>${fruit.name} - Stock:${fruit.stock}  - Precio:$${fruit.price} - Sub Total en Stock: $${fruit.subTotalPerFruit}`)
document.write('<ul>' + showProductsSubTotal.join('\n') + '</ul>')

const total = newArrFruits.map(fruit => fruit.subTotalPerFruit).reduce((accum, num) => { 
    const sum = accum + num 
    return sum
})

const showTotalPerProducts = document.write(`<h4>Total de stock disponible:  $ ${total}</h4>`)

console.log('App Familia Santalaolla')
console.log('Frutas disponibles')
console.log()


console.log('Frutas con stock mínimo')
console.log()

console.log('Valor de Stock disponible por fruta')
console.log(newArrFruits)

console.log('Total de Stock disponible')
console.log(total)





