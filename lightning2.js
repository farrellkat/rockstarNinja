// <!-- I want you to put an event listener on the container div and when the font button is clicked I want the font to change
//     and when the color button is clicked I want the text color to change. Make the necessary changes to the HTML to get it
//     to work. You will need to make a css file with 2 classes on it! -->

let fontButton = document.getElementById("font")
let colorButton = document.getElementById("color")
let container = document.getElementById("container")

colorButton.addEventListener("click", function(e){
e.target.id = container
container.classList.toggle("blue")
})
fontButton.addEventListener("click", function(e){
e.target.id = container
container.classList.toggle("font")
})