
/* ==============================
   REDIRECT CONFIGURATION
============================== */
const WEBSITE_NAME  = "slotenservicevoorschoten";
const WEBSITE_URL = "https://www.slotenservicevoorschoten.nl";
const REDIRECT_DELAY = 3000; // milliseconds


/* ==============================
   REDIRECT LOGIC
============================== */

window.addEventListener("DOMContentLoaded", () => {

    setTimeout(() => {
        window.location.href = WEBSITE_URL;
    }, REDIRECT_DELAY);

});
