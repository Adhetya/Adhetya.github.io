// const toggleButton = document.getElementsByClassName("toggle-button")[0];
// const navbarLinks = document.getElementsByClassName("navbar-links")[0];

// toggleButton.addEventListener("click", () => {
//     navbarLinks.classList.toggle("active");
// });

var menu = document.getElementById("navbar");

function closeMenu(){
    navbar.style.top = "-100vh";
}

function openMenu(){
    navbar.style.top = "0";
}

document.querySelector(".theme-toggle-button").addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

function focusFunction() {
    let parent = this.parentNode;
    parent.classList.add("focus");

}
function blurFunction() {
    let parent = this.parentNode;
    if(this.value == ""){
        parent.classList.remove("focus");
    }

}

const inputs = document.querySelectorAll(".input");
inputs.forEach((input) => {
    input.addEventListener("focus", focusFunction);
    input.addEventListener("blur", blurFunction);
})