// ============================================
// CONFIGURACIÓN
// ============================================

const telefonoPedidos = "525575530081";
const telefonoGeneral = "5255XXXXXXXX";


// ============================================
// BOTONES GENERALES DE WHATSAPP
// ============================================

document.addEventListener("DOMContentLoaded", () => {

    const botonesWhatsApp =
        document.querySelectorAll(".whatsapp-link");


    botonesWhatsApp.forEach((boton) => {

        boton.addEventListener("click", (evento) => {

            // Evita que href="#" mande al inicio
            evento.preventDefault();

            const mensaje =
                "Hola, Antojitos Beto's. Me gustaría hacer un pedido.";

            // Si el botón tiene data-telefono,
            // utiliza ese número.
            // Si no, utiliza el número general.
            const telefono =
                boton.dataset.telefono || telefonoGeneral;

            const url =
                `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;

            // Abrir WhatsApp
            window.location.href = url;

        });

    });


    // ============================================
    // BOTONES DE PEDIDO
    // ============================================

    const botonesPedido =
        document.querySelectorAll(".btn-pedido");


    botonesPedido.forEach((boton) => {

        boton.addEventListener("click", (evento) => {

            // Evita comportamientos predeterminados
            evento.preventDefault();

            const producto =
                boton.dataset.producto;

            const mensaje =
                `Hola, Antojitos Beto's. Quiero pedir: ${producto}.`;

            const url =
                `https://wa.me/${telefonoPedidos}?text=${encodeURIComponent(mensaje)}`;

            // Abrir WhatsApp
            window.location.href = url;

        });

    });

});
