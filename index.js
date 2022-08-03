console.log("js  script");
const logsignlist = document.querySelectorAll("#logsign");
const pfpdivlist = document.querySelectorAll("#pfpdiv");

function show(shown,hidden){
    document.getElementById(shown).style.display='block';
    document.getElementById(hidden).style.display='none';
    return false;
}
var logged = false;

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
        loginInfo.forEach(
            function(element){
                if(element.MobileNumber==Mobileno && element.Password==LoginPass){
                    flag = true;
                }
            }
        )
    }
    if(flag==true){
        alert("Sign in Succesfully");
        closePopUp();
        hidelogsign();  
    }else{
        alert("wrong Credentials")
    }
    document.querySelector(".form-textbox").value="";
    document.querySelector("#LoginPassword").value="";
}
if(logged==true){ 
    hidelogsign();      
}else{
    showlogsign();
}
function hidelogsign(){    
    console.log("logged");  
    for(let i =0;i<logsignlist.length;i++){
        logsignlist[i].style.display='none';        
    }  
    for(let i=0;i<pfpdivlist.length;i++){
        pfpdivlist[i].style.display='grid';
    }
}
function showlogsign(){
    for(let i =0;i<logsignlist.length;i++){
        logsignlist[i].style.display='grid';
    }    
    for(let i=0;i<pfpdivlist.length;i++){
        pfpdivlist[i].style.display='none';
    }
}
function changeToSignUp(){
    SignUpPopUp();
    closePopUp();
}
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
