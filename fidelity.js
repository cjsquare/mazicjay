function user(){
    const x = document.querySelector("#username")
    // const y = document.querySelector("#fieldusername")
    const z = document.querySelector('#inusername[type="text"]')
    

    x.style.display = "flex"
    // y.style.border = "1px #0898a0 solid"
    z.placeholder = ""
    

}

function pass(){
    const x = document.querySelector("#password")
    // const y = document.querySelector("#fieldpassword")
    const z = document.querySelector('#inpassword[type="password"]')

    x.style.display = "flex"
    // y.style.border = "1px #0898a0 solid"
    z.placeholder = ""
    
}

function check(){
    const x = document.querySelector('.left #checkbox[type="checkbox"}')
    const y = document.querySelector('.left.#checkbox[type="checkbox"}::before')    

    x.style.backgroundColor = "#2dce5a";
    y.style.color = "white";
}