let form=document.querySelector("#form")
let url="http://localhost:3000/details"
let sign_in=document.querySelector("#sign_in")
sign_in.onclick=()=>{
    window.location.href="nabanit(Sign Up).html"
}
form.addEventListener("submit",async(event)=>{
    event.preventDefault()
    let email=form.email.value
    let password=form.password.value
    let login_obj={
        email,
        password
    }
compared(login_obj)
})
const compared=async(login_obj)=>{
    console.log(login_obj.password)
    let res=await fetch(url)
    res=await res.json()
    console.log(res);
    let count=0
    for(let i=0;i<res.length;i++){
         
        if(res[i].password==login_obj.password && res[i].email==login_obj.email){
            
            count++
        }
        
    }
    if(count>0){
        alert("Login Successful!")
    }
    else{
        alert("Unsuccessful!")
    }
}