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
          <Link href={'/'} >Sign in</Link>
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
    </>
  );
}
