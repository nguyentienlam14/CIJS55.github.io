// 3.Given an array of number, find the pair of adjacent elements
// that has the largest product and return that product.
// inputArray = [3, 6, -2, -5, 7, 3]
// adjacentElementsProduct(inputArray) = 21 


function adjacentElementsProduct(inputArray) {
    var result = inputArray[0];
    for(var i = 1; i < inputArray.length; i++) {
    result = result * inputArray[i];
    }
    if (inputArray.length == 1) return 0;    
    var maxProduct = inputArray[0] * inputArray[1];    
    for(var i = 0; i < inputArray.length - 1; i++) {
        if(inputArray[i] * inputArray[i+1] > maxProduct) {
        maxProduct = inputArray[i] * inputArray[i+1];
        }
    }
    return maxProduct;
}
console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]))