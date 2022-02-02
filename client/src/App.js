import { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './Login'
import Games from './Games'
// import GameForm from './GameForm'
// import Header from './Header'
// import LoginForm from './LoginForm'

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((r) => { 
      if (r.ok) { 
        r.json().then((user) => setUser(user))}
    
})}, []);

  function handleLogin(user) {
    setUser(user);
  }
  
  function handleLogout() {
    setUser(null);
  }
  
  if (!user) return <Login onLogin={handleLogin} />

  return (
    <div className="App">

      <Switch>

        <Route exact path="/">
          <Games handleLogout={handleLogout} /> 
        </Route>

        <Route exact path="/games/">

        </Route>


      </Switch>
    </div>
  );
}

export default App;

// notes:
// Log-in seems to be case sensitive


/* <Route exact path="/login">
/* <Login onLogin={handleLogin}  /> */
// </Route> 

//<Games user={user} onLogout={handleLogout}/>