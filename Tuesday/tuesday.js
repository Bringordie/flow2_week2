//1)      Using existing functions that takes a callback as an argument

// a) 
console.log("\n Assignment 1.a \n");
let personarray = ["Lars", "Jan", "Peter", "Bo", "Frederik"];
console.log(personarray.filter(word => word.includes("a")));

// b)
console.log("\n Assignment 1.b \n");
let reversedItems = personarray.map(item => item).reverse();

console.log(reversedItems);

// 4)      Getting really comfortable with filter and map

// a) 
console.log("\n Assignment 4.a \n");
var numbers = [1, 3, 5, 10, 11];

var mapArray = function (n, index, array) {
    if (index + 1 < array.length) {
        return n + numbers[index + 1];
    } else {
        return n;
    }
}

var result = numbers.map(mapArray);
console.log(result);

// b)
console.log("\n Assignment 4.b \n");
var mapNames = name => '<a href=””>' + name + "</a>\n";
var names = ["Frederik B", "Malthe", "Frederik T"];
var result = '<nav>\n' + names.map(mapNames).join("") + '</nav>';

console.log(result);

// c) 
console.log("\n Assignment 4.c \n");
var names = [{name:"Lars",phone:"1234567"}, {name: "Peter",phone: "675843"}, {name: "Jan", phone: "98547"},{name: "Bo", phone: "79345"}];

var table = name =>
    "<tr>\n"
    + "<td>" + name.name + "</td>\n"
    + "<td>" + name.phone + "</td>\n"
    + "</tr>\n";
    
var header = "<tr>\n"
        + "<th>Name</th>\n"
        + "<th>Phone</th>\n"
        + "</tr>\n";

var result = "<table>\n"
        + header
        + names.map(table).join("") + "</table>";

console.log(result);

// d)
console.log("\n Assignment 4.d \n");
console.log("See the tuesday_4d.html file");

// e)
console.log("\n Assignment 4.e \n");
console.log("See the tuesday_4e.html file");


// 5. reduce

// a)
var all= ["Lars", "Peter", "Jan", "Bo"];
console.log(all.join(","));
console.log(all.join(" "));
console.log(all.join("#"));

// b)
var numbers = [2, 3, 67, 33];
var result = numbers.reduce(function (total, n) {
    return total + n;
});
console.log(result);