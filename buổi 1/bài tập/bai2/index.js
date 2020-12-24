// 4. a. Give an array of number, find the odd number
// b. find but not loop
// inputArray = [3, 6, -2, -5, 7, 3, 8, 10, 11]
// output = [6, -2, 8, 10]


function findOddNumber(inputArray) {
    var arr = [3, 6, -2, -5, 7, 3, 8, 10, 11]
    var oddNumber = arr.filter (number => number %2 !== 0)
    console.log("odd number " + oddNumber);
    var evensNumber = arr.filter (number => number %2 == 0)
    console.log("evensNumber " + evensNumber )
}
findOddNumber();


