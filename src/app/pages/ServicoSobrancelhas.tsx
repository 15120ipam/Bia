import { Link } from 'react-router-dom';
import { Check, Sparkles, ArrowLeft } from 'lucide-react';
import { useState, useEffect } from 'react';
import ServiceCTA from '../components/ServiceCTA';
import FAQAccordion from '../components/FAQAccordion';

export default function ServicoSobrancelhas() {
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
          style={{ backgroundImage: `url(https://images.unsplash.com/photo-1698335107935-e2c8287c4947?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxtaWNyb2JsYWRpbmclMjBleWVicm93cyUyMGFlc3RoZXRpYyUyMG1pbmltYWx8ZW58MXx8fHwxNzc3Mjc5MjQ0fDA&ixlib=rb-4.1.0&q=80&w=1080)` }}
        />
        <div className="absolute inset-0 bg-[rgba(44,24,16,0.6)]"></div>

        <div className="relative z-10 text-center px-8 max-w-[700px]">
          <p className="text-[0.7rem] tracking-[0.24em] uppercase text-[var(--rose-sand)] mb-4 font-medium">
            Micropigmentação
          </p>
          <h1 className="font-[var(--font-display)] text-[clamp(3rem,5vw,4.5rem)] font-light leading-[1.1] text-[var(--warm-white)] mb-6">
            Sobrancelhas
          </h1>
          <p className="text-[0.95rem] text-[rgba(253,249,246,0.75)] leading-[1.8] max-w-[500px] mx-auto">
            Sobrancelhas microblading, design de sobrancelhas e técnicas avançadas para fazer sobrancelhas perfeitas e naturais
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

      {/* Nanoblading */}
      <section className="bg-[var(--warm-white)] px-16 py-20 max-md:px-6 max-md:py-14">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <Sparkles className="w-8 h-8 text-[var(--terra)] mx-auto mb-4" />
            <h2 className="font-[var(--font-display)] text-[clamp(2.5rem,4vw,3.5rem)] font-light text-[var(--espresso)] mb-4">
              Nanoblading: <em className="italic text-[var(--terra)]">O Futuro das Sobrancelhas Perfeitas</em>
            </h2>
            <p className="text-[0.95rem] text-[var(--text-mid)] leading-[1.8] max-w-[700px] mx-auto">
              Com fios ainda mais delicados e naturais, descubra o tratamento que realça a sua beleza de forma subtil e sofisticada.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8 mb-16 max-md:grid-cols-1">
            <div className="bg-[var(--cream)] p-8">
              <h3 className="font-[var(--font-display)] text-[1.4rem] font-normal text-[var(--espresso)] mb-4">
                O que é?
              </h3>
              <ul className="space-y-3 text-[0.85rem] text-[var(--text-mid)] leading-[1.7]">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[var(--terra)] mt-1 flex-shrink-0" />
                  <span>Cria fios ultrafinos e realistas, ainda mais delicados que o microblading</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[var(--terra)] mt-1 flex-shrink-0" />
                  <span>Perfeito para quem busca um resultado super natural</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[var(--terra)] mt-1 flex-shrink-0" />
                  <span>Indicado para todos os tipos de pele, incluindo as mais oleosas</span>
                </li>
              </ul>
            </div>

            <div className="bg-[var(--cream)] p-8">
              <h3 className="font-[var(--font-display)] text-[1.4rem] font-normal text-[var(--espresso)] mb-4">
                Como funciona?
              </h3>
              <div className="space-y-4 text-[0.85rem] text-[var(--text-mid)] leading-[1.7]">
                <div>
                  <strong className="text-[var(--espresso)]">1. Análise personalizada:</strong> Estudo do formato ideal para o seu rosto.
                </div>
                <div>
                  <strong className="text-[var(--espresso)]">2. Aplicação precisa:</strong> Realização dos fios com uma ferramenta de ponta ultrafina.
                </div>
                <div>
                  <strong className="text-[var(--espresso)]">3. Resultado natural:</strong> Fios suaves, simétricos e adaptados ao seu estilo.
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
                  <span>Fios ultrafinos que imitam os pelos reais</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[var(--terra)] mt-1 flex-shrink-0" />
                  <span>Resultados que podem durar até 18 meses</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[var(--terra)] mt-1 flex-shrink-0" />
                  <span>Técnica menos invasiva e com menor desconforto</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Microblading */}
      <section className="bg-[var(--cream)] px-16 py-20 max-md:px-6 max-md:py-14">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-[var(--font-display)] text-[clamp(2.5rem,4vw,3.5rem)] font-light text-[var(--espresso)] mb-4">
              Microblading: <em className="italic text-[var(--terra)]">A Solução para Sobrancelhas Perfeitas</em>
            </h2>
            <p className="text-[0.95rem] text-[var(--text-mid)] leading-[1.8] max-w-[700px] mx-auto">
              Transforme as suas sobrancelhas com um método natural e duradouro que realça a sua beleza.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8 mb-16 max-md:grid-cols-1">
            <div className="bg-[var(--warm-white)] p-8">
              <h3 className="font-[var(--font-display)] text-[1.4rem] font-normal text-[var(--espresso)] mb-4">
                O que é?
              </h3>
              <p className="text-[0.85rem] text-[var(--text-mid)] leading-[1.7] mb-4">
                Técnica de preenchimento semi-permanente:
              </p>
              <ul className="space-y-3 text-[0.85rem] text-[var(--text-mid)] leading-[1.7]">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[var(--terra)] mt-1 flex-shrink-0" />
                  <span>Cria fios ultra-realistas e naturais</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[var(--terra)] mt-1 flex-shrink-0" />
                  <span>Corrige falhas, assimetrias e falta de pelos</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[var(--terra)] mt-1 flex-shrink-0" />
                  <span>Garante sobrancelhas sempre perfeitas, sem esforço diário</span>
                </li>
              </ul>
            </div>

            <div className="bg-[var(--warm-white)] p-8">
              <h3 className="font-[var(--font-display)] text-[1.4rem] font-normal text-[var(--espresso)] mb-4">
                Como funciona?
              </h3>
              <div className="space-y-4 text-[0.85rem] text-[var(--text-mid)] leading-[1.7]">
                <div>
                  <strong className="text-[var(--espresso)]">1. Desenho personalizado:</strong> Criação do design ideal para o seu rosto.
                </div>
                <div>
                  <strong className="text-[var(--espresso)]">2. Aplicação manual:</strong> Depósito de pigmento na camada superficial da pele, desenhando fios naturais.
                </div>
                <div>
                  <strong className="text-[var(--espresso)]">3. Acabamento perfeito:</strong> Garantia de sobrancelhas harmoniosas e simétricas.
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
                  <span>Cada fio é desenhado para parecer real</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[var(--terra)] mt-1 flex-shrink-0" />
                  <span>Menos tempo com maquilhagem</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[var(--terra)] mt-1 flex-shrink-0" />
                  <span>Resultados que duram até 12 meses</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Recover Brows */}
      <section className="bg-[var(--warm-white)] px-16 py-20 max-md:px-6 max-md:py-14">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-[var(--font-display)] text-[clamp(2.5rem,4vw,3.5rem)] font-light text-[var(--espresso)] mb-4">
              Protocolo Recover Brows: <em className="italic text-[var(--terra)]">Recupere a Beleza</em>
            </h2>
            <p className="text-[0.95rem] text-[var(--text-mid)] leading-[1.8] max-w-[700px] mx-auto">
              Um protocolo exclusivo para sobrancelhas saudáveis, preenchidas e naturais.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8 mb-16 max-md:grid-cols-1">
            <div className="bg-[var(--cream)] p-8">
              <h3 className="font-[var(--font-display)] text-[1.4rem] font-normal text-[var(--espresso)] mb-4">
                O que é?
              </h3>
              <p className="text-[0.85rem] text-[var(--text-mid)] leading-[1.7] mb-4">
                Um tratamento especializado que:
              </p>
              <ul className="space-y-3 text-[0.85rem] text-[var(--text-mid)] leading-[1.7]">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[var(--terra)] mt-1 flex-shrink-0" />
                  <span>Recupera sobrancelhas danificadas</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[var(--terra)] mt-1 flex-shrink-0" />
                  <span>Estimula o crescimento natural dos pelos</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[var(--terra)] mt-1 flex-shrink-0" />
                  <span>Corrige falhas, assimetrias e cicatrizes</span>
                </li>
              </ul>
            </div>

            <div className="bg-[var(--cream)] p-8">
              <h3 className="font-[var(--font-display)] text-[1.4rem] font-normal text-[var(--espresso)] mb-4">
                Como funciona?
              </h3>
              <ul className="space-y-3 text-[0.85rem] text-[var(--text-mid)] leading-[1.7]">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[var(--terra)] mt-1 flex-shrink-0" />
                  <span>Avaliação detalhada para personalizar o tratamento</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[var(--terra)] mt-1 flex-shrink-0" />
                  <span>Aplicação de produtos nutritivos para fortalecer os folículos</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[var(--terra)] mt-1 flex-shrink-0" />
                  <span>Técnicas avançadas para preencher falhas e uniformizar</span>
                </li>
              </ul>
            </div>

            <div className="bg-[var(--cream)] p-8">
              <h3 className="font-[var(--font-display)] text-[1.4rem] font-normal text-[var(--espresso)] mb-4">
                Resultados
              </h3>
              <ul className="space-y-3 text-[0.85rem] text-[var(--text-mid)] leading-[1.7]">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[var(--terra)] mt-1 flex-shrink-0" />
                  <span>Sobrancelhas mais fortes, densas e saudáveis</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[var(--terra)] mt-1 flex-shrink-0" />
                  <span>Aparência natural e harmoniosa</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[var(--terra)] mt-1 flex-shrink-0" />
                  <span>Recuperação de confiança com um olhar renovado</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Design Reconstrutivo */}
      <section className="bg-[var(--cream)] px-16 py-20 max-md:px-6 max-md:py-14">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-[var(--font-display)] text-[clamp(2.5rem,4vw,3.5rem)] font-light text-[var(--espresso)] mb-4">
              Design Reconstrutivo
            </h2>
            <p className="text-[0.95rem] text-[var(--text-mid)] leading-[1.8] max-w-[700px] mx-auto">
              Muito mais do que um design comum! Esta técnica avançada é ideal para corrigir falhas, redefinir a forma e trazer harmonia ao rosto.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8 mb-16 max-md:grid-cols-1">
            <div className="bg-[var(--warm-white)] p-8">
              <h3 className="font-[var(--font-display)] text-[1.4rem] font-normal text-[var(--espresso)] mb-4">
                Por que escolher?
              </h3>
              <ul className="space-y-3 text-[0.85rem] text-[var(--text-mid)] leading-[1.7]">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[var(--terra)] mt-1 flex-shrink-0" />
                  <span>Corrige falhas ou assimetrias</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[var(--terra)] mt-1 flex-shrink-0" />
                  <span>Realça os traços naturais do rosto</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[var(--terra)] mt-1 flex-shrink-0" />
                  <span>Garante sobrancelhas mais cheias e definidas</span>
                </li>
              </ul>
            </div>

            <div className="bg-[var(--warm-white)] p-8">
              <h3 className="font-[var(--font-display)] text-[1.4rem] font-normal text-[var(--espresso)] mb-4">
                Como funciona?
              </h3>
              <div className="space-y-4 text-[0.85rem] text-[var(--text-mid)] leading-[1.7]">
                <div>
                  <strong className="text-[var(--espresso)]">Avaliação personalizada:</strong> Identificamos o formato ideal para o seu rosto.
                </div>
                <div>
                  <strong className="text-[var(--espresso)]">Correção e simetria:</strong> Usamos técnicas precisas para preencher falhas.
                </div>
                <div>
                  <strong className="text-[var(--espresso)]">Acabamento perfeito:</strong> Garantimos sobrancelhas naturais e equilibradas.
                </div>
              </div>
            </div>

            <div className="bg-[var(--warm-white)] p-8">
              <h3 className="font-[var(--font-display)] text-[1.4rem] font-normal text-[var(--espresso)] mb-4">
                Ideal para quem...
              </h3>
              <ul className="space-y-3 text-[0.85rem] text-[var(--text-mid)] leading-[1.7]">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[var(--terra)] mt-1 flex-shrink-0" />
                  <span>Tem falhas nas sobrancelhas</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[var(--terra)] mt-1 flex-shrink-0" />
                  <span>Quer um design que dure mais tempo</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[var(--terra)] mt-1 flex-shrink-0" />
                  <span>Busca sobrancelhas naturais e bem alinhadas</span>
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
              Tudo o que precisa saber sobre micropigmentação de sobrancelhas
            </p>
          </div>

          <FAQAccordion
            items={[
              {
                question: 'Quanto tempo dura?',
                answer: 'A micropigmentação pode durar entre 1 a 2 anos, dependendo do tipo de pele e dos cuidados após o procedimento.'
              },
              {
                question: 'O procedimento dói?',
                answer: 'O desconforto é mínimo, sendo aplicado um anestésico tópico para maior conforto durante a sessão.'
              },
              {
                question: 'Como funciona a cicatrização?',
                answer: 'A cicatrização ocorre gradualmente ao longo das semanas seguintes, sendo importante seguir todos os cuidados recomendados.'
              }
            ]}
          />
        </div>
      </section>

      {/* CTA Final */}
      <ServiceCTA
        title="Pronta para transformar"
        highlight="as suas sobrancelhas?"
        backgroundImage="https://images.unsplash.com/photo-1698335107935-e2c8287c4947?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleWVicm93JTIwbWljcm9ibGFkaW5nJTIwYmVhdXR5JTIwdHJlYXRtZW50fGVufDF8fHx8MTc3ODMzNTA0MHww&ixlib=rb-4.1.0&q=80&w=1080"
      />
    </div>
  );
}
