import React from "react";
import axios from "axios";

function Game({
    img,
    chooseImg,
    wordGame,
    setWord,
    setWordGame,
    gameStarts,
    setGameStarts,
    gameEnds,
    setError,
    clicked,
    setClicked,
    setMessage,
}) {
    function newWord({ data }) {
        chooseImg(0);
        setWord(() => Object.values(data[0].word).map((letter) => letter.toLowerCase()));
        setWordGame(() => Object.values(data[0].word).map(() => "_ "));
        setGameStarts(true);
        setError(0);
        setClicked(
            clicked.map(() => {
                return false;
            })
        );
        setMessage("");
    }
    function newWordFailed(error) {
        console.log(error);
    }
    function handleClick() {
        axios
            .get("https://random-words-api.vercel.app/word/verb/")
            .then(newWord)
            .catch(newWordFailed);
    }
    return (
        <React.Fragment>
            <img src={img} alt="Game" data-identifier="game-image" />
            <button onClick={handleClick} type="button" data-identifier="choose-word">
                Choose Word
            </button>
            <div
                style={{ color: !gameStarts ? (gameEnds === "lose" ? "red" : "green") : "black" }}
                data-identifier="word"
            >
                {wordGame}
            </div>
        </React.Fragment>
    );
}

export default Game;
