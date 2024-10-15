"use client"
import { usePathname  } from "next/navigation"



export default function pathname(){
  const pathname = usePathname();
  
  
  return pathname
}