function functionSignature(parameter1,parameter2) {
    return parameter1+ parameter2
    
}
//alert(functionSignature(1,2))

function functionWithOutReturn(parameter1,parameter2) {
    
    alert("okay")
}

//functionWithOutReturn()

function defaultParameters(x,y) {
    
    if(y === undefined){
        y=5
    }
    alert(x + y)
}

//defaultParameters(1)

findMax(1,2,3,4,5,67,89,90)

function findMax() {
    var i,max=0;
    for(i=0; i< arguments.length;i++){
        if(arguments[i]> max){
            max = arguments[i]
            //alert(max)
        }
    }
    alert(max)
    return max;
    
}