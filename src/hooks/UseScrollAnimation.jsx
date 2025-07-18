import { useEffect } from "react";

export default function useScrollAnimation() {
    useEffect(() => {
        function handleScroll() {
            const sections = document.querySelectorAll(".section");
            sections.forEach(section => {
                const sectionTop = section.getBoundingClientRect().top;
                const sectionBottom = section.getBoundingClientRect().bottom;

                if (sectionTop < window.innerHeight * 0.8 && sectionBottom > 0) {
                    section.classList.add("visible");
                } else {
                    section.classList.remove("visible"); // Optional: remove if you want repeatable animation
                }
            });
        }

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Trigger once on load

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
}
