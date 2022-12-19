let btn =  document.querySelector("button");
btn.onclick = ()=>{
    addhotels();
}
 
function addhotels(){
    let city = document.querySelector("#city").value
    let name = document.querySelector("#hotelname").value
    let location = document.querySelector("#hotellocation").value
    let price = document.querySelector("#hotelprice").value
    let image = document.querySelector("#hotelimage").value
    let rate = document.querySelector("#hotelrate").value
    let desc = document.querySelector("#hoteldesc").value
    let offer = document.querySelector("#hoteloffer").value
 
    let obj = {
        i:1,
        location : location,
        price: price,
        description : desc,
        image : image.split(" "),
        city : city,
        title : name,
        rating : rate,
        offer: offer
    };
 
    let getdata = JSON.parse(localStorage.getItem("hotels")) || [];
 
    getdata.unshift(obj);
    if(price!='' && name!='' && offer!='' && rate!='' && desc!='' && image!=null)
    localStorage.setItem("hotels",JSON.stringify(getdata));
    document.querySelector("#city").value = 'Select Your City'
    document.querySelector("#hotelname").value = ''
    document.querySelector("#hotellocation").value =''
    document.querySelector("#hotelprice").value =''
    document.querySelector("#hotelimage").value =''
    document.querySelector("#hotelrate").value =''
    document.querySelector("#hoteldesc").value=''
    document.querySelector("#hoteloffer").value = ''
}
