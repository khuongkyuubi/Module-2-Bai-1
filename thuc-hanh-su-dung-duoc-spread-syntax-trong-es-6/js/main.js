// run with node
// Bước 1
function sum(x, y, z) {
    return x + y + z;
}

const numbers = [1, 2, 3];
console.log(sum.apply(null, numbers)); // 6
console.log(sum(...numbers)); // 6

// Bước 2
let a = [1, 2];
a.push([1, 2, 3]);
console.log(a);

// dùng hàm apply
let a1 = [1,2];
a1.push.apply(a1, [1,2,3]);

console.log(a1) ; //[ 1, 2, 1, 2, 3 ]

// Bước 3 sao chép 1 mảng

let a2 = [1, 2];
let b2= [1,2,3];
a2 = [...b2];
console.log(a2);
// Bước 4
let obj1={a:1, b:2};
let obj2 = {...obj1};
console.log(obj2); //{ a: 1, b: 2 }

// Bước 5
let a3 = [1,2];
let b1 = [3,4,5];
let c1 = [...a3,...b1];
console.log(c1);