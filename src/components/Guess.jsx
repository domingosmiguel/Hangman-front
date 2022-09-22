function Guess({
    chooseImg,
    word,
    setWordGame,
    gameStarts,
    setGameStarts,
    setGameEnds,
    setError,
    clicked,
    setClicked,
    compareWords,
    message,
    setMessage,
    handleInputChange,
}) {
    function handleClick() {
        let equal = word.length === message.length && word.every((l, i) => l === message[i]);
        setMessage("");
        if (equal) {
            setWordGame(word.map((l) => `${l} `));
            setGameStarts(false);
            setGameEnds("win");
            setClicked(
                clicked.map(() => {
                    return true;
                })
            );
        } else {
            chooseImg(6);
            setWordGame(word.map((l) => `${l} `));
            setGameStarts(false);
            setGameEnds("lose");
            setClicked(
                clicked.map(() => {
                    return true;
                })
            );
        }
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
