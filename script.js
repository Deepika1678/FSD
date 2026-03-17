//console.log(window)

// const header=document.getElementById("header");
// console.log(header)
// header.style.color="blue"

// const classSelector = document.getElementsByClassName("classSelector");
// const arr=Array.from(classSelector)
// console.log(classSelector)
//classSelector[0].style.color="blue"
//classSelector[1].style.color="blue"
//classSelector[2].style.color="blue"
// arr.forEach(element =>{
//     element.style.color="blue"
// });
// const h3=document.getElementsByTagName("h3")
// console.log(h3)
// const arr2=array.fron(h3)
// arr2.forEach((ele) => {
//     ele.style.color="blue"
//     ele.style.backgroundcolor="yellow"
// });
// const classSelector =document.querySelector(".classSelector")
// console.log(classSelector)
// classSelector.style.color="blue"
// classSelector.style.backgroundcolor="black"
// const h3=document.querySelector("h3")
// console.log(h3)
// h3.style.color="blue"
// const classSelector=document.querySelectorAll(".classSelector")
// console.log(classSelector)
// classSelector.forEach((ele)=>{
//     ele.style.color="blue"

// });
// const h3=document.querySelectorAll('h3')
// h3.forEach((ele)=>{
//     ele.style.color="blue"
// });
const header = document.querySelector("#header")
const main = document.getElementById("main")
const outer= document.getElementById("outer")

header.textContent = "hello adam, how are you"
main.innerHTML = "<p>This is the  innerhtml text</p>"
const inner=document.createElement("div")

inner.innerHTML= "<p> hello </p>"

outer.appendChild(inner)