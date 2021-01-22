// 4. a. Give an array of number, find the odd number
// b. find but not loop
// inputArray = [3, 6, -2, -5, 7, 3, 8, 10, 11]
// output = [6, -2, 8, 10]


// function findOddNumber(inputArray) {
//     var arr = [3, 6, -2, -5, 7, 3, 8, 10, 11]
//     var oddNumber = arr.filter (number => number %2 !== 0)
//     console.log("odd number " + oddNumber);
//     var evensNumber = arr.filter (number => number %2 == 0)
//     console.log("evensNumber " + evensNumber )
// }
// findOddNumber();


inputArray2 = [3, 6, -2, -5, 7, 3, 8, 10, 11]
function findOddNumber(inputArray) {
    for (const iterator of inputArray) {
        if(iterator % 2 !== 0) {
            arr.push (iterator)
        }
    }
    return arr
}
const result = inputArray2.filter(function(item){ //lọc 
    return item % 2 !== 0
})
console.log(result)

//outPut = [6, 12, -4, -10]
const result2 = inputArray2.map(item => item * 2) //xử lý
console.log(result2)
