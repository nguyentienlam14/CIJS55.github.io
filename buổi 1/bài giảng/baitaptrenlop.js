//1. given a year, return the century it is in
//year = 1905 => centuryFromYear(year) = 20
//year = 1700 => centuryFromYear(year) = 17
//year = 2000 => centuryFromYear(year) = 20

const centuryFromYear = (year) => Math.ceil (year/100) //https://viblo.asia/p/codesignal-century-from-year-07LKXxx8KV4
console.log (centuryFromYear(1905))

//2. Given the string, check if it is a palindrome
// aabaa = true
// abac = false

function checkPalindrome(inputString) {
    const length = inputString.length
    for (let index = 0; index < length/2; index++) {
        if (inputString[index] !== inputString[length - index - 1]){
            return false
        }
    }
    return true
}
console.log(checkPalindrome('aabaa'))
console.log(checkPalindrome('abdca'))

