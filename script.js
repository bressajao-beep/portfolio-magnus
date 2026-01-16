// Detecta fala pelo atributo usado pelo Discord/Zen/etc
const observer = new MutationObserver(() => {
    const avatars = document.querySelectorAll('li img[class^="Voice_avatar"]');

    avatars.forEach(img => {
        const speaking = img.getAttribute("aria-label")?.includes("(falando)");
        img.dataset.speaking = speaking ? "true" : "false";
    });
});

observer.observe(document.body, { childList: true, subtree: true });
