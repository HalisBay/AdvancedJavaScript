
//REST
let showProducts = function (id,...products) {

    console.log(id)
    console.log(products[0])
    
}

//console.log( typeof showProducts)
//showProducts(10,["elma","armut","karpuz"])

//---------------------------------------------------

//SPREAD
let points = [1,23,45,123,45]
console.log(...points)
console.log(Math.max(...points))
console.log(..."asd","b",..."456","g")

//---------------------------------------------------

//DESTRUCTING        

let populations = [10000,20000,30000,[400000,100000]]
let [small,medium,high,[verHigh,max]] = populations

console.log(small,medium,high,verHigh,max)

function someFunction([small1],number) {
    
    console.log(small1)
}

someFunction(populations)

let category = {id:1,name1:"içecek"}

console.log(category.id)
console.log(category["name1"])


let{id,name1} = category 
console.log(id,name1)