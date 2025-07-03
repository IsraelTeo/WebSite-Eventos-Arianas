// Cambio del header al scrollear
window.addEventListener('scroll', () => {
    const header = document.querySelector('.site-header');
    console.log("Scroll Y:", window.scrollY);
    if (window.scrollY > 50) {
        console.log("Agregando clase 'scrolled' al header");
        header.classList.add('scrolled');
    } else {
        console.log("Removiendo clase 'scrolled' del header");
        header.classList.remove('scrolled');
    }
});

// Control de menu hamburguesa
document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("nav-menu");

    console.log("Menu hamburguesa inicializado.");

    hamburger.addEventListener("click", () => {
        console.log("Hamburger clickeado.");
        navMenu.classList.toggle("active");
        dropdown.classList.remove("open");
    });

    dropdownToggle.addEventListener("click", (e) => {
        if (window.innerWidth <= 1025) {
            e.preventDefault();
            console.log("Dropdown toggle clickeado en vista móvil.");
            dropdown.classList.toggle("open");
        }
    });

    document.querySelectorAll(".nav-menu a").forEach(link => {
        link.addEventListener("click", (e) => {
            const isDropdownToggle = link.classList.contains("dropdown-toggle");
            if (!isDropdownToggle) {
                console.log(`Navegando a sección: ${link.getAttribute("href")}`);
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

    console.log("Secciones encontradas:", sections);

    function activateMenuOnScroll() {
        let scrollY = window.pageYOffset;
        console.log("Scroll detectado. Posición Y:", scrollY);

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 100;
            const sectionId = current.getAttribute("id");

            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove("active");
                    if (link.getAttribute("href") === `#${sectionId}`) {
                        console.log(`Sección activa: ${sectionId}`);
                        link.classList.add("active");
                    }
                });
            }
        });
    }

    window.addEventListener("scroll", activateMenuOnScroll);

    const abrirFormBtn = document.getElementById("abrirFormulario");
    const cerrarFormBtn = document.getElementById("cerrarFormulario");
    const formularioFlotante = document.getElementById("formularioFlotante");
    const formFlotante = document.getElementById("formContactoFlotante");

    const errorMsg = document.getElementById("mensajeError");
    const exitoMsg = document.getElementById("mensajeExito");

    // Cargar datos guardados al abrir la página
    const datosGuardados = localStorage.getItem("datosFormulario");
    if (datosGuardados) {
        const datos = JSON.parse(datosGuardados);
        console.log("Datos recuperados de localStorage:", datos);
        document.getElementById("nombreApellido").value = datos.nombre || "";
        document.getElementById("correo").value = datos.correo || "";
        document.getElementById("númeroTelefónico").value = datos.telefono || "";
        document.getElementById("servicio").value = datos.servicio || "";
    } else {
        console.log("No hay datos previos guardados en localStorage.");
    }

    abrirFormBtn.addEventListener("click", (e) => {
        e.preventDefault();
        console.log("Botón abrir formulario clickeado.");
        formularioFlotante.style.display = "block";
        errorMsg.style.display = "none";
        exitoMsg.style.display = "none";
    });

    cerrarFormBtn.addEventListener("click", () => {
        console.log("Botón cerrar formulario clickeado.");
        formularioFlotante.style.display = "none";
    });

    // Guardar datos en localStorage si son válidos
    formFlotante.addEventListener("submit", function (e) {
        e.preventDefault();

        const nombre = document.getElementById("nombreApellido").value.trim();
        const correo = document.getElementById("correo").value.trim();
        const telefono = document.getElementById("númeroTelefónico").value.trim();
        const servicio = document.getElementById("servicio").value.trim();

        console.log("Formulario enviado con:", {
            nombre,
            correo,
            telefono,
            servicio
        });

        if (!nombre || !correo || !telefono || !servicio) {
            console.log("Error: campo vacío detectado.");
            errorMsg.style.display = "block";
            exitoMsg.style.display = "none";
        } else if (!/^\S+@\S+\.com$/.test(correo)) {
            console.log("Error: correo no válido.");
            alert(`Error: correo no válido, ingrese uno válido.`);
            errorMsg.textContent = "Correo electrónico no válido.";
            errorMsg.style.display = "block";
            exitoMsg.style.display = "none";
        } else {
            console.log("Formulario válido. Guardando datos y mostrando éxito.");
            errorMsg.style.display = "none";
            exitoMsg.style.display = "block";

            const datosUsuario = {
                nombre,
                correo,
                telefono,
                servicio
            };
            localStorage.setItem("datosFormulario", JSON.stringify(datosUsuario));
            console.log("Datos guardados en localStorage:", datosUsuario);

            formFlotante.reset();

            setTimeout(() => {
                console.log("Ocultando formulario flotante tras éxito.");
                formularioFlotante.style.display = "none";
            }, 2000);
        }
    });
});