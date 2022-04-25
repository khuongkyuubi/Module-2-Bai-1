// run in node
// Bước 1:
let geeks = () => {
    for (let i = 0; i <= 10; i += 2) {
        console.log(i + " ");
        console.log(typeof i); // number

    }
}
geeks();

// Bước 2:
const arr = ["Ha Noi", 2032, 3000];
for (let value of arr) {
    console.log(value + "");
    console.log(typeof value);//
}

// Bước 3 for in
let obj = {
    name: "Perter Parker",
    age: 25,
    salary: 3000
};

for (let index in obj) {
    console.log(obj[index]);
    console.log(typeof index); // string
}

// index ở for bình thường là number (nên mới cộng được)
// còn index ở for in là string, không cộng được





