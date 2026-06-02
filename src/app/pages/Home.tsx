import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  User,
  Star,
  Phone,
  Mail,
  Clock,
  MapPin,
  Sparkles
} from 'lucide-react';
import FAQAccordion from '../components/FAQAccordion';
import homeAboutImg from '../../imports/2_06_2026__19_01_00.png';
import homeServicosImg from '../../imports/image-12.png';
import homeAntesImg from '../../imports/image-10.png';
import homeDepoisImg from '../../imports/image-9.png';

// Ícones personalizados usando símbolos SVG
const SobrancelhaIcon = () => (
  <svg width="24" height="24" className="text-[var(--terra)] group-hover:text-[var(--rose-sand)] transition-colors">
    <use href="#icon-sobrancelha" />
  </svg>
);

const LabioIcon = () => (
  <svg width="24" height="24" className="text-[var(--terra)] group-hover:text-[var(--rose-sand)] transition-colors">
    <use href="#icon-labios" />
  </svg>
);

const RostoIcon = () => (
  <svg width="24" height="24" className="text-[var(--terra)] group-hover:text-[var(--rose-sand)] transition-colors">
    <use href="#icon-rosto" />
  </svg>
);

const PestanaIcon = () => (
  <svg width="24" height="24" className="text-[var(--terra)] group-hover:text-[var(--rose-sand)] transition-colors">
    <use href="#icon-pestanas" />
  </svg>
);

const RecuperacaoIcon = () => (
  <svg width="24" height="24" className="text-[var(--terra)] group-hover:text-[var(--rose-sand)] transition-colors">
    <use href="#icon-sobrancelha" />
  </svg>
);

export default function Home() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Formulário enviado! Entraremos em contacto em breve.');
  };

  return (
    <>
      {/* Símbolos SVG para ícones */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        {/* 1. Sobrancelha */}
        <symbol id="icon-sobrancelha" viewBox="0 0 64 64">
          <path d="M14 34 Q 20 26, 32 28 Q 44 30, 50 34" stroke="currentColor" strokeWidth="2.2" fill="none" strokeLinecap="round"/>
        </symbol>

        {/* 2. Lábios */}
        <symbol id="icon-labios" viewBox="0 0 64 64">
          <path d="M18 32 Q 24 28, 32 28 Q 40 28, 46 32" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
          <path d="M18 32 Q 24 36, 32 36 Q 40 36, 46 32" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
          <path d="M28 32 Q 30 30, 32 30 Q 34 30, 36 32" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        </symbol>

        {/* 3. Rosto perfil feminino */}
        <symbol id="icon-rosto" viewBox="0 0 64 64">
          <path d="M38 12 Q 40 14, 40 20 Q 40 26, 36 30 L 34 34 Q 32 38, 34 42 Q 36 46, 38 48" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
          <path d="M36 20 Q 34 20, 32 22" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
          <path d="M34 42 Q 30 44, 28 44" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
          <path d="M38 14 Q 42 12, 46 14 Q 48 16, 48 20 Q 46 24, 44 26 Q 42 28, 40 26" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
          <circle cx="36" cy="21" r="1" fill="currentColor"/>
        </symbol>

        {/* 4. Pestanas */}
        <symbol id="icon-pestanas" viewBox="0 0 64 64">
          <path d="M14 40 Q 32 34, 50 40" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
          <path d="M18 40 C 18 38, 18 32, 20 28" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round"/>
          <path d="M24 38 C 24 36, 24 30, 26 26" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round"/>
          <path d="M32 36 C 32 34, 32 28, 32 24" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round"/>
          <path d="M40 38 C 40 36, 40 30, 38 26" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round"/>
          <path d="M46 40 C 46 38, 46 32, 44 28" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round"/>
        </symbol>
      </svg>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen relative pt-20 flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(https://images.unsplash.com/photo-1761718210089-ba3bb5ccb54f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBmYWNpYWwlMjB0cmVhdG1lbnQlMjBzb2Z0JTIwbWluaW1hbCUyMGNsZWFufGVufDF8fHx8MTc3NzI3OTI1MHww&ixlib=rb-4.1.0&q=80&w=1080)` }}
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[rgba(44,24,16,0.65)]"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-8 max-w-[800px]">
          <p className="text-[0.7rem] tracking-[0.24em] uppercase text-[var(--rose-sand)] mb-6 font-medium">
            Micro e Estética Facial · Maia
          </p>

          <h1 className="font-[var(--font-display)] text-[clamp(3rem,6vw,5rem)] font-light leading-[1.15] text-[var(--warm-white)] mb-6">A estética não corrige.<br /><em className="italic text-[var(--rose-sand)]">Reconecta!</em></h1>

          <p className="text-[0.95rem] text-[rgba(253,249,246,0.75)] leading-[1.8] max-w-[520px] mx-auto mb-12 tracking-[0.02em]">Cuidamos da sua beleza com tratamentos personalizados que respeitam a sua essência, realçando o que já existe, com naturalidade e precisão</p>

          <a
            href="https://www.instagram.com/mite_microeesteticafacial/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-[var(--font-body)] text-[0.75rem] font-medium tracking-[0.18em] uppercase text-[var(--warm-white)] bg-transparent border-2 border-[var(--warm-white)] px-10 py-4 cursor-pointer hover:bg-[var(--warm-white)] hover:text-[var(--espresso)] transition-all rounded-full text-[#ffffff]"
          >
            Conheça o nosso trabalho
          </a>
        </div>

        {/* Scroll Indicator */}
        
      </section>

      {/* Stats Section - Mais Discreta */}
      <section className="bg-[var(--warm-white)] border-y border-[rgba(180,120,90,0.08)] max-md:px-6 max-md:py-10 px-[62px] py-[48px]">
        <div className="flex items-center justify-center gap-20 max-w-[900px] mx-auto max-md:flex-col max-md:gap-8">
          <div className="flex items-center gap-3">
            <div className="font-[var(--font-display)] text-[2.2rem] font-light text-[var(--terra)] leading-[1]">
              +500
            </div>
            <div className="text-[0.7rem] tracking-[0.12em] uppercase text-[var(--text-light)] max-w-[80px] leading-[1.4]">
              Clientes Satisfeitas
            </div>
          </div>

          <div className="w-[1px] h-12 bg-[rgba(180,120,90,0.15)] max-md:hidden"></div>

          <div className="flex items-center gap-3">
            <div className="flex items-baseline gap-1.5">
              <div className="font-[var(--font-display)] text-[2.2rem] font-light text-[var(--terra)] leading-[1]">
                4.6
              </div>
              <Star className="w-4 h-4 text-[var(--terra)] fill-[var(--terra)] mb-1" />
            </div>
            <div className="text-[0.7rem] tracking-[0.12em] uppercase text-[var(--text-light)] max-w-[80px] leading-[1.4]">
              Avaliação Média
            </div>
          </div>

          <div className="w-[1px] h-12 bg-[rgba(180,120,90,0.15)] max-md:hidden"></div>

          <div className="flex items-center gap-3">
            <div className="font-[var(--font-display)] text-[2.2rem] font-light text-[var(--terra)] leading-[1]">
              3
            </div>
            <div className="text-[0.7rem] tracking-[0.12em] uppercase text-[var(--text-light)] max-w-[80px] leading-[1.4]">
              Anos Experiência
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="bg-[var(--warm-white)] grid grid-cols-2 gap-24 items-center px-16 py-28 max-md:grid-cols-1 max-md:px-6 max-md:py-16 max-md:gap-12">
        <div className="relative">
          <div
            className="w-full aspect-[3/4] bg-cover bg-center relative z-10 rounded-[8px] overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.08)]"
            style={{ backgroundImage: `url(${homeAboutImg})` }}
          />
          <div className="absolute bottom-[-2.5rem] right-[-2.5rem] w-[55%] aspect-square bg-[var(--blush)] z-0 rounded-[8px]"></div>

          {/* Quote Card */}

        </div>

        <div>
          <div className="flex items-center gap-3 text-[0.65rem] tracking-[0.26em] uppercase text-[var(--terra)] font-medium mb-4">
            <div className="w-7 h-[0.5px] bg-[var(--terra)]"></div>
            Sobre nós
          </div>

          <div className="flex items-center gap-3 mb-7">
            <h2 className="font-[var(--font-display)] text-[clamp(2.5rem,4vw,3.8rem)] font-light leading-[1.1] text-[var(--espresso)]">
              Experiência e <em className="italic text-[var(--terra)]">dedicação</em><br />
              em cada detalhe
            </h2>
            <Link
              to="/estrategia-notoriedade"
              className="group flex items-center justify-center w-7 h-7 rounded-full bg-transparent border border-[rgba(180,120,90,0.25)] hover:bg-[var(--terra)] hover:border-[var(--terra)] transition-all duration-300 flex-shrink-0 self-start mt-2"
              title="Ver Estratégia Digital"
            >
              <Sparkles className="w-3.5 h-3.5 text-[var(--terra)] group-hover:text-[var(--warm-white)] transition-colors duration-300" />
            </Link>
          </div>

          <p className="text-[0.9rem] text-[var(--text-mid)] leading-[1.9] mb-10">Na MITÉ, combinamos técnicas avançadas de micropigmentação de sobrancelhas, design de sobrancelhas, limpeza de pele e lifting de pestanas com um atendimento personalizado. Cada cliente é único e merece um resultado que realce a sua beleza natural de forma harmoniosa e segura.</p>

          <div className="grid grid-cols-2 gap-6 mb-10">
            <div className="flex flex-col gap-[0.35rem]">
              <strong className="text-[0.75rem] font-medium tracking-[0.1em] uppercase text-[var(--espresso)]">
                Profissionalismo
              </strong>
              <p className="text-[0.8rem] text-[var(--text-light)] leading-[1.6]">
                Formação certificada e atualização constante
              </p>
            </div>
            <div className="flex flex-col gap-[0.35rem]">
              <strong className="text-[0.75rem] font-medium tracking-[0.1em] uppercase text-[var(--espresso)]">
                Segurança
              </strong>
              <p className="text-[0.8rem] text-[var(--text-light)] leading-[1.6]">
                Materiais esterilizados e descartáveis
              </p>
            </div>
            <div className="flex flex-col gap-[0.35rem]">
              <strong className="text-[0.75rem] font-medium tracking-[0.1em] uppercase text-[var(--espresso)]">
                Personalização
              </strong>
              <p className="text-[0.8rem] text-[var(--text-light)] leading-[1.6]">
                Cada tratamento adaptado às suas necessidades
              </p>
            </div>
            <div className="flex flex-col gap-[0.35rem]">
              <strong className="text-[0.75rem] font-medium tracking-[0.1em] uppercase text-[var(--espresso)]">
                Resultados
              </strong>
              <p className="text-[0.8rem] text-[var(--text-light)] leading-[1.6]">
                Naturais e duradouros
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6 flex-wrap">
            <Link to="/#contacto" className="inline-block font-[var(--font-body)] text-[0.7rem] font-medium tracking-[0.18em] uppercase text-[var(--espresso)] bg-transparent border border-[var(--espresso)] px-8 py-[0.9rem] cursor-pointer hover:bg-[var(--espresso)] hover:text-[var(--warm-white)] transition-all no-underline">
              Agendar Consulta
            </Link>
            <Link to="/sobre-nos" className="inline-block font-[var(--font-body)] text-[0.68rem] font-normal tracking-[0.14em] uppercase text-[var(--text-light)] hover:text-[var(--terra)] transition-colors no-underline">
              Conheça-nos Melhor →
            </Link>
          </div>
        </div>
      </section>

      {/* Procedimentos Section - Simples e Elegante */}
      <section id="servicos" className="bg-[var(--cream)] px-16 py-24 max-md:px-6 max-md:py-16">
        <div className="max-w-[900px] mx-auto text-center">
          <div className="flex items-center gap-3 text-[0.65rem] tracking-[0.26em] uppercase text-[var(--terra)] font-medium mb-6 justify-center">
            <div className="w-7 h-[0.5px] bg-[var(--terra)]"></div>
            Procedimentos
            <div className="w-7 h-[0.5px] bg-[var(--terra)]"></div>
          </div>

          <h2 className="font-[var(--font-display)] text-[clamp(2.5rem,4vw,3.6rem)] font-light leading-[1.1] text-[var(--espresso)] mb-8">Os Nossos <em className="italic text-[var(--terra)]">Serviços</em></h2>

          <p className="text-[1rem] text-[var(--text-mid)] leading-[1.9] mb-12 max-w-[650px] mx-auto">
            Oferecemos uma gama completa de serviços especializados em micropigmentação e estética facial,
            sempre com compromisso de excelência e naturalidade.
          </p>

          <div className="grid grid-cols-2 gap-6 mb-12 max-md:grid-cols-1">
            {/* Micropigmentação de Sobrancelhas */}
            <Link
              to="/servicos/sobrancelhas"
              className="group relative overflow-hidden rounded-[16px] aspect-[16/11] shadow-[0_4px_16px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.15)] transition-all duration-300 no-underline"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url(${homeServicosImg})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(44,24,16,0.85)] via-[rgba(44,24,16,0.5)] to-[rgba(44,24,16,0.3)] group-hover:from-[rgba(44,24,16,0.9)] transition-all duration-300"></div>

              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <div className="text-[0.6rem] tracking-[0.24em] uppercase text-[var(--rose-sand)] mb-2 font-medium">
                  Micropigmentação
                </div>
                <h3 className="font-[var(--font-display)] text-[1.8rem] font-light text-[var(--warm-white)] mb-2">
                  Sobrancelhas
                </h3>
                <p className="text-[0.85rem] text-[rgba(253,249,246,0.85)] leading-[1.6]">
                  Design personalizado e técnica fio a fio
                </p>
              </div>
            </Link>

            {/* Micropigmentação Labial */}
            <Link
              to="/servicos/labios"
              className="group relative overflow-hidden rounded-[16px] aspect-[16/11] shadow-[0_4px_16px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.15)] transition-all duration-300 no-underline"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url(https://images.unsplash.com/photo-1638225304129-eae5c3604d9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxsaXBzJTIwYmVhdXR5JTIwdHJlYXRtZW50JTIwbWFrZXVwfGVufDF8fHx8MTc3ODMzNTA0NXww&ixlib=rb-4.1.0&q=80&w=1080)` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(44,24,16,0.85)] via-[rgba(44,24,16,0.5)] to-[rgba(44,24,16,0.3)] group-hover:from-[rgba(44,24,16,0.9)] transition-all duration-300"></div>

              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <div className="text-[0.6rem] tracking-[0.24em] uppercase text-[var(--rose-sand)] mb-2 font-medium">
                  Micropigmentação
                </div>
                <h3 className="font-[var(--font-display)] text-[1.8rem] font-light text-[var(--warm-white)] mb-2">
                  Lábios
                </h3>
                <p className="text-[0.85rem] text-[rgba(253,249,246,0.85)] leading-[1.6]">
                  Contorno e cor natural
                </p>
              </div>
            </Link>

            {/* Protocolos de Rosto */}
            <Link
              to="/servicos/protocolos-rosto"
              className="group relative overflow-hidden rounded-[16px] aspect-[16/11] shadow-[0_4px_16px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.15)] transition-all duration-300 no-underline"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url(https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2luY2FyZSUyMGZhY2lhbCUyMHRyZWF0bWVudCUyMGNsZWFuJTIwYmVpZ2V8ZW58MXx8fHwxNzc4MzM1MjMwfDA&ixlib=rb-4.1.0&q=80&w=1080)` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(44,24,16,0.85)] via-[rgba(44,24,16,0.5)] to-[rgba(44,24,16,0.3)] group-hover:from-[rgba(44,24,16,0.9)] transition-all duration-300"></div>

              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <div className="text-[0.6rem] tracking-[0.24em] uppercase text-[var(--rose-sand)] mb-2 font-medium">
                  Tratamentos Faciais
                </div>
                <h3 className="font-[var(--font-display)] text-[1.8rem] font-light text-[var(--warm-white)] mb-2">
                  Protocolos de Rosto
                </h3>
                <p className="text-[0.85rem] text-[rgba(253,249,246,0.85)] leading-[1.6]">
                  Limpeza de pele profunda
                </p>
              </div>
            </Link>

            {/* Lifting de Pestanas */}
            <Link
              to="/servicos/lifting-pestanas"
              className="group relative overflow-hidden rounded-[16px] aspect-[16/11] shadow-[0_4px_16px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.15)] transition-all duration-300 no-underline"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url(https://images.unsplash.com/photo-1639629509821-c54cdd984227?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxleWVsYXNoJTIwZXh0ZW5zaW9ucyUyMGxhc2hlcyUyMGJlYXV0eXxlbnwxfHx8fDE3NzgzMzUwNTh8MA&ixlib=rb-4.1.0&q=80&w=1080)` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(44,24,16,0.85)] via-[rgba(44,24,16,0.5)] to-[rgba(44,24,16,0.3)] group-hover:from-[rgba(44,24,16,0.9)] transition-all duration-300"></div>

              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <div className="text-[0.6rem] tracking-[0.24em] uppercase text-[var(--rose-sand)] mb-2 font-medium">
                  Serviços de Olhar
                </div>
                <h3 className="font-[var(--font-display)] text-[1.8rem] font-light text-[var(--warm-white)] mb-2">
                  Lifting de Pestanas
                </h3>
                <p className="text-[0.85rem] text-[rgba(253,249,246,0.85)] leading-[1.6]">
                  Curvatura natural e olhar intenso
                </p>
              </div>
            </Link>
          </div>

          <Link
            to="/servicos"
            className="inline-block font-[var(--font-body)] text-[0.7rem] font-medium tracking-[0.18em] uppercase text-[var(--warm-white)] bg-[var(--espresso)] px-10 py-4 hover:bg-[var(--mocha)] transition-all rounded-full no-underline"
          >
            Ver Todos os Serviços
          </Link>
        </div>
      </section>

      {/* Resultados Reais Section - Compact Layout */}
      <section id="provas" className="bg-[var(--warm-white)] px-16 py-20 max-md:px-6 max-md:py-16">
        <div className="max-w-[1100px] mx-auto grid grid-cols-[1fr_1.3fr] gap-16 items-center max-md:grid-cols-1">
          {/* Texto à esquerda */}
          <div>
            <div className="flex items-center gap-3 text-[0.65rem] tracking-[0.26em] uppercase text-[var(--terra)] font-medium mb-4">
              <div className="w-7 h-[0.5px] bg-[var(--terra)]"></div>
              Galeria de Resultados
            </div>

            <h2 className="font-[var(--font-display)] text-[clamp(2.5rem,4vw,3.2rem)] font-light text-[var(--espresso)] mb-6">
              Resultados <em className="italic text-[var(--terra)]">Reais</em>
            </h2>

            <p className="text-[0.9rem] text-[var(--text-mid)] leading-[1.85] mb-6">
              Cada resultado reflete o nosso compromisso com a beleza natural e harmoniosa.
              Trabalhamos com técnicas avançadas que respeitam as características únicas de cada cliente,
              garantindo transformações subtis e elegantes.
            </p>

            <p className="text-[0.85rem] text-[var(--text-light)] leading-[1.75] mb-8">Os nossos tratamentos são pensados para realçar, nunca para transformar de forma artificial. Veja alguns exemplos do nosso trabalho.</p>

            <Link
              to="/#contacto"
              className="inline-block font-[var(--font-body)] text-[0.7rem] font-medium tracking-[0.18em] uppercase text-[var(--espresso)] bg-transparent border border-[var(--espresso)] px-10 py-4 hover:bg-[var(--espresso)] hover:text-[var(--warm-white)] transition-all rounded-full no-underline"
            >
              Agendar Avaliação Gratuita
            </Link>
          </div>

          {/* Galeria à direita */}
          <div>
            <p className="text-center text-[0.7rem] tracking-[0.12em] uppercase text-[var(--text-light)] mb-5">Lifting de pestanas</p>
            <div className="grid grid-cols-2 gap-5">
              <div className="space-y-3">
                <div className="aspect-[4/5] bg-cover bg-center rounded-[10px] overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.08)]" style={{ backgroundImage: `url(${homeAntesImg})` }}></div>
                <div className="bg-[var(--espresso)] text-[var(--warm-white)] text-center py-2.5 rounded-[6px]">
                  <span className="text-[0.65rem] tracking-[0.18em] uppercase font-medium">ANTES</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="aspect-[4/5] bg-cover bg-center rounded-[10px] overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.08)]" style={{ backgroundImage: `url(${homeDepoisImg})` }}></div>
                <div className="bg-[var(--espresso)] text-[var(--warm-white)] text-center py-2.5 rounded-[6px]">
                  <span className="text-[0.65rem] tracking-[0.18em] uppercase font-medium">DEPOIS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testemunhos Section */}
      <section className="bg-[var(--cream)] px-16 py-28 max-md:px-6 max-md:py-16">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center gap-3 text-[0.65rem] tracking-[0.26em] uppercase text-[var(--terra)] font-medium mb-4 justify-center">
              <div className="w-7 h-[0.5px] bg-[var(--terra)]"></div>
              Testemunhos
              <div className="w-7 h-[0.5px] bg-[var(--terra)]"></div>
            </div>

            <h2 className="font-[var(--font-display)] text-[clamp(2.5rem,4vw,3.6rem)] font-light text-[var(--espresso)] mb-4">
              O que dizem <em className="italic text-[var(--terra)]">as nossas clientes</em>
            </h2>
            <p className="text-[0.9rem] text-[var(--text-mid)] leading-[1.85] max-w-[600px] mx-auto">
              Feedback real de quem confia no nosso trabalho
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8 max-md:grid-cols-1">
            {[
              { stars: 5, text: 'Profissionalismo impecável! O resultado das minhas sobrancelhas ficou exatamente como eu queria, muito natural.', author: 'Catarina S.', service: 'Microblading' },
              { stars: 5, text: 'Ambiente acolhedor e tratamento incrível. A minha pele nunca esteve tão radiante!', author: 'Sofia M.', service: 'Hidratação Facial' },
              { stars: 5, text: 'Recomendo de olhos fechados. Atenção ao detalhe e cuidado extremo em todo o processo.', author: 'Mariana L.', service: 'Micropigmentação Lábios' }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-[var(--warm-white)] px-10 py-12 rounded-[12px] shadow-[0_4px_20px_rgba(0,0,0,0.06)] flex flex-col justify-between min-h-[320px]">
                <div>
                  <div className="flex gap-[3px] mb-6">
                    {Array.from({ length: testimonial.stars }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-[var(--terra)] fill-[var(--terra)]" />
                    ))}
                  </div>
                  <q className="font-[var(--font-display)] italic text-[1.05rem] text-[var(--espresso)] leading-[1.7] block mb-8">
                    {testimonial.text}
                  </q>
                </div>
                <div className="border-t border-[rgba(180,120,90,0.15)] pt-5">
                  <div className="text-[0.8rem] font-medium text-[var(--espresso)] mb-1">
                    {testimonial.author}
                  </div>
                  <div className="text-[0.7rem] text-[var(--text-light)] tracking-[0.08em]">
                    {testimonial.service}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section id="cta-banner" className="bg-[var(--warm-white)] px-16 py-12 max-md:px-6 max-md:py-10">
        <div className="max-w-[1100px] mx-auto bg-[var(--espresso)] rounded-[20px] px-12 py-16 flex items-center justify-between gap-8 shadow-[0_8px_30px_rgba(0,0,0,0.12)] max-md:px-8 max-md:py-12 max-md:flex-col max-md:items-start">
          <div>
            <p className="text-[0.7rem] tracking-[0.2em] uppercase text-[var(--rose-sand)] mb-3 font-medium">
              Pronta para transformar?
            </p>
            <h2 className="font-[var(--font-display)] text-[clamp(2rem,3.5vw,3.2rem)] font-light text-[var(--warm-white)] leading-[1.15]">
              Marque a sua <em className="italic text-[var(--rose-sand)]">consulta gratuita</em>
            </h2>
          </div>
          <Link to="/#contacto" className="inline-block font-[var(--font-body)] text-[0.7rem] font-medium tracking-[0.18em] uppercase text-[var(--espresso)] bg-[var(--rose-sand)] border-none px-9 py-4 cursor-pointer hover:bg-[var(--champagne)] transition-all rounded-full whitespace-nowrap">
            Contactar Agora
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[var(--cream)] px-16 py-24 max-md:px-6 max-md:py-16">
        <div className="max-w-[800px] mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center gap-3 text-[0.65rem] tracking-[0.26em] uppercase text-[var(--terra)] font-medium mb-4 justify-center">
              <div className="w-7 h-[0.5px] bg-[var(--terra)]"></div>
              Perguntas Frequentes
              <div className="w-7 h-[0.5px] bg-[var(--terra)]"></div>
            </div>

            <h2 className="font-[var(--font-display)] text-[clamp(2.5rem,4vw,3.6rem)] font-light text-[var(--espresso)] mb-4">
              Tem <em className="italic text-[var(--terra)]">dúvidas?</em>
            </h2>
            <p className="text-[0.9rem] text-[var(--text-mid)] leading-[1.85] max-w-[550px] mx-auto">
              Respondemos às questões mais comuns sobre os nossos tratamentos
            </p>
          </div>

          <FAQAccordion
            items={[
              {
                question: 'Os procedimentos são personalizados?',
                answer: 'Sim. Todos os tratamentos são adaptados às características, objetivos e beleza natural de cada cliente, garantindo resultados harmoniosos e personalizados.'
              },
              {
                question: 'Quanto tempo duram os resultados?',
                answer: 'A duração varia conforme o tratamento e os cuidados posteriores, mas os resultados são pensados para manter uma aparência natural e duradoura.'
              },
              {
                question: 'Como faço a minha marcação?',
                answer: 'A marcação pode ser feita através do formulário de contacto do site, Instagram ou WhatsApp.',
                cta: {
                  text: 'Agendar Consulta',
                  link: '/#contacto'
                }
              }
            ]}
          />
        </div>
      </section>

      {/* Contacto Section */}
      <section id="contacto" className="bg-[var(--cream)] px-16 py-28 grid grid-cols-[1fr_1.2fr] gap-20 items-start max-md:grid-cols-1 max-md:px-6 max-md:py-16">
        <div>
          <div className="flex items-center gap-3 text-[0.65rem] tracking-[0.26em] uppercase text-[var(--terra)] font-medium mb-4">
            <div className="w-7 h-[0.5px] bg-[var(--terra)]"></div>
            Contacto
          </div>

          <div className="flex items-center gap-3 mb-2">
            <h2 className="font-[var(--font-display)] text-[clamp(2.5rem,3.5vw,3.2rem)] font-light text-[var(--espresso)]">
              Vamos <em className="italic text-[var(--terra)]">conversar</em>
            </h2>
            <Link
              to="/funil-conversao"
              className="group flex items-center justify-center w-7 h-7 rounded-full bg-transparent border border-[rgba(180,120,90,0.25)] hover:bg-[var(--terra)] hover:border-[var(--terra)] transition-all duration-300 flex-shrink-0"
              title="Ver Estratégia Digital"
            >
              <Sparkles className="w-3.5 h-3.5 text-[var(--terra)] group-hover:text-[var(--warm-white)] transition-colors duration-300" />
            </Link>
          </div>
          <p className="text-[0.88rem] text-[var(--text-mid)] leading-[1.85] mb-10">
            Entre em contacto connosco para agendar a sua consulta
            ou esclarecer qualquer dúvida.
          </p>

          <div className="flex flex-col gap-5">
            <div className="flex items-start gap-[0.85rem]">
              <div className="w-9 h-9 bg-[var(--blush)] rounded-full flex items-center justify-center flex-shrink-0 mt-[0.1rem]">
                <Phone className="w-[15px] h-[15px] text-[var(--terra)]" />
              </div>
              <div>
                <strong className="block text-[0.72rem] font-medium tracking-[0.1em] uppercase text-[var(--espresso)] mb-[0.2rem]">
                  Telefone
                </strong>
                <span className="text-[0.85rem] text-[var(--text-mid)]">
                  +351 912 345 678
                </span>
              </div>
            </div>

            <div className="flex items-start gap-[0.85rem]">
              <div className="w-9 h-9 bg-[var(--blush)] rounded-full flex items-center justify-center flex-shrink-0 mt-[0.1rem]">
                <Mail className="w-[15px] h-[15px] text-[var(--terra)]" />
              </div>
              <div>
                <strong className="block text-[0.72rem] font-medium tracking-[0.1em] uppercase text-[var(--espresso)] mb-[0.2rem]">
                  Email
                </strong>
                <span className="text-[0.85rem] text-[var(--text-mid)]">
                  contato@mite-estetica.pt
                </span>
              </div>
            </div>

            <div className="flex items-start gap-[0.85rem]">
              <div className="w-9 h-9 bg-[var(--blush)] rounded-full flex items-center justify-center flex-shrink-0 mt-[0.1rem]">
                <MapPin className="w-[15px] h-[15px] text-[var(--terra)]" />
              </div>
              <div>
                <strong className="block text-[0.72rem] font-medium tracking-[0.1em] uppercase text-[var(--espresso)] mb-[0.2rem]">
                  Localização
                </strong>
                <span className="text-[0.85rem] text-[var(--text-mid)]">
                  Rua Exemplo, 123<br />
                  4425-000 Maia, Porto
                </span>
              </div>
            </div>

            <div className="flex items-start gap-[0.85rem]">
              <div className="w-9 h-9 bg-[var(--blush)] rounded-full flex items-center justify-center flex-shrink-0 mt-[0.1rem]">
                <Clock className="w-[15px] h-[15px] text-[var(--terra)]" />
              </div>
              <div>
                <strong className="block text-[0.72rem] font-medium tracking-[0.1em] uppercase text-[var(--espresso)] mb-[0.2rem]">
                  Horário
                </strong>
                <span className="text-[0.85rem] text-[var(--text-mid)]">
                  Seg-Sex: 9h-19h<br />
                  Sáb: 9h-13h
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="w-full">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="flex flex-col gap-[0.4rem]">
              <label className="text-[0.65rem] tracking-[0.15em] uppercase font-medium text-[var(--text-mid)]">
                Nome
              </label>
              <input
                type="text"
                required
                className="font-[var(--font-body)] text-[0.85rem] font-light text-[var(--espresso)] bg-[var(--warm-white)] border border-[rgba(180,120,90,0.3)] px-4 py-[0.85rem] outline-none focus:border-[var(--terra)] transition-colors w-full"
                placeholder="O seu nome"
              />
            </div>
            <div className="flex flex-col gap-[0.4rem]">
              <label className="text-[0.65rem] tracking-[0.15em] uppercase font-medium text-[var(--text-mid)]">
                Email
              </label>
              <input
                type="email"
                required
                className="font-[var(--font-body)] text-[0.85rem] font-light text-[var(--espresso)] bg-[var(--warm-white)] border border-[rgba(180,120,90,0.3)] px-4 py-[0.85rem] outline-none focus:border-[var(--terra)] transition-colors w-full"
                placeholder="email@exemplo.com"
              />
            </div>
          </div>

          <div className="flex flex-col gap-[0.4rem] mb-4">
            <label className="text-[0.65rem] tracking-[0.15em] uppercase font-medium text-[var(--text-mid)]">
              Telefone
            </label>
            <input
              type="tel"
              required
              className="font-[var(--font-body)] text-[0.85rem] font-light text-[var(--espresso)] bg-[var(--warm-white)] border border-[rgba(180,120,90,0.3)] px-4 py-[0.85rem] outline-none focus:border-[var(--terra)] transition-colors w-full"
              placeholder="+351"
            />
          </div>

          <div className="flex flex-col gap-[0.4rem] mb-4">
            <label className="text-[0.65rem] tracking-[0.15em] uppercase font-medium text-[var(--text-mid)]">
              Serviço de interesse
            </label>
            <select
              required
              className="font-[var(--font-body)] text-[0.85rem] font-light text-[var(--text-mid)] bg-[var(--warm-white)] border border-[rgba(180,120,90,0.3)] px-4 py-[0.85rem] outline-none focus:border-[var(--terra)] transition-colors w-full cursor-pointer appearance-none"
            >
              <option value="">Selecione um serviço</option>
              <option value="microblading">Microblading</option>
              <option value="labios">Micropigmentação Lábios</option>
              <option value="lifting">Lifting Facial</option>
              <option value="hidratacao">Hidratação Facial</option>
            </select>
          </div>

          <div className="flex flex-col gap-[0.4rem] mb-4">
            <label className="text-[0.65rem] tracking-[0.15em] uppercase font-medium text-[var(--text-mid)]">
              Mensagem
            </label>
            <textarea
              required
              className="font-[var(--font-body)] text-[0.85rem] font-light text-[var(--espresso)] bg-[var(--warm-white)] border border-[rgba(180,120,90,0.3)] px-4 py-[0.85rem] outline-none focus:border-[var(--terra)] transition-colors w-full resize-vertical min-h-[120px]"
              placeholder="Conte-nos mais sobre as suas necessidades..."
            />
          </div>

          <div className="flex items-start gap-3 mb-7">
            <input
              type="checkbox"
              required
              className="w-[15px] h-[15px] border border-[rgba(180,120,90,0.5)] bg-[var(--warm-white)] flex-shrink-0 mt-[0.15rem] cursor-pointer appearance-none checked:bg-[var(--terra)] outline-none"
            />
            <label className="text-[0.75rem] text-[var(--text-light)] leading-[1.6]">
              Aceito a <a href="#" className="text-[var(--terra)]">política de privacidade</a> e autorizo
              o contacto para agendamento.
            </label>
          </div>

          <button
            type="submit"
            className="w-full font-[var(--font-body)] text-[0.72rem] font-medium tracking-[0.2em] uppercase text-[var(--warm-white)] bg-[var(--espresso)] border-none px-8 py-[1.1rem] cursor-pointer hover:bg-[var(--mocha)] transition-colors"
          >
            Enviar Mensagem
          </button>
        </form>
      </section>
    </>
  );
}