class Customer{

    constructor(id,customerNumber){
        this.id = id
        this.customerNumber = customerNumber

    }
}

let customer = new Customer(1,"1221");
//prototyping

// instance prototyping
customer.name = "isim"
console.log(customer.name);

//Class prototyping
Customer.name2 = "isim2"
console.log(Customer.name2)

console.log(customer.customerNumber)

class IndividualCustomer extends customer{
    constructor(firstName,id,customerNumber){
        super(id,customerNumber)
        this.firstName = firstName

    }

}

class CorporatedCustomer extends customer{
    constructor(companyName,id,customerNumber){
    super(id,customerNumber)
    this.companyName = companyName
    }
}