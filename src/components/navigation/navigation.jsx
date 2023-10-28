import Contact from "../../views/contact/contact.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Projects from "../../views/projects/projects.jsx";


export default function Navigation() {

    return(

        <BrowserRouter>
            <Routes>
                <Route path="/" element={Projects}></Route>
            </Routes>


        </BrowserRouter>

    )


}