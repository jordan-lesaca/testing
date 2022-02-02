import GameItem from './GameItem'
import { useEffect, useState } from 'react'

function Games( { user, handleLogout } ) {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch("/games")
      .then((r) => r.json())
      .then(setGames);
  }, []);


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
        {games.map(game => 
          <GameItem editGame={editGame} 
          game={game} 
          key={game.id} 
          user={user}/>)}



        <button onClick={handleLogout}>LOG OUT</button>
        <h3>GAMES.JS END ---  --- </h3>
    </div>
  );
}

export default Games;