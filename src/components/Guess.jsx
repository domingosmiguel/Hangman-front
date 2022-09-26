function Guess({ word, gameStarts, inputValue, setInputValue, endGame, compareWords }) {
    function handleClick() {
        let equal = compareWords(word, inputValue);
        endGame(equal);
    }
    return (
        <footer>
            <input
                type="text"
                placeholder="I know it!"
                data-identifier="type-guess"
                disabled={!gameStarts ? true : false}
                onChange={(event) => setInputValue(event.target.value)}
                value={inputValue}
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
