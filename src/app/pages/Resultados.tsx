import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Resultados() {
  const sobrancelhasImages = [
    '/src/imports/image-13.png',
    '/src/imports/a0290784-44f3-4743-b77a-b94822188ef1.png',
    '/src/imports/a528bc23-b5fc-4ca9-948a-3e0534da7aa1.png'
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
    focusOnSelect: true,
    arrows: false,
    autoplay: false,
    swipe: true,
    swipeToSlide: true,
    touchMove: true,
    draggable: true,
    cssEase: 'cubic-bezier(0.4, 0, 0.2, 1)',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '60px',
          swipe: true,
          draggable: true
        }
      }
    ]
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="h-[55vh] relative pt-20 flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(https://images.unsplash.com/photo-1603291000179-afd74889979c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWNpYWwlMjBza2luJTIwdHJlYXRtZW50JTIwY2xvc2UlMjB1cCUyMG5hdHVyYWwlMjBiZWF1dHklMjBjbGVhbnxlbnwxfHx8fDE3Nzg0NDc0MzR8MA&ixlib=rb-4.1.0&q=80&w=1080)` }}
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[rgba(44,24,16,0.65)]"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-8 max-w-[750px]">
          <p className="text-[0.65rem] tracking-[0.24em] uppercase text-[var(--rose-sand)] mb-4 font-medium">
            Galeria de Resultados
          </p>
          <h1 className="font-[var(--font-display)] text-[clamp(2.8rem,5.5vw,4.5rem)] font-light leading-[1.1] text-[var(--warm-white)]">
            Beleza que Respeita<br /><em className="italic text-[var(--rose-sand)]">a Sua Essência</em>
          </h1>
        </div>
      </section>

      {/* Galeria de Resultados Premium */}
      <section className="bg-[var(--warm-white)] px-16 py-32 max-md:px-6 max-md:py-20">
        <div className="max-w-[1400px] mx-auto">
          {/* Grid de Resultados */}
          <div className="space-y-40 max-md:space-y-28">
            {/* Micropigmentação de Sobrancelhas - Carrossel Premium */}
            <div>
              <div className="text-center mb-16 max-md:mb-12">
                <h3 className="font-[var(--font-display)] text-[clamp(1.8rem,3vw,2.4rem)] font-light text-[var(--espresso)] mb-2">
                  Micropigmentação <span className="text-[var(--terra)]">/</span> Sobrancelhas
                </h3>
                <p className="text-[0.8rem] text-[var(--text-light)] tracking-[0.04em] mt-4">
                  Técnica avançada de microblading
                </p>
              </div>

              <div className="text-center mb-10">
                <p className="text-[0.65rem] text-[var(--text-light)] tracking-[0.12em] uppercase opacity-60">
                  Arraste para navegar
                </p>
              </div>

              <div className="relative px-8 max-md:px-2">
                <style>{`
                  .premium-carousel .slick-slide {
                    opacity: 0.25;
                    transform: scale(0.78);
                    transition: all 0.7s cubic-bezier(0.4, 0, 0.2, 1);
                    padding: 0 16px;
                    filter: blur(1.5px);
                  }
                  .premium-carousel .slick-slide.slick-center {
                    opacity: 1;
                    transform: scale(1);
                    z-index: 10;
                    filter: blur(0px);
                  }
                  .premium-carousel .slick-dots {
                    bottom: -70px;
                  }
                  .premium-carousel .slick-dots li {
                    margin: 0 5px;
                  }
                  .premium-carousel .slick-dots li button:before {
                    font-size: 7px;
                    color: var(--terra);
                    opacity: 0.2;
                    transition: all 0.4s ease;
                  }
                  .premium-carousel .slick-dots li.slick-active button:before {
                    font-size: 9px;
                    color: var(--terra);
                    opacity: 1;
                  }
                  .premium-carousel .slick-list {
                    overflow: visible;
                    padding: 50px 0 !important;
                  }
                  .premium-carousel .slick-track {
                    display: flex;
                    align-items: center;
                  }
                  .premium-carousel {
                    cursor: grab;
                    user-select: none;
                  }
                  .premium-carousel:active {
                    cursor: grabbing;
                  }
                  @media (max-width: 768px) {
                    .premium-carousel .slick-slide {
                      opacity: 0.35;
                      transform: scale(0.85);
                      filter: blur(0.8px);
                    }
                  }
                `}</style>
                <Slider {...sliderSettings} className="premium-carousel">
                  {sobrancelhasImages.map((image, index) => (
                    <div key={index} className="px-2">
                      <div className="bg-[var(--cream)] rounded-[24px] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.06)] transition-all duration-700 hover:shadow-[0_24px_72px_rgba(0,0,0,0.1)]">
                        <div
                          className="aspect-[3/4] bg-cover bg-center rounded-[18px] overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.1)]"
                          style={{ backgroundImage: `url(${image})` }}
                        />
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>

            {/* Lifting de Pestanas */}
            <div>
              <div className="text-center mb-16">
                <h3 className="font-[var(--font-display)] text-[clamp(1.8rem,3vw,2.4rem)] font-light text-[var(--espresso)] mb-2">
                  Lifting <span className="text-[var(--terra)]">/</span> Pestanas
                </h3>
                <p className="text-[0.8rem] text-[var(--text-light)] tracking-[0.04em] mt-4">
                  Curvatura e elevação natural
                </p>
              </div>

              <div className="grid grid-cols-2 gap-12 max-md:grid-cols-1 max-md:gap-10">
                <div className="bg-[var(--cream)] rounded-[20px] p-8 shadow-[0_8px_32px_rgba(0,0,0,0.06)]">
                  <div className="aspect-[3/4] bg-cover bg-center rounded-[12px] overflow-hidden mb-6 shadow-[0_4px_20px_rgba(0,0,0,0.1)]" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1764773963685-0b467cd96362?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxleWVsYXNoJTIwbGlmdCUyMGV4dGVuc2lvbiUyMG5hdHVyYWwlMjBiZWF1dHklMjBjbG9zZXVwfGVufDF8fHx8MTc3ODQzNTYxOXww&ixlib=rb-4.1.0&q=80&w=1080)' }}></div>
                  <div className="text-center">
                    <span className="inline-block text-[0.7rem] tracking-[0.18em] uppercase text-[var(--espresso)] font-medium bg-[var(--warm-white)] px-6 py-3 rounded-full">
                      Antes
                    </span>
                  </div>
                </div>
                <div className="bg-[var(--cream)] rounded-[20px] p-8 shadow-[0_8px_32px_rgba(0,0,0,0.06)]">
                  <div className="aspect-[3/4] bg-cover bg-center rounded-[12px] overflow-hidden mb-6 shadow-[0_4px_20px_rgba(0,0,0,0.1)]" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1764773963911-01313b5b4002?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleWVsYXNoJTIwbGlmdCUyMGV4dGVuc2lvbiUyMG5hdHVyYWwlMjBiZWF1dHklMjBjbG9zZXVwfGVufDF8fHx8MTc3ODQzNTYxOXww&ixlib=rb-4.1.0&q=80&w=1080)' }}></div>
                  <div className="text-center">
                    <span className="inline-block text-[0.7rem] tracking-[0.18em] uppercase text-[var(--warm-white)] font-medium bg-[var(--espresso)] px-6 py-3 rounded-full">
                      Depois
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Micropigmentação Labial */}
            <div>
              <div className="text-center mb-16">
                <h3 className="font-[var(--font-display)] text-[clamp(1.8rem,3vw,2.4rem)] font-light text-[var(--espresso)] mb-2">
                  Micropigmentação <span className="text-[var(--terra)]">/</span> Lábios
                </h3>
                <p className="text-[0.8rem] text-[var(--text-light)] tracking-[0.04em] mt-4">
                  Contorno e preenchimento natural
                </p>
              </div>

              <div className="grid grid-cols-2 gap-12 max-md:grid-cols-1 max-md:gap-10">
                <div className="bg-[var(--cream)] rounded-[20px] p-8 shadow-[0_8px_32px_rgba(0,0,0,0.06)]">
                  <div className="aspect-[3/4] bg-cover bg-center rounded-[12px] overflow-hidden mb-6 shadow-[0_4px_20px_rgba(0,0,0,0.1)]" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1661346376364-706a9eac60ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxsaXAlMjB0cmVhdG1lbnQlMjBuYXR1cmFsJTIwYmVhdXR5JTIwbWFrZXVwJTIwY2xvc2V1cHxlbnwxfHx8fDE3Nzg0MzU2MjB8MA&ixlib=rb-4.1.0&q=80&w=1080)' }}></div>
                  <div className="text-center">
                    <span className="inline-block text-[0.7rem] tracking-[0.18em] uppercase text-[var(--espresso)] font-medium bg-[var(--warm-white)] px-6 py-3 rounded-full">
                      Antes
                    </span>
                  </div>
                </div>
                <div className="bg-[var(--cream)] rounded-[20px] p-8 shadow-[0_8px_32px_rgba(0,0,0,0.06)]">
                  <div className="aspect-[3/4] bg-cover bg-center rounded-[12px] overflow-hidden mb-6 shadow-[0_4px_20px_rgba(0,0,0,0.1)]" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1762114925981-1e263b17599f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxsaXAlMjB0cmVhdG1lbnQlMjBuYXR1cmFsJTIwYmVhdXR5JTIwbWFrZXVwJTIwY2xvc2V1cHxlbnwxfHx8fDE3Nzg0MzU2MjB8MA&ixlib=rb-4.1.0&q=80&w=1080)' }}></div>
                  <div className="text-center">
                    <span className="inline-block text-[0.7rem] tracking-[0.18em] uppercase text-[var(--warm-white)] font-medium bg-[var(--espresso)] px-6 py-3 rounded-full">
                      Depois
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--warm-white)] px-16 py-20 max-md:px-6 max-md:py-14">
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="font-[var(--font-display)] text-[clamp(2.5rem,4vw,3.2rem)] font-light text-[var(--espresso)] mb-6">
            Pronta para a sua <em className="italic text-[var(--terra)]">transformação?</em>
          </h2>
          <p className="text-[0.95rem] text-[var(--text-mid)] leading-[1.85] mb-8">
            Agende uma consulta gratuita e descubra como podemos realçar a sua beleza natural
          </p>
          <Link
            to="/#contacto"
            className="inline-block font-[var(--font-body)] text-[0.7rem] font-medium tracking-[0.18em] uppercase text-[var(--warm-white)] bg-[var(--espresso)] border-none px-10 py-4 cursor-pointer hover:bg-[var(--mocha)] transition-all rounded-full no-underline"
          >
            Agendar Consulta
          </Link>
        </div>
      </section>
    </div>
  );
}