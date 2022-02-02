import React, { useState } from 'react'
// import SignupForm from './SignupForm'

function LoginForm({setUser}){
    const [ username, setUsername ] = useState("")

    function handleSubmit(e){
        e.preventDefault()
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify({username}),
        }).then(r => { 
            r.json().then(user => setUser(user))
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label> Enter Username to Signin: </label>
                <input type="text" 
                id="username" 
                value={username}
                onChange={e => 
                setUsername(e.target.value)}/>
            </form>
            <h4>Create an account</h4>
            {/* <SignupForm setUser={setUser} /> */}
        </div>
    )
}

export default LoginForm