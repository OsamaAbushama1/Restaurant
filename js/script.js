icon = document.querySelector(".icon");
icon.onclick = function(){
    navbar = document.querySelector(".nav-bar")
    navbar.classList.toggle("active")
}




let list = document .querySelectorAll(".list")
let food=document.querySelectorAll(".food")
for(let i=0;i < list.length ; i++){
    list[i].addEventListener("click" , function(){
        for (let j=0 ; j< list.length ; j++){
            list[j].classList.remove("active");
        }
        this.classList.add("active");

        let dataFilter = this.getAttribute("data-filter");

        for (let k =0 ; k< food.length ; k++){
            food[k].classList.remove("active")
            food[k].classList.add("hide")

            if(food[k].getAttribute("data-item") == dataFilter || dataFilter == "all"){
                food[k].classList.remove("hide")
                food[k].classList.add("active")
            }
        }
    })
}

window.addEventListener("scroll" , rev);
function rev(){
    var reveals=document.querySelectorAll(".rev");
    for (var i=0 ; i< reveals.length;i++){
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if (revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active')
        }
        else{
            reveals[i].classList.remove('active')
        }
    }
}