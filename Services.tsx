import Header from "./Header";
import MarqueeStrip from "./MarqueeStrip";
import Footer from "./Footer";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, CheckCircle, Shield, Brain, Target, TrendingUp, Zap, Users, FileText, Layers, BookOpen, Cpu } from "lucide-react";
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

export default function Services() {
  return (
    <div className="bg-black min-h-screen" style={{ backgroundColor: '#0b0b0b' }}>
      <Header />
      <MarqueeStrip />

      {/* Hero Section */}
      <section className="py-28 md:py-36 relative overflow-hidden" style={{ backgroundColor: '#0b0b0b' }}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ opacity: 0.4, backgroundImage: 'linear-gradient(to right, #1e1e1e 1px, transparent 1px), linear-gradient(to bottom, #1e1e1e 1px, transparent 1px)', backgroundSize: '80px 80px' }}
        />

        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3.5 mb-7">
              <div className="w-9 h-px" style={{ backgroundColor: '#9dff00' }} />
              <span className="text-xs tracking-widest" style={{ color: '#9dff00', fontFamily: "'JetBrains Mono', monospace" }}>
                OUR SERVICES
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
              Everything You Need
              <br />
              to Build a Business
              <br />
              <span style={{ color: '#9dff00' }}>That Lasts.</span>
            </h1>

            <p className="text-base md:text-lg leading-relaxed max-w-xl" style={{ color: '#808080' }}>
              From day-one entity setup to AI-powered growth systems — we provide the complete infrastructure for business transformation. No fluff. No guesswork. Just proven systems.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-28 md:py-36 border-t relative" style={{ borderColor: '#1e1e1e', backgroundColor: '#0f0f0f' }}>
        <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.4, backgroundImage: 'linear-gradient(to right, #1e1e1e 1px, transparent 1px), linear-gradient(to bottom, #1e1e1e 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
        <div className="container relative z-10">
          <AnimatedSection>
            <div className="mb-20">
              <span className="text-xs tracking-widest mb-3 block" style={{ color: '#9dff00', fontFamily: "'JetBrains Mono', monospace" }}>
                CORE SERVICES
              </span>
              <h2
                className="text-4xl md:text-5xl"
                style={{ fontFamily: "'Anton', sans-serif", textTransform: 'uppercase', lineHeight: '0.92' }}
              >
                What We Build For You
              </h2>
            </div>
          </AnimatedSection>

          {/* Service 1 - Entity Setup */}
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20 pb-20 border-b" style={{ borderColor: '#1e1e1e' }}>
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <Shield size={32} style={{ color: '#9dff00' }} />
                  <h3
                    className="text-2xl md:text-3xl"
                    style={{ fontFamily: "'Anton', sans-serif", textTransform: 'uppercase', lineHeight: '0.92' }}
                  >
                    New Business Entity Setup
                  </h3>
                </div>
                <p className="text-base leading-relaxed mb-6" style={{ color: '#808080' }}>
                  A repeatable method for standing up any new business correctly from day one — foundation, brand, canon, supporting documents, compliance, and AI-training manifest. Nothing missed. Nothing left to chance.
                </p>
                <p className="text-sm leading-relaxed" style={{ color: '#808080' }}>
                  Whether you're starting a company, subsidiary, holding company, or brand entity — we cover incorporation, brand identity, canon document creation, compliance obligation discovery, and AI project setup.
                </p>
              </div>
              <div className="space-y-4">
                <p className="text-xs tracking-widest mb-4" style={{ color: '#9dff00', fontFamily: "'JetBrains Mono', monospace" }}>
                  INCLUDES:
                </p>
                {[
                  'Company registration & incorporation',
                  'Business classification & compliance mapping',
                  'Domain, email & infrastructure setup',
                  'Business bank account & payment systems',
                  'Data protection registration',
                  'Brand identity & trademark filing',
                  'Canon document creation',
                  'AI training manifest & project setup'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle size={14} style={{ color: '#9dff00' }} className="flex-shrink-0" />
                    <span className="text-sm" style={{ color: '#ffffff' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Service 2 - BXN Method */}
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20 pb-20 border-b" style={{ borderColor: '#1e1e1e' }}>
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <Brain size={32} style={{ color: '#9dff00' }} />
                  <h3
                    className="text-2xl md:text-3xl"
                    style={{ fontFamily: "'Anton', sans-serif", textTransform: 'uppercase', lineHeight: '0.92' }}
                  >
                    BXN Method™
                  </h3>
                </div>
                <p className="text-base leading-relaxed mb-6" style={{ color: '#808080' }}>
                  Our proprietary methodology for solving business problems. It's practical, repeatable, evidence-based, and continuously refined through real client work. Not theory — proven execution.
                </p>
                <p className="text-sm leading-relaxed" style={{ color: '#808080' }}>
                  The BXN Method™ starts by understanding your business before prescribing solutions. We identify constraints, map revenue flows, and build systems that address root causes — not symptoms.
                </p>
              </div>
              <div className="space-y-4">
                <p className="text-xs tracking-widest mb-4" style={{ color: '#9dff00', fontFamily: "'JetBrains Mono', monospace" }}>
                  METHODOLOGY:
                </p>
                {[
                  'Deep business analysis & constraint mapping',
                  'Revenue model optimization',
                  'Custom framework development',
                  'Evidence-based decision making',
                  'Continuous refinement through real work',
                  'Measurable outcome tracking'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle size={14} style={{ color: '#9dff00' }} className="flex-shrink-0" />
                    <span className="text-sm" style={{ color: '#ffffff' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Service 3 - Framework Development */}
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20 pb-20 border-b" style={{ borderColor: '#1e1e1e' }}>
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <Target size={32} style={{ color: '#9dff00' }} />
                  <h3
                    className="text-2xl md:text-3xl"
                    style={{ fontFamily: "'Anton', sans-serif", textTransform: 'uppercase', lineHeight: '0.92' }}
                  >
                    Framework & IP Development
                  </h3>
                </div>
                <p className="text-base leading-relaxed mb-6" style={{ color: '#808080' }}>
                  We don't invent frameworks because they sound unique. A framework only exists if it solves a recurring problem, has been tested through real work, can be repeated, and produces measurable outcomes.
                </p>
                <p className="text-sm leading-relaxed" style={{ color: '#808080' }}>
                  Only proven frameworks become part of your intellectual property — giving you a defensible competitive advantage that compounds over time.
                </p>
              </div>
              <div className="space-y-4">
                <p className="text-xs tracking-widest mb-4" style={{ color: '#9dff00', fontFamily: "'JetBrains Mono', monospace" }}>
                  FRAMEWORK CRITERIA:
                </p>
                {[
                  'Solves a recurring business problem',
                  'Tested through real client work',
                  'Repeatable across contexts',
                  'Produces measurable outcomes',
                  'Documented and transferable',
                  'Becomes your intellectual property'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle size={14} style={{ color: '#9dff00' }} className="flex-shrink-0" />
                    <span className="text-sm" style={{ color: '#ffffff' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Service 4 - Growth Systems */}
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20 pb-20 border-b" style={{ borderColor: '#1e1e1e' }}>
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <TrendingUp size={32} style={{ color: '#9dff00' }} />
                  <h3
                    className="text-2xl md:text-3xl"
                    style={{ fontFamily: "'Anton', sans-serif", textTransform: 'uppercase', lineHeight: '0.92' }}
                  >
                    Growth Systems & Playbooks
                  </h3>
                </div>
                <p className="text-base leading-relaxed mb-6" style={{ color: '#808080' }}>
                  Operating systems for sustainable growth. We build playbooks, processes, and automation that scale your business without scaling your headcount. Systems that work while you sleep.
                </p>
                <p className="text-sm leading-relaxed" style={{ color: '#808080' }}>
                  Every playbook is documented, tested, and ready to deploy. From marketing funnels to operational workflows — each one designed to produce consistent, measurable results.
                </p>
              </div>
              <div className="space-y-4">
                <p className="text-xs tracking-widest mb-4" style={{ color: '#9dff00', fontFamily: "'JetBrains Mono', monospace" }}>
                  DELIVERABLES:
                </p>
                {[
                  'Marketing & funnel architecture',
                  'Sales process automation',
                  'Operational SOPs & workflows',
                  'Customer journey mapping',
                  'Growth playbooks & templates',
                  'Performance tracking systems'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle size={14} style={{ color: '#9dff00' }} className="flex-shrink-0" />
                    <span className="text-sm" style={{ color: '#ffffff' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Service 5 - AI Integration */}
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20 pb-20 border-b" style={{ borderColor: '#1e1e1e' }}>
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <Zap size={32} style={{ color: '#9dff00' }} />
                  <h3
                    className="text-2xl md:text-3xl"
                    style={{ fontFamily: "'Anton', sans-serif", textTransform: 'uppercase', lineHeight: '0.92' }}
                  >
                    AI Integration & Training
                  </h3>
                </div>
                <p className="text-base leading-relaxed mb-6" style={{ color: '#808080' }}>
                  Intelligent systems trained on your business canon and methodology. We set up AI projects that understand your entity, terminology, and decision-making framework — amplifying human intelligence.
                </p>
                <p className="text-sm leading-relaxed" style={{ color: '#808080' }}>
                  From assembling the training manifest to loading controlled terminology and setting up project backlogs — we ensure AI works for your business, not against it.
                </p>
              </div>
              <div className="space-y-4">
                <p className="text-xs tracking-widest mb-4" style={{ color: '#9dff00', fontFamily: "'JetBrains Mono', monospace" }}>
                  AI SETUP:
                </p>
                {[
                  'Training manifest assembly',
                  'Glossary & controlled terminology',
                  'Canon-based AI project setup',
                  'Role-based access & governance',
                  'Review cadence & drift prevention',
                  'Continuous learning integration'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle size={14} style={{ color: '#9dff00' }} className="flex-shrink-0" />
                    <span className="text-sm" style={{ color: '#ffffff' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Service 6 - Brand & Identity */}
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <Users size={32} style={{ color: '#9dff00' }} />
                  <h3
                    className="text-2xl md:text-3xl"
                    style={{ fontFamily: "'Anton', sans-serif", textTransform: 'uppercase', lineHeight: '0.92' }}
                  >
                    Brand & Identity Architecture
                  </h3>
                </div>
                <p className="text-base leading-relaxed mb-6" style={{ color: '#808080' }}>
                  Strategic brand architecture that commands authority. We create logo asset sets, brand guidelines, voice guides, and visual identity systems — each visually distinct and trademark-ready.
                </p>
                <p className="text-sm leading-relaxed" style={{ color: '#808080' }}>
                  Every brand we build is designed for trademark registration. Constructed device marks that register cleanly, with full guidelines for consistent application across all touchpoints.
                </p>
              </div>
              <div className="space-y-4">
                <p className="text-xs tracking-widest mb-4" style={{ color: '#9dff00', fontFamily: "'JetBrains Mono', monospace" }}>
                  BRAND ASSETS:
                </p>
                {[
                  'Logo asset set (primary, mono, reverse, favicon)',
                  'Brand guidelines & colour psychology',
                  'Typography & voice guide',
                  'Social handle strategy & registration',
                  'Trademark filing preparation',
                  'Brand templates (email, deck, social)'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle size={14} style={{ color: '#9dff00' }} className="flex-shrink-0" />
                    <span className="text-sm" style={{ color: '#ffffff' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Choose BXN */}
      <section className="py-28 md:py-36 relative" style={{ backgroundColor: '#0b0b0b' }}>
        <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.4, backgroundImage: 'linear-gradient(to right, #1e1e1e 1px, transparent 1px), linear-gradient(to bottom, #1e1e1e 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
        <div className="container relative z-10">
          <AnimatedSection>
            <div className="mb-16">
              <span className="text-xs tracking-widest mb-3 block" style={{ color: '#9dff00', fontFamily: "'JetBrains Mono', monospace" }}>
                WHY BXN
              </span>
              <h2
                className="text-4xl md:text-5xl"
                style={{ fontFamily: "'Anton', sans-serif", textTransform: 'uppercase', lineHeight: '0.92' }}
              >
                Why Choose Us
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ backgroundColor: '#1e1e1e', border: '1px solid #1e1e1e' }}>
            {[
              { title: 'IP, Not Hours', desc: 'We build intellectual property that becomes your competitive moat — not billable hours that disappear when the contract ends.' },
              { title: 'Tested, Not Theoretical', desc: 'Every framework and methodology has been tested through real client work. We don\'t sell theory — we sell proven systems.' },
              { title: 'Systems, Not Services', desc: 'We build operating systems that scale without you. Your business runs on infrastructure, not on our availability.' },
              { title: 'Complete, Not Partial', desc: 'From entity setup to AI integration — we cover the full lifecycle. No gaps, no handoffs, no "that\'s not our department."' }
            ].map((item, idx) => (
              <AnimatedSection key={idx} delay={idx * 100}>
                <div className="p-8 md:p-12" style={{ backgroundColor: '#0f0f0f' }}>
                  <h3
                    className="text-xl md:text-2xl mb-4"
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

      {/* CTA */}
      <section className="py-28 md:py-36 border-t relative" style={{ borderColor: '#1e1e1e', backgroundColor: '#0f0f0f' }}>
        <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.4, backgroundImage: 'linear-gradient(to right, #1e1e1e 1px, transparent 1px), linear-gradient(to bottom, #1e1e1e 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
        <div className="container text-center relative z-10">
          <AnimatedSection>
            <h2
              className="text-3xl md:text-5xl mb-6"
              style={{ fontFamily: "'Anton', sans-serif", textTransform: 'uppercase', lineHeight: '0.92' }}
            >
              Ready to Build
              <br />
              <span style={{ color: '#9dff00' }}>Your Growth System?</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed mb-8 max-w-lg mx-auto" style={{ color: '#808080' }}>
              Every transformation starts with a conversation. Tell us about your business, and we'll show you what's possible.
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
                Book a Discovery Call
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
