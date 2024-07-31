var p = 89 // decleared a global-scoped variable
document.addEventListener('DOMContentLoaded', function(){
    var o = 92 // decleared another variable
    
    p = 90 // reassigned this variable
    console.log(p)
    First()
    function First(){
        // console.log(p) // run this code block within my "DOMContentLoaded function"
   
    }
    // the 'second' function runs immediately after the 'third' function has ran

function  second(){
    var op = 90 //function-scoped variable
    console.log('stanley')
}

function fourth(a,b,c){
    var f = a + b + c
    console.log(c)
}

function third(){
    op = 9 // reassigned variable

    console.log(op) // run this code block
    second()   // dont remove that function
    
    var y = 3
    var z = 4
    var v = 5
    
    fourth(y,z,v)
    third()
}


function fifth(){
    

}
})
