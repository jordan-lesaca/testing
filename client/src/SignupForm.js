import React, { useState } from 'react'

function SignupForm({ setUser }){
    const [ username, setUsername ] = useState("")
    const [ age, setAge ] = useState("")
    const [ competitive, setCompetitive ] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        fetch("/users", {
            method: "POST", 
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({username, age, competitive}),
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
            <form onSubmit={handleSubmit}>

                <label> Username: </label>
                <input 
                type="text" 
                id="username" 
                value={username} 
                onChange={e => setUsername(e.target.value)}/> 
                <br/>

                <label> Age: </label>
                <input type="number" 
                id="age" 
                value={age}
                onChange={e => 
                setAge(e.target.value)}/>
                <br/>

                <label> Competitve: </label>
                <select id="competitive" 
                name="competitive"
                value={competitive}
                onChange={e => 
                setCompetitive(e.target.value)}>
                <option value={true}>Yes</option>
                <option value={false}>No</option>
                </select>
                <br/>
                <br/>
                
                <button type="submit"> Submit </button>

            </form>
        </div>
    )
}

export default SignupForm