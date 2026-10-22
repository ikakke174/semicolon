import Image from "next/image";
import { Button, Container } from "@/module/lib/components/shared";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="home" aria-labelledby="hero-title" className="sc-hero">
      <Container className="sc-hero__content">
        <div className="sc-hero__inner">
          <h1 id="hero-title" className="sc-hero__title">
            IT Consulting &amp; Digital Solutions
          </h1>
          <p className="sc-hero__text">
            Semicolon Technologies helps businesses solve technology problems, from
            planning and software to cloud and infrastructure.
          </p>
          <div className="sc-hero__actions">
            <Button href="#contact">Book a Discovery Call</Button>
            <Button href="#contact" variant="outline">
              Contact Us
            </Button>
          </div>
        </div>
      </Container>

      <Image
        src="/images/hero.jpg"
        alt="Two colleagues, a man with glasses and a smiling woman, looking at a laptop together"
        width={1600}
        height={1504}
        quality={95}
        priority
        sizes="(min-width: 1024px) 56vw, 448px"
        className="sc-hero__image"
      />
    </section>
  );
}
