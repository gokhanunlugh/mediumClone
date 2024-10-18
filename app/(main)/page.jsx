import Link from "next/link";

export default function Home() {

  
  
  return (
    <>
      <div className="header">
        <img src="../img/Logo.svg" alt="" />
        <div className="navbar">
          <Link href={'/'} >Our Story</Link>
          <Link href={'/'} >Membership</Link>
          <Link href={'/'} >Write</Link>
          <Link href={'/login'} >Sign in</Link>
          <Link className="bg-button" href={'/'} >Get started</Link>
        </div>
      </div>
      <hr className="border" />
    <div className="container">
      <div className="context">
        <h1>Human <br />stories & ideas</h1>
        <h3>A place to read, write, and deepen your understanding</h3>
        <button>Start Reading</button>
      </div>
      <img src="../img/bg.png" width={460} height={600} alt="" />
    </div>
    <hr className="border fBorder" />
    <footer>
      <Link href={'/'} >Help</Link>
      <Link href={'/'} >Status</Link>
      <Link href={'/'} >About</Link>
      <Link href={'/'} >Careers</Link>
      <Link href={'/'} >Press</Link>
      <Link href={'/'} >Blog</Link>
      <Link href={'/'} >Privacy</Link>
      <Link href={'/'} >Terms</Link>
      <Link href={'/'} >Text to speech</Link>
      <Link href={'/'} >Teams</Link>

    </footer>
    </>
  );
}
