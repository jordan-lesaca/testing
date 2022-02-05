
import { useState } from "react";
import SignupForm from './SignupForm'

function Login({ onLogin, setUser }) {
  const [username, setUsername] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username }),
    }).then((r) => {
      if (r.ok) {
        r.json()
        .then((user) => onLogin(user));
      } else {r.json().then(error => console.log(error))}
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Login:</h3>
        <label htmlFor="username">Username: </label>
        <input
        type="text"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Login</button>
     </form>

    <h4>Create an account:</h4>
      <SignupForm setUser={setUser} />
    </div>
  );
}

export default Login;