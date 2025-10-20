interface LogoProps {
  size?: number
}

export function PersonalLogo({size = 8}: LogoProps) {
  return (
    <div className="flex items-center gap-2 font-bold">
      <div
        className={`size-${size} from-primary to-primary/70 text-primary-foreground flex items-center justify-center rounded-full bg-linear-to-br p-1`}
      >
        ML
      </div>
      <span>Michael Loney</span>
    </div>
  )
}
