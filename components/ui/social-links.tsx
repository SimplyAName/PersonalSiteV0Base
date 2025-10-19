import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"
import { cn } from "@/lib/utils"

interface SocialLinksProps {
  size?: number
  baseColor?: string
  hoverColor?: string
  className?: string
}

export function SocialLinks({
  size = 8,
  baseColor = "text-muted-foreground",
  hoverColor = "text-foreground",
  className,
}: SocialLinksProps) {
  return (
    <div className={cn("flex items-center gap-4", className)}>
      <Link
        href="https://github.com/SimplyAName"
        className={`${baseColor} hover:${hoverColor} transition-colors`}
        target="_blank"
      >
        <Github className={`size-${size}`} />
        <span className="sr-only">GitHub</span>
      </Link>
      <Link
        href="https://www.linkedin.com/in/michael-loney-314634174/"
        className={`${baseColor} hover:${hoverColor} transition-colors`}
        target="_blank"
      >
        <Linkedin className={`size-${size}`} />
        <span className="sr-only">LinkedIn</span>
      </Link>
      <Link
        href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
        className={`${baseColor} hover:${hoverColor} transition-colors`}
        target="_blank"
      >
        <Mail className={`size-${size}`} />
        <span className="sr-only">Email</span>
      </Link>
    </div>
  )
}
