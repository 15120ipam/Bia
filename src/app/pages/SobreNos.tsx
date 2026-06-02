import sobreImg from '../../imports/mite_foto.png';
import missaoImg from '../../imports/image-8.png';
import { MapPin, Clock, Phone } from 'lucide-react';

export default function SobreNos() {
  return (
    <div>
      {/* Hero Section */}
      <section className="h-[50vh] relative pt-20 flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2luY2FyZSUyMGZhY2lhbCUyMHRyZWF0bWVudCUyMGNsZWFuJTIwYmVpZ2V8ZW58MXx8fHwxNzc4MzM1MjMwfDA&ixlib=rb-4.1.0&q=80&w=1080)` }}
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[rgba(44,24,16,0.6)]"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-8 max-w-[700px]">
          <p className="text-[0.65rem] tracking-[0.24em] uppercase text-[var(--rose-sand)] mb-4 font-medium">
            A Nossa História
          </p>

          <h1 className="font-[var(--font-display)] text-[clamp(2.5rem,5vw,4rem)] font-light leading-[1.15] text-[var(--warm-white)] mb-6">
            Sobre <em className="italic text-[var(--rose-sand)]">Nós</em>
          </h1>

          <p className="text-[0.95rem] text-[rgba(253,249,246,0.85)] leading-[1.7] max-w-[550px] mx-auto">
            Especialistas em estética facial, micropigmentação e cuidados personalizados que realçam a sua beleza natural.
          </p>
        </div>
      </section>

      {/* Apresentação */}
      <section className="bg-[var(--warm-white)] px-16 py-24 max-md:px-6 max-md:py-16">
        <div className="max-w-[1100px] mx-auto grid grid-cols-2 gap-20 items-center max-md:grid-cols-1 max-md:gap-14">
          {/* Texto — coluna esquerda */}
          <div>
            <div className="flex items-center gap-3 text-[0.65rem] tracking-[0.26em] uppercase text-[var(--terra)] font-medium mb-6">
              <div className="w-7 h-[0.5px] bg-[var(--terra)]"></div>
              A Marca
            </div>

            <h2 className="font-[var(--font-display)] text-[clamp(2.5rem,4vw,3.6rem)] font-light text-[var(--espresso)] mb-8">
              MITÉ — Micro e Estética Facial
            </h2>

            <p className="text-[1rem] text-[var(--text-mid)] leading-[1.9] mb-6">
              A MITÉ é uma marca de estética moderna e cuidada, especializada em tratamentos faciais,
              micropigmentação e serviços de olhar que realçam a melhor versão de cada cliente.
            </p>

            <p className="text-[1rem] text-[var(--text-mid)] leading-[1.9]">
              Trabalhamos com limpeza de pele profunda, protocolos de rosto, microagulhamento,
              micropigmentação de sobrancelhas e lábios, recuperação de sobrancelhas e lifting de pestanas.
              O nosso posicionamento é premium e focado em cuidado, proximidade, relaxamento, bem-estar,
              autocuidado e experiência personalizada.
            </p>
          </div>

          {/* Imagem — coluna direita */}
          <div className="relative">
            <div
              className="w-full aspect-[3/4] bg-cover bg-center rounded-[8px] overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.08)]"
              style={{ backgroundImage: `url(${sobreImg})` }}
            />
            <div className="absolute bottom-[-2rem] left-[-2rem] w-[45%] aspect-square bg-[var(--blush)] z-[-1] rounded-[8px]"></div>
          </div>
        </div>
      </section>

      {/* Filosofia e Diferenciação */}
      <section className="bg-[var(--cream)] px-16 py-24 max-md:px-6 max-md:py-16">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-[var(--font-display)] text-[clamp(2.5rem,4vw,3.2rem)] font-light text-[var(--espresso)] mb-4">
              A Nossa <em className="italic text-[var(--terra)]">Filosofia</em>
            </h2>
            <p className="text-[0.95rem] text-[var(--text-mid)] leading-[1.85] max-w-[650px] mx-auto">
              Valorizamos resultados naturais, harmoniosos e duradouros, sempre com atenção ao detalhe,
              conforto e segurança.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8 max-md:grid-cols-1">
            <div className="bg-[var(--warm-white)] p-10 rounded-[12px]">
              <h3 className="font-[var(--font-display)] text-[1.4rem] font-normal text-[var(--espresso)] mb-4">
                Personalização
              </h3>
              <p className="text-[0.9rem] text-[var(--text-mid)] leading-[1.8]">
                Cada cliente é vista, ouvida e compreendida. Cada tratamento é adaptado às suas
                características únicas e objetivos pessoais.
              </p>
            </div>

            <div className="bg-[var(--warm-white)] p-10 rounded-[12px]">
              <h3 className="font-[var(--font-display)] text-[1.4rem] font-normal text-[var(--espresso)] mb-4">
                Beleza Natural
              </h3>
              <p className="text-[0.9rem] text-[var(--text-mid)] leading-[1.8]">
                A beleza natural deve ser realçada, não transformada em excesso. Trabalhamos para
                valorizar o que já existe de melhor em cada pessoa.
              </p>
            </div>

            <div className="bg-[var(--warm-white)] p-10 rounded-[12px]">
              <h3 className="font-[var(--font-display)] text-[1.4rem] font-normal text-[var(--espresso)] mb-4">
                Acolhimento
              </h3>
              <p className="text-[0.9rem] text-[var(--text-mid)] leading-[1.8]">
                O ambiente transmite confiança e tranquilidade. Queremos que cada visita seja um
                momento de relaxamento e bem-estar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão, Valores */}
      <section className="bg-[var(--warm-white)] px-16 py-24 max-md:px-6 max-md:py-16">
        <div className="max-w-[1100px] mx-auto grid grid-cols-[1fr_1.1fr] gap-20 items-center max-md:grid-cols-1 max-md:gap-14">

          {/* Imagem — coluna esquerda */}
          <div className="relative">
            <div
              className="w-full aspect-[3/4] bg-cover bg-center rounded-[8px] overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.08)]"
              style={{ backgroundImage: `url(${missaoImg})` }}
            />
            <div className="absolute top-[-2rem] right-[-2rem] w-[45%] aspect-square bg-[var(--blush)] z-[-1] rounded-[8px]"></div>
          </div>

          {/* Texto — coluna direita */}
          <div className="flex flex-col gap-12">
            <div className="flex items-center gap-3 text-[0.65rem] tracking-[0.26em] uppercase text-[var(--terra)] font-medium">
              <div className="w-7 h-[0.5px] bg-[var(--terra)]"></div>
              Identidade
            </div>

            <div>
              <div className="w-12 h-[1px] bg-[var(--terra)] mb-5"></div>
              <h3 className="font-[var(--font-display)] text-[1.8rem] font-light text-[var(--espresso)] mb-4">
                Missão
              </h3>
              <p className="text-[0.9rem] text-[var(--text-mid)] leading-[1.85]">
                Proporcionar tratamentos faciais e de micropigmentação que realcem a beleza natural de
                cada cliente, através de técnicas avançadas, cuidado personalizado e um ambiente acolhedor.
              </p>
            </div>

            <div>
              <div className="w-12 h-[1px] bg-[var(--terra)] mb-5"></div>
              <h3 className="font-[var(--font-display)] text-[1.8rem] font-light text-[var(--espresso)] mb-4">
                Visão
              </h3>
              <p className="text-[0.9rem] text-[var(--text-mid)] leading-[1.85]">
                Ser reconhecida como referência em estética facial e micropigmentação, pela excelência
                dos resultados, confiança e dedicação ao bem-estar de cada cliente.
              </p>
            </div>

            <div>
              <div className="w-12 h-[1px] bg-[var(--terra)] mb-5"></div>
              <h3 className="font-[var(--font-display)] text-[1.8rem] font-light text-[var(--espresso)] mb-4">
                Valores
              </h3>
              <ul className="text-[0.9rem] text-[var(--text-mid)] leading-[1.85] space-y-2">
                <li>• Profissionalismo</li>
                <li>• Segurança</li>
                <li>• Personalização</li>
                <li>• Naturalidade</li>
                <li>• Bem-estar</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* Localização */}
      <section className="bg-[var(--cream)] px-16 py-24 max-md:px-6 max-md:py-16">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-[var(--font-display)] text-[clamp(2.5rem,4vw,3.2rem)] font-light text-[var(--espresso)] mb-4">
              Visite-nos na <em className="italic text-[var(--terra)]">Maia</em>
            </h2>
            <p className="text-[0.95rem] text-[var(--text-mid)] leading-[1.85]">
              Espaço Raquel Sacramento
            </p>
          </div>

          <div className="grid grid-cols-2 gap-12 max-md:grid-cols-1">
            <div>
              <div className="bg-[var(--warm-white)] p-10 rounded-[12px] space-y-8">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin className="w-5 h-5 text-[var(--terra)]" />
                    <h3 className="text-[0.8rem] font-medium tracking-[0.12em] uppercase text-[var(--espresso)]">
                      Morada
                    </h3>
                  </div>
                  <p className="text-[0.95rem] text-[var(--text-mid)] leading-[1.7]">
                    Rua Exemplo, 123<br />
                    4425-000 Maia, Porto
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="w-5 h-5 text-[var(--terra)]" />
                    <h3 className="text-[0.8rem] font-medium tracking-[0.12em] uppercase text-[var(--espresso)]">
                      Horário
                    </h3>
                  </div>
                  <div className="text-[0.95rem] text-[var(--text-mid)] leading-[1.7] space-y-2">
                    <p>Segunda a Sexta: 9h00 - 19h00</p>
                    <p>Sábado: 9h00 - 13h00</p>
                    <p>Domingo: Encerrado</p>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Phone className="w-5 h-5 text-[var(--terra)]" />
                    <h3 className="text-[0.8rem] font-medium tracking-[0.12em] uppercase text-[var(--espresso)]">
                      Contactos
                    </h3>
                  </div>
                  <div className="text-[0.95rem] text-[var(--text-mid)] leading-[1.7] space-y-2">
                    <p>+351 912 345 678</p>
                    <p>contato@mite-estetica.pt</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="aspect-[4/3] bg-[var(--blush)] rounded-[12px] overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3003.9259!2d-8.6206!3d41.2358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDE0JzA4LjkiTiA4wrAzNycxNC4yIlc!5e0!3m2!1spt-PT!2spt!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização MITÉ"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}