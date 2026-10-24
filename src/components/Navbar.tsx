import { useEffect, useRef, useState } from "react";
import { Sun, Moon, Menu, X, ArrowDown } from "lucide-react";
import { profile } from "../data/portfolio";
const links = [
  "About",
  "Experience",
  "Projects",
  "Skills",
  "Education",
  "Contact",
];
export default function Navbar() {
  const [dark, setDark] = useState(
    document.documentElement.dataset.theme !== "light",
  );
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const menuButton = useRef<HTMLButtonElement>(null);
  const nav = useRef<HTMLElement>(null);
  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", dark ? "#171c29" : "#f6f2ed");
    try {
      localStorage.setItem("portfolio-v2-theme", dark ? "dark" : "light");
    } catch {
      /* Theme remains usable without storage. */
    }
  }, [dark]);
  useEffect(() => {
    const update = () => {
      let current = "home";
      for (const name of links) {
        const el = document.getElementById(name.toLowerCase());
        if (el && el.getBoundingClientRect().top <= 180)
          current = name.toLowerCase();
      }
      setActive(current);
    };
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);
  useEffect(() => {
    if (!open) return;
    function close(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        menuButton.current?.focus();
      }
    }
    function outside(e: PointerEvent) {
      if (
        !nav.current?.contains(e.target as Node) &&
        !menuButton.current?.contains(e.target as Node)
      )
        setOpen(false);
    }
    function resize() {
      if (window.innerWidth >= 1100) setOpen(false);
    }
    window.addEventListener("keydown", close);
    window.addEventListener("pointerdown", outside);
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("keydown", close);
      window.removeEventListener("pointerdown", outside);
      window.removeEventListener("resize", resize);
    };
  }, [open]);
  return (
    <header className="site-header">
      <div className="nav-container">
        <a
          className="brand"
          href="#home"
          aria-label="Sai Saketh Nagavalli, home"
        >
          <span className="brand-name">
            Sai Saketh
            <br />
            Nagavalli
          </span>
        </a>
        <nav
          ref={nav}
          id="main-navigation"
          className={open ? "nav-links open" : "nav-links"}
          aria-label="Main navigation"
        >
          {links.map((name) => (
            <a
              key={name}
              href={"#" + name.toLowerCase()}
              aria-current={
                active === name.toLowerCase() ? "location" : undefined
              }
              onClick={() => {
                setOpen(false);
                document
                  .getElementById(name.toLowerCase())
                  ?.focus({ preventScroll: true });
              }}
            >
              {name}
            </a>
          ))}
        </nav>
        <div className="nav-actions">
          <button
            className="icon-button theme-toggle"
            onClick={() => setDark(!dark)}
            aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a className="nav-resume" href={profile.resume} download>
            Resume
            <ArrowDown size={14} />
          </a>
          <button
            ref={menuButton}
            className="icon-button menu-button"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            aria-controls="main-navigation"
          >
            {open ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </div>
    </header>
  );
}
