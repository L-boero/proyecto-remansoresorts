console.log("REMANSO MOBILE JS CARGADO");

// Buscamos todos los sliders
const sliders = document.querySelectorAll(
    ".remanso-cabin-mobile-slider, .remanso-retreat-mobile-slider"
);

console.log("Sliders encontrados:", sliders);

sliders.forEach(slider => {

    console.log("Slider inicializado:", slider);

    /*
    ==========================================================
    BUSCAR INDICADORES
    ==========================================================
    */

    // Primero buscamos los indicadores dentro de la misma sección
    let indicators = slider.closest("section").querySelectorAll(
        ".remanso-cabin-gallery-dots span, .remanso-retreat-gallery-dots span"
    );

    /*
    Si no encontramos indicadores dentro de la sección,
    buscamos en la sección siguiente.

    NIDOS:
    el indicador está fuera del Hero.

    RETIROS:
    el indicador está dentro del Hero.
    */

    if (indicators.length === 0) {

        const info = slider.closest("section").nextElementSibling;

        if (info) {

            indicators = info.querySelectorAll(
                ".remanso-cabin-gallery-dots span, .remanso-retreat-gallery-dots span"
            );

        }

    }

    console.log("Indicadores encontrados:", indicators.length);
    console.log("Indicadores:", indicators);


    /*
    ==========================================================
    CONTROL DEL SCROLL HORIZONTAL
    ==========================================================
    */

    slider.addEventListener("scroll", () => {

        const index = Math.round(
            slider.scrollLeft / slider.clientWidth
        );

        console.log("Scroll:", slider.scrollLeft);
        console.log("Índice activo:", index);


        /*
        Quitamos active de todos los indicadores
        */

        indicators.forEach(dot => {

            dot.classList.remove("active");

        });


        /*
        Activamos el indicador correspondiente
        */

        if (indicators[index]) {

            indicators[index].classList.add("active");

        }

    });

});