// ============================================
// CONFIGURACIÓN
// ============================================

const telefono1 = "525575530081";
const telefono2 = "5255XXXXXXXX";


// ============================================
// BOTONES GENERALES DE WHATSAPP
// ============================================

const botonesWhatsApp = document.querySelectorAll(".whatsapp-link");

botonesWhatsApp.forEach((boton) => {

    const mensaje =
        "Hola, Antojitos Beto's. Me gustaría hacer un pedido.";

    // Si el botón tiene data-telefono, usamos ese número.
    // Si no, usamos el teléfono 1.
    const telefono = boton.dataset.telefono || telefono1;

    const url =
        `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;

    boton.href = url;
    boton.target = "_blank";

});


// ============================================
// BOTONES DE PEDIDO
// ============================================

const botonesPedido = document.querySelectorAll(".btn-pedido");

botonesPedido.forEach((boton) => {

    boton.addEventListener("click", () => {

        const producto = boton.dataset.producto;

        const mensaje =
            `Hola, Antojitos Beto's. Quiero pedir: ${producto}.`;

        // Cada botón puede indicar qué teléfono utilizar
        const telefono = boton.dataset.telefono || telefono1;

        const url =
            `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;

        window.open(url, "_blank");

    });

});

