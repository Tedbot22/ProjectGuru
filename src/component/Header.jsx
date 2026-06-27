import { useEffect, useState } from "react";
import Logo from '../assets/pfp.jpg'

function Header() {

    const navPages = [{ title: "home", label: "Home" },
    { title: "about", label: "About Us" },
    { title: "services", label: "Services" },
    { title: "testimonial", label: "Testimonials" },
    { title: "contact", label: "Contact Us" }];
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState("home")
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    function handleActive(page) {
        setActive(page)
    }
    function Hamburger() {




    }

    return (
        <header className={`header ${scrolled ? "scrolled" : ""}`}>
            <nav className="navbar">
                <div className="nav-logo" href="#home" onClick={() => { handleActive("home"); document.getElementById("home")?.scrollIntoView({ behavior: "smooth" }) }}>
                    <img src={Logo} alt="logo" style={{ width: "25px", height: "25px", objectFit: "cover" }} />
                    <h3 className="logo-title"><a style={{ textDecoration: "none" }}>Project<span style={{ color: "#03A9F5" }}>Guru</span></a></h3>
                </div>
                <ul className="nav-list">{navPages.map((page, index) =>

                    <li key={index} >

                        <a className={`nav-list-links ${active == page.title ? "active" : ""}`} href={"#" + page.title} onClick={() => handleActive(page.title)}>{page.label}</a>

                    </li>)}

                </ul>
                <div style={{ display: "flex", gap: "1rem" }}>
                    <a href="#hire" className="cta-btn">Hire Us</a>
                    <button className={`hamburger ${isOpen ? "open" : ""}`} id="hamburger" onClick={() => setIsOpen(!isOpen)}>
                        <span></span><span></span><span></span>
                    </button>
                </div>
            </nav>
            <ul id="mobile-nav-list" className={`mobile-nav-list ${isOpen ? "open" : ""}`}>{navPages.map((page, index) =>
                <a key={index} className={`mobile-nav-list-links ${active == page.title ? "active" : ""}`} href={"#" + page.title} onClick={() => { { handleActive(page.title) }; setIsOpen(false); }}>{page.label}</a>)}
            </ul>
        </header>
    );
}
export default Header