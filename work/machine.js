<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
<link rel="stylesheet" href="calculator.css">
<script src="calculator.js"></script>
</head>
<body>
        <form name="diaplay">
             <input type="text" name="calculator"style="background-color:yellow;color:black;"disabled><br><br>
                        
                        
                        <input type="button"class="number"style="background-color:green;color:white;"value="&#178;"onclick="display.calculaor.value +='&#178;'">
                        <input type="button"class="number"style="background-color:green;color:white;"value="&#8730"onclick="display.calculaor.value +='&#8730;'">
                        <input type="button"class="number"style="background-color:red;color:black;"value="%"onclick="display.calculaor.value +='%'">
                        <input type="button"class="number"style="background-color:green;color:white;"value="&plus;"onclick="display.calculaor.value +='&plus;'"><br><br>
                        <input type="button"class="number"style="background-color:orange;color:blue;"value="7"onclick="display.calculaor.value +='7'">
                        <input type="button"class="number"style="background-color:orange;color:blue;"value="8"onclick="display.calculaor.value +='8'">
                        <input type="button"class="number"style="background-color:orange;color:blue;"value="9"onclick="display.calculaor.value +='9'">
                        <input type="button"class="number"style="background-color:orange;color:blue;"value="&times;"onclick="display.calculaor.value +='&times;'"><br><br>
                        <input type="button"class="number"style="background-color:skyblue;color:black;"value="4"onclick="display.calculaor.value +='4'">
                        <input type="button"class="number"style="background-color:skyblue;color:black;"value="5"onclick="display.calculaor.value +='5'">
                        <input type="button"class="number"style="background-color:skyblue;color:black;"value="6"onclick="display.calculaor.value +='6'">
                        <input type="button"class="number"style="background-color:skyblue;color:black;"value="&divide;"onclick="display.calculaor.value +='&divide;'"><br><br>
                         <input type="button"class="number"style="background-color:purple;color:white;"value="1"onclick="display.calculaor.value +='1'">
                        <input type="button"class="number"style="background-color:purple;color:white;"value="2"onclick="display.calculaor.value +='2'">
                        <input type="button"class="number"style="background-color:purple;color:white;"value="3"onclick="display.calculaor.value +='3'">
                        <input type="button"class="number"style="background-color:purple;color:white;"value="&minus;"onclick="display.calculaor.value +='&minus;'"><br><br>
                        <input type="button"class="number"style="background-color:grey;color:pink;"value="0"onclick="display.calculaor.value +='0'">
                        <input type="button"class="number"style="background-color:grey;color:pink;"value="."onclick="display.calculaor.value +='.'">
                        <input type="button"class="number"style="background-color:black;color:orange;"value="C"onclick="display.calculaor.value =''">
                        <input type="button"class="number"style="background-color:grey;color:pink;"value="="onclick="display.calculaor.value = eval(display.calculator.value)">
                        
   
                        
                        
                    
                
                        
                        
    
 </form>   
</body>
</html>