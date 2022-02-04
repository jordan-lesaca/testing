import { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './Login'
import Games from './Games'
// import GameForm from './GameForm'
import About from './About'
// import Header from './Header'
// import LoginForm from './LoginForm'
import Home from './Home'
import NavBar from './NavBar'



//Done: 
//Add Signup x
//Add response for user when not able to log in x
//Add button for signup x
//Add additional attributes for sign up x

//Stretch: 
//Add NavBar
//Make it so you can view only your games
//Clean up code
//Maybe add another model? 
//CSS?
//Check on validations and auths x

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
  
  // function handleLogout() {
  //   setUser(null);
  // }

  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => setUser(null));
  }
  
  if (!user) return <Login onLogin={handleLogin} setUser={setUser} />

  return (
    <div className="App">
      <NavBar onLogout={handleLogout} />
      <Switch>   
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/games">
          <Games onLogout={handleLogout} user={user} /> 
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
      </Switch>
    </div>
  );
}

export default App;