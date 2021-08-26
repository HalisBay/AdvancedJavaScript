//If - Else
var date = new Date
var hour = date.getHours()

if (hour >= 5 && hour <= 11) {
    alert("Good morning")
}
else if (hour >11 && hour<17){
    alert("Good Afternoon")
}
else if (hour >= 17 && hour <23){
    alert("Good Evening")
}
else{
    alert("Good Night")
}

//-----------------------------------------------------------

// Switch-Case

var language = prompt("What's your language")

switch (language) {
    case "fr":
        alert("French")
        break;
        case"tr":
        alert("Turkish")
        break;
    default:
        alert("Geçerli dil giriniz")
        break
}
