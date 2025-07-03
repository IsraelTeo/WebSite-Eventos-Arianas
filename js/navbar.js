// Cambio del header al scrollear
window.addEventListener('scroll', () => {
    const header = document.querySelector('.site-header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Control de menu hamburguesa
document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("nav-menu");
    const dropdownToggle = document.querySelector(".dropdown-toggle");
    const dropdown = document.querySelector(".dropdown");

    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("active");
        dropdown.classList.remove("open");
    });

    dropdownToggle.addEventListener("click", (e) => {
        if (window.innerWidth <= 1025) {
            e.preventDefault();
            dropdown.classList.toggle("open");
        }
    });

    document.querySelectorAll(".nav-menu a").forEach(link => {
        link.addEventListener("click", (e) => {
            const isDropdownToggle = link.classList.contains("dropdown-toggle");
            if (!isDropdownToggle) {
                navMenu.classList.remove("active");
                dropdown.classList.remove("open");
            }
        });
    });
});

// Destaca hover segun la seccion visible
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-menu a");

    function activateMenuOnScroll() {
        let scrollY = window.pageYOffset;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 100;
            const sectionId = current.getAttribute("id");

            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove("active");
                    if (link.getAttribute("href") === `#${sectionId}`) {
                        link.classList.add("active");
                    }
                });
            }
        });
    }

    window.addEventListener("scroll", activateMenuOnScroll);
});