let form=document.querySelector("#form")
let url="http://localhost:3000/details"
form.addEventListener("submit",async(event)=>{
    event.preventDefault()
    let name=form.name.value
    let email=form.email.value
    let address=form.address.value
    let contact1=form.contact.value
    let contact=new Number(contact1)
    let password=form.password.value
    let obj={
        name,
        email,
        address,
        contact,
        password
    }
    await fetch(url,{
        method:"POST",
        body:JSON.stringify(obj),
        headers:{
           "Content-Type":"application/json"
        }
    })
let res=await fetch(url)
res=await res.json()
console.log(res);
})