function SignUpclosePopUp(){
    document.getElementById("SignUpcontainer").style.display="none";
    document.getElementById("parentSignUp").style.display="none";
    document.getElementById("childSignUp").style.display="none";
}
function SignUpPopUp(){
document.getElementById("SignUpcontainer").style.display="flex";
document.getElementById("parentSignUp").style.display="flex";
document.getElementById("childSignUp").style.display="flex";
}

document.querySelector("#SignUpId").addEventListener("submit",getdata);
var signUpdata =JSON.parse(localStorage.getItem("SignUpInfo")) || [];
function getdata(){
    event.preventDefault();
    var mobileNumber = document.querySelector(".SignUpform-textbox").value;
    var SignUpPass = document.querySelector("#SignUpPassword").value;
    var userData ={
        MobileNumber: mobileNumber,
        Password:SignUpPass,
    };
    signUpdata.push(userData);
    localStorage.setItem("SignUpInfo",JSON.stringify(signUpdata));
    document.querySelector(".SignUpform-textbox").value="";
    document.querySelector("#SignUpPassword").value="";
    alert("Signed Up Successfully");
    window.open("index.html","_self");
}
function changeToLogin(){
    loginPopUp();
    SignUpclosePopUp();
}
