const myButton = document.getElementById('my-Button')
console.log(myButton)
myButton.addEventListener('click', (e) => {
    //cách 1
    // const elm = document.getElementsByClassName('content')
    // console.log(elm[0])
    //cách 2
    const elm = document.querySelector('.content')
    console.log(elm)
    elm.innerHTML = 'hello putanginamo'
    
})