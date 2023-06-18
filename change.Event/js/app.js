let cl = console.log;

changeBg = document.getElementById('changeBg');

let body = document.querySelector('body ')

// let skill =[...document.querySelectorAll('.skill')]





 const changeEvent = (eve) =>{
    cl(eve.target.value)
    body.style.backgroundColor = eve.target.value;
 }






changeBg.addEventListener('change' , changeEvent)