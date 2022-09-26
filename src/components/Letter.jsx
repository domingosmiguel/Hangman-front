function Letter({
    letter,
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
    function handleClick() {
        let gotItRight = false;
        setClicked([...clicked, letter]);
        const newWordGame = word.map((l, index) => {
            if (l === letter) {
                gotItRight = true;
                return `${l} `;
            }
            return wordGame[index];
        });
        setWordGame(newWordGame);
        if (!gotItRight) {
            setError(error + 1);
            chooseImg(error + 1);
            if (error + 1 === 6) {
                endGame(false);
            }
        } else {
            const win = compareWords(word, newWordGame);
            if (win) {
                endGame(win);
            }
        }
    }
    return (
        <button
            className="letters"
            data-identifier="letter"
            onClick={handleClick}
            disabled={!gameStarts || clicked.includes(letter) ? true : false}
        >
            <p>{letter}</p>
        </button>
    );
}

export default Letter;
