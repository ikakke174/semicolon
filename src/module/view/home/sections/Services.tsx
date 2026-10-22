import { Container, Icon } from "@/module/lib/components/shared";
import { services } from "@/module/lib/utility/data/site";
import "./Services.css";

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="sc-services">
      <h2 id="services-title" className="sc-sr-only">
        Services
      </h2>
      <Container>
        <ul className="sc-services__list">
          {services.map((service) => (
            <li
              key={service.title}
              className={`sc-service${service.featured ? " sc-service--featured" : ""}`}
            >
              <span className="sc-service__icon">
                <Icon name={service.icon} className="sc-icon-lg" />
              </span>
              <h3 className="sc-service__title">{service.title}</h3>
              <p className="sc-service__text">{service.description}</p>
              <a
                href="#contact"
                aria-label={`Learn more about ${service.title}`}
                className="sc-service__link"
              >
                Learn more
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
