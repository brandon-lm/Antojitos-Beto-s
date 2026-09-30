// ============================================
// CONFIGURACIÓN
// ============================================

const telefonoPedidos = "525575530081";
const telefonoGeneral = "525512952382";


// ============================================
// BOTONES GENERALES DE WHATSAPP
// ============================================

const botonesWhatsApp = document.querySelectorAll(".whatsapp-link");

botonesWhatsApp.forEach((boton) => {

    const mensaje =
        "Hola, Antojitos Beto's. Me gustaría hacer un pedido.";

    // Si el botón tiene data-telefono,
    // utiliza ese número.
    // Si no tiene, utiliza el número general.
    const telefono =
        boton.dataset.telefono || telefonoGeneral;

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

        const url =
            `https://wa.me/${telefonoPedidos}?text=${encodeURIComponent(mensaje)}`;

        window.open(url, "_blank");
    });

});
// ============================================
// CONFIGURACIÓN
// ============================================

const telefonoPedidos = "525575530081";
const telefonoGeneral = "5255XXXXXXXX";


// ============================================
// BOTONES GENERALES DE WHATSAPP
// ============================================

const botonesWhatsApp = document.querySelectorAll(".whatsapp-link");

botonesWhatsApp.forEach((boton) => {

    const mensaje =
        "Hola, Antojitos Beto's. Me gustaría hacer un pedido.";

    // Si el botón tiene data-telefono,
    // utiliza ese número.
    // Si no tiene, utiliza el número general.
    const telefono =
        boton.dataset.telefono || telefonoGeneral;

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

        const url =
            `https://wa.me/${telefonoPedidos}?text=${encodeURIComponent(mensaje)}`;

        window.open(url, "_blank");
    });

});
