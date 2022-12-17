const data=async()=>{
    let query=document.getElementById("search").value
 let res= await fetch(`https://new-gpqr.onrender.com/airports?q=${query}`)
 let result = await res.json()
 console.log(result)
}
    