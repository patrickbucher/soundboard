"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const sounds = document.querySelectorAll("div.sound");
    sounds.forEach((sd) => {
        if (sd.hasAttribute("data-shortcut")) {
            const shortcut = sd.getAttribute("data-shortcut");
            const title = sd.querySelector("h2");
            title.innerHTML = `<tt>[${shortcut}]</tt> ${title.innerHTML}`;
            document.addEventListener("keydown", (e) => {
                if (e.key == shortcut) {
                    button.classList.add("active");
                    setTimeout(() => {
                        button.classList.remove("active");
                    }, 200);
                    button.click();
                }
            });
        };
        const button = sd.querySelector("button");
        if (button) {
            button.addEventListener("click", (e) => {
                const audio = sd.querySelector("audio");
                audio.play();
            });
        }
    });
});
