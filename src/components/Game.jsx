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
    setClicked,
}) {
    function newWord({ data }) {
        chooseImg(0);
        const map = Array.prototype.map;
        setWord(() => map.call(data[0].word, (letter) => letter.toLowerCase()));
        setWordGame(() => map.call(data[0].word, () => "_ "));
        setGameStarts(true);
        setError(0);
        setClicked("");
    }
    function newWordFailed(error) {
        alert(error);
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
