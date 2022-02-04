import GameItem from './GameItem'
import GameForm from './GameForm'
import { useEffect, useState } from 'react'


function Games( { user, onLogout } ) {
  const [games, setGames] = useState([]);

  function removeGame(game){
    setGames((games)=> games.filter(g => g.id !== game.id))
  }

  function addGame(game){
    setGames([...games, game])
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
        <h1>Welcome, {user.username}!</h1>

        {games.map(game => 
          <GameItem editGame={editGame} 
          removeGame={removeGame}
          game={game} 
          key={game.id} 
          user={user}/>)}

        
        <GameForm user={user} addGame={addGame} />


        <button onClick={onLogout}>LOG OUT</button>
    </div>
  );
}

export default Games;