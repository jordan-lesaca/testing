import GameItem from './GameItem'
import { useEffect, useState } from 'react'

function Games( { user } ) {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch(`/games`)
    .then((r) => r.json())
    .then(games => setGames(games))    
    }, [])

  return (
    <div>
        <h1>Welcome, {user.username}!</h1>
        <h2>Here is a list of previously added games from your group:</h2>
          {games.map(game => 
          <GameItem 
          game={game} 
          key={game.id} 
          user={user}/>)}
    </div>
  );
}

export default Games;