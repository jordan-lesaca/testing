import GameItem from './GameItem'
import { useEffect, useState } from 'react'

function Games( { handleLogout } ) {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch("/games")
      .then((r) => r.json())
      .then(setGames);
  }, []);



  return (
    <div>
        <h1>GAMES.js</h1>
        {games.map(game => 
        <GameItem game={game} key={game.id} />)} 

        <h3>GAMES.JS END ---  --- </h3>
        <button onClick={handleLogout}>LOG OUT</button>
    </div>
  );
}

export default Games;