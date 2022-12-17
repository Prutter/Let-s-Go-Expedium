



 const createtrip=()=>{
     
     window.location.href="createinfo.html"
     
     
     
    }
    // let btn = document.getElementById("trip_button")
    //  btn.addEventListener("click",createtrip)


    let tripnaam = document.getElementById("third")
    let des = document.getElementById("fourth")

    
    const savetrip =()=>{
        
        let obj ={
            tripname:tripnaam.value,
            description:des.value
        }
        
        let arr =  JSON.parse(localStorage.getItem("Trips"))||[]
        
        arr.push(obj)
        
        localStorage.setItem("Trips",JSON.stringify(arr))
        
        
        
        
    }
    

    
    let data = JSON.parse(localStorage.getItem("Trips"))
    
    const appenddata=(data)=>{
        let render = document.getElementById("render")
        
        render.innerHTML="";
        data.forEach((element)=>{
            

       let div = document.createElement("div")
       div.className="img-div"

      let p =  document.createElement("p")
        p.className="tripheading"
        p.innerText= element.tripname
     

             div.append(p)
            render.append(div)

        });
        

        
    }

    appenddata(data)
    // savebutton.addEventListener("click",savetrip)