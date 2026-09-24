import React from 'react';

interface CodekisLogoProps {
  className?: string;
  variant?: 'horizontal' | 'stacked' | 'icon';
  theme?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const CodekisLogo: React.FC<CodekisLogoProps> = ({
  className = '',
  variant = 'horizontal',
  theme = 'dark',
  size = 'md'
}) => {
  const isLight = theme === 'light';

  // Dimension scaling
  const iconSize = {
    sm: 32,
    md: 40,
    lg: 56,
    xl: 72
  }[size];

  const titleSizeClass = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl',
    xl: 'text-4xl'
  }[size];

  const subSizeClass = {
    sm: 'text-[9px] tracking-[0.25em]',
    md: 'text-[11px] tracking-[0.3em]',
    lg: 'text-[13px] tracking-[0.35em]',
    xl: 'text-[15px] tracking-[0.4em]'
  }[size];

  // SVG Stylized Monogram CK from brand board
  const SymbolSVG = (
    <svg
      width={iconSize}
      height={iconSize}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 transition-transform duration-300 group-hover:scale-105"
      aria-hidden="true"
    >
      <defs>
        {/* Navy Gradient for 'C' Arc */}
        <linearGradient id="codekisNavyGrad" x1="10" y1="15" x2="65" y2="85" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#072F54" />
          <stop offset="60%" stopColor="#04162B" />
          <stop offset="100%" stopColor="#020B16" />
        </linearGradient>

        {/* Navy Light Accent (for dark mode) */}
        <linearGradient id="codekisNavyLightGrad" x1="10" y1="15" x2="65" y2="85" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#2563EB" />
          <stop offset="50%" stopColor="#072F54" />
          <stop offset="100%" stopColor="#04162B" />
        </linearGradient>

        {/* Gold Gradient for 'K' Chevron */}
        <linearGradient id="codekisGoldGrad" x1="45" y1="20" x2="90" y2="80" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#F5C06A" />
          <stop offset="35%" stopColor="#C38735" />
          <stop offset="85%" stopColor="#8A5317" />
          <stop offset="100%" stopColor="#6E4212" />
        </linearGradient>

        {/* Gold Highlight Sheen */}
        <linearGradient id="codekisGoldHighlight" x1="50" y1="30" x2="85" y2="50" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.6" />
          <stop offset="40%" stopColor="#F5C06A" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#C38735" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Stylized 'C' Arc - bold sweep on the left */}
      <path
        d="M 52 16
           C 28 16, 12 32, 12 50
           C 12 68, 28 84, 52 84
           C 58 84, 63 82.5, 67 80
           L 59 70
           C 56.5 71.5, 54 72, 51 72
           C 34 72, 24 60, 24 50
           C 24 40, 34 28, 51 28
           C 54 28, 56.5 28.5, 59 30
           L 67 20
           C 63 17.5, 58 16, 52 16 Z"
        fill={isLight ? "url(#codekisNavyLightGrad)" : "url(#codekisNavyGrad)"}
      />

      {/* Secondary inner contour for dynamic dimension */}
      <path
        d="M 49 23
           C 31 23, 19 35, 19 50
           C 19 65, 31 77, 49 77
           C 54 77, 58 75.5, 62 73.5
           L 66 79
           C 61 82, 55 84, 49 84
           C 26 84, 11 67, 11 50
           C 11 33, 26 16, 49 16
           C 55 16, 61 18, 66 21
           L 62 26.5
           C 58 24.5, 54 23, 49 23 Z"
        fill={isLight ? "#60A5FA" : "#072F54"}
        fillOpacity={isLight ? "0.9" : "0.5"}
      />

      {/* Stylized 'K' Upper Wing (Golden dynamic chevron) */}
      <path
        d="M 42 50
           L 66 20
           L 84 20
           L 56 50
           Z"
        fill="url(#codekisGoldGrad)"
      />

      {/* Stylized 'K' Lower Wing (Golden angled branch) */}
      <path
        d="M 42 50
           L 56 50
           L 86 80
           L 68 80
           Z"
        fill="url(#codekisGoldGrad)"
      />

      {/* Golden Highlight Edge on 'K' */}
      <path
        d="M 46 50
           L 68 22
           L 73 22
           L 53 50
           Z"
        fill="url(#codekisGoldHighlight)"
      />
    </svg>
  );

  if (variant === 'icon') {
    return <div className={`inline-flex items-center ${className}`}>{SymbolSVG}</div>;
  }

  const textColorClass = isLight ? 'text-white' : 'text-[#04162B]';
  const labColorClass = isLight ? 'text-slate-300' : 'text-[#475569]';
  const lineRuleColor = isLight ? 'bg-[#C38735]' : 'bg-[#C38735]';

  if (variant === 'stacked') {
    return (
      <div className={`flex flex-col items-center text-center group select-none ${className}`}>
        {SymbolSVG}
        <div className="mt-3">
          <span className={`font-heading font-extrabold tracking-tight ${titleSizeClass} ${textColorClass} block leading-tight`}>
            Codekis
          </span>
          <div className="flex items-center justify-center gap-2 mt-1">
            <span className={`w-5 h-[1.5px] ${lineRuleColor}`} />
            <span className={`font-heading font-bold uppercase ${subSizeClass} text-[#C38735]`}>
              LAB
            </span>
            <span className={`w-5 h-[1.5px] ${lineRuleColor}`} />
          </div>
        </div>
      </div>
    );
  }

  // Default 'horizontal'
  return (
    <div className={`flex items-center gap-3.5 group select-none ${className}`}>
      {SymbolSVG}
      <div className="flex flex-col">
        <span className={`font-heading font-extrabold tracking-tight ${titleSizeClass} ${textColorClass} leading-none group-hover:text-[#072F54] transition-colors`}>
          Codekis
        </span>
        <div className="flex items-center gap-2 mt-1">
          <span className={`w-3.5 h-[1.5px] ${lineRuleColor}`} />
          <span className={`font-heading font-extrabold uppercase ${subSizeClass} text-[#C38735]`}>
            LAB
          </span>
          <span className={`w-3.5 h-[1.5px] ${lineRuleColor}`} />
        </div>
      </div>
    </div>
  );
};
