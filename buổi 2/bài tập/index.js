<<<<<<< HEAD
class person {
    name
    age 
    job
    idCard
    constructor (name, age, job, idCard) {
        this.name = name
        this.age = age
        this.job = job
        this.idCard = idCard
    }
}
class family {
    familyMember 
    constructor () {
        this.familyMember = []
    }
    addmember (person) {
        this.familyMember.push(person)
    }
    getmember () {
        for (let a of this.familyMember) {
            console.log(a)
        }
    }
        
}
class Town {
    listOfFamily
    constructor () {
        this.listOfFamily = []
    }
    addFamily (family) {
        this.listOfFamily.push(family)
    }
    getFamily () {
        for (let b of this.listOfFamily) {
            console.log(b);
        }
    }
}

const c = new person ("Nguyen C", 1857, "cowboy", 245687921)
const d = new person ("Nguyen D", 1858, "sake", 264789123)
const e = new person ("Nguyen E", 1865, "grave guard", 456879541) 
const f = new person ("Nguyen F", 1888, "doctor", 247546123)
const g = new person ("Nguyen g", 1898, "student", 364879854)

let family1 = new family('texas');
family1.addmember(c)
family1.addmember(d)

let family2 = new family('LA');
family2.addmember(e)
family2.addmember(f)
family2.addmember(g)

let town = new (Town);
town.addFamily(family1);
town.addFamily(family2);

family1.getmember()
family2.getmember()

town.getFamily()

console.log(family1.getmember());
console.log(family2.getmember());
console.log(town.getFamily());





=======
class person {
    name
    age 
    job
    idCard
    constructor (name, age, job, idCard) {
        this.name = name
        this.age = age
        this.job = job
        this.idCard = idCard
    }
}
class family {
    familyMember 
    constructor () {
        this.familyMember = []
    }
    addmember (person) {
        this.familyMember.push(person)
    }
    getmember () {
        for (let a of this.familyMember) {
            console.log(a)
        }
    }
        
}
class Town {
    listOfFamily
    constructor () {
        this.listOfFamily = []
    }
    addFamily (family) {
        this.listOfFamily.push(family)
    }
    getFamily () {
        for (let b of this.listOfFamily) {
            console.log(b);
        }
    }
}

const c = new person ("Nguyen C", 1857, "cowboy", 245687921)
const d = new person ("Nguyen D", 1858, "sake", 264789123)
const e = new person ("Nguyen E", 1865, "grave guard", 456879541) 
const f = new person ("Nguyen F", 1888, "doctor", 247546123)
const g = new person ("Nguyen g", 1898, "student", 364879854)

let family1 = new family('texas');
family1.addmember(c)
family1.addmember(d)
let family2 = new family('LA');
family2.addmember(e)
family2.addmember(f)
family2.addmember(g)
let town = new (Town);
town.addFamily(family1);
town.addFamily(family2);
family1.getmember()
family2.getmember()
town.getFamily()
console.log(family1.getmember());
console.log(family2.getmember());
console.log(town.getFamily());





>>>>>>> 8c5d49a2fdbb07608253cd2a7471fa092733f8c2
