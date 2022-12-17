  

    let  checkBox = document.getElementById("loc1");
   function delhi() {
   
    if (checkBox.checked == true){
      //render here
    } else {
       //render normal data
    }
  }

  checkBox.onclick=()=>{
      delhi()
  }


  let  checkBox2 = document.getElementById("loc2");
  function hyderabad() {

   if (checkBox.checked == true){
     //render here
   } else {
      //render normal data
   }
 }

 checkBox2.onclick=()=>{
     hyderabad()
 }


 // Sorting by price 



   let data = [{}]

  const lowprice=(data)=>{
     
       let new_data = data.sort(function(a,b){
          return a.price- b.price
       })

       //append function with newdata
  }
    let lowsort = document.getElementById("Low to high")
    lowsort.addEventListener("click",lowprice)

  const highprice=(data)=>{
     
    let new_data = data.sort(function(a,b){
       return b.price- a.price
    })

    //append function with newdata
}

let highsort = document.getElementById("High to low")
highsort.addEventListener("click",highprice)



// Sorting by Rating

  
const lowrating=(data)=>{
     
    let new_data = data.sort(function(a,b){
       return a.rating- b.rating
    })

    //append function with newdata
}
 let lowsortrating = document.getElementById("low to high")
 lowsortrating.addEventListener("click",lowrating)

const highrating=(data)=>{
  
 let new_data = data.sort(function(a,b){
    return b.rating- a.rating
 })

 //append function with newdata
}

let highsortrating = document.getElementById("high to low")
highsortrating.addEventListener("click",highrating)

    

// Rating checkbox

  
let fiveplus = document.getElementById("css") 

function plusfive() {
   
    if (fiveplus.checked == true){
      //render here
    } else {
       //render normal data
    }
  }

  fiveplus.onclick=()=>{
      plusfive()
  }



  