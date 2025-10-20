import {clsx, type ClassValue} from "clsx"
import {twMerge} from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

interface ScrollOptions {
  onComplete?: () => void
}

export function scrollToSection(sectionId: string, options?: ScrollOptions) {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
    if (options?.onComplete) {
      options.onComplete()
    }
  }
}
