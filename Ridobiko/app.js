document.getElementById("button").style.display = "none";

function toggleDisplay() {
    var dropdown = document.getElementById("settings");
    if (dropdown.style.display === "none") {
        dropdown.style.display = "block";
    }
    else {
        dropdown.style.display = "none";
    }
}


