let eye=document.getElementById("icon");
let password=document.getElementById("password");

eye.onclick=function(){
    if(password.type=="password"){
        password.type="text";
        eye.src="open.jpg";
    }
    else{
        password.type="password";
        eye.src="hide.png";
    }
}