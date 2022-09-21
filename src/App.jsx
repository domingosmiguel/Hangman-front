import Game from "./components/Game.jsx";
import Guess from "./components/Guess.jsx";
import Letters from "./components/Letters.jsx";

import { Content } from "./styles";

function App() {
    return (
        <Content>
            <Game />
            <Letters />
            <Guess />
        </Content>
    );
}

export default App;
