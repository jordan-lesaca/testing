function GameItem({ game }) {
  const { id, title, release_year } = game;

  return (
    <div>
        <h1> GAME ITEM HERE</h1>
        <h1>{id} {title} {release_year}</h1>
    </div>
  );
}

export default GameItem;