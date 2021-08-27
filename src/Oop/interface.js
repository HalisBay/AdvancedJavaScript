function sendEmail(personInterface){
    var to = personInterface.eMail
    var name1 = personInterface.name1

    var send = function(){
        alert("mail sent to: " + name1 + " | mail:" + to)
    }
    
    send()
}



function Customer1(name1,eMail){
this.name1 = name1
this.eMail = eMail

}

function Employee(name1,eMail){
    this.name1 = name1
    this.eMail = eMail
    
    }

var someCustomer = new Customer1("Halis","asd@hotmail.com")
sendEmail(someCustomer)

var someEmployee = new Employee("employee", "employee@hotmail.com")
sendEmail(someEmployee)