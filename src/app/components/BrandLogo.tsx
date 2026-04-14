type BrandLogoProps = {
  size?: number;
  showText?: boolean;
  textClassName?: string;
};

export function BrandLogo({ size = 40, showText = true, textClassName = "text-2xl text-white" }: BrandLogoProps) {
  return (
    <div className="flex items-center gap-2">
      <div
        className="rounded-lg bg-gradient-to-br from-[#dcfd68] to-[#a8c952] flex items-center justify-center shadow-lg shadow-[#dcfd68]/30 overflow-hidden"
        style={{ width: size, height: size }}
      >
        <img
          src="/logo.png"
          alt="Xensphere logo"
          className="h-full w-full object-contain bg-black/5"
          onError={(event) => {
            event.currentTarget.style.display = "none";
            const fallback = event.currentTarget.nextElementSibling as HTMLElement | null;
            if (fallback) fallback.style.display = "inline";
          }}
        />
        <span className="text-black hidden">X</span>
      </div>
      {showText ? <span className={textClassName}>Xensphere</span> : null}
    </div>
  );
}
