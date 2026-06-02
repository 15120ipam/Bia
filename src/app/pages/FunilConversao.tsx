import { Sparkles, Search, MessageSquare, Target, Instagram, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import postDepoimentos from '../../imports/image.png';
import postBeneficios from '../../imports/Captura_de_ecr__2026-06-02_133335.png';
import postResultados from '../../imports/Captura_de_ecr__2026-06-02_133233.png';
import videoExplicacao from '../../imports/explicacao_de_procedimentos.mp4';
import googleAdsMockup from '../../imports/9f3cb46d-93df-4f92-ab43-f2dd45341a7c.png';

export default function FunilConversao() {
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
            Estratégia integrada entre Google Marketing, SMS Marketing e Marketing de Conteúdo desenvolvida para aumentar notoriedade, gerar contactos e incentivar marcações.
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
                Campanha <em className="italic text-[var(--terra)]">Leads + Pesquisa</em>
              </h2>

              <p className="text-[0.95rem] text-[var(--text-mid)] leading-[1.85] mb-8">
                Campanha desenvolvida para aumentar a geração de leads e captar potenciais clientes interessados em serviços de estética facial e micropigmentação.
              </p>

              <div className="mb-8">
                <p className="text-[0.72rem] tracking-[0.15em] uppercase font-medium text-[var(--espresso)] mb-4">
                  Estratégia focada em:
                </p>
                <div className="grid grid-cols-2 gap-3 max-md:grid-cols-1">
                  {[
                    'Pesquisas relacionadas com estética facial',
                    'Intenção de marcação',
                    'Segmentação local',
                    'Aumento de contactos',
                    'Geração de marcações'
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
                    <p className="text-[0.9rem] font-medium text-[var(--espresso)]">Geração de Leads</p>
                  </div>
                  <div>
                    <p className="text-[0.7rem] tracking-[0.08em] uppercase text-[var(--text-light)] mb-1">Formato</p>
                    <p className="text-[0.9rem] font-medium text-[var(--espresso)]">Pesquisa (Search)</p>
                  </div>
                  <div>
                    <p className="text-[0.7rem] tracking-[0.08em] uppercase text-[var(--text-light)] mb-1">Conversões</p>
                    <p className="text-[0.9rem] font-medium text-[var(--espresso)]">Contactos e Visualizações</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Ads Mockup */}
            <div className="relative flex items-center justify-center">
              <img
                src={googleAdsMockup}
                alt="Google Ads - MITÉ Beleza Natural"
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
                      <span className="text-[0.7rem] font-semibold text-[#1d1d1f]">19:00</span>
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
                          24 de Outubro de 2026
                        </p>
                      </div>

                      <div className="flex justify-start mb-4">
                        <div className="bg-[var(--cream)] rounded-[18px] rounded-tl-[4px] px-4 py-3 max-w-[85%] shadow-sm">
                          <p className="text-[0.75rem] text-[var(--espresso)] leading-[1.5]">
                            Lábios definidos e naturais todos os dias.
                            Conheça a micropigmentação da MITÉ e marque já.
                          </p>
                          <Link
                            to="/servicos/labios"
                            className="text-[0.75rem] text-[var(--terra)] leading-[1.5] font-medium mt-3 block hover:underline cursor-pointer transition-all"
                          >
                            mite.pt/labios
                          </Link>
                          <p className="text-[0.58rem] text-[var(--text-light)] mt-1.5 opacity-50 italic">
                            105 caracteres
                          </p>
                          <p className="text-[0.6rem] text-[var(--text-light)] mt-2 text-right opacity-60">
                            19:00
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
                    <span className="text-[0.85rem] font-medium text-[var(--espresso)]">Semana 4</span>
                  </div>
                  <div className="flex items-center justify-between pb-3 border-b border-[rgba(180,120,90,0.08)]">
                    <span className="text-[0.8rem] text-[var(--text-light)]">Objetivo</span>
                    <span className="text-[0.85rem] font-medium text-[var(--espresso)]">Geração de Leads</span>
                  </div>
                  <div className="flex items-center justify-between pb-3 border-b border-[rgba(180,120,90,0.08)]">
                    <span className="text-[0.8rem] text-[var(--text-light)]">Serviço</span>
                    <span className="text-[0.85rem] font-medium text-[var(--espresso)]">Micropigmentação Labial</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[0.8rem] text-[var(--text-light)]">Público</span>
                    <span className="text-[0.85rem] font-medium text-[var(--espresso)]">Estética Facial</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marketing de Conteúdo Section */}
      <section className="bg-[var(--cream)] px-16 py-24 max-md:px-6 max-md:py-16">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-20">
            <div className="flex items-center gap-2 mb-4 justify-center">
              <Instagram className="w-5 h-5 text-[var(--terra)]" />
              <span className="text-[0.68rem] tracking-[0.22em] uppercase text-[var(--terra)] font-medium">
                Estratégia de Conteúdo
              </span>
            </div>

            <h2 className="font-[var(--font-display)] text-[clamp(2.2rem,3.5vw,3rem)] font-light text-[var(--espresso)] mb-6">
              Marketing de <em className="italic text-[var(--terra)]">Conteúdo</em>
            </h2>

            <p className="text-[0.95rem] text-[var(--text-mid)] leading-[1.85] max-w-[700px] mx-auto">
              Conteúdos estratégicos desenvolvidos para reforçar confiança, aumentar interação e incentivar conversões.
            </p>
          </div>

          {/* Conversão - Posts Grid */}
          <div className="mb-20">
            <div className="flex items-center gap-2 mb-8">
              <Sparkles className="w-4 h-4 text-[var(--terra)]" />
              <h3 className="text-[0.8rem] tracking-[0.18em] uppercase font-medium text-[var(--terra)]">
                Conversão
              </h3>
            </div>

            <div className="grid grid-cols-3 gap-6 max-md:grid-cols-1">
              {/* Post 1 - Depoimentos */}
              <div className="group relative bg-[var(--warm-white)] rounded-[12px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)] transition-all duration-300">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={postDepoimentos}
                    alt="A confiança das nossas clientes - Depoimentos"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[rgba(253,249,246,0.95)] flex items-center justify-center">
                  <Instagram className="w-4 h-4 text-[var(--terra)]" />
                </div>
                <div className="p-4 border-t border-[rgba(180,120,90,0.08)]">
                  <p className="text-[0.75rem] text-[var(--text-mid)] leading-[1.5]">
                    Depoimentos e prova social
                  </p>
                </div>
              </div>

              {/* Post 2 - Benefícios */}
              <div className="group relative bg-[var(--warm-white)] rounded-[12px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)] transition-all duration-300">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={postBeneficios}
                    alt="Benefícios dos tratamentos"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[rgba(253,249,246,0.95)] flex items-center justify-center">
                  <Instagram className="w-4 h-4 text-[var(--terra)]" />
                </div>
                <div className="p-4 border-t border-[rgba(180,120,90,0.08)]">
                  <p className="text-[0.75rem] text-[var(--text-mid)] leading-[1.5]">
                    Benefícios dos tratamentos
                  </p>
                </div>
              </div>

              {/* Post 3 - Resultados */}
              <div className="group relative bg-[var(--warm-white)] rounded-[12px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)] transition-all duration-300">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={postResultados}
                    alt="Resultados que falam por si - Antes e Depois"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[rgba(253,249,246,0.95)] flex items-center justify-center">
                  <Instagram className="w-4 h-4 text-[var(--terra)]" />
                </div>
                <div className="p-4 border-t border-[rgba(180,120,90,0.08)]">
                  <p className="text-[0.75rem] text-[var(--text-mid)] leading-[1.5]">
                    Resultados reais - Antes e depois
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Remarketing - Vídeo */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Target className="w-4 h-4 text-[var(--terra)]" />
              <h3 className="text-[0.8rem] tracking-[0.18em] uppercase font-medium text-[var(--terra)]">
                Remarketing
              </h3>
            </div>

            <div className="grid grid-cols-[1.5fr_0.85fr] gap-3 items-start max-md:grid-cols-1 max-md:gap-8">
              {/* Texto */}
              <div>
                <h4 className="font-[var(--font-display)] text-[clamp(1.8rem,2.5vw,2.4rem)] font-light text-[var(--espresso)] mb-4">
                  Explicação de <em className="italic text-[var(--terra)]">Procedimentos</em>
                </h4>

                <div className="space-y-2.5">
                  {[
                    'Esclarecimento de dúvidas',
                    'Reforço de confiança',
                    'Explicação visual dos tratamentos',
                    'Aproximação com potenciais clientes',
                    'Incentivo à marcação'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[var(--terra)] rounded-full mt-[0.45rem] flex-shrink-0"></div>
                      <span className="text-[0.85rem] text-[var(--text-light)] leading-[1.6]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Vídeo */}
              <div className="max-md:order-first">
                <div className="group relative bg-[var(--warm-white)] rounded-[12px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)] transition-all duration-300 max-w-[300px] ml-auto max-md:ml-0 max-md:max-w-[280px] max-md:mx-auto">
                  <div className="aspect-[9/16] overflow-hidden bg-[var(--espresso)] relative">
                    <video
                      src={videoExplicacao}
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
