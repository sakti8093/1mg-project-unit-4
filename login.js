var formDiv = document.createElement("div");
formDiv.setAttribute("id","form");
var closedDiv = document.createElement("div");
closedDiv.setAttribute("id","closePopUp");
var buttonclos = document.createElement("button");
buttonclos.addEventListener("click",closePopUp);
buttonclos.innerHTML='<i class="fa-solid fa-xmark"></i>';
closedDiv.append(buttonclos);
var lslogo = document.createElement("div");
lslogo.setAttribute("id","loginLogo");
var logoH2= document.createElement("h2");
var logop = document.createElement("p");
logop.setAttribute("id","loginText");
logop.style.color="#787777";
logop.style.fontSize="15px";
lslogo.append(logoH2,logop);
var lsform = document.createElement("form");
var LsInput = document.createElement("input");
LsInput.setAttribute("type","text");
LsInput.setAttribute("id","form-email")
LsInput.setAttribute("class","form-textbox")
LsInput.setAttribute("required","");
LsInput.required=true;
var lslabel = document.createElement("label");
lslabel.innerText="Enter Your Email ID or Mobile Number";
lslabel.setAttribute("class","form-label")
var lsSubmit = document.createElement("input");
lsSubmit.setAttribute("type","submit");
lsform.append(LsInput,lslabel,lsSubmit);
var lsLinks = document.createElement("div");
lsLinks.setAttribute("id","LoginLinks");
var cdiv = document.createElement("div");
var lsp = document.createElement("p");

var CorporateP = document.createElement("p");
CorporateP.innerText="Have a Corporate account?"
var aCorporate = document.createElement("a");
aCorporate.innerText="Click Here"
aCorporate.style.color="#e56060";
CorporateP.append(aCorporate);
var lsp2 = document.createElement("p");
lsp2.innerText="By logging in,you agree to our ";
var ls2Span = document.createElement("span");
ls2Span.innerText="Terms and Condition "
ls2Span.style.textDecoration="underline";
var s2 = document.createElement("span");
s2.innerText="& Privacy Policy";
lsp2.append(ls2Span,s2);
var s3 = document.createElement("span");
var as3 = document.createElement("a");
as3.innerText="Need Help? Get In Touch";
as3.style.color="#e56060";
s3.append(as3)
cdiv.append(lsp,CorporateP,lsp2,s3);
lsLinks.append(cdiv);
formDiv.append(closedDiv,lslogo,lsform,lsLinks);

function loginPopUp(){
    logoH2.innerText="LOGIN";
    logop.innerText="consult our certified doctors from anywhere,anytime and for free. We guarantee your Privacy.";
    lsp.innerText="New on 1mg?"
    var Sign = document.createElement("button");
    Sign.setAttribute("class","btnPage")
    Sign.innerText="Sign Up"
    lsp.append(Sign);
   Sign.addEventListener("click",changePageToSignUp);
    document.getElementById("container").append(formDiv);
    document.getElementById("container").style.display="flex";
    document.getElementById("parentLogin").style.display="flex";
    document.getElementById("childlogin").style.display="flex";

}
function changePageToSignUp(){
  signUpPopUp();
}
function signUpPopUp(){
    logoH2.innerText="Sign Up";
    logop.innerText="Please enter your Mobile number to receive One Time Password (OTP)";
    lsp.innerText="Have an Account?";
    var Sign = document.createElement("button");
    Sign.setAttribute("class","btnPage")
    Sign.innerText="Login"
    lsp.append(Sign);
    Sign.addEventListener("click",changePageToLogin)
    document.getElementById("container").append(formDiv);
    document.getElementById("container").style.display="flex";
    document.getElementById("parentLogin").style.display="flex";
    document.getElementById("childlogin").style.display="flex";
}
function closePopUp(){
    document.getElementById("container").style.display="none";
    document.getElementById("parentLogin").style.display="none";
    document.getElementById("childlogin").style.display="none";
}
function changePageToLogin(){
    loginPopUp();
}