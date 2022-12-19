let myroomtype = JSON.parse(localStorage.getItem("myroomtype"));
console.log(myroomtype);

let up = document.getElementById("pricee")
up.innerHTML = "&#8377; "+myroomtype.price;
let updatedprice= myroomtype.price* (0.9);
let dis = document.getElementById("discounted");
dis.innerHTML = "&#8377; "+myroomtype.price* (0.1);
let totalval = document.getElementById("totalvalue");
totalval.innerHTML = "&#8377; "+updatedprice;

let obj = JSON.parse(localStorage.getItem("my_user"));

let a = document.getElementById("signin");
a.innerHTML = obj.email;

  let name = document.getElementById("traveller-name")
  name.value = obj.name

let b= obj.name.split(" ");
let first = document.getElementById("first-name")
first.value = b[0];
let surname = document.getElementById("surname")
surname.value= b[1];


let cardname = document.getElementById("cardname")
cardname.value= obj.name;


let cardnumber = document.getElementById("cardnumber")
cardnumber.value =  Math.floor((Math.random()*1000000000000))

let securitycode = document.getElementById("securitycode")

let mob= document.getElementById("mobilenumber");
mob.value = obj.contact;



let gtn  = document.querySelector("#checkoutbtn");
gtn.onclick=()=>{
    showdiv();
}

function showdiv(){
    if(securitycode.value==="1234")
    {
        let div= document.getElementById("showed");
        div.style.display= "block";
        div.style.backgroundColor= "green";
        div.style.color = "white";
        let image = document.querySelector("#showed img");
        image.src="https://th.bing.com/th/id/R.5addfb5c5ce246c6badcae18eb958f7a?rik=T2TQu9SNfojOOg&riu=http%3a%2f%2fwww.innovativetherapy.us%2fuploads%2f8%2f2%2f3%2f3%2f82331864%2fpayment-successful_orig.png&ehk=j96saBcqQofQWf17FX1CvJlxB6vygV5L5b5nuraAe%2fM%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1"
    }
    else
    {
        let div= document.getElementById("showed");
        div.style.display= "block";
        let message = document.getElementById("message");
        message.innerHTML = "Please Check Your Security Code."
        div.style.backgroundColor= "red";
        div.style.color = "white";
        let image = document.querySelector("#showed img")
        image.src= "https://th.bing.com/th/id/R.eb1f599e6a01f47aff017734ee399a3b?rik=WSstWvG6AVnS9Q&riu=http%3a%2f%2fwww.innovativetherapy.us%2fuploads%2f8%2f2%2f3%2f3%2f82331864%2fpayment-failed_orig.png&ehk=1aRuiC1ygxMGon1zArJoqyF9EzIoPO2tR9eVL8CCfTo%3d&risl=&pid=ImgRaw&r=0"
    }
}
// https://th.bing.com/th/id/R.5addfb5c5ce246c6badcae18eb958f7a?rik=T2TQu9SNfojOOg&riu=http%3a%2f%2fwww.innovativetherapy.us%2fuploads%2f8%2f2%2f3%2f3%2f82331864%2fpayment-successful_orig.png&ehk=j96saBcqQofQWf17FX1CvJlxB6vygV5L5b5nuraAe%2fM%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1