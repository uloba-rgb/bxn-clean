import { useEffect, useMemo, useState } from "react";

/**
 * BXN design reminder: dark tech-forward minimalism, neon lime signal, geometric motion.
 * The graph is intentionally global and atmospheric: it follows page scroll while staying
 * behind every route's content, so the site feels like one connected operating system.
 */
export default function LiveGraph() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let frame = 0;

    const updateProgress = () => {
      const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const nextProgress = Math.min(1, Math.max(0, window.scrollY / maxScroll));
      setScrollProgress(nextProgress);
      frame = 0;
    };

    const handleScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateProgress);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  const { linePath, areaPath, endPoint } = useMemo(() => {
    const totalPoints = 48;
    const visiblePoints = Math.max(3, Math.ceil(scrollProgress * (totalPoints - 3)) + 3);
    const points = Array.from({ length: visiblePoints }, (_, index) => {
      const ratio = index / (totalPoints - 1);
      const x = ratio * 100;
      const baseline = 88 - ratio * 70;
      const wave = Math.sin(index * 0.82) * 7 + Math.cos(index * 0.31) * 3;
      const y = Math.max(8, Math.min(92, baseline + wave));
      return { x, y };
    });

    const path = points.map(({ x, y }, index) => `${index === 0 ? "M" : "L"} ${x.toFixed(2)} ${y.toFixed(2)}`).join(" ");
    const finalPoint = points[points.length - 1];
    const filled = `${path} L ${finalPoint.x.toFixed(2)} 100 L 0 100 Z`;

    return { linePath: path, areaPath: filled, endPoint: finalPoint };
  }, [scrollProgress]);

  return (
    <div className="pointer-events-none fixed inset-0 z-20 overflow-hidden mix-blend-screen" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_30%,rgba(157,255,0,0.07),transparent_34%),linear-gradient(180deg,rgba(10,10,10,0.18),rgba(10,10,10,0.72))]" />
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full opacity-60">
        <defs>
          <linearGradient id="bxn-live-graph-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#9dff00" stopOpacity="0.24" />
            <stop offset="0.72" stopColor="#9dff00" stopOpacity="0.035" />
            <stop offset="1" stopColor="#9dff00" stopOpacity="0" />
          </linearGradient>
          <filter id="bxn-live-graph-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="1.8" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>
        <path d={areaPath} fill="url(#bxn-live-graph-fill)" />
        <path d={linePath} fill="none" stroke="#9dff00" strokeWidth="0.32" vectorEffect="non-scaling-stroke" opacity="0.24" filter="url(#bxn-live-graph-glow)" />
        <path d={linePath} fill="none" stroke="#baff55" strokeWidth="0.18" vectorEffect="non-scaling-stroke" opacity="1" />
        <circle cx={endPoint.x} cy={endPoint.y} r="0.9" fill="#caff73" opacity="1" />
        <circle cx={endPoint.x} cy={endPoint.y} r="2.4" fill="none" stroke="#9dff00" strokeWidth="0.08" opacity="0.6" />
      </svg>
      <div className="absolute bottom-6 left-6 hidden items-center gap-3 text-[10px] uppercase tracking-[0.22em] text-[#9dff00]/65 md:flex">
        <span className="h-px w-8 bg-[#9dff00]/70" />
        <span>Live growth signal {Math.round(scrollProgress * 100)}%</span>
      </div>
    </div>
  );
}
