interface LogoProps {
  size?: number;
}

export function Logo({ size = 8 }: LogoProps) {
  return (
    <div className="flex items-center gap-2 font-bold">
      <div
        className={`size-${size} rounded-full bg-linear-to-br from-primary to-primary/70 flex items-center justify-center text-primary-foreground p-1`}
      >
        ML
      </div>
      <span>Michael Loney</span>
    </div>
  );
}
