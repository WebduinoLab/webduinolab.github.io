// Java script
function changeText(ev) {
    if(ev.getAttribute('data-show') === "true") {
        ev.innerText = "Сделано!"
        ev.setAttribute('evol', "false"); 
    }
    else {
        ev.innerText = "Эволюция"
        ev.setAttribute('data-show', "true"); 
    }
}