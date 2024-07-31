function sum(){
    var x = document.getElementById("in");
    var y = document.getElementById("put");

    
    if (x.value && y.value) {
        var result = parseInt(x.value) + parseInt(y.value)

        document.getElementById('display').value = result

        const stress = document.getElementById('stress')

        // const big = document.getElementById(big)

        // big.appendChild(stress)

        
        const header = document.querySelector('.stress')

        header.style.display = "flex"

        const heed = document.querySelector('ul li .stress')

        heed.style.display = "flex"

        const hed = document.querySelector('ul li .stone')

        hed.style.display = "flex"

    } else {
        alert('Please, fill in the input fields')
    }
    // const formw = document.getElementById('big')

    // const formCreated = document.createElement('form')

    // const inputOneCreated = document.createElement('input')  

    // // Style inputs 
    // inputOneCreated.type = 'number'
    // inputOneCreated.placeholder = 'Result 2'
    // inputOneCreated.disabled = true

    // // Append inputs within form
    // formCreated.appendChild(inputOneCreated)
    // formw.appendChild(formCreated)

    // const square = document.createElement("button")

    
    
}


function minus(){ 
    var x = document.getElementById("in");
    var y = document.getElementById("put");

    if (x.value && y.value) {
        var result = parseInt(x.value) - parseInt(y.value)

        document.getElementById('display').value = result
    } else {
        alert('Please, fill in the input fields')
    }
    
}

function times(){
    var x = document.getElementById("in");
    var y = document.getElementById("put");

    if (x.value && y.value) {
        var result = parseInt(x.value) * parseInt(y.value)

        document.getElementById('display').value = result
    } else {
        alert('Please, fill in the input fields')
    }
}

function divide(){
    var x = document.getElementById("in");
    var y = document.getElementById("put");

    if (x.value && y.value) {
        var result = parseInt(x.value) / parseInt(y.value)

        document.getElementById('display').value = result
    } else {
        alert('Please, fill in the input fields')
    }
}

function square(){
    var x = document.getElementById("in");
    var y = document.getElementById("put");
    var z = document.getElementById("display")

    var b = 2

    var a = parseFloat(z.value) ** b
    document.getElementById('stress').value = a

}

function squareroot(){
    var x = document.getElementById("in");
    var y = document.getElementById("put");
    var z = document.getElementById("display")

    var b = 1/2

    var a = parseFloat(z.value) ** b
    document.getElementById('stress').value = a

}