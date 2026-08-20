import Header from "./Header";
import MarqueeStrip from "./MarqueeStrip";
import Footer from "./Footer";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, CheckCircle, Zap, Shield, Brain, Target, TrendingUp, Users } from "lucide-react";
import { Link } from "wouter";

/**
 * Home Page - Customer Attracting Design
 * 
 * Design: Dark Tech-Forward with bordered grid boxes background
 * - Background grid boxes (bordered cells) throughout all sections
 * - Live scroll-driven graph (fixed, bottom-right)
 * - Bold hero with clear value proposition
 * - Strong CTAs throughout
 * - Scroll animations
 */

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => { 
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
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

/** Background grid boxes - consistent bordered cells pattern */
function BackgroundGrid() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ opacity: 0.4 }}>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, #1e1e1e 1px, transparent 1px),
            linear-gradient(to bottom, #1e1e1e 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }}
      />
    </div>
  );
}

export default function Home() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !statsVisible) {
          setStatsVisible(true);
        }
      },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, [statsVisible]);

  useEffect(() => {
    if (!statsVisible) return;
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;
    
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount1(Math.round(eased * 50));
      setCount2(Math.round(eased * 97));
      setCount3(Math.round(eased * 6));
      if (step >= steps) clearInterval(timer);
    }, interval);
    return () => clearInterval(timer);
  }, [statsVisible]);

  return (
    <div className="min-h-screen bg-transparent">
      <Header />
      <MarqueeStrip />

      {/* Hero Section */}
 <section
  className="relative pt-4 pb-20 md:pt-6 md:pb-24 lg:pt-6 lg:pb-28 overflow-visible"
>

      
        <BackgroundGrid />

        <div className="container relative z-10">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

    {/* LEFT SIDE — EXISTING BXN CONTENT */}
    <div>
            {/* Eyebrow */}
            <div className="flex items-center gap-3.5 mb-7">
              <div className="w-9 h-px" style={{ backgroundColor: '#9dff00' }} />
              <span className="text-xs tracking-widest" style={{ color: '#9dff00', fontFamily: "'JetBrains Mono', monospace" }}>
                BRAND X NETWORKING
              </span>
            </div>

            {/* Main Headline */}
            <h1
              className="text-5xl md:text-6xl lg:text-8xl mb-7"
              style={{
                fontFamily: "'Anton', sans-serif",
                color: '#ffffff',
                textTransform: 'uppercase',
                letterSpacing: '0.01em',
                lineHeight: '0.92'
              }}
            >
              We Don't Do
              <br />
              <span style={{ color: '#9dff00' }}>Marketing.</span>
              <br />
              We Build
              <br />
              <span style={{ color: '#9dff00' }}>Growth Systems.</span>
            </h1>

            {/* Subheading */}
            <p
              className="text-base md:text-lg mb-10 max-w-xl leading-relaxed"
              style={{ color: '#808080' }}
            >
              Most agencies sell you campaigns. We build the intellectual property, frameworks, and operating systems that make your business unstoppable.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <button
                  className="px-8 py-4 font-bold text-sm transition-all flex items-center gap-2 group"
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
                  Start Your Transformation
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link href="/services">
                <button
                  className="px-8 py-4 font-normal text-sm transition-colors border"
                  style={{
                    borderColor: '#1e1e1e',
                    color: '#ffffff',
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#9dff00';
                    e.currentTarget.style.color = '#9dff00';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#1e1e1e';
                    e.currentTarget.style.color = '#ffffff';
                  }}
                >
                  Explore Services
                </button>
              </Link>
            </div>
          </div>  
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center">

  {/* LEFT SIDE — YOUR EXISTING TEXT */}
  <div className="relative z-30">
    {/* KEEP ALL YOUR EXISTING HERO TEXT HERE */}
  </div>

  {/* RIGHT SIDE — TRANSPARENT X VIDEO */}
  <div className="relative z-30 flex items-center justify-center w-full -mt-60">
    <video
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      className="w-full max-w-[420px] md:max-w-[500px] lg:max-w-[600px] h-auto object-contain"
    >
      <source
        src={`${import.meta.env.BASE_URL}BXN_X_transparent.webm`}
        type="video/webm"
      />
    </video>
  </div>

</div>
 
    
    





</div>
</div>
</section>

      {/* Stats Section */}
      <section className="py-16 border-t border-b relative" style={{ borderColor: '#1e1e1e', backgroundColor: '#0f0f0f' }}>
        <BackgroundGrid />
        <div className="container relative z-10" ref={statsRef}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2" style={{ fontFamily: "'Anton', sans-serif", color: '#9dff00' }}>
                {count1}+
              </div>
              <p className="text-sm" style={{ color: '#808080' }}>Businesses Transformed</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2" style={{ fontFamily: "'Anton', sans-serif", color: '#9dff00' }}>
                {count2}%
              </div>
              <p className="text-sm" style={{ color: '#808080' }}>Client Retention Rate</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2" style={{ fontFamily: "'Anton', sans-serif", color: '#9dff00' }}>
                {count3}
              </div>
              <p className="text-sm" style={{ color: '#808080' }}>Proprietary Frameworks</p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem / Solution Section */}
      <section className="py-28 md:py-36 relative" style={{ backgroundColor: "py-20 bg-transparent" }}>
        <BackgroundGrid />
        <div className="container relative z-10">
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Problem */}
              <div>
                <span className="text-xs tracking-widest mb-4 block" style={{ color: '#9dff00', fontFamily: "'JetBrains Mono', monospace" }}>
                  THE PROBLEM
                </span>
                <h2
                  className="text-3xl md:text-4xl lg:text-5xl mb-6"
                  style={{ fontFamily: "'Anton', sans-serif", textTransform: 'uppercase', lineHeight: '0.92' }}
                >
                  Most Businesses Are Built on Guesswork
                </h2>
                <div className="space-y-4">
                  {[
                    'No clear systems for repeatable growth',
                    'Marketing spend with no measurable ROI',
                    'Fragmented operations that don\'t scale',
                    'No intellectual property protecting their edge'
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#ff4444' }} />
                      <p className="text-sm leading-relaxed" style={{ color: '#808080' }}>{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Solution */}
              <div className="border-l pl-12" style={{ borderColor: '#9dff00' }}>
                <span className="text-xs tracking-widest mb-4 block" style={{ color: '#9dff00', fontFamily: "'JetBrains Mono', monospace" }}>
                  OUR SOLUTION
                </span>
                <h2
                  className="text-3xl md:text-4xl lg:text-5xl mb-6"
                  style={{ fontFamily: "'Anton', sans-serif", textTransform: 'uppercase', lineHeight: '0.92' }}
                >
                  We Build Your Operating System
                </h2>
                <div className="space-y-4">
                  {[
                    'Proprietary methodologies tested through real work',
                    'Frameworks that produce measurable outcomes',
                    'Systems that scale without you',
                    'Intellectual property that becomes your moat'
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle size={16} className="mt-0.5 flex-shrink-0" style={{ color: '#9dff00' }} />
                      <p className="text-sm leading-relaxed" style={{ color: '#808080' }}>{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Preview */}
      <section
        className="py-28 md:py-36 relative"
        style={{ backgroundColor: '#0f0f0f' }}
      >
        <BackgroundGrid />
        <div className="container relative z-10">
          <AnimatedSection>
            <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-16">
              <div>
                <span className="text-xs tracking-widest mb-3 block" style={{ color: '#9dff00', fontFamily: "'JetBrains Mono', monospace" }}>
                  WHAT WE DO
                </span>
                <h2
                  className="text-4xl md:text-5xl"
                  style={{ fontFamily: "'Anton', sans-serif", textTransform: 'uppercase', lineHeight: '0.92' }}
                >
                  Services That Transform
                </h2>
              </div>
              <Link href="/services">
                <span className="text-sm flex items-center gap-2 cursor-pointer transition-colors hover:text-white" style={{ color: '#9dff00' }}>
                  View All Services <ArrowRight size={14} />
                </span>
              </Link>
            </div>
          </AnimatedSection>

          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ backgroundColor: '#1e1e1e' }}>
            {[
              { icon: <Shield size={28} />, title: 'Entity Setup', desc: 'Complete business formation incorporation, brand, compliance, and infrastructure. Done right from day one.' },
              { icon: <Brain size={28} />, title: 'BXN Method™', desc: 'Our proprietary methodology for solving business problems. Practical, repeatable, and evidence-based.' },
              { icon: <Target size={28} />, title: 'Framework Development', desc: 'Custom frameworks built from real work that produce measurable outcomes and become your IP.' },
              { icon: <TrendingUp size={28} />, title: 'Growth Systems', desc: 'Operating systems for sustainable growth playbooks, processes, and automation that scale.' },
              { icon: <Zap size={28} />, title: 'AI Integration', desc: 'Intelligent systems that understand your business, trained on your canon and methodology.' },
              { icon: <Users size={28} />, title: 'Brand & Identity', desc: 'Strategic brand architecture  logo, guidelines, voice, and visual identity that commands authority.' }
            ].map((service, idx) => (
              <AnimatedSection key={idx} delay={idx * 100}>
                <div
                  className="p-8 md:p-10 transition-all group cursor-pointer"
                  style={{ backgroundColor: '#0f0f0f' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#141414';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#0f0f0f';
                  }}
                >
                  <div className="mb-5 transition-colors" style={{ color: '#9dff00' }}>
                    {service.icon}
                  </div>
                  <h3
                    className="text-xl md:text-2xl mb-3"
                    style={{ fontFamily: "'Anton', sans-serif", textTransform: 'uppercase', lineHeight: '0.92' }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#808080' }}>
                    {service.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-28 md:py-36 relative" style={{ backgroundColor: "py-20 bg-transparent" }}>
        <BackgroundGrid />
        <div className="container relative z-10">
          <AnimatedSection>
            <div className="mb-16">
              <span className="text-xs tracking-widest mb-3 block" style={{ color: '#9dff00', fontFamily: "'JetBrains Mono', monospace" }}>
                OUR PROCESS
              </span>
              <h2
                className="text-4xl md:text-5xl"
                style={{ fontFamily: "'Anton', sans-serif", textTransform: 'uppercase', lineHeight: '0.92' }}
              >
                How We Work
              </h2>
            </div>
          </AnimatedSection>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { num: '01', title: 'Discover', desc: 'Deep dive into your business model, revenue streams, constraints, and growth blockers.' },
              { num: '02', title: 'Architect', desc: 'Design proprietary systems, frameworks, and methodologies specific to your challenges.' },
              { num: '03', title: 'Build', desc: 'Implement systems, processes, and infrastructure that drive measurable transformation.' },
              { num: '04', title: 'Scale', desc: 'Refine, automate, and expand turning your business into an unstoppable machine.' }
            ].map((step, idx) => (
              <AnimatedSection key={idx} delay={idx * 150}>
                <div className="relative">
                  <span
                    className="text-6xl font-bold block mb-4 opacity-20"
                    style={{ fontFamily: "'Anton', sans-serif", color: '#9dff00' }}
                  >
                    {step.num}
                  </span>
                  <h3
                    className="text-xl md:text-2xl mb-3"
                    style={{ fontFamily: "'Anton', sans-serif", textTransform: 'uppercase', lineHeight: '0.92' }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#808080' }}>
                    {step.desc}
                  </p>
                  {idx < 3 && (
                    <div className="hidden md:block absolute top-8 -right-4 text-gray-700">
                      <ArrowRight size={20} />
                    </div>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 relative bg-transparent">
        <BackgroundGrid />
        <div className="container relative z-10">
          <AnimatedSection>
            <div
              className="border p-12 md:p-16 relative text-center"
              style={{ borderColor: "#1e1e1e", backgroundColor: "transparent" }}
            >
              {/* Corner brackets */}
              <div className="absolute top-0 left-0 w-11 h-11" style={{ borderTop: '2px solid #9dff00', borderLeft: '2px solid #9dff00', marginTop: '-1px', marginLeft: '-1px' }} />
              <div className="absolute bottom-0 right-0 w-11 h-11" style={{ borderBottom: '2px solid #9dff00', borderRight: '2px solid #9dff00', marginBottom: '-1px', marginRight: '-1px' }} />
              <div className="absolute top-0 right-0 w-11 h-11" style={{ borderTop: '2px solid #9dff00', borderRight: '2px solid #9dff00', marginTop: '-1px', marginRight: '-1px' }} />
              <div className="absolute bottom-0 left-0 w-11 h-11" style={{ borderBottom: '2px solid #9dff00', borderLeft: '2px solid #9dff00', marginBottom: '-1px', marginLeft: '-1px' }} />

              <h2
                className="text-3xl md:text-5xl mb-6"
                style={{ fontFamily: "'Anton', sans-serif", textTransform: 'uppercase', lineHeight: '0.92' }}
              >
                Ready to Build Something
                <br />
                <span style={{ color: '#9dff00' }}>That Actually Works?</span>
              </h2>
              <p className="text-sm md:text-base leading-relaxed mb-8 max-w-lg mx-auto" style={{ color: '#808080' }}>
                Stop guessing. Start building systems that compound. Let's have a conversation about what your business actually needs.
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
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
