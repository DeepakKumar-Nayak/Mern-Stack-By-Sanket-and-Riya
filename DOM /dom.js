const getH1 = document.querySelector(".heading")
getH1.style.padding = "10px"
getH1.style.fontFamily = "TikTok Sans, sans-serif"
getH1.style.textTransform = "capitalize"
getH1.style.border = "1px solid black"
getH1.style.width = "100%"
getH1.style.maxWidth = "700px"
getH1.style.boxSizing = "border-box"
getH1.style.fontSize = "15px"
document.body.style.padding = "10px"
getH1.hidden = false 

console.dir(getH1)



const getElement = document.querySelector('a')
getElement.setAttribute('href','https://www.youtube.com/?app=desktop')
getElement.textContent = "Youtube"

// create element || append element

const create = document.createElement('h1')
create.textContent = "Element Created"

document.body.appendChild(create)

// how to add class through dom in javascript
create.classList.add('element')

// toggle bhi add kar sakhte hein yahan aggar hati hu thi classs toh laga dega class
// and aggar class lagi hui hai toh hata dega . 

create.classList.toggle('classname')

// what does get className return.?
// it return HTML Collection.

//use querySelector all to select all buttons with class buy-now
const getButtons = document.querySelectorAll('.buy-now')
console.log(getButtons) // this gives us a node list. like: 

// NodeList(3) [buttons.buy-now, buttons.buy-now, buttons.buy-now]
// 0: buttons.buy-now
// 1: buttons.buy-now
// 2: buttons.buy-now


// Image
const create_image_div = document.createElement("div")
create_image_div.classList.add('image-container')
document.body.appendChild(create_image_div)

const create_image = document.createElement('img')
create_image.setAttribute('src','https://img.freepik.com/free-psd/3d-illustration-with-online-avatar_23-2151303048.jpg?semt=ais_hybrid&w=740')
create_image.classList.add('image')

// adding image inside the create_image_div
create_image_div.appendChild(create_image)

create_image.style.maxWidth = "350px"