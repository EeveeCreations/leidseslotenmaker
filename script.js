
/* ==============================
   REDIRECT CONFIGURATION
============================== */
const WEBSITE_NAME  = "slotenservicevoorschoten";
const WEBSITE_URL = "https://www.slotenservicevoorschoten.nl";
const REDIRECT_DELAY = 3000; // milliseconds

/* ==============================
   LANGUAGE CONFIGURATION
============================== */

const translations = {
    en: {
        logo: "EXTERNAL REDIRECT",
        title: "You are being redirected.",
        description: "You are being redirected to a police-recognised locksmith service. Please wait while we connect you to the official destination.",
        status: "Connecting to the locksmith service...",
        footer: "SECURE REDIRECTION · PLEASE WAIT"
    },

    nl: {
        logo: "EXTERNE DOORVERWIJZING",
        title: "We sturen je veilig door",
        description: "Je wordt doorgestuurd naar een door de politie erkende slotenmakersdienst, Even geduld terwijl we je doorverbinden naar de juiste website.",
        status: "Verbinden met de slotenmakersdienst...",
        footer: "VEILIGE DOORVERWIJZING · EVEN GEDULD"
    }
};


/* ==============================
   LANGUAGE DETECTION
============================== */

function detectLanguage() {
    const browserLanguage = navigator.language || navigator.userLanguage;

    return browserLanguage.toLowerCase().startsWith("nl")
        ? "nl"
        : "en";
}


/* ==============================
   APPLY TRANSLATIONS
============================== */

function setLanguage(language) {
    const text = translations[language] || translations.en;

    document.documentElement.lang = language;

    document.querySelector(".logo").textContent = text.logo;
    document.getElementById("title").textContent = text.title;
    document.getElementById("description").textContent = text.description;
    document.getElementById("status-text").textContent = text.status;
    document.getElementById("footer").textContent = text.footer;
}


/* ==============================
   REDIRECT LOGIC
============================== */

window.addEventListener("DOMContentLoaded", () => {

    const language = detectLanguage();

    setLanguage(language);

    setTimeout(() => {
        window.location.href = WEBSITE_URL;
    }, REDIRECT_DELAY);

});
