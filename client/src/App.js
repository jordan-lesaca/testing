import { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './Login'
import Games from './Games'
// import GameForm from './GameForm'
// import Header from './Header'
// import LoginForm from './LoginForm'



//Done: 
//Add Signup x
//Add response for user when not able to log in x

//Stretch: 
//Add NavBar
//Make it so you can view only your games
//Clean up code
//Maybe add another model? 
//CSS?
//Check on validations and auths x


//To Do
//Add NavBar - Started
//Add additional attributes for sign up
//Have sign up form take you to another page
//When alert given, give option to click ok to close the window
//Add button for signup - Started

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => { //auto-login
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
  
  if (!user) return <Login onLogin={handleLogin} setUser={setUser} />

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Games onLogout={handleLogout} user={user} /> 
        </Route>
        <Route exact path="/games/">
        </Route>
      </Switch>
    </div>
  );
}

export default App;