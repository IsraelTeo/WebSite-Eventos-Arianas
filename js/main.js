// Carousel HERO
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM cargado - inicializando carrusel HERO");

    const carousel = document.getElementById("carousel");
    const dots = document.querySelectorAll(".dot");
    let currentIndex = 0;
    const totalSlides = dots.length;
    let intervalId;

    console.log(`Total de slides detectados: ${totalSlides}`);

    const showSlide = (index) => {
        console.log(`➡️ Mostrando slide #${index}`);
        carousel.style.transform = `translateX(-${index * 100}%)`;
        dots.forEach(dot => dot.classList.remove("active"));
        dots[index].classList.add("active");
        currentIndex = index;
    };

    const startAutoSlide = () => {
        console.log("Iniciando auto-slide cada 5 segundos");
        intervalId = setInterval(() => {
            let nextIndex = (currentIndex + 1) % totalSlides;
            console.log(`⏭️ Auto-slide a slide #${nextIndex}`);
            showSlide(nextIndex);
        }, 5000);
    };

    dots.forEach(dot => {
        dot.addEventListener("click", () => {
            clearInterval(intervalId);
            const index = parseInt(dot.dataset.index);
            console.log(`Click en dot #${index} - Reiniciando auto-slide`);
            showSlide(index);
            startAutoSlide();
        });
    });

    console.log("Mostrando primer slide al cargar");
    showSlide(0);
    startAutoSlide();
});