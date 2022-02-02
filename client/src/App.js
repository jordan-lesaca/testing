import { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './Login'
import Games from './Games'
import Header from './Header'
// import Home from './Home'

function App() {
  const [user, setUser] = useState([]);
  console.log(user)

  useEffect(() => {
    fetch("/me").then(r => { 
      if (r.ok) { 
        r.json()
    .then(user => { setUser(user = user.username, user.age, user.competitive) } )
}})}, []);

// {id: 1, username: 'Chronx', age: 30, competitive: false}

// [
//   r.username = username, 
//   r.age = age, 
//   r.competitive = competitive
//    ] = setUser(user)

  function handleLogin(user) {
    setUser(user);
  }
  

  return (
    <div className="App">
      <Header user={user} />
      <Switch>
        <Route exact path="/login">
          <Login onLogin={handleLogin} />
        </Route>
        <Route exact path="/games/:id">
          <Games />
        </Route>
      </Switch>
    </div>
  );
}

export default App;