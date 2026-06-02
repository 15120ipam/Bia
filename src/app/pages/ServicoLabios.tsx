import { Check, Droplet, ArrowLeft } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ServiceCTA from '../components/ServiceCTA';
import labiosImg from '../../imports/E50178E0-8E21-4479-A79E-65B408FCF04F.jpg';

export default function ServicoLabios() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[60vh] pt-20 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${labiosImg})` }}
        />
        <div className="absolute inset-0 bg-[rgba(44,24,16,0.6)]"></div>

        <div className="relative z-10 text-center px-8 max-w-[700px]">
          <p className="text-[0.7rem] tracking-[0.24em] uppercase text-[var(--rose-sand)] mb-4 font-medium">
            Tratamentos Labiais
          </p>
          <h1 className="font-[var(--font-display)] text-[clamp(3rem,5vw,4.5rem)] font-light leading-[1.1] text-[var(--warm-white)] mb-6">
            Lábios
          </h1>
          <p className="text-[0.95rem] text-[rgba(253,249,246,0.75)] leading-[1.8] max-w-[500px] mx-auto">
            Micropigmentação labial com preços acessíveis para lábios perfeitos e naturais
          </p>
        </div>

        <Link
          to="/servicos"
          className={`fixed top-24 left-16 z-50 flex items-center gap-2 text-[0.7rem] tracking-[0.15em] uppercase transition-colors max-md:left-6 ${
            isScrolled
              ? 'text-[var(--espresso)] hover:text-[var(--terra)]'
              : 'text-[var(--warm-white)] hover:text-[var(--rose-sand)]'
          }`}
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar
        </Link>
      </section>

      {/* HidraLips */}
      <section className="bg-[var(--warm-white)] px-16 py-20 max-md:px-6 max-md:py-14">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <Droplet className="w-8 h-8 text-[var(--terra)] mx-auto mb-4" />
            <h2 className="font-[var(--font-display)] text-[clamp(2.5rem,4vw,3.5rem)] font-light text-[var(--espresso)] mb-4">
              HidraLips: <em className="italic text-[var(--terra)]">Lábios Hidratados e Radiantes</em>
            </h2>
            <p className="text-[0.95rem] text-[var(--text-mid)] leading-[1.8] max-w-[700px] mx-auto">
              Diga adeus aos lábios secos e sem vida com este tratamento que nutre, hidrata e realça a sua beleza natural.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8 mb-16 max-md:grid-cols-1">
            <div className="bg-[var(--cream)] p-8">
              <h3 className="font-[var(--font-display)] text-[1.4rem] font-normal text-[var(--espresso)] mb-4">
                O que é?
              </h3>
              <p className="text-[0.85rem] text-[var(--text-mid)] leading-[1.7] mb-4">
                Um tratamento não invasivo para os lábios:
              </p>
              <ul className="space-y-3 text-[0.85rem] text-[var(--text-mid)] leading-[1.7]">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[var(--terra)] mt-1 flex-shrink-0" />
                  <span>Hidrata profundamente e suaviza os lábios</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[var(--terra)] mt-1 flex-shrink-0" />
                  <span>Melhora a textura e a aparência natural</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[var(--terra)] mt-1 flex-shrink-0" />
                  <span>Realça a cor natural dos lábios com um toque saudável</span>
                </li>
              </ul>
            </div>

            <div className="bg-[var(--cream)] p-8">
              <h3 className="font-[var(--font-display)] text-[1.4rem] font-normal text-[var(--espresso)] mb-4">
                Como funciona?
              </h3>
              <div className="space-y-4 text-[0.85rem] text-[var(--text-mid)] leading-[1.7]">
                <div>
                  <strong className="text-[var(--espresso)]">1. Esfoliação suave:</strong> Remove células mortas, deixando os lábios mais macios.
                </div>
                <div>
                  <strong className="text-[var(--espresso)]">2. Aplicação de ativos hidratantes:</strong> Nutrição intensa com ingredientes poderosos.
                </div>
                <div>
                  <strong className="text-[var(--espresso)]">3. Realce da cor natural:</strong> Um toque subtil para lábios com aspeto saudável e radiante.
                </div>
              </div>
            </div>

            <div className="bg-[var(--cream)] p-8">
              <h3 className="font-[var(--font-display)] text-[1.4rem] font-normal text-[var(--espresso)] mb-4">
                Benefícios
              </h3>
              <ul className="space-y-3 text-[0.85rem] text-[var(--text-mid)] leading-[1.7]">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[var(--terra)] mt-1 flex-shrink-0" />
                  <span>Acaba com o ressecamento e fissuras</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[var(--terra)] mt-1 flex-shrink-0" />
                  <span>Lábios suaves ao toque</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[var(--terra)] mt-1 flex-shrink-0" />
                  <span>Tratamento relaxante e seguro</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Micropigmentação Labial */}
      <section className="bg-[var(--cream)] px-16 py-20 max-md:px-6 max-md:py-14">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-[var(--font-display)] text-[clamp(2.5rem,4vw,3.5rem)] font-light text-[var(--espresso)] mb-4">
              Micropigmentação Labial: <em className="italic text-[var(--terra)]">Realce a Beleza dos Seus Lábios</em>
            </h2>
            <p className="text-[0.95rem] text-[var(--text-mid)] leading-[1.8] max-w-[700px] mx-auto">
              Lábios com cor, definição e volume natural todos os dias, sem esforço.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8 mb-16 max-md:grid-cols-1">
            <div className="bg-[var(--warm-white)] p-8">
              <h3 className="font-[var(--font-display)] text-[1.4rem] font-normal text-[var(--espresso)] mb-4">
                O que é?
              </h3>
              <p className="text-[0.85rem] text-[var(--text-mid)] leading-[1.7] mb-4">
                Técnica de pigmentação semi-permanente:
              </p>
              <ul className="space-y-3 text-[0.85rem] text-[var(--text-mid)] leading-[1.7]">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[var(--terra)] mt-1 flex-shrink-0" />
                  <span>Define o contorno dos lábios</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[var(--terra)] mt-1 flex-shrink-0" />
                  <span>Proporciona uma cor suave e natural</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[var(--terra)] mt-1 flex-shrink-0" />
                  <span>Realça o volume e a simetria dos lábios</span>
                </li>
              </ul>
            </div>

            <div className="bg-[var(--warm-white)] p-8">
              <h3 className="font-[var(--font-display)] text-[1.4rem] font-normal text-[var(--espresso)] mb-4">
                Como funciona?
              </h3>
              <div className="space-y-4 text-[0.85rem] text-[var(--text-mid)] leading-[1.7]">
                <div>
                  <strong className="text-[var(--espresso)]">1. Análise personalizada:</strong> Escolha da cor ideal para o seu tom de pele e objetivo.
                </div>
                <div>
                  <strong className="text-[var(--espresso)]">2. Aplicação precisa:</strong> Depósito de pigmento na camada superficial da pele.
                </div>
                <div>
                  <strong className="text-[var(--espresso)]">3. Resultado natural:</strong> Cor e contorno harmoniosos que valorizam os seus lábios.
                </div>
              </div>
            </div>

            <div className="bg-[var(--warm-white)] p-8">
              <h3 className="font-[var(--font-display)] text-[1.4rem] font-normal text-[var(--espresso)] mb-4">
                Benefícios
              </h3>
              <ul className="space-y-3 text-[0.85rem] text-[var(--text-mid)] leading-[1.7]">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[var(--terra)] mt-1 flex-shrink-0" />
                  <span>Lábios definidos e hidratados</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[var(--terra)] mt-1 flex-shrink-0" />
                  <span>Resultados que podem durar até 2 anos</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[var(--terra)] mt-1 flex-shrink-0" />
                  <span>Sem necessidade de batom diário</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[var(--terra)] mt-1 flex-shrink-0" />
                  <span>Corrige assimetrias</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <ServiceCTA
        title="Diga adeus aos lábios"
        highlight="pálidos e sem definição!"
        backgroundImage="https://images.unsplash.com/photo-1638225304129-eae5c3604d9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxsaXBzJTIwYmVhdXR5JTIwdHJlYXRtZW50JTIwbWFrZXVwfGVufDF8fHx8MTc3ODMzNTA0NXww&ixlib=rb-4.1.0&q=80&w=1080"
      />
    </div>
  );
}