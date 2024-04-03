const men = document.querySelector("#menum");
let listem = document.querySelector("#listem");
men.addEventListener("click",deneme);
const menim = document.querySelector("#menum2");
menim.addEventListener("click",deneme2);
function deneme () {
    listem.setAttribute("style","display:inline-block;");
    men.setAttribute("style","display:none;");
    menim.setAttribute("style","display:inline-block");

}
function deneme2 () {
    listem.setAttribute("style","display:none;");
    men.setAttribute("style","display:inline-block;");
    menim.setAttribute("style","display:none");

}
//<i class="fa-solid fa-xmark"></i>