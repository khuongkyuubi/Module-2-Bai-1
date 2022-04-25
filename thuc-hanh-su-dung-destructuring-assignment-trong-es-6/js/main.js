// run with node
// Bước 1
let names = ["alpha", "beta", "gamma", "delta"];
// let [firstName, lastName] = names;
// console.log(firstName); // alpha
// console.log(lastName); // beta
// Bước 2
// let [firstName, lastName] = ["alpha", "beta", "gamma", "delta"];
// console.log(firstName); // alpha
// console.log(lastName); // beta
// Bước 3

let [firstName, , ...lastName] = names;
console.log(firstName); // alpha
console.log(lastName);// [ 'gamma', 'delta' ]
//Bước 4 swap value
let [firstName2, secondNames2] = ["alpha", "beta", "gamma", "delta"];
console.log(firstName2);
console.log(secondNames2);
[firstName2, secondNames2] = [secondNames2, firstName2];
console.log(firstName2);
console.log(secondNames2);

// Bước 5 trích xuất từ mảng trả về
let NamesList = () => ["alpha", "beta", "gamma", "delta"];
console.log(NamesList());
let [firstName3, lastName3] = NamesList();
console.log(firstName3);
console.log(lastName3);

// Bước 6 phá hủy và gán lại giá trị của object
const marks = {
    x: 21,
    y: -34,
    z: 47
}
const {x, y, z} = marks;

console.log(x); // 21
console.log(y); // -34
console.log(z); // 47

// or
const {x: x1, y: y1, z: z1} = marks;
console.log(x1, y1, z1) // 21 -34 47

// Bước 7 trích xuất dữ liệu của các đối tượng lồng nhau

const marks2 = {
    section1: {alpha: 15, beta: 16},
    section2: {alpha: -31, beta: 19}
}

const {section1: {alpha: value1, beta: value2}} = marks2;
console.log(value1); // 15
console.log(value2); // 16
