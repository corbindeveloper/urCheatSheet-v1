function dropOne() {
    var x = document.getElementById("divOne");
    var y = document.getElementById("one")
    if (x.style.display !== "flex") {
        x.style.display = "flex";
        x.style.transition = "display ease-in 2s";
    } else {
        x.style.display = "none";
    }
}

function dropTwo() {
    var x = document.getElementById("divTwo");
    if (x.style.display !== "flex") {
        x.style.display = "flex";
    } else {
        x.style.display = "none";
    }
}

