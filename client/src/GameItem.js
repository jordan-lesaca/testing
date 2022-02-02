import EditForm from './EditForm'
import { useState } from 'react'

function GameItem({ user, game, editGame, removeGame }) {
  const [ editForm, setEditForm ] = useState(false)
  const [ editButton, setEditButton ] = useState("Show Edit Form")

  // const { id, title, release_year, genre } = game;

  function handleEditButtonClick(){
    setEditForm(!editForm)
        !editForm ? 
        setEditButton("Hide Edit Form") : 
        setEditButton("Show Edit Form")
    } 

    function handleDelete(game){
      fetch(`/games/${game.id}`, {method: "DELETE"}).then(r => {
          removeGame(game)
      })
    }

  return (
    <div>
        <h1> GAME ITEM HERE</h1>

          <h1> {game.title} </h1>
          <h2> {game.release_year} </h2>
          <h3> {game.genre} </h3> 

          <button onClick={e => handleDelete(game)}>Delete</button>

        <button onClick={e => 
          handleEditButtonClick()}> {editButton} </button>
            
            {editForm ? 
            <EditForm 
            handleEditButtonClick={handleEditButtonClick}
            editGame={editGame} 
            game={game} 
            user={user}/> : null} 
    </div>
  );
}

export default GameItem;