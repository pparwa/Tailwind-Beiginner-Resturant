const icon = document.getElementById("bar-icon")
const items = document.getElementById("menue-item")
icon.addEventListener("click",()=>{
     items.classList.toggle("hidden")
})