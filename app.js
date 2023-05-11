function hover (x) {
    var display = document.getElementById('display');  //catch the id element
    display.src = x.src;                               //change the image
    x.style.border = "5px solid red"                   //change style
    x.style.opacity = "0.2"                            //change style
}

function leave (y) {
    y.style.border = "none"
    y.style.opacity = 1
}