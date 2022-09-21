import React from "react";
import axios from "axios";

function Game({ img, wordGame, setWord, setWordGame }) {
    function newWord({ data }) {
        setWord(() => Object.values(data[0].word).map((letter) => `${letter.toLowerCase()}`));
        setWordGame(() => Object.values(data[0].word).map(() => "_ "));
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
            <div>{wordGame}</div>
            <img src={img} alt="Game" data-identifier="game-image" />
            <button onClick={handleClick} type="button" data-identifier="choose-word">
                Choose Word
            </button>
        </React.Fragment>
    );
}

export default Game;
