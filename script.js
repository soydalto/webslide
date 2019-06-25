var item = 0;
var left = document.querySelector(".fa-arrow-left");
var right = document.querySelector(".fa-arrow-right");

left.addEventListener("click",()=>{changeItem(1)});
right.addEventListener("click",()=>{changeItem(2)});


function changeItem(n){
    if (n == 1) {
        if (item == 0) {
        	item = 2;
        } else {
        	item--
        }
    } else {
        if (item == 2) {
        	item = 0;
        } else {
        	item++
        }
    }
    for (let i = 0; i < document.querySelectorAll(".item").length; i++) {
    	document.querySelectorAll(".item")[i].style.display = "none";
    }
    document.querySelectorAll(".item")[item].style.display = "flex";
}