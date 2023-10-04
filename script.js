var main = document.querySelector("#main")
var cursor = document.querySelector(".cursor")
main.addEventListener("mousemove", function (details) {
    cursor.style.left = details.x + "px"
    cursor.style.top = details.y + "px"
})