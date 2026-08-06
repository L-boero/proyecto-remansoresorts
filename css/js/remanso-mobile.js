console.log("REMANSO MOBILE JS CARGADO");

// Buscamos todos los sliders (Nidos + Retiros)
const sliders = document.querySelectorAll(
    ".remanso-cabin-mobile-slider, .remanso-retreat-mobile-slider"
);

console.log("Sliders encontrados:", sliders);

sliders.forEach(slider => {

    console.log("Slider inicializado:", slider);

    // Buscamos la sección completa donde está este slider
    const section = slider.closest("section");

    // Buscamos cualquier tipo de indicador dentro de esa sección
    const indicators = section.querySelectorAll(
        ".remanso-gallery-indicator span, .remanso-retreat-gallery-indicator span"
    );

    console.log("Indicadores encontrados:", indicators.length);

    slider.addEventListener("scroll", () => {

        const index = Math.round(
            slider.scrollLeft / slider.clientWidth
        );

        console.log("Scroll:", slider.scrollLeft);
        console.log("Índice activo:", index);

        indicators.forEach(dot => {
            dot.classList.remove("active");
        });

        if (indicators[index]) {
            indicators[index].classList.add("active");
        }

    });

});