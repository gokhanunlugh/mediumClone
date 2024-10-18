import Link from "next/link"
// import pathname from "../path/page"

export default  function Header() {
  

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