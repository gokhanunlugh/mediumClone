import { login, signOut, signup } from './actions'

export default function LoginPage() {
  return (
    <form className='login'>
      <h4>Sign in with email</h4>
      <p>Enter the email address associated with your account, and we’ll send a magic link to your inbox.</p>
      <label htmlFor="email">Your email</label>
      <input id="email" name="email" type="email" required />
      <label htmlFor="password">Your password</label>
      <input id="password" name="password" type="password" required />
      <button formAction={login}>Continue</button>
    </form>
  )
}