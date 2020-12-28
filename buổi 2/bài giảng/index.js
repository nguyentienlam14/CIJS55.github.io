//{                                 JAVASCRIPT OPP
// Là một kỹ thuật lập trình cho phép trừu tượng hóa đối tượng vào sản phẩm
// Đối tượng là gì ???
// Tất cả mọi thứ đền là đối tượng  
// Mỗi đối tượng đều có thông tin, trạng thái và hoạt động
// class là môtj khuôn mẫu định nghĩa các thuộc tính và các phương thức chung cho tất cả các đối tượng (object) cùng loại.
// Mỗi đối tượng là một thể hiện cảu một class ( hay đối tượng là sản phẩm được tạo ra từ một khuôn lớp }        

class Student {
    name  
    dob 
    address
    constructor(name, dob, address) {
        this.name = name
        this.dob = dob
        this.address = address
    }
    getAge() {
        return 2020 - this.dob
    }
}     
class Admin {
    listStudent
    constructor () {
        this.listStudent = []
    }
    addStudent(student) {
        this.listStudent.push(student)
    }
    getlistStudent () {
        for (const item of this.listStudent) {
            console.log(item)
            console.log('toi ten la ' + item.name);
            console.log('toi ' + item.getAge + ' tuoi');
            console.log('toi den tu ' + item.address);
        }
    }
}
const userA = new Student('userA', 1999, 'TN')

const admin = new Admin()
admin.addStudent(userA)





// class Animal
// name, color, numOflegs
//eat => con "name" dang an
// isDangerous => true / false
//true khi 2 < numOflegs && numOflegs < 4

// class Animal {
//     name
//     color
//     numOflegs
//     constructor(name, color, numOflegs) {
//         this.name = name
//         this.color = color
//         this.numOflegs = numOflegs
//     }
//     eat(food) {
//         console.log(`thằng ${this.name} dang an food`);
//     }
//     isDangerous() {
//         if (2 < this.numOflegs ||  this.numOflegs < 4) {
//             return true;
//         }
//         else {
//             return false;
//         }
//     }
// }
// const a = new Animal ('Thắng', 'yellow', 2)
// console.log(a);
// console.log(a.isDangerous());
// a.eat('cứt');

// class Cat extends Animal {
//     genres
//     constructor(name, color, numOflegs, genres){
//         super(name,color,numOflegs)
//         this.genres = genres
//     }
// }
// const myCat = new Cat ('Thắng', 'yellow', 2, 'ta')
// console.log(myCat);




// // toan tu 3 ngoi
// isMale = 1 // con trai
// if (isMale === true) {
//     console.log('con trai')
// } else {
//     console.log('con gai')
// }
// const str = (isMale === 1)