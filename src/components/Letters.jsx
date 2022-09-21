import { LettersContainer } from "../styles";
import { Alphabet } from "../database/Database";
import Letter from "./Letter";

function Letters() {
    return (
        <LettersContainer>
            {Alphabet.map((letter, i) => (
                <Letter key={i} letter={letter} />
            ))}
        </LettersContainer>
    );
}

export default Letters;
