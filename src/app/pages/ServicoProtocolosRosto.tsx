import { Link } from 'react-router-dom';
import { Check, Sparkles, ArrowLeft } from 'lucide-react';
import { useState, useEffect } from 'react';
import ServiceCTA from '../components/ServiceCTA';
import FAQAccordion from '../components/FAQAccordion';

export default function ServicoProtocolosRosto() {
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
          style={{ backgroundImage: `url(https://images.unsplash.com/photo-1761718210089-ba3bb5ccb54f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBmYWNpYWwlMjB0cmVhdG1lbnQlMjBzb2Z0JTIwbWluaW1hbCUyMGNsZWFufGVufDF8fHx8MTc3NzI3OTI1MHww&ixlib=rb-4.1.0&q=80&w=1080)` }}
        />
        <div className="absolute inset-0 bg-[rgba(44,24,16,0.6)]"></div>

        <div className="relative z-10 text-center px-8 max-w-[700px]">
          <p className="text-[0.7rem] tracking-[0.24em] uppercase text-[var(--rose-sand)] mb-4 font-medium">
            Tratamento Facial
          </p>
          <h1 className="font-[var(--font-display)] text-[clamp(3rem,5vw,4.5rem)] font-light leading-[1.1] text-[var(--warm-white)] mb-6">
            Protocolos de Rosto
          </h1>
          <p className="text-[0.95rem] text-[rgba(253,249,246,0.75)] leading-[1.8] max-w-[500px] mx-auto">
            Limpeza de pele profunda e tratamentos faciais personalizados para cada tipo de pele
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

      {/* Limpeza de Pele */}
      <section className="bg-[var(--warm-white)] px-16 py-20 max-md:px-6 max-md:py-14">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <Sparkles className="w-8 h-8 text-[var(--terra)] mx-auto mb-4" />
            <h2 className="font-[var(--font-display)] text-[clamp(2.5rem,4vw,3.5rem)] font-light text-[var(--espresso)] mb-4">
              Limpeza de Pele: <em className="italic text-[var(--terra)]">Pele Limpa e Radiante</em>
            </h2>
            <p className="text-[0.95rem] text-[var(--text-mid)] leading-[1.8] max-w-[700px] mx-auto">
              Um cuidado profundo para a sua pele que remove impurezas, hidrata e revitaliza.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8 mb-16 max-md:grid-cols-1">
            <div className="bg-[var(--cream)] p-8">
              <h3 className="font-[var(--font-display)] text-[1.4rem] font-normal text-[var(--espresso)] mb-4">
                O que é?
              </h3>
              <p className="text-[0.85rem] text-[var(--text-mid)] leading-[1.7] mb-4">
                Um cuidado profundo para a sua pele:
              </p>
              <ul className="space-y-3 text-[0.85rem] text-[var(--text-mid)] leading-[1.7]">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[var(--terra)] mt-1 flex-shrink-0" />
                  <span>Remove impurezas, células mortas e excesso de oleosidade</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[var(--terra)] mt-1 flex-shrink-0" />
                  <span>Desobstrui os poros e previne o aparecimento de acne</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[var(--terra)] mt-1 flex-shrink-0" />
                  <span>Hidrata e revitaliza, deixando a pele mais luminosa e saudável</span>
                </li>
              </ul>
            </div>

            <div className="bg-[var(--cream)] p-8">
              <h3 className="font-[var(--font-display)] text-[1.4rem] font-normal text-[var(--espresso)] mb-4">
                Como funciona?
              </h3>
              <div className="space-y-4 text-[0.85rem] text-[var(--text-mid)] leading-[1.7]">
                <div>
                  <strong className="text-[var(--espresso)]">1. Higienização profunda:</strong> Remoção de impurezas e preparação da pele.
                </div>
                <div>
                  <strong className="text-[var(--espresso)]">2. Esfoliação:</strong> Eliminação de células mortas para renovar a pele.
                </div>
                <div>
                  <strong className="text-[var(--espresso)]">3. Extração:</strong> Remoção segura de cravos e outras impurezas.
                </div>
                <div>
                  <strong className="text-[var(--espresso)]">4. Hidratação e nutrição:</strong> Aplicação de ativos para restaurar e proteger a pele.
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
                  <span>Pele mais limpa e saudável</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[var(--terra)] mt-1 flex-shrink-0" />
                  <span>Textura uniforme e suave</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[var(--terra)] mt-1 flex-shrink-0" />
                  <span>Previne acne e cravos</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[var(--terra)] mt-1 flex-shrink-0" />
                  <span>Devolve o viço e a luminosidade à pele</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Outros Protocolos */}
      <section className="bg-[var(--cream)] px-16 py-20 max-md:px-6 max-md:py-14">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-[var(--font-display)] text-[clamp(2.5rem,4vw,3.5rem)] font-light text-[var(--espresso)] mb-4">
              Protocolos <em className="italic text-[var(--terra)]">Personalizados</em>
            </h2>
            <p className="text-[0.95rem] text-[var(--text-mid)] leading-[1.8] max-w-[700px] mx-auto">
              Cada protocolo é adaptado especificamente ao seu tipo de pele e necessidades individuais.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 max-md:grid-cols-1">
            <div className="bg-[var(--warm-white)] p-10">
              <h3 className="font-[var(--font-display)] text-[1.6rem] font-normal text-[var(--espresso)] mb-4">
                Hidratação Profunda
              </h3>
              <p className="text-[0.85rem] text-[var(--text-mid)] leading-[1.7] mb-4">
                Tratamento intensivo para peles desidratadas e sensíveis.
              </p>
              <ul className="space-y-3 text-[0.85rem] text-[var(--text-mid)] leading-[1.7]">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[var(--terra)] mt-1 flex-shrink-0" />
                  <span>Restaura a barreira cutânea</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[var(--terra)] mt-1 flex-shrink-0" />
                  <span>Devolve luminosidade e viço</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[var(--terra)] mt-1 flex-shrink-0" />
                  <span>Suaviza linhas finas</span>
                </li>
              </ul>
            </div>

            <div className="bg-[var(--warm-white)] p-10">
              <h3 className="font-[var(--font-display)] text-[1.6rem] font-normal text-[var(--espresso)] mb-4">
                Rejuvenescimento
              </h3>
              <p className="text-[0.85rem] text-[var(--text-mid)] leading-[1.7] mb-4">
                Protocolo anti-idade para firmeza e vitalidade da pele.
              </p>
              <ul className="space-y-3 text-[0.85rem] text-[var(--text-mid)] leading-[1.7]">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[var(--terra)] mt-1 flex-shrink-0" />
                  <span>Estimula a produção de colagénio</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[var(--terra)] mt-1 flex-shrink-0" />
                  <span>Reduz linhas de expressão</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[var(--terra)] mt-1 flex-shrink-0" />
                  <span>Melhora a firmeza da pele</span>
                </li>
              </ul>
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
              Tudo o que precisa saber sobre limpeza de pele e protocolos faciais
            </p>
          </div>

          <FAQAccordion
            items={[
              {
                question: 'A pele fica vermelha depois?',
                answer: 'Pode existir uma ligeira vermelhidão temporária, dependendo da sensibilidade da pele.'
              },
              {
                question: 'Quantas sessões são recomendadas?',
                answer: 'A frequência varia conforme as necessidades da pele e os objetivos de cada cliente.'
              }
            ]}
          />
        </div>
      </section>

      {/* CTA Final */}
      <ServiceCTA
        title="A pele que sempre"
        highlight="desejou começa aqui!"
        backgroundImage="https://images.unsplash.com/photo-1761718210089-ba3bb5ccb54f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxmYWNpYWwlMjB0cmVhdG1lbnQlMjBzcGElMjBza2luY2FyZXxlbnwxfHx8fDE3NzgyOTE4NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
      />
    </div>
  );
}
