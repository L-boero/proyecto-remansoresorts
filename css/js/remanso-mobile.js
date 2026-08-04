console.log("REMANSO MOBILE JS CARGADO");

console.log(document.querySelectorAll(".remanso-cabin-mobile-slider"));


document.querySelectorAll(".remanso-cabin-mobile-slider").forEach(slider => {

    const indicators = slider.parentElement.querySelectorAll(
        ".remanso-gallery-indicator span"
    );

    slider.addEventListener("scroll", () => {

        const index = Math.round(slider.scrollLeft / slider.clientWidth);

        indicators.forEach(dot => dot.classList.remove("active"));

        if (indicators[index]) {
            indicators[index].classList.add("active");
        }

    });

});