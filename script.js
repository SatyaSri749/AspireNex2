const close = document.querySelector(".close");
const open = document.querySelector(".ham");
const menu = document.querySelector(".menu");
close.addEventListener("click", () => {
menu.style.visibility = "hidden";
});
open.addEventListener("click", () => {
menu.style.visibility = "visible";
});
function myfunction(){
    var dots=document.getElementById("dots");
    var moreText=document.getElementById("more");
    var btntext=document.getElementById("mybtn");
    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "See more"; 
        moreText.style.display = "none";
      } 
      else {
        dots.style.display = "none";
        btnText.innerHTML = "See less"; 
        moreText.style.display = "inline";
      }
}

