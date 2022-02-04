import { useState, useEffect } from "react"
import MyGamesCard from './MyGamesCard'


function MyGames({ user }){
    const [games, setGames] = useState([]);

    function editGame(game){
        const edited = games.map(g => {
            if (game.id === g.id){
                return game
            }
            return g
        })
        setGames(edited)
    }

    function removeGame(game){
        setGames((games)=> games.filter(g => g.id !== game.id))
      }

    useEffect(() => {
        fetch(`/mygames`)
        .then((r) => r.json())
        .then(setGames)    
        }, [] )
    

    return (
        <div> 
            <h1> My Games </h1>
            
            {games.map(game => 
            <MyGamesCard game={game} 
            key={game.id} 
            user={user}
            editGame={editGame}
            removeGame={removeGame}
            />)}

        </div>
    )
}

export default MyGames