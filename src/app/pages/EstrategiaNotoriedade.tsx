import { Sparkles, Search, MessageSquare, Target, Instagram, Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import googleDisplayMockup from '../../imports/28011597-f523-43fc-8408-736746e15132.png';
import errosCapa from '../../imports/image-2.png';
import errosPg2 from '../../imports/image-3.png';
import microCapa from '../../imports/image-4.png';
import microPg2 from '../../imports/Captura_de_ecr__2026-06-02_173937.png';
import cuidadosCapa from '../../imports/Captura_de_ecr__2026-06-02_174003.png';
import cuidadosPg2 from '../../imports/Captura_de_ecr__2026-06-02_174026.png';
import awarenessVideo from '../../imports/v_deo_final_de_MINI_VLOG_DE_atendimento_de_MIcro._Labial__1_.mp4';

// Componente de Carrossel
function InstagramCarousel({ images, title, useContain }: { images: string[], title: string, useContain?: boolean }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="group relative bg-[var(--warm-white)] rounded-[12px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)] transition-all duration-300">
      {/* Carrossel */}
      <div className="relative aspect-square overflow-hidden bg-[var(--cream)]">
        <div
          className="flex transition-transform duration-500 ease-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {images.map((img, idx) => (
            <div key={idx} className="min-w-full h-full flex-shrink-0 flex items-center justify-center">
              <img
                src={img}
                alt={`${title} - slide ${idx + 1}`}
                className={`w-full h-full ${useContain && idx === 1 ? 'object-contain' : 'object-cover'}`}
              />
            </div>
          ))}
        </div>

        {/* Botões de navegação */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[rgba(253,249,246,0.95)] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-md hover:bg-[var(--warm-white)]"
              aria-label="Slide anterior"
            >
              <ChevronLeft className="w-5 h-5 text-[var(--terra)]" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[rgba(253,249,246,0.95)] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-md hover:bg-[var(--warm-white)]"
              aria-label="Próximo slide"
            >
              <ChevronRight className="w-5 h-5 text-[var(--terra)]" />
            </button>

            {/* Indicadores de slides */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`w-1.5 h-1.5 rounded-full transition-all ${
                    idx === currentSlide
                      ? 'bg-[var(--terra)] w-4'
                      : 'bg-[rgba(253,249,246,0.6)]'
                  }`}
                  aria-label={`Ir para slide ${idx + 1}`}
                />
              ))}
            </div>
          </>
        )}

        {/* Ícone Instagram */}
        <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[rgba(253,249,246,0.95)] flex items-center justify-center">
          <Instagram className="w-4 h-4 text-[var(--terra)]" />
        </div>
      </div>

      {/* Título do post */}
      <div className="p-4 border-t border-[rgba(180,120,90,0.08)]">
        <p className="text-[0.75rem] text-[var(--text-mid)] leading-[1.5]">
          {title}
        </p>
      </div>
    </div>
  );
}

export default function EstrategiaNotoriedade() {
  return (
    <div className="pt-28">
      {/* Hero Section */}
      <section className="bg-[var(--warm-white)] px-16 py-20 max-md:px-6 max-md:py-16">
        <div className="max-w-[1000px] mx-auto text-center">
          <div className="flex items-center gap-3 text-[0.65rem] tracking-[0.26em] uppercase text-[var(--terra)] font-medium mb-6 justify-center">
            <div className="w-7 h-[0.5px] bg-[var(--terra)]"></div>
            Comunicação
            <div className="w-7 h-[0.5px] bg-[var(--terra)]"></div>
          </div>

          <h1 className="font-[var(--font-display)] text-[clamp(2.8rem,5vw,4.2rem)] font-light leading-[1.1] text-[var(--espresso)] mb-6">
            Estratégia <em className="italic text-[var(--terra)]">Digital</em>
          </h1>

          <p className="text-[1.05rem] text-[var(--text-mid)] leading-[1.9] max-w-[750px] mx-auto">
            Estratégia integrada entre Google Marketing, SMS Marketing e Marketing de Conteúdo desenvolvida para reforçar a notoriedade da marca, aumentar o tráfego do website e incentivar a descoberta dos serviços MITÉ.
          </p>
        </div>
      </section>

      {/* Google Marketing Section */}
      <section className="bg-[var(--cream)] px-16 py-24 max-md:px-6 max-md:py-16">
        <div className="max-w-[1100px] mx-auto">
          <div className="grid grid-cols-[1.2fr_1fr] gap-16 items-center max-md:grid-cols-1">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Search className="w-5 h-5 text-[var(--terra)]" />
                <span className="text-[0.68rem] tracking-[0.22em] uppercase text-[var(--terra)] font-medium">
                  Google Marketing
                </span>
              </div>

              <h2 className="font-[var(--font-display)] text-[clamp(2.2rem,3.5vw,3rem)] font-light text-[var(--espresso)] mb-4">
                Campanha <em className="italic text-[var(--terra)]">Tráfego + Rede Display</em>
              </h2>

              <p className="text-[0.95rem] text-[var(--text-mid)] leading-[1.85] mb-8">
                Campanha desenvolvida para aumentar a visibilidade da marca MITÉ, reforçar a presença digital e direcionar utilizadores para o website através de anúncios gráficos e visuais.
              </p>

              <div className="mb-8">
                <p className="text-[0.72rem] tracking-[0.15em] uppercase font-medium text-[var(--espresso)] mb-4">
                  Estratégia focada em:
                </p>
                <div className="grid grid-cols-2 gap-3 max-md:grid-cols-1">
                  {[
                    'Branding e notoriedade',
                    'Reconhecimento visual da marca',
                    'Segmentação por interesses',
                    'Tráfego para o website',
                    'Comunicação visual',
                    'Presença digital'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-[var(--terra)] rounded-full mt-[0.45rem] flex-shrink-0"></div>
                      <span className="text-[0.85rem] text-[var(--text-light)] leading-[1.6]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[var(--warm-white)] border border-[rgba(180,120,90,0.12)] rounded-lg p-6">
                <p className="text-[0.68rem] tracking-[0.16em] uppercase font-medium text-[var(--terra)] mb-4">
                  Informação complementar
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-[0.7rem] tracking-[0.08em] uppercase text-[var(--text-light)] mb-1">Região</p>
                    <p className="text-[0.9rem] font-medium text-[var(--espresso)]">Maia e Porto</p>
                  </div>
                  <div>
                    <p className="text-[0.7rem] tracking-[0.08em] uppercase text-[var(--text-light)] mb-1">Objetivo</p>
                    <p className="text-[0.9rem] font-medium text-[var(--espresso)]">Tráfego do Website</p>
                  </div>
                  <div>
                    <p className="text-[0.7rem] tracking-[0.08em] uppercase text-[var(--text-light)] mb-1">Formato</p>
                    <p className="text-[0.9rem] font-medium text-[var(--espresso)]">Rede Display</p>
                  </div>
                  <div>
                    <p className="text-[0.7rem] tracking-[0.08em] uppercase text-[var(--text-light)] mb-1">Conversões</p>
                    <p className="text-[0.9rem] font-medium text-[var(--espresso)]">Visualizações e Contactos</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Display Mockup */}
            <div className="relative flex items-center justify-center">
              <img
                src={googleDisplayMockup}
                alt="Google Display - MITÉ"
                className="w-full max-w-[280px] h-auto"
                style={{
                  imageRendering: '-webkit-optimize-contrast',
                  backfaceVisibility: 'hidden',
                  transform: 'translateZ(0)'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* SMS Marketing Section */}
      <section className="bg-[var(--warm-white)] px-16 py-24 max-md:px-6 max-md:py-16">
        <div className="max-w-[1100px] mx-auto">
          <div className="grid grid-cols-[1fr_1.2fr] gap-16 items-center max-md:grid-cols-1 max-md:gap-12">
            {/* SMS Mockup - iPhone */}
            <div className="relative max-md:order-2 flex justify-center">
              <div className="relative w-full max-w-[300px]">
                {/* iPhone Frame */}
                <div className="relative bg-[#1d1d1f] rounded-[50px] p-[12px] shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
                  {/* Dynamic Island */}
                  <div className="absolute top-[12px] left-1/2 -translate-x-1/2 w-[95px] h-[28px] bg-black rounded-full z-10"></div>

                  {/* Screen */}
                  <div className="relative bg-white rounded-[38px] overflow-hidden">
                    {/* Status Bar */}
                    <div className="bg-gradient-to-b from-[#f7f7f7] to-white px-6 pt-14 pb-2.5 flex items-center justify-between">
                      <span className="text-[0.7rem] font-semibold text-[#1d1d1f]">18:00</span>
                      <div className="flex items-center gap-1.5">
                        <svg className="w-4 h-3" viewBox="0 0 16 12" fill="none">
                          <path d="M0 10L8 2L16 10" stroke="#1d1d1f" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                        <div className="flex gap-[2px]">
                          <div className="w-[3px] h-[8px] bg-[#1d1d1f] rounded-full"></div>
                          <div className="w-[3px] h-[10px] bg-[#1d1d1f] rounded-full"></div>
                          <div className="w-[3px] h-[12px] bg-[#1d1d1f] rounded-full"></div>
                          <div className="w-[3px] h-[14px] bg-[#1d1d1f] rounded-full"></div>
                        </div>
                        <div className="w-6 h-3 border-2 border-[#1d1d1f] rounded-sm relative">
                          <div className="absolute inset-[2px] bg-[#1d1d1f] rounded-[1px]"></div>
                        </div>
                      </div>
                    </div>

                    {/* Messages Header */}
                    <div className="bg-[#f7f7f7] px-6 py-3 border-b border-[rgba(0,0,0,0.08)]">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[var(--terra)] to-[var(--mocha)] flex items-center justify-center">
                          <span className="text-[0.75rem] font-medium text-white">M</span>
                        </div>
                        <div>
                          <p className="text-[0.8rem] font-semibold text-[#1d1d1f]">MITÉ Estética Facial</p>
                          <p className="text-[0.65rem] text-[#666]">Mensagem SMS</p>
                        </div>
                      </div>
                    </div>

                    {/* Message Bubble */}
                    <div className="bg-white px-6 py-6 min-h-[280px] flex flex-col">
                      {/* Data */}
                      <div className="flex justify-center mb-4">
                        <p className="text-[0.65rem] text-[#666] px-3 py-1 bg-[#f0f0f0] rounded-full">
                          10 de Outubro de 2026
                        </p>
                      </div>

                      <div className="flex justify-start mb-4">
                        <div className="bg-[var(--cream)] rounded-[18px] rounded-tl-[4px] px-4 py-3 max-w-[85%] shadow-sm">
                          <p className="text-[0.75rem] text-[var(--espresso)] leading-[1.5]">
                            Cuide de si num ambiente acolhedor. Descubra os tratamentos MITÉ. Reserve já!
                          </p>
                          <Link
                            to="/sobre-nos"
                            className="text-[0.75rem] text-[var(--terra)] leading-[1.5] font-medium mt-3 block hover:underline cursor-pointer transition-all"
                          >
                            mite.pt/experiencia
                          </Link>
                          <p className="text-[0.58rem] text-[var(--text-light)] mt-1.5 opacity-50 italic">
                            97 caracteres
                          </p>
                          <p className="text-[0.6rem] text-[var(--text-light)] mt-2 text-right opacity-60">
                            18:00
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Message Input Bar */}
                    <div className="bg-[#f7f7f7] px-4 py-3 border-t border-[rgba(0,0,0,0.08)]">
                      <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 border border-[rgba(0,0,0,0.1)]">
                        <MessageSquare className="w-4 h-4 text-[#999]" />
                        <span className="text-[0.75rem] text-[#999]">Mensagem</span>
                      </div>
                    </div>
                  </div>

                  {/* Side Buttons */}
                  <div className="absolute -left-[2px] top-[100px] w-[3px] h-[28px] bg-[#1d1d1f] rounded-l"></div>
                  <div className="absolute -left-[2px] top-[140px] w-[3px] h-[50px] bg-[#1d1d1f] rounded-l"></div>
                  <div className="absolute -left-[2px] top-[200px] w-[3px] h-[50px] bg-[#1d1d1f] rounded-l"></div>
                  <div className="absolute -right-[2px] top-[160px] w-[3px] h-[70px] bg-[#1d1d1f] rounded-r"></div>
                </div>
              </div>
            </div>

            <div className="max-md:order-1">
              <div className="flex items-center gap-2 mb-4">
                <MessageSquare className="w-5 h-5 text-[var(--terra)]" />
                <span className="text-[0.68rem] tracking-[0.22em] uppercase text-[var(--terra)] font-medium">
                  SMS Marketing
                </span>
              </div>

              <h2 className="font-[var(--font-display)] text-[clamp(2.2rem,3.5vw,3rem)] font-light text-[var(--espresso)] mb-6">
                Comunicação <em className="italic text-[var(--terra)]">Direta</em>
              </h2>

              <p className="text-[0.95rem] text-[var(--text-mid)] leading-[1.85] mb-8">
                Campanhas SMS desenvolvidas para reforçar a comunicação direta com potenciais clientes e incentivar marcações através de mensagens rápidas e personalizadas.
              </p>

              <div className="bg-[var(--cream)] border border-[rgba(180,120,90,0.12)] rounded-lg p-6">
                <p className="text-[0.68rem] tracking-[0.16em] uppercase font-medium text-[var(--terra)] mb-4">
                  Informações da Campanha
                </p>
                <div className="space-y-3">
                  <div className="flex items-center justify-between pb-3 border-b border-[rgba(180,120,90,0.08)]">
                    <span className="text-[0.8rem] text-[var(--text-light)]">Mês</span>
                    <span className="text-[0.85rem] font-medium text-[var(--espresso)]">Outubro</span>
                  </div>
                  <div className="flex items-center justify-between pb-3 border-b border-[rgba(180,120,90,0.08)]">
                    <span className="text-[0.8rem] text-[var(--text-light)]">Semana</span>
                    <span className="text-[0.85rem] font-medium text-[var(--espresso)]">Semana 2</span>
                  </div>
                  <div className="flex items-center justify-between pb-3 border-b border-[rgba(180,120,90,0.08)]">
                    <span className="text-[0.8rem] text-[var(--text-light)]">Objetivo</span>
                    <span className="text-[0.85rem] font-medium text-[var(--espresso)]">Branding e Marcações</span>
                  </div>
                  <div className="flex items-center justify-between pb-3 border-b border-[rgba(180,120,90,0.08)]">
                    <span className="text-[0.8rem] text-[var(--text-light)]">Serviço</span>
                    <span className="text-[0.85rem] font-medium text-[var(--espresso)]">Experiência MITÉ</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[0.8rem] text-[var(--text-light)]">Público</span>
                    <span className="text-[0.85rem] font-medium text-[var(--espresso)]">Clientes Novos e Antigos</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pilares de Conteúdo Section */}
      <section className="bg-[var(--cream)] px-16 py-24 max-md:px-6 max-md:py-16">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-20">
            <div className="flex items-center gap-2 mb-4 justify-center">
              <Instagram className="w-5 h-5 text-[var(--terra)]" />
              <span className="text-[0.68rem] tracking-[0.22em] uppercase text-[var(--terra)] font-medium">
                Marketing de Conteúdo
              </span>
            </div>

            <h2 className="font-[var(--font-display)] text-[clamp(2.2rem,3.5vw,3rem)] font-light text-[var(--espresso)] mb-6">
              Pilares de <em className="italic text-[var(--terra)]">Conteúdo</em>
            </h2>

            <p className="text-[0.95rem] text-[var(--text-mid)] leading-[1.85] max-w-[700px] mx-auto">
              Conteúdos estratégicos desenvolvidos para aumentar alcance, interação e notoriedade da marca.
            </p>
          </div>

          {/* Subtítulo Tráfego */}
          <div className="mb-6">
            <p className="text-[0.75rem] text-[var(--text-mid)] leading-[1.6]">
              <span className="font-medium text-[var(--terra)]">Tráfego</span> — gerar interação e visitas ao website.
            </p>
          </div>

          {/* Carrosséis de Conteúdo */}
          <div className="grid grid-cols-3 gap-6 max-md:grid-cols-1 mb-20">
            {/* Carrossel 1 - 3 Erros */}
            <InstagramCarousel
              images={[errosCapa, errosPg2]}
              title="3 erros que estão a prejudicar as tuas sobrancelhas"
            />

            {/* Carrossel 2 - Micropigmentação */}
            <InstagramCarousel
              images={[microCapa, microPg2]}
              title="Antes de fazer micropigmentação tens de saber isto"
              useContain={true}
            />

            {/* Carrossel 3 - Cuidados */}
            <InstagramCarousel
              images={[cuidadosCapa, cuidadosPg2]}
              title="Cuidados pós-procedimento"
            />
          </div>

          {/* Subtítulo Awareness */}
          <div className="mb-6 mt-16">
            <p className="text-[0.75rem] text-[var(--text-mid)] leading-[1.6]">
              <span className="font-medium text-[var(--terra)]">Awareness</span> — aumentar alcance, reconhecimento e visibilidade da marca.
            </p>
          </div>

          {/* Vídeo Awareness */}
          <div className="grid grid-cols-[0.9fr_1.3fr] gap-8 items-start max-md:grid-cols-1 max-md:gap-8">
            {/* Vídeo */}
            <div className="max-md:order-first">
              <div className="group relative bg-[var(--warm-white)] rounded-[12px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)] transition-all duration-300 max-w-[280px] max-md:max-w-[260px] max-md:mx-auto">
                <div className="aspect-[9/16] overflow-hidden bg-[var(--espresso)] relative">
                  <video
                    src={awarenessVideo}
                    controls
                    className="w-full h-full object-cover"
                    poster=""
                  />
                  <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-[rgba(253,249,246,0.95)] rounded-full px-2.5 py-1">
                    <Play className="w-3 h-3 text-[var(--terra)]" />
                    <span className="text-[0.6rem] tracking-[0.08em] uppercase font-medium text-[var(--terra)]">Reels</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Texto */}
            <div>
              <h4 className="font-[var(--font-display)] text-[clamp(1.8rem,2.5vw,2.4rem)] font-light text-[var(--espresso)] mb-6">
                Experiência <em className="italic text-[var(--terra)]">Visual</em>
              </h4>

              <div className="space-y-3">
                {[
                  'Aumento da notoriedade da marca',
                  'Maior alcance e visibilidade digital',
                  'Conteúdo visual apelativo',
                  'Reforço da presença online da MITÉ',
                  'Interesse e interação com potenciais clientes'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-[var(--terra)] rounded-full mt-[0.45rem] flex-shrink-0"></div>
                    <span className="text-[0.85rem] text-[var(--text-light)] leading-[1.6]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
