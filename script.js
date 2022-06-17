// alert('ok')
// console.log(document.getElementById('un'))

// document.getElementById('un').addEventListener('click', function(){
//     document.getElementById('un').innerHTML="Hello"
// })

// let item = document.getElementById('un')
// item.addEventListener('click', function () {
//     item.innerHTML = "Hello"
// })


// let item = document.getElementsByClassName('un')[0]
// // let deux = document.getElementsByClassName('deux')[0]
// item.addEventListener('click', function () {
//     item.innerHTML = "Hello"
//     // deux.innerHTML = "Bonjour"
//     item.nextElementSibling.innerHTML = "Hola"
//     item.parentElement.lastElementChild.innerHTML = "3aslema"
//     document.getElementsByTagName("header")[0].style.backgroundColor = "pink"
// })


let links = Array.from(document.querySelectorAll(".lien"))
let paras = Array.from(document.querySelectorAll("p"))
let colors = ["red", "green", "blue", "yellow"]

// for (let i = 0; i < links.length; i++) {
//     links[i].addEventListener('click', function () {
//         paras[i].style.color = colors[i]
//     })
// }

for(let para of paras){
    para.addEventListener('click', function(){
        if(para.style.backgroundColor==="pink"){
            para.style.backgroundColor = "white"
        }
        else{
            para.style.backgroundColor = "pink"
        }
    })
}
for(let para of paras){
    para.addEventListener('mouseover', function(){
        para.style.fontSize="30px"
    })
}
for(let para of paras){
    para.addEventListener('mouseout', function(){
        para.style.fontSize="15px"
    })
}
