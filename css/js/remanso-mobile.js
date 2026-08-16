console.log("REMANSO MOBILE JS CARGADO");


// ==========================================================
// BUSCAR TODOS LOS SLIDERS
// ==========================================================

const sliders = document.querySelectorAll(
    ".remanso-cabin-mobile-slider, .remanso-retreat-mobile-slider, .remanso-retreats-gallery"
);

console.log("Sliders encontrados:", sliders);


// ==========================================================
// INICIALIZAR CADA SLIDER
// ==========================================================

sliders.forEach(slider => {

    console.log("Slider inicializado:", slider);


    // ======================================================
    // BUSCAR INDICADORES
    // ======================================================

    let indicators = slider.closest("section").querySelectorAll(
        ".remanso-cabin-gallery-dots span, .remanso-retreat-gallery-dots span, .remanso-retreats-gallery-dots span"
    );


    // ======================================================
    // NIDOS
    //
    // El indicador está fuera del Hero,
    // dentro de la sección siguiente.
    // ======================================================

    if (indicators.length === 0) {

        const info = slider.closest("section").nextElementSibling;

        if (info) {

            indicators = info.querySelectorAll(
                ".remanso-cabin-gallery-dots span, .remanso-retreat-gallery-dots span, .remanso-retreats-gallery-dots span"
            );

        }

    }


    console.log("Indicadores encontrados:", indicators.length);
    console.log("Indicadores:", indicators);


    // ======================================================
    // CONTROL DEL SCROLL HORIZONTAL
    // ======================================================

    slider.addEventListener("scroll", () => {

        let index;


        // ==================================================
        // RETIROS - HOME
        //
        // Las tarjetas no ocupan todo el ancho del slider,
        // por eso no usamos clientWidth.
        // Buscamos la tarjeta más cercana al centro.
        // ==================================================

        if (
            slider.classList.contains("remanso-retreats-gallery")
        ) {

            const cards = slider.querySelectorAll(
                ".remanso-retreats-card"
            );

            const sliderCenter =
                slider.scrollLeft + (slider.clientWidth / 2);

            let closestDistance = Infinity;

            let closestIndex = 0;


            cards.forEach((card, i) => {

                const cardCenter =
                    card.offsetLeft + (card.offsetWidth / 2);

                const distance =
                    Math.abs(cardCenter - sliderCenter);


                if (distance < closestDistance) {

                    closestDistance = distance;

                    closestIndex = i;

                }

            });


            index = closestIndex;

        }


        // ==================================================
        // NIDOS + RETIROS INDIVIDUALES
        //
        // Mantenemos exactamente la lógica que ya funciona.
        // ==================================================

        else {

            index = Math.round(
                slider.scrollLeft / slider.clientWidth
            );

        }


        console.log("Scroll:", slider.scrollLeft);
        console.log("Índice activo:", index);


        // ==================================================
        // QUITAR ACTIVE DE TODOS LOS INDICADORES
        // ==================================================

        indicators.forEach(dot => {

            dot.classList.remove("active");

        });


        // ==================================================
        // ACTIVAR EL INDICADOR CORRESPONDIENTE
        // ==================================================

        if (indicators[index]) {

            indicators[index].classList.add("active");

        }

    });

});

// ==========================================
// SMART BACK · RETIROS
// ==========================================

const smartBackButtons = document.querySelectorAll(
    "[data-smart-back]"
);

smartBackButtons.forEach(button => {

    button.addEventListener("click", event => {

        event.preventDefault();

        history.back();

    });

});




// ==========================================================
// PROGRESO SCROLL - CABAÑAS HOME
// ==========================================================

const cabinHomeGallery = document.querySelector(
    ".remanso-cabins-gallery"
);

const cabinHomeProgress = document.querySelector(
    ".remanso-cabins-scroll-progress span"
);


if (cabinHomeGallery && cabinHomeProgress) {

    cabinHomeGallery.addEventListener("scroll", () => {

        const maxScroll =
            cabinHomeGallery.scrollWidth -
            cabinHomeGallery.clientWidth;

        const progress =
            (cabinHomeGallery.scrollLeft / maxScroll) * 100;

        cabinHomeProgress.style.width =
            `${progress}%`;

    });

}