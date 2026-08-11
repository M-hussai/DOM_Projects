let maincontainer=document.createElement("div")
let body2=document.getElementById("calculator")
maincontainer.setAttribute("id","box")
maincontainer.setAttribute("style","height:500px;width:500px;background-color:white;border-radius:5px;border:2px solid;")
body2.append(maincontainer)

//screen body of cal
let str=" "
let operand=" "
let seen=document.createElement("div")
seen.setAttribute("style","height:100px;color:white;background-color:black;margin:15px;font-size:60px;text-align:right;")
seen.textContent=str
maincontainer.append(seen)

// lower part of calculator
let main2=document.createElement("div")
main2.setAttribute("style","height:350px;width:467px;display:grid;")

maincontainer.append(main2)

let key1=document.createElement("div")

// key1.textContent="1"
key1.setAttribute("style","padding:10px;height:50px;display:flex;justify-content:space-around;")

let key2=document.createElement("div")

// key2.textContent="1"
key2.setAttribute("style","padding:10px;height:50px;display:flex;justify-content:space-around;")
let key3=document.createElement("div")

// key3.textContent="1"
key3.setAttribute("style","padding:10px;height:50px;display:flex;justify-content:space-around;")
let key4=document.createElement("div")

// key4.textContent="1"
key4.setAttribute("style","padding:10px;height:50px;display:flex;justify-content:space-around;")
// let key5=document.createElement("button")/

// key5.textContent="1"
// key5.setAttribute("style","background-color:white;padding:20px;height:50px;")

// let key6=document.createElement("button")

// key6.textContent="1"
// key6.setAttribute("style","background-color:white;padding:20px;height:50px;")

main2.append(key1,key2,key3,key4)

let seven=document.createElement("button")
seven.setAttribute("id","sev")
seven.setAttribute("onclick","this.style.background='yellow'")
seven.setAttribute("onmouseout","this.style.background='lightgrey'")
seven.setAttribute("style","background-color:lightgrey;color:black;font-size:30px;height:80px;width:80px;border-radius:5px;border:0px;")
seven.textContent="7"


let eight=document.createElement("button")
eight.setAttribute("id","sev")
eight.setAttribute("onclick","this.style.background='yellow'")
eight.setAttribute("onmouseout","this.style.background='lightgrey'")
eight.setAttribute("style","background-color:lightgrey;color:black;font-size:30px;height:80px;width:80px;border-radius:5px;border:0px;")
eight.textContent="8"


let nine=document.createElement("button")
nine.setAttribute("id","sev")
nine.setAttribute("onclick","this.style.background='yellow'")
nine.setAttribute("onmouseout","this.style.background='lightgrey'")
nine.setAttribute("style","background-color:lightgrey;color:black;font-size:30px;height:80px;width:80px;border-radius:5px;border:0px;")
nine.textContent="9"

let multiply=document.createElement("button")
multiply.setAttribute("id","sev")
multiply.setAttribute("onclick","this.style.background='yellow'")
multiply.setAttribute("onmouseout","this.style.background='grey'")
multiply.setAttribute("style","background-color:grey;color:white;font-size:30px;height:80px;width:80px;border-radius:5px;border:0px;")
multiply.textContent="*"


let reset=document.createElement("button")
reset.setAttribute("id","sev")
reset.setAttribute("onclick","this.style.background='yellow'")
reset.setAttribute("onmouseout","this.style.background='red'")
reset.setAttribute("style","background-color:red;color:white;font-size:30px;height:80px;width:80px;border-radius:5px;border:0px;")
reset.textContent="C"
key1.append(seven,eight,nine,multiply,reset)


let four=document.createElement("button")
four.setAttribute("id","sev")
four.setAttribute("onclick","this.style.background='yellow'")
four.setAttribute("onmouseout","this.style.background='lightgrey'")
four.setAttribute("style","background-color:lightgrey;color:black;font-size:30px;height:80px;width:80px;border-radius:5px;border:0px;")
four.textContent="4"


let five=document.createElement("button")
five.setAttribute("id","sev")
five.setAttribute("onclick","this.style.background='yellow'")
five.setAttribute("onmouseout","this.style.background='lightgrey'")
five.setAttribute("style","background-color:lightgrey;font-size:30px;height:80px;width:80px;border-radius:5px;border:0px;")
five.textContent="5"


let six=document.createElement("button")
six.setAttribute("id","sev")
six.setAttribute("onclick","this.style.background='yellow'")
six.setAttribute("onmouseout","this.style.background='lightgrey'")
six.setAttribute("style","background-color:lightgrey;font-size:30px;height:80px;width:80px;border-radius:5px;border:0px;")
six.textContent="6"

let minus=document.createElement("button")
minus.setAttribute("id","sev")
minus.setAttribute("onclick","this.style.background='yellow'")
minus.setAttribute("onmouseout","this.style.background='grey'")
minus.setAttribute("style","background-color:grey;color:white;font-size:30px;height:80px;width:80px;border-radius:5px;border:0px;")
minus.textContent="-"


let divide=document.createElement("button")
divide.setAttribute("id","sev")
divide.setAttribute("onclick","this.style.background='yellow'")
divide.setAttribute("onmouseout","this.style.background='grey'")
divide.setAttribute("style","background-color:grey;color:white;font-size:30px;height:80px;width:80px;border-radius:5px;border:0px;")
divide.textContent="/"
key2.append(four,five,six,minus,divide)


let one=document.createElement("button")
one.setAttribute("id","sev")
one.setAttribute("onclick","this.style.background='yellow'")
one.setAttribute("onmouseout","this.style.background='lightgrey'")
one.setAttribute("style","background-color:lightgrey;font-size:30px;height:80px;width:80px;border-radius:5px;border:0px;")
one.textContent="1"
let num1=1


let two=document.createElement("button")
two.setAttribute("id","sev")
two.setAttribute("onclick","this.style.background='yellow'")
two.setAttribute("onmouseout","this.style.background='lightgrey'")
two.setAttribute("style","background-color:lightgrey;font-size:30px;height:80px;width:80px;border-radius:5px;border:0px;")
two.textContent="2"



let three=document.createElement("button")
three.setAttribute("id","sev")
three.setAttribute("onclick","this.style.background='yellow'")
three.setAttribute("onmouseout","this.style.background='lightgrey'")
three.setAttribute("style","background-color:lightgrey;font-size:30px;height:80px;width:80px;border-radius:5px;border:0px;")
three.textContent="3"


let square=document.createElement("button")
square.setAttribute("id","sev")
square.setAttribute("onclick","this.style.background='yellow'")
square.setAttribute("onmouseout","this.style.background='grey'")
square.setAttribute("style","background-color:grey;color:white;font-size:25px;height:80px;width:80px;border-radius:5px;border:0px;")
square.textContent="sqrt"


let cube=document.createElement("button")
cube.setAttribute("id","sev")
cube.setAttribute("onclick","this.style.background='yellow'")
cube.setAttribute("onmouseout","this.style.background='grey'")
cube.setAttribute("style","background-color:grey;color:white;font-size:25px;height:80px;width:80px;border-radius:5px;border:0px;")
cube.textContent="cube"
key3.append(one,two,three,square,cube)


let doublezero=document.createElement("button")
doublezero.setAttribute("id","sev")
doublezero.setAttribute("onclick","this.style.background='yellow'")
doublezero.setAttribute("onmouseout","this.style.background='lightgrey'")
doublezero.setAttribute("style","background-color:lightgrey;font-size:25px;height:80px;width:80px;border-radius:5px;border:0px;")
doublezero.textContent="00"



let singlezero=document.createElement("button")
singlezero.setAttribute("id","sev")
singlezero.setAttribute("onclick","this.style.background='yellow'")
singlezero.setAttribute("onmouseout","this.style.background='lightgrey'")
singlezero.setAttribute("style","background-color:lightgrey;font-size:30px;height:80px;width:80px;border-radius:5px;border:0px;")
singlezero.textContent="0"


let dot=document.createElement("button")
dot.setAttribute("id","sev")
// dot.setAttribute("onmouseover","this.style.background='yellow'")
dot.setAttribute("onclick","this.style.background='yellow'")
dot.setAttribute("onmouseout","this.style.background='lightgrey'")
dot.setAttribute("style","background-color:lightgrey;font-size:40px;height:80px;width:80px;border-radius:5px;border:0px;")
dot.textContent="."


let add=document.createElement("button")
add.setAttribute("id","sev")
add.setAttribute("onclick","this.style.background='yellow'")
add.setAttribute("onmouseout","this.style.background='blue'")
add.setAttribute("style","background-color:blue;color:white;font-size:30px;height:80px;width:80px;border-radius:5px;border:0px;")
add.textContent="+"


let equal=document.createElement("button")
equal.setAttribute("id","sev")
equal.setAttribute("onclick","this.style.background='yellow'")
equal.setAttribute("onmouseout","this.style.background='green'")
equal.setAttribute("style","background-color:green;color:white;font-size:30px;height:80px;width:80px;border-radius:5px;border:0px;")
equal.textContent="="
key4.append(doublezero,singlezero,dot,add,equal)



//number function
function one1(){
    
    str+=1

    seen.textContent=str
}
function two1(){

    str+=2
    seen.textContent=str
}
function three1(){
    
    str+=3
    seen.textContent=str
}
 function four1(){

    str+=4
    seen.textContent=str
}
function five1(){
    
    str+=5
    seen.textContent=str
}
 
function six1(){
    
    str+=6
    seen.textContent=str
}

function seven1(){
    
    str+=7
    seen.textContent=str
}
function eight1(){
    
    str+=8
    seen.textContent=str
}


function nine1(){
    
    str+=9
    seen.textContent=str
}
function doublezero1(){
    str+="00"
    seen.textContent=str
}
function singlezero1(){
    str+=0
    seen.textContent=str
}
function dot1(){
    str+="."
    seen.textContent=str
}
// operand funtion
function plus1(){
    str+="+"
    seen.textContent=str
}

function minus1(){
    
    str+="-"
    seen.textContent=str
}

function divide1(){
    
    str+="/"
    seen.textContent=str
}

function multiply1(){
    
    str+="*"
    seen.textContent=str
}

function square1(){
    
    str+="**2"
    seen.textContent=str
}

function cube1(){
    
    str+="**3"
    seen.textContent=str
}

function reset1(){
    
    seen.textContent=0
    str=" "
}


// //function operation
// function add2(){
//     seen.textContent=a+b
// }
// function minus2(){
// seen.textContent=a-b
// }

// function multiply2(){
// seen.textContent=a*b
// }
// function divide2(){
// seen.textContent=a/b
// }
// function square2(){
// seen.textContent=a**2
// }
// function cube2(){
// seen.textContent=a**3
// }



//calling

reset.addEventListener("click",reset1)
one.addEventListener("click",one1)
two.addEventListener("click",two1)
three.addEventListener("click",three1)
four.addEventListener("click",four1)
five.addEventListener("click",five1)
six.addEventListener("click",six1)
seven.addEventListener("click",seven1)
eight.addEventListener("click",eight1)
nine.addEventListener("click",nine1)
singlezero.addEventListener("click",singlezero1)
doublezero.addEventListener("click",doublezero1)
dot.addEventListener("click",dot1)
// cube.addEventListener("click",cube1)
// square.addEventListener("click",square1)
square.addEventListener("click",sqartoot)
cube.addEventListener("click",cuberoot)

add.addEventListener("click",plus1)
minus.addEventListener("click",minus1)
multiply.addEventListener("click",multiply1)
divide.addEventListener("click",divide1)
// ual.addEventListener("click",just)


// function just(){
//     for(let i=0;i<(seen.textContent).length;i++){
//         if((seen.textContent)[i]=="+"){
        
//             return add2()
            
//         }
//         if((seen.textContent)[i]=="-"){
        
//             return minus2()
            
//         }
//          if((seen.textContent)[i]=="*"){
        
//             return multiply2()
            
//         }
//          if((seen.textContent)[i]=="/"){
        
//             return divide2()
            
//         }
//     }
// }


//main function
equal.addEventListener("click",(e)=>{
    str=eval(str)
    seen.textContent=str
})

function sqartoot(){
    seen.textContent=Math.sqrt(str)
}

function cuberoot(){
    
    seen.textContent=Math.cbrt(str)
}


