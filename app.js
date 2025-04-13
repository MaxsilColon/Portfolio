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

const light = document.querySelector('.light-overlay');

document.addEventListener('mousemove', (e) => {
  const x = e.clientX;
  const y = e.clientY;
  light.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(28, 153, 173, 0.15) 0%, transparent 30%)`;
});
