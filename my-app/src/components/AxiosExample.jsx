import React, { useState, useEffect } from "react";
import { getRandomJoke } from "../services/AxiosServices";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";

const AxiosExample = () => {
  const [joke, setJoke] = useState(null);
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const likeJoke = () => {
    setLikes(likes + 1);
  };

  const dislikeJoke = () => {
    setDislikes(dislikes + 1);
  };

  useEffect(() => {
    obtainJoke();
  }, []);

  const obtainJoke = () => {
    getRandomJoke()
      .then((response) => {
        if (response.status === 200) {
          // console.table(response.data.results[0])
          setJoke(response.data);
        }
      })
      .catch((error) => {
        alert(`Somethin went wrong: ${error}`);
      });
  };

  return (
    <div>
      <h1>Axios Example</h1>
      <br />
      {joke !== null ? (
        <div>
          <h3>Here is your Joke:</h3>
          <p>{joke.value}</p>
        </div>
      ) : null}
      <div style={{ display: "flex", justifyContent: "center", columnGap: 30 }}>
        <ThumbUpIcon onClick={likeJoke} color="success" />
        <ThumbDownIcon onClick={dislikeJoke} color="danger" />
      </div>
      <div style={{ display: "flex", justifyContent: "center", columnGap: 45 }}>
        <span>{likes}</span>
        <span>{dislikes}</span>
      </div>
      <div>
        <br />
        <p>Do you want another Joke?</p>
        <button onClick={obtainJoke}>Random Joke</button>
      </div>
    </div>
  );
};

export default AxiosExample;
