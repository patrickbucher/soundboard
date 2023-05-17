"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const sounds = document.querySelectorAll("div.sound");
    sounds.forEach((sd) => {
        if (sd.hasAttribute("data-shortcut")) {
            const shortcut = sd.getAttribute("data-shortcut");
            const title = sd.querySelector("h2");
            title.innerHTML = `[${shortcut}] ${title.innerHTML}`;
            document.addEventListener("keydown", (e) => {
                if (e.key == shortcut) {
                    const audio = sd.querySelector("audio");
                    audio.play();
                }
            });
        };
    });
});
