let btnyes = document.querySelector("#yes");
btnyes.addEventListener("click",admin);

function admin(){
    window.location.href = 'admin.html'
}

let btnno = document.querySelector("#no");
btnno.addEventListener("click",tohome);

function tohome(){
    window.location.href = 'home.html'
}
