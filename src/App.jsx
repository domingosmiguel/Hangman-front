import { useState } from "react";
import { Alphabet } from "./database/Database";

import Game from "./components/Game.jsx";
import Guess from "./components/Guess.jsx";
import Letters from "./components/Letters.jsx";

import forca0 from "./components/images/forca0.png";
import forca1 from "./components/images/forca1.png";
import forca2 from "./components/images/forca2.png";
import forca3 from "./components/images/forca3.png";
import forca4 from "./components/images/forca4.png";
import forca5 from "./components/images/forca5.png";
import forca6 from "./components/images/forca6.png";

import { Content } from "./styles";
import GlobalStyle from "./globalStyles";

function App() {
    const [img, setImg] = useState(forca0);
    const [word, setWord] = useState("");
    const [wordGame, setWordGame] = useState("");
    const [gameStarts, setGameStarts] = useState(false);
    const [gameEnds, setGameEnds] = useState("win");
    const [error, setError] = useState(0);
    const [clicked, setClicked] = useState("");
    const [inputValue, setInputValue] = useState("");

    function chooseImg(howManyErrors) {
        switch (howManyErrors) {
            case 1:
                setImg(forca1);
                break;
            case 2:
                setImg(forca2);
                break;
            case 3:
                setImg(forca3);
                break;
            case 4:
                setImg(forca4);
                break;
            case 5:
                setImg(forca5);
                break;
            case 6:
                setImg(forca6);
                break;
            default:
                setImg(forca0);
                break;
        }
    }
    function endGame(victory) {
        setGameStarts(false);
        setWordGame(word.map((l) => `${l} `));
        setClicked([...Alphabet]);
        setInputValue("");
        if (victory) {
            setGameEnds("win");
        } else {
            chooseImg(6);
            setGameEnds("lose");
        }
    }
    function compareWords(word1, word2) {
        return word1.length === word2.length && word1.every((l, i) => l === word2[i][0]);
    }
    return (
        <Content>
            <GlobalStyle />
            <section>
                <Game
                    img={img}
                    chooseImg={chooseImg}
                    wordGame={wordGame}
                    setWord={setWord}
                    setWordGame={setWordGame}
                    gameStarts={gameStarts}
                    setGameStarts={setGameStarts}
                    gameEnds={gameEnds}
                    setError={setError}
                    setClicked={setClicked}
                />
                <Letters
                    chooseImg={chooseImg}
                    word={word}
                    wordGame={wordGame}
                    setWordGame={setWordGame}
                    gameStarts={gameStarts}
                    error={error}
                    setError={setError}
                    clicked={clicked}
                    setClicked={setClicked}
                    endGame={endGame}
                    compareWords={compareWords}
                />
                <Guess
                    word={word}
                    gameStarts={gameStarts}
                    inputValue={inputValue}
                    setInputValue={setInputValue}
                    endGame={endGame}
                    compareWords={compareWords}
                />
            </section>
        </Content>
    );
}

export default App;
