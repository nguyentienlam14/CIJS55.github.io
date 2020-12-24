// compare var/ let/ const

function compare() {
    if(true) {
        var a = 1 // ton tai duoc o ngoai 
        let b = 2 // chi ton tai trong cai function
        const c = 3 // chi ton tai trong cai function
    }
    console.log(a)
    console.log(b)
    console.log(c)
}

// kieu string ( la mot chuoi)

const str = 'Nguyen Van A'
const str2 = 'NGUYEN Van B'
console.log(str.length)
console.log(str.split(' ')[0])
console.log(str.toLowerCase().includes('nguyen'))

const num = 1 
const char = '1'
console.log(num === Number(char) )

// khai bao chua gan gia tri = undefined
// null la gan gia tri nhung la gia tri rong

// Array

const arr = [1,2,3,4]
arr.push(5) // gan them phan tu vao cuoi
arr.unshift(0) // gan them phan tu len dau
console.log(arr.indexOf(4)) // 3   // check vi tri phan tu trong array
console.log(arr.indexOf(8)) // -1
arr.splice(2,1) // xoa vi tri thu hai cua array

// object
const student = {
    name: 'Nguyen Van A',
    age: 18,
    submit: function () {
        console.log('wan we')
    }
}
console.log(student.name) // lay ten trong object
student.name = 'abc' //gan ten
student.submit ()   // dong mo ngoac de chay function

// arrow function
function sum(a, b) {
    return a + b
} // cach goi functin cu


() => {} //  cu phap rut gon cua function
//vd
const fun = (a, b) => {
    return a + b
} 

fun ()