const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Using map
/* map actually manipulates the given array but does not change the given array 
instead makes a new array */

const newNum = myNumers.map((num) => {
    return num*10 ;
});

console.log(newNum);


/*Now chaining over different methods used in functions.
*/

const newNums = myNumers
                        .map((num) => num*10)
                        .map((item) => item + 1)
                        .filter((num) => num >= 40);

console.log(newNums);


/**Hence We used Chaining above , the associavity of chaining is from "left to right" 
 if we code the above in single line and for this associavity is "Top - Bottom" 
 AND the below method works on the result of the just above method and it goes on..
 */
