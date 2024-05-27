// 1. Define an object named people containing an empty array called friends.

type friends = {
    firstName : string,
    lastName : string,
    id : number
}

let people : {
    friends : friends [];}={
        friends : []
    }


// 2. Create three separate objects, each representing a friend, with properties like firstName,
// lastName, and optionally id.

let friend1 : friends = {
    firstName : "Abid",
    lastName : "mehmood",
    id : 1234
};

let friend2 : friends = {
    firstName : "danish",
    lastName : "khan",
    id : 13456
};

let friend3 : friends = {
    firstName : "ali",
    lastName : "khan",
    id : 5432
};

// 3. Add these friend objects to the friends array within the people object.

people.friends.push(friend1);
people.friends.push(friend2);
people.friends.push(friend3);

// Rearrange an array using array methods to form the sentence "I am a student of GIAIC".
// Steps:
// 1. Scrambled Array:
// o Start with an array of elements in a scrambled order, like:

// const scrambledArray = ["student", "of",true, 123, "am", "a", "GIAIC", "I"];
// • Modify the Array:
// • Use methods like split(), join(), push(), pop(), shift(), and unshift() to:
// o Convert non-strings (booleans, numbers) to strings if needed.
// o Split elements into character arrays (optional).
// o Rearrange characters or elements in the desired order (modify original array or
// create temporary arrays).

// • Output the Result:
// • Use join() to combine elements back into a single string: "I am a student of GIAIC".


const scrambledArray =  ["student ", "of ",true, 123, "am ", "a ", "GIAIC ", " I "];

scrambledArray.shift();                               //"of",true, 123, "am", "a", "GIAIC", "I" 
scrambledArray.pop();                                 //"of",true, 123, "am", "a", "GIAIC"
scrambledArray.unshift("I ");                          // "I","of",true, 123, "am", "a", "GIAIC"
scrambledArray.splice(1,3);                             //"I","am", "a", "GIAIC"                     
scrambledArray.splice(3,0,"student ","of ");          //"I","am", "a","student","of", "GIAIC"

console.log(scrambledArray.join(''));

// Task: Create a program to represent a product catalog using an array and perform basic queries.
// 1. Define an array named inventory to store product information.
// 2. Create three separate objects, each representing a product, with properties like name,
// model, cost, and quantity.
// 3. Add these product objects to the inventory array using an appropriate array method.
// 4. Access and log the quantity property of a specific product (e.g., third product) in the
// inventory array.
// 5. Explore adding and accessing more elements within the inventory array to understand
// how to manage product data.

type product = {
    name : string,
    model : string,
    cost : number,
    quantity : number
};

let inventory : product[] = [];


let product1 : product = {
    name : "bike",
    model : "unique",
    cost : 45000,
    quantity : 4
};


let product2 : product = {
    name : "havybike",
    model : "yamaha",
    cost : 80000,
    quantity : 2
};

let product3 : product = {
    name : "car",
    model : "toyota",
    cost : 100000,
    quantity : 1
};

inventory.push(product1,product2,product3);


console.log("quantity of third product",inventory[2].quantity);

let product4 : product = {
    name : "laptop",
    model : "7th generation",
    cost : 40000,
    quantity : 7
};

inventory.push(product4);

console.log("current inventry:",inventory);
console.log("Details of the fourth product:", inventory[3]);
