const container = document.querySelector(".carrouselInside");

setInterval(() => {
    container.style.transition = "transform 1s ease-in-out";
    container.style.transform = "translateX(299px)";

    setTimeout(() => {
        container.style.transition = "none"; 
        container.prepend(container.lastElementChild); 
        container.style.transform = "translateX(0)"; 
    }, 890);
},1050);