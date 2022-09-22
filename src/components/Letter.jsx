function Letter({
    letter,
    index,
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
    function handleClick() {
        let gotItRight = false;
        const newClicked = [...clicked];
        newClicked[index] = true;
        setClicked(newClicked);
        setWordGame(
            word.map((l, index) => {
                if (l === letter) {
                    gotItRight = true;
                    return `${l} `;
                }
                return wordGame[index];
            })
        );
        if (!gotItRight) {
            setError(error + 1);
            chooseImg(error + 1);
            if (error + 1 === 6) {
                chooseImg(6);
                setWordGame(word.map((l) => `${l} `));
                setGameStarts(false);
                setGameEnds("lose");
                setClicked(
                    clicked.map(() => {
                        return true;
                    })
                );
                setMessage("");
            }
        }
    }
    return (
        <button
            className="letters"
            data-identifier="letter"
            onClick={handleClick}
            disabled={!gameStarts || clicked[index] ? true : false}
        >
            <p>{letter}</p>
        </button>
    );
}

export default Letter;
