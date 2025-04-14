const container = document.querySelector(".carrouselInside");
setInterval(() => {
    container.style.transition = "transform 2s ease-in-out";
    container.style.transform = "translateX(225px)";

    setTimeout(() => {
        container.style.transition = "none"; 
        container.prepend(container.lastElementChild); 
        container.style.transform = "translateX(0)"; 
    }, 1500);
},2000);

const light = document.querySelector('.light-overlay');

document.addEventListener('mousemove', (e) => {
  const x = e.clientX;
  const y = e.clientY;
  light.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(31, 132, 249, 0.15) 0%, transparent 40%)`;
});

const sectionProject = document.querySelector(".sectionProject")

const cardProject = document.querySelectorAll(".cardProject")
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      cardProject.forEach((entry, index)=>{
        entry.style.animationDelay = `${index * 0.5}s`
        entry.classList.add("animationProjectCard")
      })
      observer.unobserve(entry.target)
    }
  })
},{
  threshold: 0.5
})

observer.observe(sectionProject)