function GameItem({ game }) {

  return (
    <div>
        <h1> {game.title} </h1>
        <h2> {game.release_year} </h2>
        <h3> {game.genre} </h3> 

    </div>
  );
}
export default GameItem;