

const btn = document.getElementById("boton_registro");

btn.onclick = ValidarRegistro;




function ValidarRegistro(){

    const user = document.getElementById('user').value;
    const pass = document.getElementById('pass').value;
    const email = document.getElementById('email').value;
    const repass = document.getElementById('repass').value;
    const remail = document.getElementById('remail').value;
    const error = document.getElementById('error');
    const error2 = document.getElementById('error2');
    const error3 = document.getElementById('error3');
    const error4 = document.getElementById('error4');
    const error5 = document.getElementById('error5');
    error.style.display = "none";
    error2.style.display = "none";
    error3.style.display = "none";
    error4.style.display = "none";
    error5.style.display = "none";

  



    if(user === "" ){
        error.style.display = "block";
    }
    if(pass === "" ){
        error2.style.display = "block";

    } 
    if(email===""){
        error3.style.display = "block";

    }

    if(repass === "" || repass != pass){
        error4.style.display = "block";

    } 
    if(remail===""){
        error5.style.display = "block";

    }

    return false;
    
}
