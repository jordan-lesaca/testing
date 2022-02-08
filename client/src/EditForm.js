import { useState } from 'react'

function EditForm({ handleEditButton, editGame, game, user }){
    const [ title, setTitle ] = useState(game.title)
    const [ release_year, setRelease_year ] = useState(game.release_year)
    const [ genre, setGenre ] = useState(game.genre)   

    function handleSubmit(e){
        e.preventDefault()
        setTitle("")
        setGenre(0)
        setRelease_year("")
      
        fetch(`/games/${game.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title, 
                release_year, 
                genre, 
                user_id: user.id
            }),
        })
          .then(r => r.json())
          .then(g => {
              editGame(g)
              handleEditButton()
            })
      }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Title:</label>
                    <input type="text" id="title" value={title} onChange={e => setTitle(e.target.value)}/>
                <label>Release Year:</label>
                    <input type="number" id="release_year" value={release_year} onChange={e => setRelease_year(e.target.value)}/>
                <label>Genre:</label>
                    <input type="text" id="genre" value={genre} onChange={e => setGenre(e.target.value)}/>
                <button type="submit"> Submit </button>
            </form>
        </div>
    )
}

export default EditForm 