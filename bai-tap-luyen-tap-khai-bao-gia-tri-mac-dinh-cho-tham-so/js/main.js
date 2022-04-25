const lastIndexOf = (arr, elt, start = arr.length - 1) => {
    for (let i = start; i > -1; i--) {
        // console.log(arr[i])
        if (arr[i] === elt) return i;
    }
    return -1;
}

console.log(lastIndexOf([1, 2, 1, 2], 2));