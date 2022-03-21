import * as React from "react";
import {BrowserRouter,Route,Routes} from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import NotFoundPage from "./pages/NotFoundPage";
class App extends React.Component{
    public render():React.ReactNode{
        return(
            <>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<IndexPage/>} />
                        <Route path="/*" element={<NotFoundPage />} />
                    </Routes>
                </BrowserRouter>
            </>
        );
    }
}
export default App;