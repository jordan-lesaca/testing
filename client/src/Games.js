import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Article() {
  const [game, setGame ] = useState(null)
  const { id } = useParams();

  useEffect(() => {
    setGame("")
    fetch(`/games/${id}`).then((r) => {
      if (r.ok) {
        r.json().then((game) =>
          setGame(game)
        );
      } else {
        r.json().then((r) =>
        setGame(null),

        );
      }
    });
  }, [id]);

  console.log(game)

//   const { title, author, date, content, minutes_to_read } = article;
//   const emojis = makeEmojiList(minutes_to_read);

  return (
    <div>
      <h1>{game}</h1>
    </div>
  );
}

export default Article;
