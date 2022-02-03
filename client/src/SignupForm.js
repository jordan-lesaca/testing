import React, { useState } from 'react'

function SignupForm({ setUser }){
    const [ username, setUsername ] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        fetch("/users", {
            method: "POST", 
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({username}),
        }).then(r => {
            if (r.ok) { r.json()
                .then(user => setUser(user))
            } else {r.json().then(errors => 
                alert(errors.errors))
            }
          })
        }

    return(
        <div>
            <h1> SIGN UP FORM : </h1>
            <form onSubmit={handleSubmit}>
                <label> Username: </label>
                <input 
                type="text" 
                id="username" 
                value={username} 
                onChange={e => setUsername(e.target.value)}/> 

            </form>
        </div>
    )
}

export default SignupForm


// <button type="submit"> {console.log("Submit")} Submit </button>