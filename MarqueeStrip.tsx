/**
 * Marquee Strip Component
 * 
 * Scrolling text animation below header
 * Shows repeated text with neon lime accents
 */

export default function MarqueeStrip() {
  const items = Array(4).fill(null);

  return (
    <div
      className="border-t overflow-hidden whitespace-nowrap py-2"
      style={{
        borderColor: '#1e1e1e',
        backgroundColor: '#0f0f0f'
      }}
    >
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        .marquee-track {
          display: inline-flex;
          animation: scroll 28s linear infinite;
        }
        
        @media (prefers-reduced-motion: reduce) {
          .marquee-track {
            animation: none;
          }
        }
      `}</style>
      
      <div className="marquee-track">
        {items.map((_, i) => (
          <div key={i} className="flex items-center gap-4 px-0">
            <span
              className="text-xs"
              style={{ color: '#808080' }}
            >
              Building intellectual property for business transformation
            </span>
            <span
              className="text-xs font-bold px-4"
              style={{ color: '#9dff00' }}
            >
              ✕
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
