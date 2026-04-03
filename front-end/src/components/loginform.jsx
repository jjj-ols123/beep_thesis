function LoginForm() {

    function handleSubmit(e) {
        e.preventDefault();
        console.log("Login submitted");
    }

    return (
        <div className="form-overlay" >
            <div 
                className="form" 
            >
                <form onSubmit={handleSubmit} className="loginform">
                    <h2>Login</h2>

                    <label htmlFor="username">Username</label>
                    <input 
                        type="text" 
                        id="username" 
                        name="username" 
                        placeholder="Enter your Username"
                        className="input"
                    />

                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        placeholder="Enter your Password"
                        className="input"
                    />

                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
}

export default LoginForm;