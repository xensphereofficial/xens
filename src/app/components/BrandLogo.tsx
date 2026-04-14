import { useMemo, useState } from 'react';

type BrandLogoProps = {
  size?: number;
  showText?: boolean;
  textClassName?: string;
};

export function BrandLogo({ size = 40, showText = true, textClassName = "text-2xl text-white" }: BrandLogoProps) {
  const candidates = useMemo(
    () => ['/logo.png', '/logo.webp', '/logo.jpg', '/logo.jpeg', '/favicon.png'],
    [],
  );
  const [index, setIndex] = useState(0);
  const [showFallback, setShowFallback] = useState(false);

  return (
    <div className="flex items-center gap-2">
      <div
        className="rounded-lg bg-gradient-to-br from-[#dcfd68] to-[#a8c952] flex items-center justify-center shadow-lg shadow-[#dcfd68]/30 overflow-hidden ring-1 ring-white/20"
        style={{ width: size, height: size }}
      >
        {!showFallback ? (
          <img
            src={candidates[index]}
            alt="Xensphere logo"
            className="h-full w-full object-contain bg-black/5"
            onError={() => {
              if (index < candidates.length - 1) {
                setIndex((value) => value + 1);
                return;
              }
              setShowFallback(true);
            }}
          />
        ) : null}
        {showFallback ? <span className="text-black text-lg">X</span> : null}
      </div>
      {showText ? <span className={textClassName}>Xensphere</span> : null}
    </div>
  );
}
