import { Alert } from "@/components/ui/alert";
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export function scrollToTop() {
  
  
  const header = document.getElementById("TopHeaderId")?.clientHeight || 0;
  const navBar = document.getElementById("NavBarId")?.clientHeight || 0; 
  if (header && navBar) {
    window.scrollTo({
      behavior: "smooth",
      top: header + navBar + 50
    })
    window.scrollTo({
      behavior: "smooth",
      top: header + navBar
    })
  }
}