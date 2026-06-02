import ServiceCTA from '../components/ServiceCTA';
import labiosImg from '../../imports/E50178E0-8E21-4479-A79E-65B408FCF04F.jpg';

export default function Ebooks() {
  const tiposDePelePdf = new URL('../../imports/Tipos_de_Pele_ana.pdf', import.meta.url).href;
  const micropigPdf = new URL('../../imports/Micropigmenta__o_Perfeita.pdf', import.meta.url).href;

  return (
    <div>
      {/* Hero Section */}
      <section className="h-[50vh] relative pt-20 flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(https://images.unsplash.com/photo-1549298222-1c31e8915347?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2luY2FyZSUyMGJlYXV0eSUyMGJvb2slMjBtaW5pbWFsJTIwZWxlZ2FudCUyMGxpZmVzdHlsZSUyMGVkaXRvcmlhbHxlbnwxfHx8fDE3Nzg0NDc0MzR8MA&ixlib=rb-4.1.0&q=80&w=1080)` }}
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[rgba(44,24,16,0.6)]"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-8 max-w-[700px]">
          <p className="text-[0.65rem] tracking-[0.24em] uppercase text-[var(--rose-sand)] mb-4 font-medium">
            Recursos Gratuitos
          </p>

          <h1 className="font-[var(--font-display)] text-[clamp(2.5rem,5vw,4rem)] font-light leading-[1.15] text-[var(--warm-white)] mb-6">
            Guias <em className="italic text-[var(--rose-sand)]">Exclusivos</em> de Beleza
          </h1>

          <p className="text-[0.95rem] text-[rgba(253,249,246,0.85)] leading-[1.7] max-w-[550px] mx-auto">
            Descarregue os nossos ebooks gratuitos com dicas profissionais de cuidados faciais e micropigmentação.
          </p>
        </div>
      </section>

      {/* Ebooks Grid */}
      <section className="bg-[var(--cream)] px-16 py-20 max-md:px-6 max-md:py-14">
        <div className="max-w-[1200px] mx-auto grid grid-cols-3 gap-8 max-md:grid-cols-1">
          {[
            {
              title: 'Guia Completo de Microblading',
              description: 'Tudo o que precisa saber sobre microblading: preparação, procedimento e cuidados pós-tratamento.',
              category: 'Micropigmentação',
              image: 'https://images.unsplash.com/photo-1698335107935-e2c8287c4947?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxleWVicm93JTIwbWljcm9ibGFkaW5nJTIwdHJlYXRtZW50JTIwd29tYW58ZW58MXx8fHwxNzc3MjgxMTQyfDA&ixlib=rb-4.1.0&q=80&w=1080',
              pdf: micropigPdf
            },
            {
              title: 'Tipos de Pele',
              description: 'Descubra qual é o seu tipo de pele e aprenda a criar a rotina de cuidados ideal para si.',
              category: 'Skincare',
              image: 'https://images.unsplash.com/photo-1631730486572-226d1f595b68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2luY2FyZSUyMHJvdXRpbmUlMjBmYWNpYWwlMjBjbGVhbnNpbmclMjBwcm9kdWN0c3xlbnwxfHx8fDE3NzcyODExNDd8MA&ixlib=rb-4.1.0&q=80&w=1080',
              pdf: tiposDePelePdf
            },
            {
              title: 'Micropigmentação Labial',
              description: 'Conheça tudo sobre a micropigmentação labial: técnicas, cuidados e como obter lábios naturalmente perfeitos.',
              category: 'Micropigmentação',
              image: labiosImg,
              pdf: null
            }
          ].map((ebook, idx) => (
            <div key={idx} className="bg-[var(--warm-white)] flex flex-col overflow-hidden rounded-[12px] group hover:shadow-[0_12px_40px_rgba(44,24,16,0.1)] transition-all">
              <div className="h-[280px] relative overflow-hidden">
                <img
                  src={ebook.image}
                  alt={ebook.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(44,24,16,0.4)] to-transparent"></div>
                <div className="absolute top-4 right-4 bg-[var(--espresso)] text-[var(--warm-white)] px-3 py-1.5 text-[0.6rem] tracking-[0.15em] uppercase rounded-full">
                  {ebook.pdf ? 'Grátis' : 'Em Breve'}
                </div>
              </div>

              <div className="p-8 flex flex-col flex-1">
                <div className="text-[0.6rem] tracking-[0.2em] uppercase text-[var(--terra)] mb-2 font-medium">
                  {ebook.category}
                </div>

                <h3 className="font-[var(--font-display)] text-[1.5rem] font-normal leading-[1.25] text-[var(--espresso)] mb-3">
                  {ebook.title}
                </h3>

                <p className="text-[0.85rem] text-[var(--text-mid)] leading-[1.7] mb-6 flex-1">
                  {ebook.description}
                </p>

                {ebook.pdf ? (
                  <div className="flex gap-3">
                    <a
                      href={ebook.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center font-[var(--font-body)] text-[0.7rem] font-medium tracking-[0.18em] uppercase text-[var(--espresso)] bg-transparent border border-[var(--espresso)] px-4 py-3 hover:bg-[var(--espresso)] hover:text-[var(--warm-white)] transition-colors rounded-full no-underline"
                    >
                      Visualizar
                    </a>
                    <a
                      href={ebook.pdf}
                      download
                      className="flex-1 text-center font-[var(--font-body)] text-[0.7rem] font-medium tracking-[0.18em] uppercase text-[var(--warm-white)] bg-[var(--espresso)] border border-[var(--espresso)] px-4 py-3 hover:bg-[var(--mocha)] transition-colors rounded-full no-underline"
                    >
                      Descarregar
                    </a>
                  </div>
                ) : (
                  <button disabled className="w-full font-[var(--font-body)] text-[0.7rem] font-medium tracking-[0.18em] uppercase text-[var(--text-light)] bg-transparent border border-[rgba(0,0,0,0.12)] px-6 py-3 cursor-not-allowed rounded-full opacity-60">
                    Em Breve
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <ServiceCTA
        title="Quer saber mais sobre os"
        highlight="nossos serviços?"
        backgroundImage="https://images.unsplash.com/photo-1549298222-1c31e8915347?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2luY2FyZSUyMGJlYXV0eSUyMGJvb2slMjBtaW5pbWFsJTIwZWxlZ2FudCUyMGxpZmVzdHlsZSUyMGVkaXRvcmlhbHxlbnwxfHx8fDE3Nzg0NDc0MzR8MA&ixlib=rb-4.1.0&q=80&w=1080"
      />
    </div>
  );
}