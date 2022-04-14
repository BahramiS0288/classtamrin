// 1. Calculate
// Read Radius
// Calculate A=πr2

/*function area(radius){
    let result = radius * radius * Math.PI ;
    return result ;
}
console.log(area(1));*/


// 2. Using if..else, write the code which gets a number via prompt and then shows in alert:
// 1, if the value is greater than zero
// -1, if less than zero,
// 0, if equals zero.

/*let num = +prompt("Enter number", 0);
if (num > 0){
    alert(1);
}else if( num < 0){
    alert(-1);
}else{
    alert(0);
}*/


// 3. Create a program that:
// Reads the number of years employed
// Reads the number of children the employee has
// Prints the total amount of salary the employee makes .
// Output: "The total amount is 560$. 400$ minimum wage + 100$ for 5 years experience + 60$ for 2 kids "

/*function salary(year , childe){
    let total = 400 + (20 * year) + (30 * childe) ;
    alert(`The total amount is ${total}$`);
}
salary( 5, 2);*/


// 4. Write a function that:
// Get a number.
// Display the sum of natural numbers until the parameter is reached.


/*function sum(num){
    if (num > 0) return num + sum(num - 1)
    else return 0
}
console.log(sum(5));*/
//or
/*function sum(num){
    let result = 0;
    for( let i = 1 ; i <= num ; i++){
         result += i ; 
    }
    return result ;
}
console.log(sum(5));*/


// 5. Write the code which outputs prime numbers in the interval from 2 to n.
// For n = 10 the result will be 2,3,5,7.
// P.S. The code should work for any n, not be hard-tuned for any fixed value.

/*function prime(number){
    for(let i = 2; i<=number; i++){
        let x = true ;
        for(let j = 2; j<i ; j++){
            if( i % j == 0){
                x = false;
                break ;
            }
        }if(x){
                console.log(i);
            }
        }
    }
prime(100)*/


// 6. Let's write a program to make a simple calculator with the switch statement .
// Just assume + , - , * , / .

/*(function (a , b , c){
    switch(b){
        case '+' :
            console.log (a + c) ;
            break ;
        case '-' :
            console.log (a - c) ;
            break ;
        case '/' :
            console.log (a / c) ;
            break ; 
        case '*' :
            console.log (a * c) ;
            break ;
        default:
            console.log("Error");           

    }
}(4,'-',2));*/






















































