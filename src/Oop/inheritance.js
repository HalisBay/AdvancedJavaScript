function Person(firstName,lastName){
    this.firstName = firstName
    this.lastName=lastName
}
function Student(favoriteCourse){
    this.favoriteCourse = favoriteCourse
}

//prototyping
Person.prototype.city;

//inheritance
Student.prototype = new Person("Halis","Bay")

var student = new Student("c#")
student.city = "İstanbul"
alert(student.firstName + " "+ student.lastName +" from: "+ student.city+ " favorite: " + student.favoriteCourse)