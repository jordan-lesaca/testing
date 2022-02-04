import GameItem from './GameItem'
import { useEffect, useState } from 'react'


function Games( { user } ) {
  const [games, setGames] = useState([]);


//   function editGame(game){
//     const edited = games.map(g => {
//         if (game.id === g.id){
//             return game
//         }
//         return g
//     })
//     setGames(edited)
// }

useEffect(() => {
    fetch(`/games`)
    .then((r) => r.json())
    .then(setGames)    
    }, [] )

  return (
    <div>
        <h1>Welcome, {user.username}!</h1>
        <h2>Here is a list of previously added games from your group:</h2>



        {games.map(game => 
          <GameItem 
          // editGame={editGame} 
          // removeGame={removeGame}
          game={game} 
          key={game.id} 
          user={user}/>)}
    </div>

  );
}

export default Games;

// function removeGame(game){
//   setGames((games)=> games.filter(g => g.id !== game.id))
// }
