import { Login, SingUp } from "./actions";

const LoginPage = () => {
    return (
        <form>
            <label htmlFor='email'>Email</label>
            <input type="email" id='email' name='email' required />

            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />

            <button formAction={Login}>Log in</button>
            <p>Don't have an account? <button formAction={SingUp}>Create one</button></p>
        </form>
    )
}

export default LoginPage;