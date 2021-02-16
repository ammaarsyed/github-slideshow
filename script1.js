css = document.querySelector("h3");
colour1 = document.querySelector(".colour1");
colour2 = document.querySelector(".colour2");
body = document.getElementById("gradient");

function setGradient() {
    body.style.background = 
    "linear-gradient(to right, "
    + colour1.value
    + ","
    + colour2.value
    + ")";

    css.textContent = body.style.background + ";";
} 

colour1.addEventListener("input", setGradient, function(){
       console.log(colour1.value);
});
colour2.addEventListener("input", setGradient, function(){
       console.log(colour2.value)
});