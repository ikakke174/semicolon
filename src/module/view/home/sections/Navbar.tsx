"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Container, Icon } from "@/module/lib/components/shared";
import { navLinks, site } from "@/module/lib/utility/data/site";
import "./Navbar.css";

const sectionIds = navLinks.map((link) => link.href.slice(1));

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Highlight the link for the section currently in view.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);

  // Escape closes the mobile menu and returns focus to the toggle.
  useEffect(() => {
    if (!open) return undefined;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const linkClass = (href: string, base: string) =>
    `${base} ${active === href.slice(1) ? "sc-nav__link--active" : ""}`.trim();

  return (
    <header className="sc-header">
      <Container className="sc-header__bar">
        <a href="#home" className="sc-brand" aria-label={`${site.name} home`}>
          <Image
            src="/images/logo-icon.png"
            alt=""
            width={372}
            height={386}
            quality={95}
            priority
            className="sc-brand__icon"
          />
          <span className="sc-brand__name">{site.name}</span>
        </a>

        <nav aria-label="Main" className="sc-nav">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-current={active === link.href.slice(1) ? "page" : undefined}
              className={linkClass(link.href, "sc-nav__link")}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          ref={buttonRef}
          type="button"
          className="sc-menu-toggle"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <Icon name={open ? "close" : "menu"} />
        </button>
      </Container>

      <nav id="mobile-menu" aria-label="Mobile" hidden={!open} className="sc-mobile-nav">
        <Container className="sc-mobile-nav__list">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              aria-current={active === link.href.slice(1) ? "page" : undefined}
              className={linkClass(link.href, "sc-nav__link sc-mobile-nav__link")}
            >
              {link.label}
            </a>
          ))}
        </Container>
      </nav>
    </header>
  );
}
