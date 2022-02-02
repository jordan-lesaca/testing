import { useState } from 'react'

function GameForm({ user, addGame}){
    const [ title, setTitle ] = useState("")
    const [ release_year, setRelease_year ] = useState(0)
    const [ genre, setGenre ] = useState("")

    function handleSubmit(e){
        e.preventDefault()
        setTitle("")
        setRelease_year(0)
        setGenre("")
        fetch("/games", {
            method: "POST",
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
          .then(g => addGame(g))
      }

return (
  <div>
      <form onSubmit={handleSubmit}>
          <h2>New Game</h2>
          <label> Title: </label>
          <input type="text" id="title" value={title} onChange={e => setTitle(e.target.value)}/>
          <label>Release Year: </label> 
          <input type="number" id="release_year" value={release_year} onChange={e => setRelease_year(e.target.value)}/>
          <label>Genre:  </label>
          <input type="text" id="genre" value={genre} onChange={e => setGenre(e.target.value)}/>
          <input type="submit"/>
      </form>
  </div>
)
}

export default GameForm