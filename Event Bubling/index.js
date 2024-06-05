
const gP = document.querySelector("#grandparent")
gP.addEventListener('click',()=>{
    console.log("Grand parent clicked");
},false)
const p=document.querySelector("#parent")
p.addEventListener('click',()=>{
    console.log(" parent clicked");
},false)

const c = document.querySelector("#child")
c.addEventListener('click',(e)=>{
    console.log("child clicked");
    e.stopPropagation(); //event bubbling will stop 
},false)   // useCapture - true/false