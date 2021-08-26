//For Loop
/*
for (var i = 0; i <=10 ; i++){
    if (i ==5) {
        break;
        //continue;
    }
    alert(i)
}
*/

//-----------------------------------------------------------
//While Loop
/*
var number =0;
while (number<3) {
    alert(number)
    number= number+1;
}
*/
//-----------------------------------------------------------
//Do-While Loop

var age = prompt("your age ?")
var result = "";
do{
    result += age;
    result +="/";
    age --;
}
while (age > 0) 
    alert(result)
