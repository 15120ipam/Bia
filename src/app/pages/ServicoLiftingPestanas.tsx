import { Link } from 'react-router-dom';
import { Check, Clock, Heart, Shield, ArrowLeft } from 'lucide-react';
import { useState, useEffect } from 'react';
import ServiceCTA from '../components/ServiceCTA';
import FAQAccordion from '../components/FAQAccordion';
import liftingImg from '../../imports/WhatsApp_Image_2026-05-09_at_15.15.56.jpeg';

export default function ServicoLiftingPestanas() {
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
      <section className="relative h-[60vh] pt-20 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(https://images.unsplash.com/photo-1590548783703-14a5918802cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxtaWNyb2JsYWRpbmclMjBleWVicm93cyUyMGFlc3RoZXRpYyUyMG1pbmltYWx8ZW58MXx8fHwxNzc3Mjc5MjQ0fDA&ixlib=rb-4.1.0&q=80&w=1080)` }}
        />
        <div className="absolute inset-0 bg-[rgba(44,24,16,0.6)]"></div>

        <div className="relative z-10 text-center px-8 max-w-[700px]">
          <p className="text-[0.7rem] tracking-[0.24em] uppercase text-[var(--rose-sand)] mb-4 font-medium">
            Tratamento de Pestanas
          </p>
          <h1 className="font-[var(--font-display)] text-[clamp(3rem,5vw,4.5rem)] font-light leading-[1.1] text-[var(--warm-white)] mb-6">
            Lifting de Pestanas
          </h1>
          <p className="text-[0.95rem] text-[rgba(253,249,246,0.75)] leading-[1.8] max-w-[500px] mx-auto">
            Curvatura natural e duradoura para um olhar mais expressivo
          </p>
        </div>

        <Link to="/servicos" className={`fixed top-24 left-16 z-50 flex items-center gap-2 text-[0.7rem] tracking-[0.15em] uppercase transition-colors max-md:left-6 ${
            isScrolled
              ? 'text-[var(--espresso)] hover:text-[var(--terra)]'
              : 'text-[var(--warm-white)] hover:text-[var(--rose-sand)]'
          }`}>
          <ArrowLeft className="w-4 h-4" />
          Voltar
        </Link>
      </section>

      <section className="bg-[var(--warm-white)] px-16 py-20 max-md:px-6 max-md:py-14">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-2 gap-16 items-start mb-20 max-md:grid-cols-1">
            <div>
              <div className="flex items-center gap-3 text-[0.65rem] tracking-[0.26em] uppercase text-[var(--terra)] font-medium mb-4">
                <div className="w-7 h-[0.5px] bg-[var(--terra)]"></div>
                O Serviço
              </div>

              <h2 className="font-[var(--font-display)] text-[clamp(2.2rem,3.5vw,3rem)] font-light leading-[1.15] text-[var(--espresso)] mb-6">
                Pestanas <em className="italic text-[var(--terra)]">curvadas</em> naturalmente
              </h2>

              <p className="text-[0.9rem] text-[var(--text-mid)] leading-[1.9] mb-6">
                O lifting de pestanas é um tratamento semi-permanente que curva e alonga as suas pestanas naturais, criando um efeito de pestanas levantadas sem necessidade de extensões ou máscara de pestanas diária.
              </p>

              <p className="text-[0.9rem] text-[var(--text-mid)] leading-[1.9] mb-8">
                Ideal para quem tem pestanas direitas ou caídas, este tratamento proporciona uma curvatura natural e duradoura, abrindo o olhar e realçando a beleza natural dos seus olhos.
              </p>

              <Link to="/#contacto" className="inline-block font-[var(--font-body)] text-[0.7rem] font-medium tracking-[0.18em] uppercase text-[var(--warm-white)] bg-[var(--espresso)] border-none px-9 py-4 cursor-pointer hover:bg-[var(--mocha)] transition-all">
                Agendar Consulta
              </Link>
            </div>

            <div className="aspect-[4/5] bg-cover bg-center overflow-hidden">
              <img
                src={liftingImg}
                alt="Lifting de Pestanas - Antes e Depois"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="bg-[var(--cream)] px-12 py-16 mb-20">
            <h3 className="font-[var(--font-display)] text-[clamp(1.8rem,2.5vw,2.5rem)] font-light text-[var(--espresso)] mb-10 text-center">
              Benefícios do <em className="italic text-[var(--terra)]">Lifting de Pestanas</em>
            </h3>

            <div className="grid grid-cols-2 gap-8 max-md:grid-cols-1">
              {[
                { icon: <Heart className="w-5 h-5" />, title: 'Olhar Aberto', desc: 'Realça os olhos e cria um olhar mais expressivo' },
                { icon: <Clock className="w-5 h-5" />, title: 'Longa Duração', desc: 'Efeito que dura de 6 a 8 semanas' },
                { icon: <Shield className="w-5 h-5" />, title: 'Prático', desc: 'Sem necessidade de máscara de pestanas diária' },
                { icon: <Check className="w-5 h-5" />, title: 'Natural', desc: 'Valoriza as suas pestanas naturais sem extensões' }
              ].map((benefit, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-[var(--blush)] rounded-full flex items-center justify-center flex-shrink-0 text-[var(--terra)]">
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="text-[0.85rem] font-medium tracking-[0.08em] uppercase text-[var(--espresso)] mb-2">
                      {benefit.title}
                    </h4>
                    <p className="text-[0.85rem] text-[var(--text-mid)] leading-[1.7]">
                      {benefit.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[var(--cream)] px-16 py-24 max-md:px-6 max-md:py-16">
        <div className="max-w-[800px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-[var(--font-display)] text-[clamp(2.5rem,4vw,3.2rem)] font-light text-[var(--espresso)] mb-4">
              Perguntas <em className="italic text-[var(--terra)]">Frequentes</em>
            </h2>
            <p className="text-[0.9rem] text-[var(--text-mid)] leading-[1.85]">
              Tudo o que precisa saber sobre lifting de pestanas
            </p>
          </div>

          <FAQAccordion
            items={[
              {
                question: 'Quanto tempo dura?',
                answer: 'O lifting de pestanas dura normalmente entre 6 a 8 semanas.'
              },
              {
                question: 'Posso usar maquilhagem?',
                answer: 'Sim, após o período recomendado pós-tratamento.'
              },
              {
                question: 'O lifting estraga as pestanas?',
                answer: 'Não. Quando realizado corretamente, o lifting respeita a estrutura natural das pestanas.'
              }
            ]}
          />
        </div>
      </section>

      <section className="bg-[var(--warm-white)] px-16 pt-16 pb-0 max-md:px-6">
        <div className="max-w-[1200px] mx-auto">
          <ServiceCTA
            title="Olhar"
            highlight="irresistível"
            backgroundImage="https://images.unsplash.com/photo-1639629509821-c54cdd984227?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxleWVsYXNoJTIwZXh0ZW5zaW9ucyUyMGxhc2hlcyUyMGJlYXV0eXxlbnwxfHx8fDE3NzgzMzUwNTh8MA&ixlib=rb-4.1.0&q=80&w=1080"
          />
        </div>
      </section>
    </div>
  );
}