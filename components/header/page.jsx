"use client"
import Link from "next/link"
import { usePathname  } from "next/navigation"


export default function Header() {
  const pathname = usePathname();
  
  
  

  return (
    <header>
      <div className="iconSearch">
        <h1>Medium icon placehıolder</h1>
        <input type="text" name="search" id="" />
      </div>
      <div className="user">
        {pathname === '/new-story' ? <button type="submit" form="draft">Publish</button> : <Link href={'/new-story'}>Write</Link>}
      </div>
    </header>
  )
}