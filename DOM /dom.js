const getH1 = document.querySelector("h1")
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



const getElement = document.querySelector('a')
getElement.setAttribute('href','https://www.youtube.com/?app=desktop')
getElement.textContent = "Youtube"

// create element || append element

const create = document.createElement('h1')
create.textContent = "Element Created"

document.body.appendChild(create)

// how to add class through dom in javascript