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
document.querySelector("#sendlink").addEventListener("click",SendLink);
function SendLink()
{
    alert("link sent successfully !")
}


// product page js 
// object array for all the  products
var Products =[
{id:1,
    image_url:"https://onemg.gumlet.io/images/h_150,q_auto,f_auto,w_150,c_fit/otjmrlgx25mjmawziu0n/wellwoman-50-health-supplement-for-women-tablet.jpg",
name: "Wellwoman 50+ Health Supplement for Women Tablet",
number: "strip of 30 tablets",
crating: 131,
rating :"ratings",
mrp:"MRP",
strikedoffprice:"₹646.5",
NOFF:30,
percent:"%",
OFF:"OFF",
pricetag:"₹",
price: 453,
category: "women",

},
{id:2,
    image_url:"https://onemg.gumlet.io/images/f_auto,q_auto,w_150,c_fit,h_150/pk84nhxco4mzoobfeqpr/multivite-gold-daily-health-supplement-softgels.jpg",
name: "Multivite Gold Daily Health Supplement Softgels",
number: "strip of 15 soft gelatin capsules",
crating:115, 
rating: "ratings",
mrp:"MRP",
strikedoffprice:"₹264",
NOFF:14,
percent:"%",
OFF:"OFF",

pricetag:"₹",
price:  225,
category:"men"
   
},
{id:3,
    image_url:"https://onemg.gumlet.io/images/h_150,q_auto,f_auto,w_150,c_fit/bf2bai8xwobmff5loyrm/multivite-woman-health-supplement-softgel.jpg",
name: "Multivite Woman Health Supplement Softgel",
number: "strip of 15 soft gelatin capsules",
crating: 53,
rating:"ratings",
mrp:"MRP",
strikedoffprice:"₹288",
NOFF:15,
percent:"%",
OFF:"OFF",
pricetag:"₹",
price: 245,
category: ""
   
},
{id:4,
    image_url:"https://onemg.gumlet.io/images/f_auto,q_auto,w_150,c_fit,h_150/cropped/zjomj1250xcuowmjzi84/inlife-multivitamins-minerals-capsule-for-men.png",
name: "Inlife Multivitamins & Minerals Capsule for Men",
number: "strip of 15 tablets",
crating: 432,
rating: "ratings",
mrp:"MRP",
strikedoffprice:"₹699",
NOFF:48,
percent:"%",
OFF:"OFF",
pricetag:"₹",
price:359,
category:"men"
   
},
{id:5,
    image_url:"https://onemg.gumlet.io/images/w_150,q_auto,h_150,f_auto,c_fit/xyy0payx0kdookapcmh3/nature-s-island-multivitamin-for-men-capsule.jpg",
name: "Nature's Island Multivitamin for Men Capsule",
number: "bottle of 60 tablets",
crating: 4433,
rating: "ratings",
mrp:"MRP",
strikedoffprice:"₹999",
NOFF:55,
percent:"%",
OFF:"OFF",
pricetag:"₹",
price:449,
category: "women"
   
},
{id:6,
    image_url:"https://onemg.gumlet.io/images/f_auto,q_auto,w_150,c_fit,h_150/je4gfbvldox6eds8tlem/wild-buck-multi-sports-multivitamin-tablet.jpg",
name: "Wild Buck Multi Sports Multivitamin Tablet",
number: "strip of 60 tablets",
crating: 443,
rating:  "ratings",
mrp:"MRP",
strikedoffprice:"₹1299",
NOFF:27,
percent:"%",
OFF:"OFF",
pricetag:"₹",
price:  948,
category:"men"
   
},
{id:7,
    image_url:"https://onemg.gumlet.io/images/f_auto,q_auto,w_150,c_fit,h_150/glvx8ixmeybmiivpkr8i/madren-healthcare-multivitamin-gummies-strawberry.jpg",
name: "Madern Healthcare Multivitamin Gummins Strawberry",
number: "bottle of 30 gummies",
crating: 44 ,
rating:  "ratings",
mrp:"MRP",
strikedoffprice:"₹649",
NOFF:36,
percent:"%",
OFF:"OFF",
pricetag:"₹",
price:  415,
category: "women"
   
},
{id:8,
    image_url:"https://onemg.gumlet.io/images/f_auto,q_auto,w_150,c_fit,h_150/ktincwpwau6hhhoyabfp/swisse-ultivite-men-s-multivitamin-tablet.jpg",
name: "Swisse Ultivite Men's Multivitamin Tablet",
number: "bottle of 30 tablets",
crating: 102 ,
rating:  "ratings",
mrp:"MRP",
strikedoffprice:"₹1299",
NOFF:32,
percent:"%",
OFF:"OFF" ,
pricetag:"₹",
price:  883,
category:"men"
   
},
{id:9,
    image_url:"https://onemg.gumlet.io/images/w_150,q_auto,h_150,f_auto,c_fit/wvqpb8ddteboevvf2jzg/gnc-mega-men-one-daily-multivitamin-tablet.jpg",
name: "GNC Mega Men One Daily Multivitamin Tablet",
number: "bottle of 60 tablets",
crating: 5 ,
rating: "ratings",
mrp:"MRP",
strikedoffprice:"₹1299",
NOFF:27,
percent:"%",
OFF:"OFF",
pricetag:"₹",
price:  948,
category: "women"
},

{id:10,
    image_url:"https://onemg.gumlet.io/images/c_fit,w_150,f_auto,h_150,q_auto/cropped/uuxndudtxrcuocjhvddm/wellwoman-health-supplement-capsule.png",
name: "Wellwoman Health Supplement Capsule",
number: "box  of 15 capsules",
crating: 82 ,
rating: "ratings",
mrp:"MRP",
strikedoffprice:"₹626",
NOFF:30,
percent:"%",
OFF: "OFF",
pricetag:"₹",
price:  438,
category:"men"
},
{id:11,
    image_url:"https://onemg.gumlet.io/images/w_150,q_auto,h_150,f_auto,c_fit/geiwxvovi2c600riqel3/wellman-health-supplement-for-men-tablet.jpg",
name: "Wellman Health Supplement for Men Tablett",
number: "strip of 30 tablets",
crating: 102 ,
rating: "ratings",
mrp:"MRP",
strikedoffprice:"₹438",
NOFF:20,
percent:"%",
OFF:"OFF",
pricetag:"₹",
price:  350,
category: "women"
   
},
{id:12,
    image_url:"https://onemg.gumlet.io/images/h_150,q_auto,f_auto,w_150,c_fit/cropped/blfetr1vbrjyraq4opvh/healthvit-femyvit-women-multivitamins-tablet.png",
name: "HealthVit Femyvit Women Multivitamins Tablet",
number: "bottle of 60 tablets",
crating: 16 ,
rating:  "ratings",
strikedoffprice:"105",
mrp:"MRP",
strikedoffprice:"₹300",
NOFF:29,
percent:"%",
OFF:"OFF",
pricetag:"₹",
price:  211,
 category: "women",

},
{id:13,
    image_url:"https://onemg.gumlet.io/images/h_150,f_auto,q_auto,c_fit,w_150/ahaym8qk6plf3qpwzfxu/roncuvita-multivitamin-for-women-tablet.jpg",
name: "Roncuvita Multivitamin for Women Tablet",
number: "bottle of 60 tablets",
crating: 1180,
rating: "rating",
mrp:"MRP",
strikedoffprice:"₹2499",
NOFF:39,
percent:"%",
OFF:"OFF",
pricetag:"₹",
price:  1524,
category: "women"
},
    {id:14,
    image_url:"https://onemg.gumlet.io/images/w_150,c_fit,f_auto,q_auto,h_150/kkywxq2cx7urxk7actxg/1mg-super-antioxidant-multiminerals-with-betacarotene-capsule.jpg",
name: "1mg Super Antioxidant Multiminerals with Betacarotene Capsule",
number: "box of 30 capsules",
crating: 4433,
rating: "ratings",
mrp:"MRP",
strikedoffprice:"₹495",
NOFF:15,
percent:"%",
OFF:"OFF",
pricetag:"₹",
price:  199,
category:"men"
   
},

{id:15,
    image_url:"https://onemg.gumlet.io/images/w_150,q_auto,h_150,f_auto,c_fit/jmuuryvgit6mwwolt0ea/revital-h-capsule.jpg",
name: "Revital H Capsule",
number: "bottle of 60 soft gelatin capsules",
crating: 1741,
rating: "ratings",
mrp:"MRP",
strikedoffprice:"₹550",
NOFF:19,
percent:"%",
OFF:"OFF",
pricetag:"₹",
price: 444,
category: "women"
},
{id:16,
    image_url:"https://onemg.gumlet.io/images/f_auto,h_150,q_auto,w_150,c_fit/olumjmbboursowikpgh9/tata-1mg-vitamin-b-complex-capsules.jpg",
name: "Tata 1mg Vitamin B complex Capsule",
number: "bottle of 60 tablets",
crating: 7,
rating: "ratings",
mrp:"MRP",
strikedoffprice:"₹595",
NOFF:24 ,
percent:"%",
OFF: "OFF",
pricetag:"₹",
price:  448,
category:"men"
   
},
{id:17,
    image_url:"https://onemg.gumlet.io/images/w_150,c_fit,q_auto,h_150,f_auto/atz76r3nf9j4e0903o3w/carbamide-forte-multivitamins-gummies-for-women-mixed-fruit.jpg",
name: "Carbamide Forte Multivitamins Gummies for Women Mixed Fruit",
number: "bottle of 180 tablets",
crating: 221,
rating: "ratings",
mrp:"MRP",
strikedoffprice:"₹795",
NOFF:29 ,
percent:"%",
OFF: "OFF",
pricetag:"₹",
price:  599,
category:"Carbamide"

},
{id:18,
    image_url:"https://onemg.gumlet.io/images/h_150,q_auto,f_auto,w_150,c_fit/f5quultogobvb7qu1cyp/tata-1mg-multivitamin-supreme-zinc-calcium-and-vitamin-d-immunity-booster-capsule.jpg",
    name: "Tata 1mg Vitamin B complex Capsule",
number: "bottle of 100 tablets",
crating: 22,
rating: "ratings",
mrp:"MRP",
strikedoffprice:"₹525",
NOFF:52 ,
percent:"%",
OFF: "OFF",
pricetag:"₹",
price:  250,
category:"tata"

},
{id:19,
    image_url:"https://onemg.gumlet.io/images/h_150,f_auto,q_auto,c_fit,w_150/f5pbqdlbnn4jdrfymzsr/zingavita-combo-pack-of-multi-vitamins-with-probiotics-prebiotics-120-tablet-vitamin-c-amla-extract-1000mg-60-tablet.jpg",
    name: "Zingavita Combo Pack of Multi Vitamins with Probiotics",
number: "combo of 2 bottles",
crating: 59,
rating: "ratings",
mrp:"MRP",
strikedoffprice:"₹998",
NOFF:40 ,
percent:"%",
OFF: "OFF",
pricetag:"₹",
price:  99,
category:"zingavita"

},
{id:20,
    image_url:"https://onemg.gumlet.io/images/q_auto,f_auto,c_fit,w_150,h_150/ba72noylxk35qgj2eg5x/carbamide-forte-multivitamin-with-probiotics-ashwagandha-tablet.jpg",
    name: "Carbamide Forte Multivitamin with Probiotics & Ashwagandha Tablet",
crating: 22,
rating: "ratings",
mrp:"MRP",
strikedoffprice:"₹850",
NOFF:29 ,
percent:"%",
OFF: "OFF",
pricetag:"₹",
price:  599,
category:"Carbamide"

},
{id:21,
    image_url:"https://onemg.gumlet.io/images/c_fit,w_150,f_auto,h_150,q_auto/cropped/vjqcbttlwfq8np41ag3c/1mg-sports-multivitamin-energy-immunity-booster-zinc-vitamin-c-vitamin-d-calcium-and-iron-tablet.png",
    name: "Tata 1mg Vitamin B complex Capsule",
number: "Multivitamin Energy",
crating: 72,
rating: "ratings",
mrp:"MRP",
strikedoffprice:"₹1195",
NOFF:58 ,
percent:"%",
OFF: "OFF",
pricetag:"₹",
price:  497,
category:"tata"

},
{id:22,
    image_url:"https://onemg.gumlet.io/images/q_auto,f_auto,h_150,w_150,c_fit/my1scryvvmp8purgjgpz/gnc-women-s-one-daily-multivitamin-tablet.jpg",
    name: "GNC Women's One Daily Multivitamin Tablet",
number: "bottle of 60 tablets",
crating: 8,
rating: "ratings",
mrp:"MRP",
strikedoffprice:"₹1449",
NOFF:27 ,
percent:"%",
OFF: "OFF",
pricetag:"₹",
price:  1058,
category:"gnc"

},
{id:23,
    image_url:"https://onemg.gumlet.io/images/h_150,f_auto,q_auto,c_fit,w_150/eynmxuiykodsnn7wc24c/zingavita-women-perfect-multivitamins-gummies-berry.jpg",
    name: "Zingavita Women Perfect Multivitamins Gummies Berry",
number: "bottle of 30 gummies",
crating: 44,
rating: "ratings",
mrp:"MRP",
strikedoffprice:"₹375",
NOFF:38,
percent:"%",
OFF: "OFF",
pricetag:"₹",
price:  309,
category:"zingavita"

},
{id:24,
    image_url:"https://onemg.gumlet.io/images/c_fit,w_150,f_auto,h_150,q_auto/bd82ty04xq3dl3ajmgwh/tata-1mg-multivitamin-supreme-zinc-calcium-and-vitamin-d-immunity-booster-capsule.jpg",
    name: "Tata 1mg Vitamin B complex Capsule",
number: "Tata 1mg Multivitamin Supreme, Zinc, Calcium and Vitamin D ",
crating: 32,
rating: "ratings",
mrp:"MRP",
strikedoffprice:"₹175",
NOFF:43 ,
percent:"%",
OFF: "OFF",
pricetag:"₹",
price:  99,
category:"tata"

},
{id:25,
    image_url:"https://onemg.gumlet.io/images/h_150,f_auto,q_auto,c_fit,w_150/vysdzjqrxocnadkzs0cx/zingavita-happy-multivitamins-effervescent-tablet-orange.jpg",
    name: "Zingavita Happy Multivitamins Effervescent Tablet Orange",
number: "bottle of 100 tablets",
crating: 38,
rating: "ratings",
mrp:"MRP",
strikedoffprice:"₹349",
NOFF:37 ,
percent:"%",
OFF: "OFF",
pricetag:"₹",
price:  216,
category:"zingavita"

},
{id:26,
    image_url:"https://onemg.gumlet.io/images/q_auto,f_auto,c_fit,w_150,h_150/advppsbemtgolsefnfu9/carbamide-forte-plant-based-multivitamin-with-superfoods-greens.jpg",
    name: "Carbamide Forte Multivitamin for Men Vegetarian Tablet",
number: "bottle of 60 tablets",
crating: 55,
rating: "ratings",
mrp:"MRP",
strikedoffprice:"₹675",
NOFF:26 ,
percent:"%",
OFF: "OFF",
pricetag:"₹",
price:  499,
category:"Carbamide"

},
{id:27,
    image_url:"https://onemg.gumlet.io/images/c_fit,w_150,f_auto,h_150,q_auto/fvj4yg4go9xjxlb0jfrv/tata-1mg-senior-50-multivitamin-multimineral-immunity-booster-zinc-vitamin-c-calcium-and-vitamin-d-veg-tablet.jpg",
name: "Tata 1mg Senior 50+ Multivitamin & Multimineral Immunity Booster",
number: "bottle of 100 tablets",
crating: 274,
rating: "ratings",
mrp:"MRP",
strikedoffprice:"₹510",
NOFF:41 ,
percent:"%",
OFF: "OFF",
pricetag:"₹",
price:  298,
category:"tata"

},
{id:28,
image_url:"https://onemg.gumlet.io/images/h_150,f_auto,q_auto,c_fit,w_150/h2iqtxntjccduiofubnk/zingavita-multivitamins-women-with-45-vitamins-calcium-herbal-extracts-tablet.jpg",
name:"Zingavita Multivitamins Women with 45 Vitamins, ",
number: "bottle of 120 tablets",
crating: 22,
rating: "ratings",
mrp:"MRP",
strikedoffprice:"₹899",
NOFF:39 ,
percent:"%",
OFF: "OFF",
pricetag:"₹",
price:  549,
category:"zingavita"

},
{id:29,
    image_url:"https://onemg.gumlet.io/images/q_auto,f_auto,c_fit,w_150,h_150/vge2xbnafk7dipkzmgnq/carbamide-forte-combo-pack-of-vitamin-c-1000mg-zinc-tablet-l-glutathione-reduced-hyaluronic-acid-biotin-vitamin-e-tablet-30-each.jpg",
name: "Carbamide Forte Combo Pack of Vitamin C 1000mg ",
number: "combo of 2 bottles",
crating: 221,
rating: "ratings",
mrp:"MRP",
strikedoffprice:"₹1750",
NOFF:54 ,
percent:"%",
OFF: "OFF",

pricetag:"₹",
price:  799,
category:"Carbamide"

},
{id:30,
    image_url:"https://onemg.gumlet.io/images/h_150,f_auto,q_auto,c_fit,w_150/pyqirnkp3cli4d0paccs/zingavita-mighty-vitamins-gummies-for-kids-strawberry-and-lemon.jpg",
    name: "Zingavita Mighty Vitamins for Kids Strawberry and Lemon",
number: "bottle of 30 gummies",
crating: 22,
rating: "ratings",
mrp:"MRP",
strikedoffprice:"₹399",
NOFF:31 ,
percent:"%",
OFF: "OFF",
pricetag:"₹",
price:  275,
category:"zingavita"

},
{id:31,
    image_url:"https://onemg.gumlet.io/images/c_fit,w_150,f_auto,h_150,q_auto/klpj2khvaphkvpqmchui/tata-1mg-senior-50-multivitamin-multimineral-immunity-booster-zinc-vitamin-c-calcium-and-vitamin-d-veg-tablet.jpg",
    name: "Tata 1mg Senior 50+ Multivitamin & Multimineral Immunity Booster",
number: "bottle of 100 tablets",
crating: 364,
rating: "ratings",
mrp:"MRP",
strikedoffprice:"₹995",
NOFF:60 ,
percent:"%",
OFF: "OFF",
pricetag:"₹",
price:  399,
category:"tata"

},
{id:32,
    image_url:"https://onemg.gumlet.io/images/q_auto,f_auto,c_fit,w_150,h_150/omtavbrcwcbc38evubkt/carbamide-forte-multivitamin-for-men-vegetarian-tablet.jpg",
name:"Carbamide Forte Multivitamin for Men Vegetarian Tablet", 
number: "bottle of 60 tablets",
crating: 22,
rating: "ratings",
mrp:"MRP",
strikedoffprice:"₹675",
NOFF:26 ,
percent:"%",
OFF: "OFF",
pricetag:"₹",
price:  499,
category:"Carbamide"

},

// object array end

 ];


//   code for sorting
window.addEventListener("load", function(){
displayProducts(Products);
});

function handlePriceSort(){
  var selected= document.getElementById("sortproducts").value;
     if(selected==="htl"){
    Products.sort(function(a,b){
      return b.price- a.price;
    });
   }
if(selected==="lth"){
  Products.sort(function(a,b){
    return a.price-b.price;
  });
}
if(selected==="descending"){
  Products.sort(function(a,b){
    return a.crating-b.crating;
  
});
}
if(selected==="discount"){
  Products.sort(function(a,b){
    return b.NOFF-a.NOFF;
  
});

}
displayProducts(Products);
}

//  sorting code end


//  code for filtering start
var checkbox1=document.getElementById("checkbox1");
checkbox1.addEventListener("change",handleRoleFilter)
console.log(checkbox1);
function handleRoleFilter(e){
  var selected= e.target.value;
console.log(selected);
var filteredlist=[];

var  filteredList=Products.filter(function (elem){
    if(selected==='all'|| selected===""){
    return 1;
    }else{
      return elem.category==selected;
    }
});

   displayProducts(filteredList);
   console.log(filteredList)
}


var checkbox2=document.getElementById("checkbox2");
checkbox2.addEventListener("change",handleRoleFilter)
console.log(checkbox2);
function handleRoleFilter(e){
  var selected= e.target.value;
console.log(selected);
var filteredlist=[];

var  filteredList=Products.filter(function (elem){
    if(selected==='all'|| selected===""){
    return 1;
    }else{
      return elem.category==selected;
    }

  });

   displayProducts(filteredList);
   console.log(filteredList)
   }

    var checkbox3=document.getElementById("checkbox3");
    checkbox3.addEventListener("change",handleRoleFilter)
    console.log(checkbox3);
    function handleRoleFilter(e){
    var selected= e.target.value;
    console.log(selected);
    var filteredlist=[];

    var  filteredList=Products.filter(function (elem){
    if(selected==='all'|| selected===""){
    return 1;
    }else{
      return elem.category==selected;
    }

  });

   displayProducts(filteredList);
   console.log(filteredList)

    }

    var checkbox4=document.getElementById("checkbox4");
    checkbox4.addEventListener("change",handleRoleFilter)
// console.log(checkbox4);
    function handleRoleFilter(e){
    var selected= e.target.value;
    console.log(selected);
    var filteredlist=[];

    var  filteredList=Products.filter(function (elem){
    if(selected==='all'|| selected===""){
    return 1;
    }else{
      return elem.category==selected;
    }

  });

   displayProducts(filteredList);
   console.log(filteredList)

    }




        // code for display the products


        function displayProducts(temp){
        document.getElementById("lower").innerText="";
        temp.map(function (elem,index){
        var div =document.createElement("div");
        div.setAttribute("id", "lowerBox")
        div.style.boxShadow= "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px";
      
        var imagediv =document.createElement("div");
        imagediv.setAttribute("id","imagdiv");

        var image =document.createElement("img");
        image.setAttribute("src",elem.image_url);
        image.setAttribute("alt",index);

         var namediv =document.createElement("div");
         namediv.setAttribute("id","name")
        var p=document.createElement("p");
        p.innerText=elem.name;
        namediv.append(p);
        namediv.style.marginLeft="10px";
        namediv.style.marginTop="60px";


        var countsdiv =document.createElement("div");
        var counts=document.createElement("p");
        counts.innerText=elem.number;
        countsdiv.append(counts);
        countsdiv.style.marginLeft="10px";

        var ratingsdiv =document.createElement("div");
        ratingsdiv.setAttribute("id","ratingdiv")
        var cratingdiv=document.createElement("div");
        var ratings=document.createElement("p"); 
        ratings.innerText=elem.crating;
        cratingdiv.append(ratings)

        var nratingdiv=document.createElement("div");
        nratingdiv.setAttribute("id","nratingdiv")
        var ratting=document.createElement("p"); 
        ratting.innerText=elem.rating;
        nratingdiv.append(ratting)
        ratingsdiv.append(cratingdiv,nratingdiv)



       
         var pricediv= document.createElement("div")
         pricediv.setAttribute("id","pricemaindiv")

          var rate = document.createElement("div")
          rate.innerText=elem.mrp;
        ratingsdiv.style.marginLeft="10px"; 

         var strikedprice= document.createElement("div");
         strikedprice.setAttribute( "id","discount");
         strikedprice.innerText=elem.strikedoffprice;

         var off = document.createElement("div");
         var numoff = document.createElement("div");
         numoff.style.marginLeft="5px"
         numoff.style.color="#1aab2a"
         numoff.innerText=elem.NOFF;
         
        
        
        
        var loff = document.createElement("div");
         loff.innerText=elem.OFF;
         loff.style.marginLeft="5px"
         loff.style.color="#1aab2a"
         var percentage = document.createElement("div");
        percentage.style.color="#1aab2a"
         percentage.innerText=elem.percent;
       
        pricediv.append(rate,strikedprice,numoff,percentage,loff)
       
        var priceBox=document.createElement("div");
        priceBox.setAttribute("id","caart");
    
       
        var pricebox=document.createElement("div");
        pricebox.setAttribute("id","pricebox")
        var pricetagg=document.createElement("div");
        pricetagg.innerText=elem.pricetag;
        var price=document.createElement("div");
        price.innerText=elem.price;
        pricebox.append(pricetagg,price);
        pricebox.style.marginLeft="10px";
        pricebox.style.marginTop="30px";

        var cartbtn=document.createElement("div");
        var cartBtn =document.createElement("button");
        cartBtn.innerText="ADD";
        cartbtn.append(cartBtn);

        priceBox.append(pricebox,cartbtn);

        //  button for add in the cart

        cartBtn.setAttribute("id","cartBtn");
        cartBtn.addEventListener("click" ,function(){
            addToCart(index);
        });
        
        imagediv.append(image);
        div.append(imagediv,namediv,countsdiv,ratingsdiv,pricediv,priceBox);
        document.getElementById("lower").append(div);
         });

        }



            //  cart array


             var cartArr =JSON.parse(localStorage.getItem("cart"))|| [];
             function addToCart(i) {
   
             var product =Products.filter( function(elem,index) {
             return index==i;
             });
            // console.log;
            cartArr.push(product[0]);       //adding products in cartarry
            // console.log(product);
            localStorage.setItem("cart",JSON.stringify(cartArr));
              

        //  showiing cartlength in navbar nera cart image
            document.getElementById("cartbutton").innerText=cartArr.length;  
            }
          
            document.getElementById("cartbutton").innerText=cartArr.length;

