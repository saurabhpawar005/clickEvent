 var username = document.getElementById("username");


const focusEvent = (eve) =>{
    eve.target.style.border = "3px solid red";
}

const blurEvent = (eve) => {
    eve.target.style.border = "1px solid blue "

    let val =eve.target.value.trim();

    if (val.length === 0){
        eve.target.nextElementSibling.classList.remove('d-none')
    }else{
        eve.target.nextElementSibling.classList.add('d-none')
    }
}








username.addEventListener("focus" ,focusEvent)
username.addEventListener("blur" ,blurEvent)