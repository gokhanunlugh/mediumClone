import { signup } from '../login/actions'

export default function SignUpPage() {
  return (
    <form className='login'>
      <h4>Sign up with email</h4>
      <p>Enter your email address to create an account.</p>
      <label htmlFor="email">Your email</label>
      <input id="email" name="email" type="email" required />
      <label htmlFor="password">Your password</label>
      <input id="password" name="password" type="password" required />
      <button formAction={signup}>Continue</button>
    </form>
  )
}