var calculateChange = function (price, cash) {
    var returnValue = cash - price; // the value here must be transported to an object
    var change = {}; //defining the object

    // change [key] = value
    // {key: value}  !> creation of the object
    // an ammount must match with a particular dénomination =>


    const coinTypes = ["twenty", "ten", "five", "twoDollar", "dollar", "quarter", "dime", "nickle", "penny"] //modulo fn to see how many of the elements fits into the return price

//the ammount = how many of each kind of items needed => loop through denomination to get to the particular price 
    
    const coinValues = [2000, 1000, 500, 200, 100, 25, 10, 5, 1]
    
var amount; 
    
    for (var i = 0;  i<coinValues.lenght; i++   ) {
     amount = Math.floor (returnValue/coinValues[i]  ) ;  
       if (amount > 0 ) {
           
        change [coinTypes[i]] = amount;
           
           returnValue = returnValue%coinValues [i]; //the modulo works for an integer but not for a string , beware of typos. 
           
           
       }
         
    } 

return change;

}


console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));
