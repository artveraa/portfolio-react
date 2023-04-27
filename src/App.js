import { BrowserRouter, Routes, Route} from "react-router-dom";
import Blog from "./components/Blog/index";
import SinglePost from "./components/SinglePost/index";
import Error from "./components/Error/index";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Blog/>}/>
                <Route path="/blog/:slug" element={<SinglePost/>}/>
                <Route path="*" element={<Error/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;