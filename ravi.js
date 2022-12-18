
  let form = document.querySelector("form").addEventListener("submit",AddData)
   
   
   function AddData(event)
   {
    event.preventDefault()
    let origin=document.getElementById("ori").value
    let destination=document.getElementById("dest").value
    let  Number=document.getElementById("No").value 
    let depart=document.getElementById("depart").value 
    let raturn =document.getElementById("return").value 
   
    let obj={origin,destination,Number,depart,raturn}
    
    let data=JSON.parse(localStorage.getItem("flightData"))||[]
    data.push(obj)
    localStorage.setItem("flightData",JSON.stringify(data))
    window.location.href="1.html"
    form.reset()
   }
  