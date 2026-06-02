import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  cta?: {
    text: string;
    link: string;
  };
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="bg-[var(--warm-white)] rounded-[8px] border border-[rgba(180,120,90,0.12)] overflow-hidden transition-all"
        >
          <button
            onClick={() => toggleItem(index)}
            className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-[rgba(180,120,90,0.02)] transition-colors"
          >
            <span className="font-[var(--font-display)] text-[1.05rem] text-[var(--espresso)] pr-4">
              {item.question}
            </span>
            {openIndex === index ? (
              <Minus className="w-5 h-5 text-[var(--terra)] flex-shrink-0" />
            ) : (
              <Plus className="w-5 h-5 text-[var(--terra)] flex-shrink-0" />
            )}
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="px-8 pb-6 pt-2">
              <p className="text-[0.9rem] text-[var(--text-mid)] leading-[1.8]">
                {item.answer}
              </p>
              {item.cta && (
                <a
                  href={item.cta.link}
                  className="inline-block mt-4 font-[var(--font-body)] text-[0.68rem] font-medium tracking-[0.18em] uppercase text-[var(--warm-white)] bg-[var(--espresso)] border-none px-6 py-3 cursor-pointer hover:bg-[var(--mocha)] transition-all rounded-full"
                >
                  {item.cta.text}
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
