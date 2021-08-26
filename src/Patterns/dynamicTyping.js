var customer = {
    id:1,
    name:"Halis"
}
customer.country = "Turkey"

customer.sayHello = function () {
    
    alert("hello: " + this.name + ", your country: " + this.country)
}
customer.sayHello()