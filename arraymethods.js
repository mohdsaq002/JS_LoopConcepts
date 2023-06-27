const nums = [1,2,3,4,5,6,7,8,9,10];

const coding = ["js", "ruby", "java", "python", "cpp"];

//using forEach function method

/** Syntax:
 *            array.forEach((val) => {
                        console.log(val);                  
                            })
*/

// Using forEach loop on the coding array

coding.forEach((item) =>{
    console.log(item);
} );

// Video dekh k description likh isska video number 29 I guess!

function printMe(item){
    console.log(item);
};


coding.forEach(printMe);



const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
];

myCoding.forEach((item) => console.log(`${item.languageName}`))


