function mail(){
    const x = document.querySelector("#email")
    const y = document.querySelector("#fieldemail")
    const z = document.querySelector('#inemail[type="email"]')

    x.style.display = "flex"
    y.style.border = "1px #0898a0 solid"
    z.placeholder = ""
    
    console.log(z)
}

function pass(){
    const x = document.querySelector("#password")
    const y = document.querySelector("#fieldpassword")
    var z = document.querySelector('#inpassword[type="password"]')

    x.style.display = "flex"
    y.style.border = "1px #0898a0 solid"
    z.placeholder = ""
    
    console.log(z)
}


