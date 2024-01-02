const input = document.getElementById("input")

/*
function processInput() {
    var value = document.createTextNode(input.value)
    var main = document.getElementById("main")
    
    if (main.innerHTML != "") {
        main.innerHTML = ""
        main.appendChild(value)
       var newLine = document.createElement("br")
       main.appendChild(newLine)
       input.value = ""
       return
    }
    
    main.appendChild(value)
    var newLine = document.createElement("br")
    main.appendChild(newLine)
    input.value = ""
}
*/


function pInput() {
     var rd = document.getElementById("rd")
     rd.setAttribute("src", input.value);
}
