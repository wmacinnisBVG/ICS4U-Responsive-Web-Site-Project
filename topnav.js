var x = document.getElementById("myTopnav");
x.style.display = "none";

function openMenu() {
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
function triggerMenu(){
    x.style.display = "block";

}