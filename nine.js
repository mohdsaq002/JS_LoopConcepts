/* "reduce"  method usage and concept*/ 
/* Basically "reduce is used in shopping cart to add all the values and more places." */

const nums = [1,2,3];

const myTotal = nums.reduce(function(acc , currval){
    console.log(`acc: ${acc} and currval: ${currval}`); /*we wrote to see values changing */
    return acc + currval ;
},0/*Intial Value of the accumulator(acc)*/)

console.log(myTotal);



//"reduce"  Using "ARROW FUNCTION"


const myTotals = nums.reduce((acc , currval) => acc + currval , 0);
console.log(myTotals);


//Example of "reduce" on array of objects;

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
];

const amount = shoppingCart.reduce((acc , item) => acc + item.price ,0);

console.log(`Your Cart Value: ${amount}`);