const card = document.querySelector(".remanso-cabin-mobile-card");

if (card) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 120) {

            card.classList.add("expanded");

        } else {

            card.classList.remove("expanded");

        }

    });

}