

function ValidarFormulario(){

    const user = document.getElementById('user').value;
    const pass = document.getElementById('pass').value;
    const email = document.getElementById('email').value;
    const error = document.getElementById('error1');
    const error2 = document.getElementById('error2');
    const error3 = document.getElementById('error3');



    if(user === "" ){
        error.style.display = "block";
    }
    if(pass === "" ){
        error2.style.display = "block";

    } 
    if(email===""){
        error3.style.display = "block";

    }
    console.log("Hola", user);

    return false;
    
}