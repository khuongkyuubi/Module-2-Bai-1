// objects là 1 hình chữ nhật
// kiểm tra xem điểm point có nằm trong hình chữ nhật nào hay không
function detectCollision(objects, point) {
    let {x, y} = point;
    return objects.find((obj) => {
        let {x: x1, y: y1, width: width, height: height} = obj;
        return (x >= x1 && x <= x1 + width && y >= y1 && y <= y1 + height)
    })
}

const myObjects = [
    {x: 10, y: 20, width: 30, height: 30},
    {x: -40, y: 20, width: 30, height: 30},
    {x: 0, y: 0, width: 10, height: 5}
]

console.log(detectCollision(myObjects, {x: 4, y: 2})); //{ x: 0, y: 0, width: 10, height: 5 }
