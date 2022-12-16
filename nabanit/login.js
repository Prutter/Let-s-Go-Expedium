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
let res=await fetch(url)
res=await res.json()
// console.log(res);
// console.log(login_obj);
if(res.password===login_obj.password && login_obj.email==res.email){
    alert("Login Successful!")
} else{
    if(res.password!=login_obj.password){
        alert("Password Unmatched!")
    }else{
        alert("No email like this exists!")
    }
}
})