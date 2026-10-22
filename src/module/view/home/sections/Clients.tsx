import Image from "next/image";
import { Container } from "@/module/lib/components/shared";
import { clients } from "@/module/lib/utility/data/site";
import "./Clients.css";

export default function Clients() {
  const hasPlaceholders = clients.some((client) => !client.logo);
  return (
    <section id="clients" aria-labelledby="clients-title" className="sc-clients">
      <Container>
        <h2 id="clients-title" className="sc-sr-only">
          Clients
        </h2>
        {hasPlaceholders && (
          <p className="sc-clients__note">
            Placeholder slots: add authorised client logos in{" "}
            <code>src/module/lib/utility/data/site.ts</code>.
          </p>
        )}
        <ul className="sc-clients__list">
          {clients.map((client) => (
            <li key={client.name} className="sc-client">
              {client.logo ? (
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={160}
                  height={40}
                  className="sc-client__logo"
                />
              ) : (
                <span className="sc-client__placeholder">{client.name}</span>
              )}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
