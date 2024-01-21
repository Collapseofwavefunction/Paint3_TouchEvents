var last_position_x, last_position_y
var mouseEvent = "empty"
canvas = document.getElementById("myCanvas")
ctx = canvas.getContext("2d")
color = "pink"
width_of_line = 5
var width = screen.width
var new_width = screen.width - 70
var new_height = screen.height - 300
if (width < 992) {
    document.getElementById("myCanvas").width = new_width
    document.getElementById("myCanvas").height = new_height
    document.body.style.overflow = "hidden"
}
canvas.addEventListener("touchstart", my_touchstart)

function my_touchstart(e) {
    color = document.getElementById("color").value
    width_of_line = document.getElementById("width_of_line").value
    last_position_of_x = e.touches[0].clientX - canvas.offsetLeft
    last_position_of_y = e.touches[0].clienty - canvas.offsetTop
}
canvas.addEventListener("touchmove", my_touchmove)

function my_touchmove(e) {
    current_position_of_mouse_x = e.touches[0].clientX - canvas.offsetLeft
    current_position_of_mouse_y = e.touches[0].clienty - canvas.offsetTop
    ctx.beginPath()
    ctx.strokeStyle = color
    ctx.lineWidth = width_of_line
    ctx.moveTo(last_position_x, last_position_y)
    ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y)
    ctx.stroke()

    last_position_x = current_position_of_mouse_x
    last_position_y = current_position_of_mouse_y
}

function Clear_drawing() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
}