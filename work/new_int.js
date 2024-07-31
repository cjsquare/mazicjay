

function summ(){
    // var val = 0 
    var first = document.getElementById("main_one");
    var second = document.getElementById("main_two");

    var result = parseInt(first.value) + parseInt(second.value)

    document.getElementById('displayy').value = result;
};

function addTo(){   

    var one = document.getElementById("main").value;
    var first = document.getElementById("main_one");
    var second = document.getElementById("main_two");
    var third = document.getElementById("main_three");
    var fourth = document.getElementById("rest_one");
    var fifth = document.getElementById("rest_two");
    var sixth = document.getElementById("rest_three");
    var seventh = document.getElementById("rest_four");
    var eighth = document.getElementById("rest_five");
    
    
    // var arr=[first.value, second.value, third.value];
    // // console.log(arr[0])
    // switch (arr.length >= arr.length) {
    //     case !arr[0]:
    //         first.value = one;
    //         document.getElementById("main").value = "";
    //       break;
    //     case !arr[1]:
    //         second.value = one;
    //         document.getElementById("main").value = "";
    //       break;
    //     case !arr[2]:
    //         third.value = one;
    //         document.getElementById("main").value = "";   
    //       break;
        
    //   }
    
    if(!first?.value){
        first.value = one;
        document.getElementById("main").value = "";
    }else if(first.value && (!second?.value)){
        second.value = one;
        document.getElementById("main").value = "";
    }else if(first.value && second.value && (!third?.value)){
        third.value = one;
        document.getElementById("main").value = "";   
    } else if(first.value && second.value && third.value && (!fourth?.value)){
      fourth.value = one;
      document.getElementById("main").value = "";
      document.getElementById("rest_one").style.visibility = "visible";
      document.getElementById("span_one").style.visibility = "visible";
    } else if(first.value && second.value && third.value && fourth && (!fifth?.value)){
      fifth.value = one;
      document.getElementById("main").value = "";
      document.getElementById("rest_two").style.visibility = "visible";
      document.getElementById("span_two").style.visibility = "visible";
    } else if(first.value && second.value && third.value && fifth.value && (!sixth?.value)){
      sixth.value = one;
      document.getElementById("main").value = "";
      document.getElementById("rest_three").style.visibility = "visible";
      document.getElementById("span_three").style.visibility = "visible";
    } else if(first.value && second.value && third.value && (!seventh?.value)){
      seventh.value = one;
      document.getElementById("main").value = "";
      document.getElementById("rest_four").style.visibility = "visible";
      document.getElementById("span_four").style.visibility = "visible";
    } else if(first.value && second.value && third.value && (!eighth?.value)){
      eighth.value = one;
      document.getElementById("main").value = "";
      document.getElementById("rest_five").style.visibility = "visible";
      document.getElementById("span_five").style.visibility = "visible";
    }
};

function sm(){
  var first = document.getElementById("main_one");
  var second = document.getElementById("main_two");
  var third = document.getElementById("main_three");
  var fourth = document.getElementById("rest_one");
  var fifth = document.getElementById("rest_two");
  var sixth = document.getElementById("rest_three");
  var seventh = document.getElementById("rest_four");
  var eighth = document.getElementById("rest_five");

  if(first.value && second?.value){
    var size = [first.value , second.value];
  
  
    var small = size[0];
  
    for(i = 0; i <= size.length; i++){
        if(size[i] < small){
            small = size[i];
        }
    }
    document.display.text.value = small;

  }else if(first.value && second.value && third?.value){
    var size = [first.value , second.value , third.value];
  
  
    var small = size[0];
  
    for(i = 0; i <= size.length; i++){
        if(size[i] < small){
            small = size[i];
        }
    }
    document.display.text.value = small;
  } else if(first.value && second.value && third.value && fourth?.value){
    var size = [first.value , second.value , third.value, fourth.value];
  
  
    var small = size[0];
  
    for(i = 0; i <= size.length; i++){
        if(size[i] < small){
            small = size[i];
        }
    }
    document.display.text.value = small;
   }else if(first.value && second.value && third.value && fourth.value && fifth?.value){
    var size = [first.value , second.value , third.value, fourth.value, fifth.value];
  
  
    var small = size[0];
  
    for(i = 0; i <= size.length; i++){
        if(size[i] < small){
            small = size[i];
        }
    }
    document.display.text.value = small;
  } else if(first.value && second.value && third.value && fourth.value && fifth.value && sixth?.value){
    var size = [first.value , second.value , third.value, fourth.value, fifth.value, sixth.value];
  
  
    var small = size[0];
  
    for(i = 0; i <= size.length; i++){
        if(size[i] < small){
            small = size[i];
        }
    }
    document.display.text.value = small;
  } else if(first.value && second.value && third.value && fourth.value && fifth.value
    && sixth.value && seventh?.value){
      var size = [first.value , second.value , third.value, fourth.value, fifth.value, sixth.value,
      seventh.value];
    
    
      var small = size[0];
    
      for(i = 1; i <= size.length; i++){
          if(size[i] < small){
              small = size[i];
          }
      }
      document.display.text.value = small;
  }else if(first.value && second.value && third.value && fourth.value && fifth.value
    && sixth.value && seventh.value && eighth?.value){
      var size = [first.value , second.value , third.value, fourth.value, fifth.value, sixth.value,
      seventh.value, eighth.value];
    
    
      var small = size[0];
    
      for(i = 1; i <= size.length; i++){
          if(size[i] < small){
              small = size[i];
          }
      }
      document.display.text.value = small;
    };
};

function lg(){
  var first = document.getElementById("main_one");
  var second = document.getElementById("main_two");
  var third = document.getElementById("main_three");
  var fourth = document.getElementById("rest_one");
  var fifth = document.getElementById("rest_two");
  var sixth = document.getElementById("rest_three");
  var seventh = document.getElementById("rest_four");
  var eighth = document.getElementById("rest_five");

  if(first.value && second?.value){
    var size = [first.value , second.value];
      
    var large = size[0];

    for(i = 0; i <= size.length; i++){
        if(size[i] > large){
            large = size[i];
        } else{
          large = large;
      }
  }

  document.display.text.value = large;

  }else if(first.value && second.value && third?.value){
    var size = [first.value , second.value , third.value];
      
    var large = size[0];

    for(i = 0; i <= size.length; i++){
        if(size[i] > large){
            large = size[i];
        } else{
          large = large;
      }
  }

  document.display.text.value = large;
  } else if(first.value && second.value && third.value && fourth?.value){
    var size = [first.value , second.value , third.value, fourth.value];
      
    var large = size[0];

    for(i = 0; i <= size.length; i++){
        if(size[i] > large){
            large = size[i];
        } else{
          large = large;
      }
  }

  document.display.text.value = large;
   }else if(first.value && second.value && third.value && fourth.value && fifth?.value){
    var size = [first.value , second.value , third.value, fourth.value, fifth.value];
      
    var large = size[0];

    for(i = 0; i <= size.length; i++){
        if(size[i] > large){
            large = size[i];
        } else{
          large = large;
      }
  }

  document.display.text.value = large;
  } else if(first.value && second.value && third.value && fourth.value && fifth.value && sixth?.value){
    var size = [first.value , second.value , third.value, fourth.value, fifth.value, sixth.value];
      
    var large = size[0];

    for(i = 0; i <= size.length; i++){
        if(size[i] > large){
            large = size[i];
        } else{
          large = large;
      }
  }

  document.display.text.value = large;
  } else if(first.value && second.value && third.value && fourth.value && fifth.value
    && sixth.value && seventh?.value){
      var size = [first.value , second.value , third.value, fourth.value, fifth.value, sixth.value,
      seventh.value];
      
      var large = size[0];

      for(i = 0; i <= size.length; i++){
          if(size[i] > large){
              large = size[i];
          } else{
            large = large;
        }
    }

    document.display.text.value = large;
  }else if(first.value && second.value && third.value && fourth.value && fifth.value
    && sixth.value && seventh.value && eighth?.value){
      var size = [first.value , second.value , third.value, fourth.value, fifth.value, sixth.value,
      seventh.value, eighth.value];
      
      var large = size[0];

      for(i = 0; i <= size.length; i++){
          if(size[i] > large){
              large = size[i];
          } else{
            large = large;
        }
    }

    document.display.text.value = large;
  };

  // var size = [first.value, second.value, third.value];
  // // var size =[ 12, 3, 4, 2, 1];

  // var large = size[0];

  // for(i = 0; i <= size.length; i++){
  //     if(size[i] > large){
  //         large = size[i];
  //     } else{
  //       large = large;
  //   }
  // }

  // document.display.text.value = large;

  
};

function rg(){
    var first = document.getElementById("main_one");
    var second = document.getElementById("main_two");
    var third = document.getElementById("main_three");
    var fourth = document.getElementById("rest_one");
    var fifth = document.getElementById("rest_two");
    var sixth = document.getElementById("rest_three");
    var seventh = document.getElementById("rest_four");
    var eighth = document.getElementById("rest_five");
  
    if(first.value && second?.value){
      var size = [first.value , second.value];
        
      var large = size[0];
  
      for(i = 0; i <= size.length; i++){
          if(size[i] > large){
              large = size[i];
          } else{
            large = large;
        }
    }
    
    var small = size[0];

    for(i = 0; i <= size.length; i++){
        if(size[i] < small){
            small = size[i];
        } else{
            small = small;
        }
    }
    var range = large - small;
    document.display.text.value = range;
  
    }else if(first.value && second.value && third?.value){
      var size = [first.value , second.value , third.value];
        
      var large = size[0];
  
      for(i = 0; i <= size.length; i++){
          if(size[i] > large){
              large = size[i];
          } else{
            large = large;
        }
    }
    
    var small = size[0];

    for(i = 0; i <= size.length; i++){
        if(size[i] < small){
            small = size[i];
        } else{
            small = small;
        }
    }
    var range = large - small;
    document.display.text.value = range;

    } else if(first.value && second.value && third.value && fourth?.value){
      var size = [first.value , second.value , third.value, fourth.value];
        
      var large = size[0];
  
      for(i = 0; i <= size.length; i++){
          if(size[i] > large){
              large = size[i];
          } else{
            large = large;
        }
    }
    
    var small = size[0];

    for(i = 0; i <= size.length; i++){
        if(size[i] < small){
            small = size[i];
        } else{
            small = small;
        }
    }
    var range = large - small;
    document.display.text.value = range;

     }else if(first.value && second.value && third.value && fourth.value && fifth?.value){
      var size = [first.value , second.value , third.value, fourth.value, fifth.value];
        
      var large = size[0];
  
      for(i = 0; i <= size.length; i++){
          if(size[i] > large){
              large = size[i];
          } else{
            large = large;
        }
    }
    
    var small = size[0];

    for(i = 0; i <= size.length; i++){
        if(size[i] < small){
            small = size[i];
        } else{
            small = small;
        }
    }
    var range = large - small;
    document.display.text.value = range;

    } else if(first.value && second.value && third.value && fourth.value && fifth.value && sixth?.value){
      var size = [first.value , second.value , third.value, fourth.value, fifth.value, sixth.value];
        
      var large = size[0];
  
      for(i = 0; i <= size.length; i++){
          if(size[i] > large){
              large = size[i];
          } else{
            large = large;
        }
    }
    
    var small = size[0];

    for(i = 0; i <= size.length; i++){
        if(size[i] < small){
            small = size[i];
        } else{
            small = small;
        }
    }
    var range = large - small;
    document.display.text.value = range;

    } else if(first.value && second.value && third.value && fourth.value && fifth.value
      && sixth.value && seventh?.value){
        var size = [first.value , second.value , third.value, fourth.value, fifth.value, sixth.value,
        seventh.value];
        
        var large = size[0];
  
        for(i = 0; i <= size.length; i++){
            if(size[i] > large){
                large = size[i];
            } else{
              large = large;
          }
      }
      
    var small = size[0];

    for(i = 0; i <= size.length; i++){
        if(size[i] < small){
            small = size[i];
        } else{
            small = small;
        }
    }
    var range = large - small;
    document.display.text.value = range;

    }else if(first.value && second.value && third.value && fourth.value && fifth.value
      && sixth.value && seventh.value && eighth?.value){
        var size = [first.value , second.value , third.value, fourth.value, fifth.value, sixth.value,
        seventh.value, eighth.value];
        
        var large = size[0];
  
        for(i = 0; i <= size.length; i++){
            if(size[i] > large){
                large = size[i];
            } else{
              large = large;
          }
      }
      
        var small = size[0];

        for(i = 0; i <= size.length; i++){
            if(size[i] < small){
                small = size[i];
            } else{
                small = small;
            }
        }
        var range = large - small;
        document.display.text.value = range;
    };
  

    var large = size[0];

    for(i = 0; i <= size.length; i++){
        if(size[i] > large){
            large = size[i];
        }
        else{
            large = large;
        }
    }
    
    var small = size[0];

    for(i = 0; i <= size.length; i++){
        if(size[i] < small){
            small = size[i];
        } else{
            small = small;
        }
    }
    var range = large - small;
    document.display.text.value = range;

}

function mn(){
  var first = document.getElementById("main_one");
  var second = document.getElementById("main_two");
  var third = document.getElementById("main_three");

  var size = [first.value, second.value, third.value];
  var sumOf =  parseInt(first?.value) + parseInt(second?.value) + parseInt(third?.value);

  var leng = size.length; 
  var mean = sumOf / leng;

  document.display.text.value = mean;
};


function vr(){
  var first = document.getElementById("main_one");
  var second = document.getElementById("main_two");
  var third = document.getElementById("main_three");

  var size = [first.value, second.value, third.value]; //pass in an array
  var sumOf =  parseInt(first?.value) + parseInt(second?.value) + parseInt(third?.value);
  //sum it up

  var leng = size.length; //find the size of numbers
  var mean = sumOf / leng; //find the mean (sum of numbers / size of numbers)

  var lin = sumOf; //pass the sum of numbers as lin

  var ntr = (lin - mean); 
  var numerator = Math.pow(ntr, 2);//find the numerator of the formula

  var denominator = leng - 1; // find the denominator

  var varience = numerator / denominator;
  document.display.text.value = varience;
  
};


function mn(){
  var first = document.getElementById("main_one");
  var second = document.getElementById("main_two");
  var third = document.getElementById("main_three");

  var size = [first.value, second.value, third.value];
  var sumOf =  parseInt(first?.value) + parseInt(second?.value) + parseInt(third?.value);

  var leng = size.length; 
  var mean = sumOf / leng;

  document.display.text.value = mean;
};


function sd(){
  var first = document.getElementById("main_one");
  var second = document.getElementById("main_two");
  var third = document.getElementById("main_three");

  var size = [first.value, second.value, third.value]; //pass in an array
  var sumOf =  parseInt(first?.value) + parseInt(second?.value) + parseInt(third?.value);
  //sum it up

  var leng = size.length; //find the size of numbers
  var mean = sumOf / leng; //find the mean (sum of numbers / size of numbers)

  var lin = sumOf; //pass the sum of numbers as lin

  var ntr = (lin - mean); 
  var numerator = Math.pow(ntr, 2);//find the numerator of the formula

  var denominator = leng - 1; // find the denominator

  var varience = numerator / denominator;

  var sd = (Math.sqrt(varience));
  document.display.text.value = sd;
  
};


//     var one = document.getElementById("main").value;

//     document.getElementById("main_one").value = one;
//     document.getElementById("main_two").value = one;
//     document.getElementById("main_three").value = one;

    

// }


// function addTo(){
//     var one = document.getElementById("main").value;
//     var first = document.getElementById("main_one");
//     var second = document.getElementById("main_two");
//     var third = document.getElementById("main_three");

//     let inputs = [first, second, third];
//     document.getElementById("main").value = "";
   
//     for(i = 0; i <= inputs.length - 1; i++){
//         inputs[1].value = one;

//     // switch (one){
//     //     case 1:
//     //     inputs[0].value = one;
//     //     one.value = " ";
//     //      break;
//     //     case 2:
//     //     inputs[1].value += one;
//     //     one.value = " ";
//     //      break;
//     //     case 3:
//     //     inputs[2].value += one;
//     //     one.value = " ";
//     //      break;

//     //     // if (one = inputs[0]) {
//     //     //     first.value += one;
//     //     //     document.getElementById("main").value = " ";
//     //     // }else if(inputs[0] != " "){
//     //     //     second.value += one;
//     //     //     document.getElementById("main").value = " ";
//     //     //  }//else(inputs[0] != " "  && inputs[1] != " "){
//     //     //     third.value += one;
//     //     //     document.getElementById("main").value = " ";
//     //     // }
//     }
// };

// function addTo(){
//     var one = document.getElementById("main").value;
//     var first = document.getElementById("main_one");
//     var second = document.getElementById("main_two");
//     var third = document.getElementById("main_three");
//     //document.getElementById("textDisplay").innerHTML = one;
    
//     // var disp=document.getElementById("textDisplay");
//     // disp.innerHTML += one;
//     // document.getElementById("textDisplay").style.display = "block";
//     first.value += one;
//     document.getElementById("main").value = "";
//     // one = parseInt(one);
//     // switch (one){
//     //     case 1:
//     //     document.getElementById("main_one").value = one;
//     //      break;
//     //     case 2:
//     //     document.getElementById("main_two").value += one;
//     //      break;
//     //     case 3:
//     //     document.getElementById("main_three").value += one;
//     //      break;
//     //      default:
//     //      fourth.innerHTML += null;
        
//     // }
// };