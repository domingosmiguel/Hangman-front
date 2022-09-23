function Guess({ word, gameStarts, message, handleInputChange, endGame, compareWords }) {
    function handleClick() {
        let equal = compareWords(word, message);
        endGame(equal);
    }
    return (
        <footer>
            <input
                type="text"
                placeholder="I know it!"
                data-identifier="type-guess"
                disabled={!gameStarts ? true : false}
                onChange={handleInputChange}
                value={message}
            />
            <button
                type="button"
                data-identifier="guess-button"
                disabled={!gameStarts ? true : false}
                onClick={handleClick}
            >
                Guess
            </button>
        </footer>
    );
}

export default Guess;
