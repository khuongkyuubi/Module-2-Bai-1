// Run with node
// Bước 1
let arr = [1, 2, 3, 4, 5, 6, 7];
let square = (item) => item * item;

// Bước 2
function arrSq(func, arr) {
    let newArr = [];
    arr.forEach((element) => {
        newArr.push(func(element));
    });
    return newArr;
}

// Bước 3
console.log(arrSq(square, arr));// [1,  4,  9, 16, 25, 36, 49]