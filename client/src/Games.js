import GameItem from './GameItem'
import GameForm from './GameForm'
import { useEffect, useState } from 'react'


function Games( { user, onLogout } ) {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch("/games")
      .then((r) => r.json())
      .then(setGames);
  }, []);

  function removeGame(game){
    setGames((games)=> games.filter(g => g.id !== game.id))
  }

  function addGame(game){
    setGames([...games, game])
  }

  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => onLogout());
  }


  function editGame(game){
    const edited = games.map(g => {
        if (game.id === g.id){
            return game
        }
        return g
    })
    setGames(edited)
}

useEffect(() => {
    fetch(`/games`)
    .then((r) => r.json())
    .then(setGames)    
    }, [] )



  return (
    <div>
        <h1>GAMES.js</h1>
        <GameForm user={user} addGame={addGame} />
        {games.map(game => 
          <GameItem editGame={editGame} 
          removeGame={removeGame}
          game={game} 
          key={game.id} 
          user={user}/>)}



        <button onClick={handleLogout}>LOG OUT</button>
        <h3>GAMES.JS END ---  --- </h3>
    </div>
  );
}

export default Games;