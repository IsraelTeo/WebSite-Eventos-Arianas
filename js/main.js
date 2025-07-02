// Carousel HERO
document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.getElementById("carousel");
    const dots = document.querySelectorAll(".dot");
    let currentIndex = 0;
    const totalSlides = dots.length;
    let intervalId;

    const showSlide = (index) => {
        carousel.style.transform = `translateX(-${index * 100}%)`;
        dots.forEach(dot => dot.classList.remove("active"));
        dots[index].classList.add("active");
        currentIndex = index;
    };

    const startAutoSlide = () => {
        intervalId = setInterval(() => {
            let nextIndex = (currentIndex + 1) % totalSlides;
            showSlide(nextIndex);
        }, 5000);
    };

    dots.forEach(dot => {
        dot.addEventListener("click", () => {
            clearInterval(intervalId);
            showSlide(parseInt(dot.dataset.index));
            startAutoSlide();
        });
    });

    showSlide(0);
    startAutoSlide();
});