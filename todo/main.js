let data=document.getElementById("name")
let output=document.getElementById("para")
let data2=document.querySelector("h1")
let takedata=document.getElementById("btn1")
let seen=document.getElementById("seen")

// let nested=document.createElement("button")
// nested.setAttribute("style","height:20px;width:200px;color:white;")
// nested.innerHTML="Add"
// seen.append(nested)

takedata.addEventListener("click",(e)=>{
    let ans=document.createElement("div")
        ans.setAttribute("style","padding:10px;height:100px;font-size:20px;width:100px;background-color:lightgrey;margin-top:50px;")
let nested=document.createElement("button")
nested.setAttribute("style","height:25px;width:60px;color:white;background-color:rgb(228, 30, 189);border:0px;border-radius:4px;font-size:15px;")
nested.innerHTML="Add"

    let res=data.value
    ans.textContent=res
    ans.append(nested)
    seen.append(ans)
    data.value=""
})
