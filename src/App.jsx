import { useState } from "react";

import Game from "./components/Game.jsx";
import Guess from "./components/Guess.jsx";
import Letters from "./components/Letters.jsx";

import forca0 from "./components/images/forca0.png";
// import forca1 from "./images/forca1.png";
// import forca2 from "./images/forca2.png";
// import forca3 from "./images/forca3.png";
// import forca4 from "./images/forca4.png";
// import forca5 from "./images/forca5.png";
// import forca6 from "./images/forca6.png";

import { Content } from "./styles";

function App() {
    const [word, setWord] = useState("");
    const [wordGame, setWordGame] = useState("");
    const img = forca0;
    console.log(word);
    return (
        <Content>
            <Game img={img} wordGame={wordGame} setWord={setWord} setWordGame={setWordGame} />
            <Letters />
            <Guess />
        </Content>
    );
    // const [error, setError] = useState(0);
    // const [img, setImg] = useState(forca0);
    // function handleClick() {
    //     setError(error + 1);
    //     changeImg();
    // }
    // function changeImg() {
    //     switch (error + 1) {
    //         case 1:
    //             setImg(forca1);
    //             break;
    //         case 2:
    //             setImg(forca2);
    //             break;
    //         case 3:
    //             setImg(forca3);
    //             break;
    //         case 4:
    //             setImg(forca4);
    //             break;
    //         case 5:
    //             setImg(forca5);
    //             break;
    //         case 6:
    //             setImg(forca6);
    //             break;
    //         default:
    //             setImg(forca0);
    //             break;
    //     }
    // }
}

export default App;
