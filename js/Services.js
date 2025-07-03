document.addEventListener("DOMContentLoaded", () => {

    console.log("DOM completamente cargado.");

    const servicios = [{
            nombre: "Fiesta de 50 años",
            descripcion: "Celebra medio siglo con una fiesta inolvidable. Decoración elegante, música en vivo y detalles personalizados.",
            imagen: "../assets/img/50_anios/decoracion.jpg",
            galeria: [
                "../assets/img/50_anios/decoracion.jpg",
                "../assets/img/50_anios/bar.jpg",
                "../assets/img/50_anios/bocaditos.jpg",
                "../assets/img/50_anios/pastel.jpg"
            ]
        },
        {
            nombre: "Baby Shower",
            descripcion: "Creamos un ambiente tierno y especial para dar la bienvenida al nuevo miembro de la familia.",
            imagen: "../assets/img/baby_showers/decoracion_conejito.jpg",
            galeria: [
                "../assets/img/baby_showers/decoracion_femenina.jpg",
                "../assets/img/baby_showers/masculino.jpg",
                "../assets/img/baby_showers/niño_O_niña.jpg",
                "../assets/img/baby_showers/decoracion_osito.jpg"
            ]
        },
        {
            nombre: "Bautizos",
            descripcion: "Organizamos bautizos con toques clásicos y modernos, adaptándonos a tus tradiciones.",
            imagen: "../assets/img/bautizos/decoracion.jpg",
            galeria: [
                "../assets/img/bautizos/mesa.jpg",
                "../assets/img/bautizos/pastel.jpg"
            ]
        },
        {
            nombre: "Graduaciones",
            descripcion: "Eventos para cerrar ciclos escolares con alegría, recuerdos y estilo.",
            imagen: "../assets/img/graduaciones/escenario.jpg",
            galeria: [
                "../assets/img/graduaciones/aaa.jpg",
                "../assets/img/graduaciones/promocion_primaria.jpg",
                "../assets/img/graduaciones/promocion.jpg",
                "../assets/img/graduaciones/escenario2.jpg",
                "../assets/img/graduaciones/el_causa.jpg",
                "../assets/img/graduaciones/hora_loca.jpg",
            ]
        },
        {
            nombre: "Bodas",
            descripcion: "Diseñamos bodas de ensueño, cuidando cada detalle, desde la ceremonia hasta la fiesta.",
            imagen: "../assets/img/bodas/novios.jpg",
            galeria: [
                "../assets/img/bodas/novios_baile.jpg",
                "../assets/img/bodas/novios_mirada.jpg",
                "../assets/img/bodas/novios_piscina.jpg",
                "../assets/img/bodas/la_mascara_en_la_boda.jpg"
            ]
        },
        {
            nombre: "Decoraciones",
            descripcion: "Desde decoraciones para cumpleaños infantiles hasta adultos, hacemos que cada celebración sea única.",
            imagen: "../assets/img/cumpleaños/cumpleaños_ramdom.jpg",
            galeria: [
                "../assets/img/cumpleaños/cumpleaños_cristiano.jpg",
                "../assets/img/cumpleaños/decoracion1.jpg"
            ]
        },
        {
            nombre: "Despedidas de soltera",
            descripcion: "Organizamos despedidas inolvidables: divertidas, glamorosas o temáticas, según tu estilo.",
            imagen: "../assets/img/despedida_soltera/amigas_solteras_por_siempre.jpg",
            galeria: [
                "../assets/img/despedida_soltera/piscina.jpg",
                "../assets/img/despedida_soltera/señorita.jpg"
            ]
        },
        {
            nombre: "Quinceañeros",
            descripcion: "Una noche mágica para celebrar los 15 años con elegancia, música, luces y más.",
            imagen: "../assets/img/quinceañeros/decoracion_amplio.jpg",
            galeria: [
                "../assets/img/quinceañeros/quinceañera.jpg",
                "../assets/img/quinceañeros/quinceañera2.jpg",
                "../assets/img/quinceañeros/quinceañera3.jpg",
                "../assets/img/quinceañeros/torta_.jpg",
                "../assets/img/quinceañeros/quinceañero_sala.jpg",
                "../assets/img/quinceañeros/quinceañera_y_escenario.jpg",
                "../assets/img/quinceañeros/quinceañera_y_barman.jpg"
            ]
        },
    ];

    console.log("Servicios cargados:", servicios);

    const contenedor = document.querySelector(".servicios-container");
    const modalOverlay = document.querySelector(".modal-overlay");
    const modal = document.querySelector(".modal");
    const modalClose = document.querySelector(".close-modal");
    const modalTitle = modal.querySelector("h2");
    const modalDesc = modal.querySelector("p");
    const modalImg = modal.querySelector(".modal-img-principal");
    const galeriaContenedor = modal.querySelector(".modal-galeria");

    servicios.forEach(servicio => {
        console.log("Creando tarjeta para:", servicio.nombre);
        const card = document.createElement("div");
        card.className = "servicio-card";

        card.innerHTML = `
            <img src="${servicio.imagen}" alt="${servicio.nombre}">
            <h3>${servicio.nombre}</h3>
            <p>${servicio.descripcion.substring(0, 80)}...</p>
        `;

        card.addEventListener("click", () => {
            console.log(`Tarjeta clickeada: ${servicio.nombre}`);
            modalTitle.textContent = servicio.nombre;
            modalDesc.textContent = servicio.descripcion;
            modalImg.src = servicio.imagen;
            galeriaContenedor.innerHTML = "";

            if (servicio.galeria && servicio.galeria.length > 0) {
                console.log(`Cargando galería de ${servicio.nombre}`, servicio.galeria);
                servicio.galeria.forEach(src => {
                    const img = document.createElement("img");
                    img.src = src;
                    img.alt = servicio.nombre;
                    img.classList.add("galeria-img");
                    img.addEventListener("click", () => {
                        console.log(`Imagen de galería seleccionada: ${src}`);
                        modalImg.src = src;
                    });
                    galeriaContenedor.appendChild(img);
                });
            } else {
                console.log(`No hay galería para ${servicio.nombre}`);
            }

            modalOverlay.style.display = "flex";
        });

        contenedor.appendChild(card);
    });

    modalClose.addEventListener("click", () => {
        console.log("Modal cerrado por botón.");
        modalOverlay.style.display = "none";
    });

    modalOverlay.addEventListener("click", (e) => {
        if (e.target === modalOverlay) {
            console.log("Modal cerrado al hacer clic fuera del contenido.");
            modalOverlay.style.display = "none";
        }
    });

});