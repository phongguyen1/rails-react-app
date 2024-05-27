import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import AppRoutes from "./components/AppRoutes";
import { MyProvider } from "./context/UserContext";

function App() {
    return (
        <MyProvider>
            <Router>
                <NavBar />
                <div className="app">
                    <AppRoutes />
                </div>
            </Router>
        </MyProvider>
    );
}

export default App;
