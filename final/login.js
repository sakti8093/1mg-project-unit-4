function closePopUp(){
    document.getElementById("containerlogin").style.display="none";
    document.getElementById("parentLogin").style.display="none";
    document.getElementById("childlogin").style.display="none";
}
function loginPopUp(){
document.getElementById("containerlogin").style.display="flex";
document.getElementById("parentLogin").style.display="flex";
document.getElementById("childlogin").style.display="flex";
}

document.querySelector("#LoginId").addEventListener("submit",setData);
var loginInfo = JSON.parse(localStorage.getItem("SignUpInfo")) || [];
function setData(){
event.preventDefault();
var Mobileno = document.querySelector(".form-textbox").value;
var LoginPass = document.querySelector("#LoginPassword").value;

var flag = false;
   if(loginInfo==[]){
    alert("Sign up first");
   }else{
    loginInfo.forEach(function(element){
        if(element.MobileNumber==Mobileno && element.Password==LoginPass){
    flag = true;
   }
})
   }
   if(flag==true){
    alert("Sign in Succesfully");
    window.open("index.html","_self")
   }else{
    alert("wrong Credentials")
   }
   document.querySelector(".form-textbox").value="";
   document.querySelector("#LoginPassword").value="";
}
function changeToSignUp(){
    SignUpPopUp();
    closePopUp();
}
