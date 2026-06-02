import { Link } from 'react-router-dom';

interface ServiceCTAProps {
  title: string;
  highlight: string;
  backgroundImage: string;
}

export default function ServiceCTA({ title, highlight, backgroundImage }: ServiceCTAProps) {
  return (
    <section className="bg-[var(--warm-white)] px-16 pt-16 pb-0 max-md:px-6 max-md:pt-12 max-md:pb-0">
      {/* Card container com overlap */}
      <div className="relative max-w-[1100px] mx-auto rounded-[20px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.12)] -mb-24 z-20 max-md:-mb-20">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
        <div className="absolute inset-0 bg-[rgba(44,24,16,0.75)]"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-12 py-12 max-md:px-8 max-md:py-10">
          <h3 className="font-[var(--font-display)] text-[clamp(1.6rem,2.5vw,2.2rem)] font-light text-[var(--warm-white)] mb-3">
            {title} <em className="italic text-[var(--rose-sand)]">{highlight}</em>
          </h3>
          <p className="text-[0.85rem] text-[rgba(253,249,246,0.7)] mb-6 leading-[1.7]">
            Entre em contacto para mais informações ou marcação!
          </p>
          <Link
            to="/#contacto"
            className="inline-block font-[var(--font-body)] text-[0.7rem] font-medium tracking-[0.16em] uppercase text-[var(--espresso)] bg-[var(--rose-sand)] border-none px-8 py-3 cursor-pointer hover:bg-[var(--champagne)] transition-all rounded-full no-underline"
          >
            Marcar Consulta
          </Link>
        </div>
      </div>
    </section>
  );
}
