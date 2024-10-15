import Link from "next/link"


export default function Header() {

  return (
    <header>
      <div className="iconSearch">
        <h1>Medium icon placehıolder</h1>
        <input type="text" name="search" id="" />
      </div>
      <div className="user">
        <Link href={'/new-story'}>Write</Link>
      </div>
    </header>
  )
}