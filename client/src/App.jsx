import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import AppRoutes from "./components/AppRoutes";

function App() {
    return (
        <Router>
            <NavBar />
            <div className="app">
                <AppRoutes />
            </div>
        </Router>
    );
}

export default App;
