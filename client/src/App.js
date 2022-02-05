import { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './Login'
import Games from './Games'
import About from './About'
import NavBar from './NavBar'
import GameForm from './GameForm'
import MyGames from './MyGames'

//Done: 
//Add Signup x
//Add response for user when not able to log in x
//Add button for signup x
//Add additional attributes for sign up x
//Add NavBar x
//Make it so you can view only your games x
//Check on validations and auths x

//Stretch: 
//Clean up code
//Maybe add another model? 
//Check on validations and auths x
//Add Search Bar

function App() {
  const [user, setUser] = useState(null);
  const [ games, setGames ] = useState([])

  useEffect(() => { //auto-login
    fetch("/me").then((r) => { 
      if (r.ok) { 
        r.json().then((user) => setUser(user))}
        
      })}, []);  

  function handleLogin(user) {
    setUser(user);
  }

  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => setUser(null));
  }
  
  function addGame(game){
    setGames([...games, game])
  }

  if (!user) return <Login onLogin={handleLogin} setUser={setUser} />

  return (
    <div className="App">
      <NavBar onLogout={handleLogout} user={user} addGame={addGame}/>

      <Switch>   

        <Route exact path="/">
          <Games user={user} addGame={addGame}/> 
        </Route>

        <Route exact path="/gameform">
          <GameForm user={user} addGame={addGame}/>
        </Route>

        <Route exact path="/mygames">
          <MyGames games={games} user={user} addGame={addGame}/>
        </Route>

        <Route exact path="/about">
          <About />
        </Route>

      </Switch>
    </div>
  );
}

export default App;