import { Container, Icon, SectionHeading } from "@/module/lib/components/shared";
import { stats } from "@/module/lib/utility/data/site";
import "./Statistics.css";

export default function Statistics() {
  const hasPlaceholders = stats.some((stat) => stat.placeholder);
  return (
    <section id="impact" aria-labelledby="impact-title" className="sc-stats">
      <Container>
        <SectionHeading
          id="impact-title"
          title="Designing Better Experience"
          description={
            hasPlaceholders
              ? "Placeholder figures: replace them with verified numbers before publishing."
              : "Technology work measured by what it delivers."
          }
        />
        <ul className="sc-stats__list">
          {stats.map((stat) => (
            <li key={stat.label} className="sc-stat">
              <span className="sc-stat__icon">
                <Icon name={stat.icon} className="sc-icon-lg" />
              </span>
              <span className="sc-stat__value">{stat.value}</span>
              <span className="sc-stat__label">{stat.label}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
