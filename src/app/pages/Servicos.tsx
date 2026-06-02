import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ServiceCTA from '../components/ServiceCTA';
import labiosImg from '../../imports/E50178E0-8E21-4479-A79E-65B408FCF04F.jpg';

export default function Servicos() {
  const servicos = [
    {
      title: 'Micropigmentação de Sobrancelhas',
      description: 'Sobrancelhas perfeitas e naturais com técnicas avançadas de micropigmentação',
      image: 'https://images.unsplash.com/photo-1698335107935-e2c8287c4947?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleWVicm93JTIwbWljcm9ibGFkaW5nJTIwYmVhdXR5JTIwdHJlYXRtZW50fGVufDF8fHx8MTc3ODMzNTA0MHww&ixlib=rb-4.1.0&q=80&w=1080',
      link: '/servicos/sobrancelhas',
      tags: ['Microblading', 'Design de Sobrancelhas', 'Recuperação']
    },
    {
      title: 'Micropigmentação Labial',
      description: 'Lábios com cor e definição natural todos os dias',
      image: labiosImg,
      link: '/servicos/labios',
      tags: ['HidraLips', 'Definição Labial', 'Contorno']
    },
    {
      title: 'Protocolos de Rosto',
      description: 'Limpeza de pele profunda e tratamentos faciais personalizados',
      image: 'https://images.unsplash.com/photo-1761718210089-ba3bb5ccb54f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBmYWNpYWwlMjB0cmVhdG1lbnQlMjBzb2Z0JTIwbWluaW1hbCUyMGNsZWFufGVufDF8fHx8MTc3NzI3OTI1MHww&ixlib=rb-4.1.0&q=80&w=1080',
      link: '/servicos/protocolos-rosto',
      tags: ['Limpeza de Pele', 'Hidratação', 'Rejuvenescimento']
    },
    {
      title: 'Lifting de Pestanas',
      description: 'Olhar aberto e expressivo com pestanas naturalmente curvadas',
      image: 'https://images.unsplash.com/photo-1639629509821-c54cdd984227?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxleWVsYXNoJTIwZXh0ZW5zaW9ucyUyMGxhc2hlcyUyMGJlYXV0eXxlbnwxfHx8fDE3NzgzMzUwNTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      link: '/servicos/lifting-pestanas',
      tags: ['Lash Lift', 'Curvatura Natural', 'Olhar Intenso']
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="h-[50vh] relative pt-20 flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(https://images.unsplash.com/photo-1760904850151-cb1d6a6547b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWNyb3BpZ21lbnRhdGlvbiUyMGZhY2lhbCUyMGFlc3RoZXRpY3MlMjBwcmVtaXVtJTIwYmVhdXR5JTIwdHJlYXRtZW50JTIwZWxlZ2FudHxlbnwxfHx8fDE3Nzg0NDk0MDd8MA&ixlib=rb-4.1.0&q=80&w=1080)` }}
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[rgba(44,24,16,0.6)]"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-8 max-w-[700px]">
          <p className="text-[0.65rem] tracking-[0.24em] uppercase text-[var(--rose-sand)] mb-4 font-medium">
            Tratamentos Especializados
          </p>

          <h1 className="font-[var(--font-display)] text-[clamp(2.5rem,5vw,4rem)] font-light leading-[1.15] text-[var(--warm-white)] mb-6">
            Os Nossos <em className="italic text-[var(--rose-sand)]">Serviços</em>
          </h1>

          <p className="text-[0.95rem] text-[rgba(253,249,246,0.85)] leading-[1.7] max-w-[550px] mx-auto">
            Cada tratamento é pensado para realçar a sua beleza natural com técnicas avançadas e cuidado personalizado.
          </p>
        </div>
      </section>

      {/* Serviços Grid */}
      <section className="bg-[var(--cream)] px-16 py-20 max-md:px-6 max-md:py-14">
        <div className="max-w-[1200px] mx-auto grid grid-cols-2 gap-10 max-md:grid-cols-1">
          {servicos.map((servico, index) => (
            <Link
              key={index}
              to={servico.link}
              className="group bg-[var(--warm-white)] rounded-[16px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)] transition-all duration-300 no-underline"
            >
              <div className="aspect-[4/3] bg-cover bg-center relative overflow-hidden" style={{ backgroundImage: `url(${servico.image})` }}>
                <div className="absolute inset-0 bg-[rgba(44,24,16,0.25)] group-hover:bg-[rgba(44,24,16,0.4)] transition-colors"></div>
              </div>

              <div className="p-10">
                <h3 className="font-[var(--font-display)] text-[1.6rem] font-light text-[var(--espresso)] mb-3 group-hover:text-[var(--terra)] transition-colors">
                  {servico.title}
                </h3>

                <p className="text-[0.9rem] text-[var(--text-mid)] leading-[1.7] mb-5">
                  {servico.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {servico.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[0.7rem] tracking-[0.08em] uppercase px-3 py-1.5 bg-[var(--cream)] text-[var(--text-mid)] rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-[0.75rem] tracking-[0.14em] uppercase text-[var(--terra)] font-medium group-hover:gap-3 transition-all">
                  Saber Mais
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Final */}
      <ServiceCTA
        title="Pronta para realçar a sua"
        highlight="beleza natural?"
        backgroundImage="https://images.unsplash.com/photo-1650158638285-d137b8428582?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWNyb3BpZ21lbnRhdGlvbiUyMGZhY2lhbCUyMGFlc3RoZXRpYyUyMHByZW1pdW0lMjBjbGVhbiUyMHN0dWRpb3xlbnwxfHx8fDE3Nzg0NDc0MzR8MA&ixlib=rb-4.1.0&q=80&w=1080"
      />
    </div>
  );
}