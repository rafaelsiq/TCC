function Index() {
    return (
        <Login />
    )
}

function Login() {
    return (
        <div class="main">
            <div class="header">
                <a href="/login">Login</a>
                <a href="/signup">Sign Up</a>
            </div>

            <div class="login-form">
                <div class="login-username">
                    <p>Username</p>
                    <input type="username" placeholder="Username Example" id="username_input" />
                </div>

                <div class="login-password">
                    <p>Password</p>
                    <input type="password" placeholder="************" id="password_input" />
                </div>

                <div class="login-remember">
                    <input type="checkbox" name="Remember me" id="remember_checkbox" />
                    <p>Remember me</p>
                </div>

                <div class= "login-confirmation">
                    <button id="login_btn">Login</button>
                </div>

                <a href="#" id="forgot_password">Forgot my password</a>
            </div>
        </div>
    )
}

export default Index