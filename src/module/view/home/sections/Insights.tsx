import Image from "next/image";
import { Container, SectionHeading } from "@/module/lib/components/shared";
import { insights } from "@/module/lib/utility/data/site";
import "./Insights.css";

export default function Insights() {
  return (
    <section id="insights" aria-labelledby="insights-title" className="sc-insights">
      <Container>
        <SectionHeading
          id="insights-title"
          title="Practice Advice"
          description="Sample topics on technology and business. Replace with published articles."
        />
        <ul className="sc-insights__list">
          {insights.map((item) => (
            <li key={item.title}>
              <article className="sc-insight">
                <div className="sc-insight__body">
                  <p className="sc-insight__badge">Sample content</p>
                  <h3 className="sc-insight__title">{item.title}</h3>
                  <p className="sc-insight__text">{item.text}</p>
                </div>
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={908}
                  height={536}
                  quality={95}
                  sizes="(min-width: 1024px) 270px, (min-width: 640px) 45vw, 100vw"
                  className="sc-insight__image"
                />
              </article>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
