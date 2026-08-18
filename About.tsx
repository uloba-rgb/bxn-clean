import Header from "./Header";
import MarqueeStrip from "./MarqueeStrip";
import Footer from "./Footer";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, BookOpen, Cpu, Layers, FileText, Lightbulb } from "lucide-react";
import { Link } from "wouter";

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}

function AnimatedSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, isVisible } = useInView();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
}

export default function About() {
  return (
    <div className="min-h-screen bg-transparent">
      <Header />
      <MarqueeStrip />

      {/* Hero Section */}
      <section className="py-28 md:py-36 relative overflow-hidden" style={{ backgroundColor: '#0b0b0b' }}>
        
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            opacity: 0.4,
            backgroundImage: 'linear-gradient(to right, #1e1e1e 1px, transparent 1px), linear-gradient(to bottom, #1e1e1e 1px, transparent 1px)',
            backgroundSize: '80px 80px'
          }}
        />

        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3.5 mb-7">
              <div className="w-9 h-px" style={{ backgroundColor: '#9dff00' }} />
              <span className="text-xs tracking-widest" style={{ color: '#9dff00', fontFamily: "'JetBrains Mono', monospace" }}>
                ABOUT BXN
              </span>
            </div>

            <h1
              className="text-5xl md:text-6xl lg:text-7xl mb-7"
              style={{
                fontFamily: "'Anton', sans-serif",
                color: '#ffffff',
                textTransform: 'uppercase',
                letterSpacing: '0.01em',
                lineHeight: '0.92'
              }}
            >
              We're Not an
              <br />
              <span style={{ color: '#9dff00' }}>Agency.</span>
              <br />
              We're an
              <br />
              <span style={{ color: '#9dff00' }}>Operating System.</span>
            </h1>

            <p className="text-base md:text-lg leading-relaxed max-w-xl" style={{ color: '#808080' }}>
              Brand X Networking is building a long-term business around intellectual property rather than traditional agency services. Every engagement begins by understanding your business — not selling you marketing.
            </p>
          </div>
        </div>
      </section>

      {/* Core Philosophy */}
      <section className="py-28 md:py-36 border-t" style={{ borderColor: '#1e1e1e', backgroundColor: '#0f0f0f' }}>
        <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.4, backgroundImage: 'linear-gradient(to right, #1e1e1e 1px, transparent 1px), linear-gradient(to bottom, #1e1e1e 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
        <div className="container relative z-10">
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <span className="text-xs tracking-widest mb-4 block" style={{ color: '#9dff00', fontFamily: "'JetBrains Mono', monospace" }}>
                  CORE PHILOSOPHY
                </span>
                <h2
                  className="text-3xl md:text-4xl lg:text-5xl mb-8"
                  style={{ fontFamily: "'Anton', sans-serif", textTransform: 'uppercase', lineHeight: '0.92' }}
                >
                  Marketing Is Not the Starting Point
                </h2>
                <p className="text-base leading-relaxed mb-6" style={{ color: '#808080' }}>
                  Before recommending anything, we seek to understand:
                </p>
                <div className="space-y-5">
                  {[
                    'How your business creates value',
                    'How your business generates revenue',
                    'What constraints prevent growth',
                    'What systems require improvement'
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 group">
                      <div className="w-8 h-px transition-all group-hover:w-12" style={{ backgroundColor: '#9dff00' }} />
                      <p className="text-sm md:text-base" style={{ color: '#ffffff' }}>{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border p-8 md:p-10 relative" style={{ borderColor: '#1e1e1e', backgroundColor: '#0b0b0b' }}>
                <div className="absolute top-0 left-0 w-8 h-8" style={{ borderTop: '2px solid #9dff00', borderLeft: '2px solid #9dff00', marginTop: '-1px', marginLeft: '-1px' }} />
                <div className="absolute bottom-0 right-0 w-8 h-8" style={{ borderBottom: '2px solid #9dff00', borderRight: '2px solid #9dff00', marginBottom: '-1px', marginRight: '-1px' }} />
                
                <blockquote className="text-lg md:text-xl italic leading-relaxed mb-6" style={{ color: '#ffffff' }}>
                  "Marketing is one capability within BXN. It is not BXN's identity."
                </blockquote>
                <p className="text-sm leading-relaxed" style={{ color: '#808080' }}>
                  The long-term competitive advantage of BXN comes from its intellectual property rather than its services. We build proprietary methodologies, frameworks, business systems, playbooks, knowledge, and AI — assets that compound over time.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* BXN OS Section */}
      <section className="py-28 md:py-36 relative" style={{ backgroundColor: '#0b0b0b' }}>
        <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.4, backgroundImage: 'linear-gradient(to right, #1e1e1e 1px, transparent 1px), linear-gradient(to bottom, #1e1e1e 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
        <div className="container relative z-10">
          <AnimatedSection>
            <div className="mb-16">
              <span className="text-xs tracking-widest mb-3 block" style={{ color: '#9dff00', fontFamily: "'JetBrains Mono', monospace" }}>
                THE SYSTEM
              </span>
              <h2
                className="text-4xl md:text-5xl mb-4"
                style={{ fontFamily: "'Anton', sans-serif", textTransform: 'uppercase', lineHeight: '0.92' }}
              >
                BXN Operating System
              </h2>
              <p className="text-base max-w-xl leading-relaxed" style={{ color: '#808080' }}>
                BXN OS is our internal operating system — the engine that powers everything we do. It's designed to guide future employees, partners, and AI systems.
              </p>
            </div>
          </AnimatedSection>

          {/* OS Components */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <BookOpen size={24} />, title: 'BXN Canon', desc: 'The constitutional document. Defines philosophy, principles, decision making, governance, and long-term direction. Contains stable knowledge only.' },
              { icon: <Cpu size={24} />, title: 'BXN Method™', desc: 'Our proprietary methodology for solving business problems. Practical, repeatable, evidence-based, and continuously refined through real client work.' },
              { icon: <Layers size={24} />, title: 'Framework Library', desc: 'Proven frameworks that solve recurring business problems. Each tested through real work, repeatable, and produces measurable outcomes.' },
              { icon: <FileText size={24} />, title: 'Playbook Library', desc: 'Step-by-step operational playbooks for executing specific business processes. Documented, refined, and ready to deploy.' },
              { icon: <Lightbulb size={24} />, title: 'Knowledge Library', desc: 'Accumulated insights, best practices, and lessons learned. The collective intelligence that makes every engagement better than the last.' },
              { icon: <Cpu size={24} />, title: 'AI Systems', desc: 'Intelligent systems trained on our canon and methodology. They understand your business context and amplify human decision-making.' }
            ].map((item, idx) => (
              <AnimatedSection key={idx} delay={idx * 100}>
                <div
                  className="border p-6 md:p-8 h-full transition-all"
                  style={{ borderColor: '#1e1e1e', backgroundColor: '#0f0f0f' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#9dff00';
                    e.currentTarget.style.backgroundColor = '#111111';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#1e1e1e';
                    e.currentTarget.style.backgroundColor = '#0f0f0f';
                  }}
                >
                  <div className="mb-4" style={{ color: '#9dff00' }}>{item.icon}</div>
                  <h3
                    className="text-lg md:text-xl mb-3"
                    style={{ fontFamily: "'Anton', sans-serif", textTransform: 'uppercase', lineHeight: '0.92' }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#808080' }}>
                    {item.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="py-28 md:py-36 border-t" style={{ borderColor: '#1e1e1e', backgroundColor: '#0f0f0f' }}>
        <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.4, backgroundImage: 'linear-gradient(to right, #1e1e1e 1px, transparent 1px), linear-gradient(to bottom, #1e1e1e 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
        <div className="container relative z-10">
          <AnimatedSection>
            <div className="mb-16">
              <span className="text-xs tracking-widest mb-3 block" style={{ color: '#9dff00', fontFamily: "'JetBrains Mono', monospace" }}>
                OUR PRINCIPLES
              </span>
              <h2
                className="text-4xl md:text-5xl"
                style={{ fontFamily: "'Anton', sans-serif", textTransform: 'uppercase', lineHeight: '0.92' }}
              >
                What We Believe
              </h2>
            </div>
          </AnimatedSection>

          <div className="space-y-0">
            {[
              { title: 'Source the truth, don\'t assert it', desc: 'We route to official sources, flag the unverified, and fabricate nothing. Every claim is substantiated.' },
              { title: 'Loose coupling', desc: 'Every system independent and replaceable. Minimal blast radius if one component is swapped.' },
              { title: 'Decide before building', desc: 'Resolve structure, naming, conflicts, and strategy before incorporating or signing anything.' },
              { title: 'No unverified claims', desc: 'No income figures, statistics, or empirical claims without substantiation. We flag for review.' },
              { title: 'Verify, don\'t echo', desc: 'Independent analysis over deferring to tools or assumptions. We hold our own thinking.' }
            ].map((principle, idx) => (
              <AnimatedSection key={idx} delay={idx * 80}>
                <div
                  className="border-b py-8 flex flex-col md:flex-row md:items-center gap-4 md:gap-12 transition-colors"
                  style={{ borderColor: '#1e1e1e' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(157, 255, 0, 0.02)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                >
                  <span className="text-xs font-bold w-8 flex-shrink-0" style={{ color: '#9dff00', fontFamily: "'JetBrains Mono', monospace" }}>
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <h3
                    className="text-xl md:text-2xl flex-shrink-0 md:w-80"
                    style={{ fontFamily: "'Anton', sans-serif", textTransform: 'uppercase', lineHeight: '0.92' }}
                  >
                    {principle.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#808080' }}>
                    {principle.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 md:py-36 relative" style={{ backgroundColor: '#0b0b0b' }}>
        <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.4, backgroundImage: 'linear-gradient(to right, #1e1e1e 1px, transparent 1px), linear-gradient(to bottom, #1e1e1e 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
        <div className="container text-center relative z-10">
          <AnimatedSection>
            <h2
              className="text-3xl md:text-5xl mb-6"
              style={{ fontFamily: "'Anton', sans-serif", textTransform: 'uppercase', lineHeight: '0.92' }}
            >
              Want to Work With
              <br />
              <span style={{ color: '#9dff00' }}>a System, Not a Service?</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed mb-8 max-w-lg mx-auto" style={{ color: '#808080' }}>
              We don't sell hours. We build assets. Let's talk about what your business actually needs to grow.
            </p>
            <Link href="/contact">
              <button
                className="px-10 py-4 font-bold text-sm transition-all inline-flex items-center gap-2"
                style={{
                  backgroundColor: '#9dff00',
                  color: '#0a0a0a',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 8px 30px rgba(157, 255, 0, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                Start a Conversation
                <ArrowRight size={16} />
              </button>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
