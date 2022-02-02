import { useEffect, useState } from "react";
import GameItem from "./GameItem";

function MemberGame() {
  const [ games, setGames ] = useState([]);

  useEffect(() => {
    setGames("")
    fetch("/members_only_games").then((r) => {
      if (r.ok) {
        r.json().then((games) =>
          setGames(games)
        );
      } else {
        r.json()
        .then((setGames(null))
        );
      }
    });
  }, []);

  return (
    <main>
      <h2>Member Only Articles</h2>
      {articles.map((article) => (
        <GameItem key={article.id} article={article} />
      ))}
    </main>
  );
}

export default MemberGame;