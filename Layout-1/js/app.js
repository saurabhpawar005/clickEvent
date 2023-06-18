const cl = console.log;


const stdForm = document.getElementById('stdForm');
const fnameControl = document.getElementById('fname');
const lnameControl = document.getElementById('lname');
const emailControl = document.getElementById('email');
const contactControl = document.getElementById('contact');
const stdContainer = document.getElementById('stdContainer');


let stdArray = []
function uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
        return v.toString(16);
    });
}

const onstdSubmit = (eve) =>{
    eve.preventDefault();

    let obj = {
        fname : fnameControl.value,
        lname : lnameControl.value,
        email : emailControl.value,
        contact : contactControl.value,
        id : uuid()
    } 
    stdArray.push(obj)
    localStorage.setItem("stdArray" , JSON.stringify(stdArray))
    cl(stdArray)


    let result = "";
    let templating = (arr) => {

    }

    stdArray.forEach((std,i) => {  
        result += `
                    <tr>
                    <td>${i+1}</td>
                    <td>${std.fname}</td>
                    <td>${std.lname}</td>
                    <td>${std.email}</td>
                    <td>${std.contact}</td>
                    <td><button class="btn btn-primary" onclick="onEdit()">Edit</button></td>
                    <td><button class="btn btn-danger">Delete</button></td>
                    
                    </tr>
    `
    })

    stdContainer.innerHTML = result;
    templating(stdArray)
    stdForm.reset()
}

// const onEdit = (ele) =>{
//     // let editId = ele.getAttribute("data-id")
//     let editId = ele.dataset.id;
//     cl(editId)
//     let editObj = stdArray.find(obj => obj.id === editId)
//     cl(editObj);
//      fnameControl.value = editObj.fname
//      lnameControl.value = editObj.lname
//      emailControl.value = editObj.email
//      contactControl.value = editObj.contact


// }





stdForm.addEventListener('submit' , onstdSubmit)