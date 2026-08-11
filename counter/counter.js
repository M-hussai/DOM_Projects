// // let head1=document.getElementById("one")
// // let head2=document.getElementsByClassName("two")
// // let cont=document.querySelector(".container")
// // head1.innerHTML="<p>that</p>"
// // // console.log(head2,"hnfvjnsjd")
// // // head2[0].innerHTML="<p>sshdydtfvcbhjkc</p>"
// // // cont[0].innerHTML="<p>hhhhhhhhhhhhhhhhhhhh</p>"

// // const { text } = require("express")

// // let para=document.createElement("p")

// // // head1.append(para)
// // let main=document.querySelector("div")
// // para.textContent="umat"
// // main.append(para)
// // // let main2=document.querySelectorAll("p")
// // // console.log(main2)

// // let head1=document.createElement("div")
// // head1.textContent="hello"
// // document.body.append(head1)
// // head1.textContent="umair"
// // head1.remove()

// let mainhead=document.querySelector("#container")

// let head=document.createElement("div")
// head.textContent="hello"
// mainhead.append(head)
// // head.textContent="khan"
// // let head2=document.createElement("p")
// // head2.textContent="nested"
// // head.append(head2)


//button created
let but=document.getElementById("btn1")
but.textContent="Increment"
// but.setAttribute("style","font-size:20px;")
// document.body.append(but)

let but2=document.getElementById("btn2")
but2.textContent="Decrement"
// document.body.append(but2)

let but3=document.getElementById("btn3")
but3.textContent="Reset"
// document.body.append(but3)



// but.setAttribute("id","main")
// but.setAttribute("style","background-color:green;color:white;border-radius:5px;width:100px;height:50px;border:0px;")

// but2.setAttribute("id","main")
// but2.setAttribute("style","background-color:red;color:white;border-radius:5px;width:100px;height:50px;border:0px;")


// but3.setAttribute("id","main")
// but3.setAttribute("style","background-color:blue;color:white;border-radius:5px;width:100px;height:50px;border:0px;")


but.addEventListener("click",inced)
but2.addEventListener("click",decre)
but3.addEventListener("click",reset)
let ans=document.getElementById("ans")

 let n=1
function inced(){
   // do.prepend(ans)
   ans.textContent=n
   n++
    
}
function decre(){
n--
   // document.body.append(ans)
   ans.textContent=n
   
    
}



function reset(){
    let n=0
   // document.body.append(ans)
   ans.textContent=n

    
}
  

