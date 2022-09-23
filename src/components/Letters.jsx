import { LettersContainer } from "../styles";
import { Alphabet } from "../database/Database";
import Letter from "./Letter";

function Letters({
    chooseImg,
    word,
    wordGame,
    setWordGame,
    gameStarts,
    error,
    setError,
    clicked,
    setClicked,
    endGame,
    compareWords,
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
                    error={error}
                    setError={setError}
                    clicked={clicked}
                    setClicked={setClicked}
                    endGame={endGame}
                    compareWords={compareWords}
                />
            ))}
        </LettersContainer>
    );
}

export default Letters;
