import React, { useState } from "react";
import forca0 from "./images/forca0.png";
import forca1 from "./images/forca1.png";
import forca2 from "./images/forca2.png";
import forca3 from "./images/forca3.png";
import forca4 from "./images/forca4.png";
import forca5 from "./images/forca5.png";
import forca6 from "./images/forca6.png";

function Game() {
    const [error, setError] = useState(0);
    const [img, setImg] = useState(forca0);
    function handleClick() {
        setError(error + 1);
        changeImg();
    }
    function changeImg() {
        switch (error + 1) {
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
    return (
        <React.Fragment>
            <img src={img} alt="Game" />
            <button onClick={handleClick} type="button">
                Choose Word
            </button>
        </React.Fragment>
    );
}

export default Game;
