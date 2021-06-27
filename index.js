const fruits = [
  { fruitId: 1, name: "Manzana", price: 100, stock: 20 },
  { fruitId: 2, name: "Pera", price: 150, stock: 10 },
  { fruitId: 3, name: "Naranja", price: 300, stock: 10 },
  { fruitId: 4, name: "Plátano", price: 200, stock: 5 },
  { fruitId: 4, name: "Mango", price: 500, stock: 1 },
];
//revisar aprendiendo_JS de github
//Mostrar productos que quedan en stock

//Subir el precio de los productos cuando quede poca existencia
//(modificar el precio de un producto cuando algún producto tenga una existencia)
const minStockProducts = () => {
  const minStock = fruits.map((fruit) => {
    if(fruit.nombre && fruit.stock !== 1) return fruit
      return{
        ...fruit,
        price: fruit.price * 1.5,
      }
    })
    return minStock
}
console.log(minStockProducts())

//Averiguar si pueden vender un producto (si hay suficiente en stock)

//Saber cuanto es el valor total de productos


