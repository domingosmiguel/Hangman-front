import { LettersContainer } from "../styles";
import { Alphabet } from "../database/Database";
import Letter from "./Letter";

function Letters({
    chooseImg,
    word,
    wordGame,
    setWordGame,
    gameStarts,
    setGameStarts,
    setGameEnds,
    error,
    setError,
    clicked,
    setClicked,
    compareWords,
    setMessage,
}) {
    return (
        <LettersContainer>
            {Alphabet.map((letter, index) => (
                <Letter
                    key={index}
                    index={index}
                    letter={letter}
                    chooseImg={chooseImg}
                    word={word}
                    wordGame={wordGame}
                    setWordGame={setWordGame}
                    gameStarts={gameStarts}
                    setGameStarts={setGameStarts}
                    setGameEnds={setGameEnds}
                    error={error}
                    setError={setError}
                    clicked={clicked}
                    setClicked={setClicked}
                    compareWords={compareWords}
                    setMessage={setMessage}
                />
            ))}
        </LettersContainer>
    );
}

export default Letters;
