// Bước 1 : Sao chép các mảng
const cars1 = ["Audi", "BMW", "Lexus", "Mercedes"];
// copy form cars1 to cars2 using spread
const cars2 = [...cars1];

// copy prom cars1 to cars3 , add more elements
//
const cars3 = [...cars1, "Peugeot", "Roll Royce"]

// console.log(cars1);
// console.log(cars2);
// console.log(cars3);

// Bước 2:  Nối các mảng

// const cars4 = [...cars1, ...cars2];
// console.log(cars4);

// Bước 3 : Sử dụng spread syntax với các đối tượng

const cars5 = {
    Brand: "BMW",
    Color: "Black"
}

const cars6 = {...cars5};
console.log(cars6); // cars6 is copied from cars5

// Bước 4: Hợp nhất các đối tượng dùng spread syntax

const cars7 = {
    Brand: "Lexus",
    Color: "White",
    Year: 2019

}

const cars8 = {...cars5, ...cars7};
console.log(cars8); // { Brand: 'Lexus', Color: 'White', Year: 2019 }

// Khi dùng spread với object, nó sẽ hợp nhất 2 cái lại một, cái trùng sau sẽ đè lên cái trước, nếu k trùng sẽ giữ nguyên
console.log({...cars7, ...cars5});//{ Brand: 'BMW', Color: 'Black', Year: 2019 }
// Bước 6: Dùng spread để cấu trúc lại mảng (kết hợp destructuring)
const numbers = [1, 2, 3, 4, 5, 6];
const [a, b, c, ...others] = numbers;
console.log(a); // 1
console.log(b); // 2
console.log(c); // 3
console.log(others); // [4, 5, 6]

// => spread đại diện cho phần còn lại của các phần tử, spread có thể co giãn không giới hạn


