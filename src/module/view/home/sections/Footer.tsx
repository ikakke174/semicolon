import Image from "next/image";
import { Button, Container } from "@/module/lib/components/shared";
import { navLinks, services, site } from "@/module/lib/utility/data/site";
import "./Footer.css";

export default function Footer() {
  const { email, phone, address } = site.contact;
  const contactItems = [
    { label: "Phone", value: phone, href: phone ? `tel:${phone.replace(/[^\d+]/g, "")}` : null },
    { label: "Address", value: address, href: null },
    { label: "Email", value: email, href: email ? `mailto:${email}` : null },
  ].filter((item) => item.value);

  return (
    <footer>
      <div className="sc-cta">
        <Container className="sc-cta__inner">
          <div>
            <h2 className="sc-cta__title">Ready to talk about your technology goals?</h2>
            <p className="sc-cta__text">Book a discovery call and tell us what you need.</p>
          </div>
          <Button href="#contact">Contact Us</Button>
        </Container>
      </div>

      <div className="sc-footer">
        <Container className="sc-footer__grid">
          <div>
            <a href="#home" aria-label={`${site.name} home`}>
              <Image
                src="/images/logo.png"
                alt={`${site.name} logo`}
                width={593}
                height={553}
                quality={95}
                className="sc-footer__logo"
              />
            </a>
            <p className="sc-footer__about">{site.description}</p>
          </div>

          <nav aria-label="Quick links">
            <h2 className="sc-footer__heading">Quick links</h2>
            <ul className="sc-footer__list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="sc-footer__link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Services">
            <h2 className="sc-footer__heading">Services</h2>
            <ul className="sc-footer__list">
              {services.map((service) => (
                <li key={service.title}>
                  <a href="#services" className="sc-footer__link">
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="sc-footer__heading">Get in touch</h2>
            <ul className="sc-footer__list">
              {contactItems.length === 0 && <li>Contact details coming soon.</li>}
              {contactItems.map((item) => (
                <li key={item.label}>
                  {item.href ? (
                    <a href={item.href} className="sc-footer__link">
                      {item.value}
                    </a>
                  ) : (
                    item.value
                  )}
                </li>
              ))}
              <li>
                <a href="#contact" className="sc-footer__link">
                  Send an enquiry
                </a>
              </li>
            </ul>
          </div>
        </Container>

        <div className="sc-footer__bottom">
          <Container className="sc-footer__bottom-inner">
            <p>
              &copy; {site.copyrightYear} {site.name}. All rights reserved.
            </p>
            {site.socials.length > 0 && (
              <ul className="sc-footer__socials">
                {site.socials.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="sc-footer__link"
                    >
                      {social.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </Container>
        </div>
      </div>
    </footer>
  );
}
