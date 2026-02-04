import { useState } from "react";   
import "./login.css";
function Login() {
  const [Firstname, setFirstname] = useState("");
  const [Secondname, setSecondname] = useState("");
  const [Email, setEmail] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ Firstname, Secondname, Email});
    }
    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit} className="login-form">
                <input
                    type="text"
                    placeholder="First Name"
                    value={Firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Second Name"
                    value={Secondname}
                    onChange={(e) => setSecondname(e.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={Email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}
export default Login;