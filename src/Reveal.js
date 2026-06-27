import { useEffect } from "react";

export default function Reveal() {
  useEffect(() => {

    const hamburger = document.getElementById('hamburger');

    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      {
        threshold: 0.12,
      }
    );

    revealElements.forEach(el => revealObserver.observe(el));

    return () => revealObserver.disconnect();
  }, []);

}