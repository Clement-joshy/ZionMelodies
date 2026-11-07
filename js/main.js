
"use strict";

document.addEventListener("DOMContentLoaded", function () {

    // Automatically update the copyright year
    const currentYear = document.getElementById("currentYear");

    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }

    // Front-end newsletter demonstration
    const newsletterForm = document.getElementById("newsletterForm");
    const newsletterEmail = document.getElementById("newsletterEmail");
    const newsletterMessage = document.getElementById("newsletterMessage");

    if (newsletterForm) {
        newsletterForm.addEventListener("submit", function (event) {
            event.preventDefault();

            if (!newsletterEmail.checkValidity()) {
                newsletterEmail.reportValidity();
                return;
            }

            newsletterMessage.textContent =
                "Thank you! Newsletter integration will be added later.";

            newsletterEmail.value = "";
        });
    }

});
