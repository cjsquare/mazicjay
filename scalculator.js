    var screen=document.querySelector('#screen');
    var btn=document.querySelectorAll('.btn');
    var equ = document.querySelector('.equ')

    var btntext
    // var btnEqu
    /*============ For getting the value of btn, Here we use for loop ============*/
    for(item of btn){
        item.addEventListener('click', (e) => {
            btntext = e.target.innerText;

            if(btntext == '×' || btntext == 'x'){
                btntext = '*';
            }

            if(btntext=='÷'){
                btntext='/';
            }
            if(btntext == 'sin'){
                btntext = 'sin('
            }
            if(btntext == 'cos'){
                btntext = 'cos('
            }
            screen.value+=btntext;
        });
    }

    equ.addEventListener('click', () => {
        // if((screen.value.includes("sin(", 0 ))){
        const regex = /\((.*?)\)/g; // This regex will match anything within parentheses
        
        var values = ''
        let match;
        
        while ((match = regex.exec(screen.value)) !== null) {
            // values.push(match[1]); // Push the value captured within the parentheses
            values += match[1];  // Append the value captured within the parentheses
           
        }
        
        var val = eval(values)
        var radian = val * (Math.PI / 180)
        
        if((screen.value.includes("sin(", 0 )) && (equ.value === "=" )) {
            screen.value = Math.sin(eval(radian)) 
            return
        }
        
        if((screen.value.includes("cos(", 0 )) && (equ.value === "=" )) {
            screen.value = Math.scos(eval(radian)) 
            return
        }
        screen.value = eval(screen.value)
    // }
    })


    // function sin()
    // {
    //     screen.value=Math.sin(screen.value);
    // }


    // function cos()
    // {
    //     screen.value=Math.cos(screen.value);
    // }

    function tan()
    {
        screen.value=Math.tan(screen.value);
    }

    function pow()
    {
        screen.value=Math.pow(screen.value,2);
    }

    function sqrt()
    {
        screen.value=Math.sqrt(screen.value,2);
    }

    function log()
    {
        screen.value=Math.log(screen.value);
    }

    // Leave these ones ************************
    function pi()
    {
        screen.value= 3.14159265359;
    }

    function e()
    {
        screen.value=2.71828182846;
    }

    function fact()
    {
        var i, num, f;
        f=1
        num=screen.value;
        for(i=1; i<=num; i++)
        {
            f=f*i;
        }

        i=i-1;

        screen.value=f;
    }
    // ***************************************

    function backspc()
    {
        screen.value=screen.value.substr(0,screen.value.length-1);
    }
