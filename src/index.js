import ReactDOM from "react-dom/client";
import App from "./App"
import BackContext from "./contex/back-contex/BackContext";
import TESTENCRYPT from "./TESTENCRYPT";
import GlobalApp from "./GlobalApp";
ReactDOM.createRoot(document.getElementById("root")).render(
    <BackContext>
        <GlobalApp />
    </BackContext>


);


