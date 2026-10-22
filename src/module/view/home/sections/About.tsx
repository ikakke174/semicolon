import { Container, Icon, SectionHeading } from "@/module/lib/components/shared";
import { aboutPoints, site } from "@/module/lib/utility/data/site";
import AboutVideo from "./AboutVideo";
import "./About.css";

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="sc-about">
      <Container>
        <SectionHeading
          id="about-title"
          title="Who We Are"
          description={`${site.name} is an IT consulting and digital solutions company.`}
        />
        <div className="sc-about__grid">
          <AboutVideo />

          <div>
            <h3 className="sc-about__title">Technology advice built around your business</h3>
            <p className="sc-about__text">
              We work with you to understand the problem first, then plan and deliver the
              technology that solves it.
            </p>
            <ul className="sc-about__points">
              {aboutPoints.map((point) => (
                <li key={point.title} className="sc-point">
                  <span className="sc-point__icon">
                    <Icon name={point.icon} className="sc-icon-md" />
                  </span>
                  <div>
                    <h4 className="sc-point__title">{point.title}</h4>
                    <p className="sc-point__text">{point.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
