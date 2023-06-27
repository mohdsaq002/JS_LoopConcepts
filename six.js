const myNums = [1,2,3,4,5,6,7,8,9,10];

//Using forEach  , this will return a new array called myNewnums in which only numbers greater than 4 will be there.

const myNewnum = myNums.filter((num) => (
    num > 4
) );


// Using the filter concept with forEach..

/**Because forEach do not make a new array first we have to make an empty array(here newNums) then 
 then iterate each element in the given array with "forEach" function method then put 
 a condition and push the items in the new array , thus it will work same as "filter" func method.
 */


const newNums =  [];

myNums.forEach((item)  => {

    if(item>4){
        newNums.push(item); 
    }

});


console.log(newNums);


// Below is the array of objects. We will try some operations on it

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


//   // print the books from the above array having genre === "History".

//   let  userBooks = books.filter((book) => book.genre === "History");

//   // Printing the books with genre = history and published after 1995.

//   userBooks = books.filter((item) => item.publish >= 1995 && item.genre === "History"  );

//   console.log(userBooks);


//Now find out the title of the book of the books having genre === "History"

const userBooks = books
                       .filter((item) => item.genre === "History")
                       .forEach((item) => console.log(`${item.title}`));

                       //* Here for "forEach" item is the elements of the returned array
                       // obtained from "filter" method used on books array. 
        
                      
// Above concept is called chaining , we can chain as many function methods as we want 
// Only thing we need to remember is the that below method will work on the result of the above already used.