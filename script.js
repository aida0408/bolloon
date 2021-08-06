// const box = document.querySelector(".box")
// document.addEventListener("click", (e) =>{
//     box.style.left = `${e.clientX}px`
//     box.style.top = `${e.clientY}px`
//     box.style.transform = "translate(-50% -50%)"
// })

// const box = document.querySelector(".box")
// document.addEventListener("mousemove", (e) =>{
//     box.style.left = `${e.clientX}px`
//     box.style.top = `${e.clientY}px`
//     box.style.transform = "translate(-50% -50%)"
// })


// const figure= document.querySelector(".figure")
// const color= document.querySelector(".color")
// const visibility= document.querySelector(".visibility")
// const box = document.querySelector(".box")
//
//
// color.addEventListener("click", () =>{
//     box.classList.toggle("green")
// })
// visibility.addEventListener("click", () =>{
//     box.classList.toggle("d-none")
// })
// figure.addEventListener("click", () =>{
//     box.classList.toggle("circle")
// })

const Images = document.querySelectorAll(".images")
const zero = document.querySelectorAll(".zero")
const refresh = document.querySelector(".refresh")

let idx = 0
Images.forEach((el) => {
    el.addEventListener("click", (event) => {
        zero[idx].src = event.target.src
        idx++
    })
})

refresh.addEventListener("click", () =>{
    zero.forEach(item =>{
        item.src = "./images/standard_white.gif"
    })
    idx = 0
    console.log(1)
})
