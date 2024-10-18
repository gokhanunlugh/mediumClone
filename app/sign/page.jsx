import Link from "next/link";

export default function Sign(){

  return (
    <div className="signPage">
      <h2>Welcome back.</h2>
      <Link className="SignEmail" href={'/login'}>Sign in with email</Link>
      <p>No account? <Link className="signUpLink" href={'/signup'}>Create one</Link></p>
    </div>
  )
}