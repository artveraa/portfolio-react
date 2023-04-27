import { BrowserRouter, Routes, Route} from "react-router-dom";
import SingleProject from "./components/SingleProject/index";
import Error from "./components/Error/index";
import Projects from "./components/Projects";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Projects/>}/>
                <Route path="/projets/:slug" element={<SingleProject/>}/>
                <Route path="*" element={<Error/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;