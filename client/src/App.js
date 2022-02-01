import './App.css';
import { useState, useEffect } from 'react'
import LoginForm from './LoginForm'
import Games from './Games'

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch("/me")
    .then((r) => {
      if(r.ok){
        r.json().then((user) => setUser(user))
      }
    })
  },[])

  function handleLogoutClick(){
    fetch("/logout", { 
      method: "DELETE" 
    })
     .then(r => {setUser(null)
    })
  }

  if (!user) return <LoginForm setUser={setUser} />

  return (
    <div className="App">
      <header className="App-header">
        <Games user={user} />
        <button onClick={handleLogoutClick}>LOG OUT</button>
      </header>
    </div>
  );
}

export default App;