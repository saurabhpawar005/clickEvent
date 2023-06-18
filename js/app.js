const cl = console.log;

btn = document.getElementById("btn");
box = document.getElementById("box");
skill = document.getElementById("skill");
box1 = document.getElementById("box1");


let jsImg = `https://static.javatpoint.com/images/javascript/javascript_logo.png`;
let angularImg = `https://angular.io/assets/images/logos/angular/angular.png`;


// let btnClick = () => {
//     alert("btn clicked")
// }


// let listOfClass = btn.classList;
// let nameOfClass = btn.className;

// function btnClick (){
//     let classes = box.className;

//     if (classes.includes("d-none")){
//         box.classList.remove('d-none');
//         btn.innerHTML = "hide orange box"
//     }else{
//         box.classList.add('d-none');
//         btn.innerHTML = "show orange box"
//     }
// }



// btn.addEventListener("click", btnClick);



function onbtnClick() {
    classes = box.className;
    if(classes.includes('d-none')){
        box.classList.remove('d-none')
    }else{
        box.classList.add('d-none')
    }
}


const onSkillEnter = (eve) =>{
   cl( eve.target)
   eve.target.setAttribute("src" , jsImg)

}
const onSkillLeave = (eve) => {
    eve.target.setAttribute("src" , angularImg)
}

const onMouseMove = (eve) => {
    cl(eve.offsetX , eve.offsetY)
    eve.target.style.backgroundColor = `rgb(255,${eve.offsetX},${eve.offsetY})`
}


const Enter = (e) => {
    e.target.style.backgroundColor = "orange"
}

const Leave =(e) => {
    e.target.style.backgroundColor = "red"
}


btn.addEventListener("click" , onbtnClick)

// btn.addEventListener("dblclick" , onbtnClick)
skill.addEventListener("mouseenter" ,onSkillEnter)
skill.addEventListener("mouseleave" ,onSkillLeave)
box1.addEventListener("mousemove" ,onMouseMove)
box2.addEventListener("mouseenter" ,Enter)
box2.addEventListener("mouseleave" , Leave)