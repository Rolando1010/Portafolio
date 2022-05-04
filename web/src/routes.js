import {
    BrowserRouter as Router,
    Routes as ContainerRoutes,
    Route
} from "react-router-dom";
import Portafolio from "./pages/portafolio";

const Routes = () =>
    <Router>
        <ContainerRoutes>
            <Route path="/" element={<Portafolio/>}/>
        </ContainerRoutes>
    </Router>

export default Routes;