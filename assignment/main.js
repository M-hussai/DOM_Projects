// // // let show=document.getElementById("ans")

// // // function highlight() {
// // //     //Write your code here


// // // 	let pap=document.querySelectorAll(".one")
// // //     pap.forEach((item)=>{
// // //         item.setAttribute("style","color:green;")
// // //     })

// // // }


// // // function return_normal() {
// // //     //Write your code here

// // // 	let pap=document.querySelectorAll(".one")
// // //     pap.forEach((item)=>{
// // //         item.setAttribute("style","color:black;")
// // //     })

    
// // // }


// // // show.addEventListener("mouseover",()=>{
// // //     let pap=document.querySelectorAll(".one")
// // //     pap.forEach((item)=>{
// // //         item.setAttribute("style","color:green;")
// // //     })
// // //     // pap.setAttribute("style","color:green;")
// // //     // pap.classList.add("hussain")
    
// // // // })

// // // show.addEventListener("mouseover",highlight)
// // // show.addEventListener("mouseleave",return_normal)
// //     // let pap=document.querySelectorAll(".one")
// //     // pap.forEach((item)=>{
// //     //     item.setAttribute("style","color:green;")
// //     // })
// //     // pap.setAttribute("style","color:green;")
// //     // pap.classList.add("hussain")
    
// // // })\



// // // let box=document.querySelectorAll(".square")
// // // box.forEach((item)=>{
// // //     item.addEventListener("mouseover",()=>{
// // //         item.nextElementSibling.setAttribute("style","background-color:red;")
// // //         item.previousElementSibling.setAttribute("style","background-color:red;")
// // //     })
// // //     item.addEventListener("mouseleave",()=>{
// // //         item.nextElementSibling.setAttribute("style","background-color:#E6E6FA;")
// // //         item.previousElementSibling.setAttribute("style","background-color:#E6E6FA;")
// // //     })
    
// // // })


// // let box1=document.getElementById("square1")
// // let box2=document.getElementById("square2")
// // let box3=document.getElementById("square3")
// // box1.addEventListener("mouseover",()=>{
// //     box2.style.backgroundColor="#6F4E37"
// //     box3.style.backgroundColor="#6F4E37"

// // })
// // box1.addEventListener("mouseleave",()=>{
// //     box2.style.backgroundColor="#E6E6FA"
// //     box3.style.backgroundColor="#E6E6FA"

// // })

// // box2.addEventListener("mouseover",()=>{
// //     box1.style.backgroundColor="#6F4E37"
// //     box3.style.backgroundColor="#6F4E37"

// // })
// // box2.addEventListener("mouseleave",()=>{
// //     box1.style.backgroundColor="#E6E6FA"
// //     box3.style.backgroundColor="#E6E6FA"

// // })


// // box3.addEventListener("mouseover",()=>{
// //     box1.style.backgroundColor="#6F4E37"
// //     box2.style.backgroundColor="#6F4E37"

// // })
// // box3.addEventListener("mouseleave",()=>{
// //     box1.style.backgroundColor="#E6E6FA"
// //     box2.style.backgroundColor="#E6E6FA"

// // })


// // // body.addEventListener("mouseover",(e)=>{
    
// // //     switch(num){
// // //         case box1:

// // //     }
// // // })

// // // switch (num){
// // //     case box1:

// // // }

// // let object={
// //     title:"",
// //     author:"",
// //     isbn:""
// // }
// // let title=document.getElementById("title")
// // let author=document.getElementById("author")
// // let isbn=document.getElementById("isbn")
// let btn=document.getElementById("btn")
// let res=document.getElementById("ans")
// let form=document.getElementById("form")




// form.addEventListener("submit",(event)=>{
//     let title=document.getElementById("title")
//     console.log(title.value)
  
    
// })
// const titleInput = document.getElementById("tit");
// const authorInput = document.getElementById("author");
// const isbnInput = document.getElementById("isbn");
// const button = document.getElementById("btn");
// const ans = document.getElementById("ans");
// let table=document.createElement("table")
//     table.setAttribute("style","width:100%;")
//     let main=document.createElement("tr")
//     // main.style.backgroundColor="white"
   
    
// main.innerHTML=`<td><b>Title</td><td><b>Author</td><td><b>ISBN#</td><td></b></td>`
//  main.setAttribute("style","-bottom:2px solid;")
// table.append(main)
//     ans.append(table)
// // const btn=document.getElementById("btn")
// // const title=document.getElementById("tit")
// button.addEventListener("click",() => {
//     const res1=titleInput.value
//     const res2=authorInput.value
//     const res3=isbnInput.value
// //     let table=document.createElement("table")
// //     table.setAttribute("style","width:100%;")
// //     let main=document.createElement("tr")
// //     main.style.backgroundColor="white"
    
// // main.innerHTML=`<td>Title</td><td>Author</td><td>ISBN</td><td></td>`
//     let box=document.createElement("tr")
//     box.setAttribute("style","background-color:lightgrey;")
//     box.innerHTML=`<td>${res1}<td>${res2}<td>${res3}`
//     let btn2=document.createElement("button")
//     btn2.textContent="X"
//     btn2.classList.add("delete")
//     btn2.setAttribute("style","background-color:red;color:white;")
// box.append(btn2)
//     table.append(box)
//     ans.append(table)

//     btn2.addEventListener("click",()=>{
//         box.remove()
//     })



    
//     // ans.textContent=res
// })


// // Grab the inputs and button
// const titleInput = document.getElementById("tit");
// const authorInput = document.getElementById("author");
// const isbnInput = document.getElementById("isbn");
// const button = document.getElementById("btn");
// const ans = document.getElementById("ans");

// // Listen for button click
// button.addEventListener("click", () => {
//   // Get values from inputs
//   const title=titleInput.value;
//   const author = authorInput.value;
//   const isbn = isbnInput.value;

//   // Show them in the <p> element
//   ans.textContent = ` ${title} by ${author}, ISBN: ${isbn}`;
// });

// let ol=document.getElementById("infi-list")
// let Item1=document.createElement("li")
// Item1="Item1"
// let Item2=document.createElement("li")
// Item2="Item2"
// let Item3=document.createElement("li")
// Item3="Item3"
// let Item4=document.createElement("li")
// Item4="Item4"
// let Item5=document.createElement("li")
// Item5="Item5"
// let Item6=document.createElement("li")
// Item6="Item6"
// let Item7=document.createElement("li")
// Item7="Item7"
// let Item8=document.createElement("li")
// Item8="Item8"
// let Item9=document.createElement("li")
// Item9="Item9"
// let Item10=document.createElement("li")
// Item10="Item10"


// ol.append(Item1,Item2,Item3,Item4,Item5,Item6,Item7,Item8,Item9,Item10)


// let btn=document.getElementById("btn")
// let ans=document.getElementById("ans")
// btn.addEventListener("click",()=>{
// let row=prompt("Input number of rows")
// let col=prompt("Input number of columns")
// console.log(row)
// })

//table dyamnic






// const btn=document.getElementById("btn")

// const table=document.getElementById("myTable")

// btn.addEventListener("click",()=>{
//     const res=document.getElementById("ans")
// let rn=prompt("Input number of rows")
// let cn=prompt("Input number of columns")
// // res.textContent=Row-${i} Column-${j}	
// if((rn <0 ||cn<0)||(isNaN(rn)||isNaN(cn))){
//     alert("enter a valid number")
//     return
// }else{
// for(let i=0;i<rn;i++){
//     let tr=document.createElement("tr")
//     for(let j=0;j<cn;j++){
//         let td=document.createElement("td")
// td.textContent=`Row-${i} Column-${j}`
// tr.append(td)
//     }
// table.append(tr)
// }
// }
// btn.remove()
// })

let ans=document.getElementById("ans")
// let obj={
//     class:7,
//     add:{name:{
//             name:"umar",
//             and:function(){
//                 console.log(this.name)
//             }
    

//         }
//     }
// }

// obj.add.name.and()


// let user1={
//     name:"umar"
// }
// let user2={
//     name:"khan"
// }

// function welcome(dept,course){
//     ans.textContent="wl]chdcbhybcvuiwj"+this.name,course
// }

// apply(user1,["one","two"])
// welcome.apply(user2,["one","two"])
// welcome.call(user2,["one","two"])
// welcome.call(user2,"hhhhh")


function students(name,age){
    this.name=name,
    this.age=age
//     this.adress=function() {
// ans.textContent=this.name
        
//     }
}
let data=students("umar",12)
console.log(data)


