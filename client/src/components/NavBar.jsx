import { useContext } from "react";
import { Link } from "react-router-dom";
import { signout } from "../services/userService";
import { MyContext } from "../context/UserContext";

function NavBar() {
    const { user, setUser } = useContext(MyContext);

    const handleSignOut = async (e) => {
        e.preventDefault();
        try {
            await signout();
            setUser(null);
        } catch (error) {
            console.error("Failed to logout: ", e);
        }
    };
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid justify-content-between">
                <div className="d-flex">
                    <a className="navbar-brand" href="/">
                        DEMO
                    </a>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 align-items-center d-flex">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                                All Posts List
                            </Link>
                        </li>
                        {user && (
                            <>
                                <li className="nav-item">
                                    <Link to="/new" className="nav-link">
                                        Create New Post
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/" className="nav-link">
                                        My Posts
                                    </Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>

                <div>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 align-items-center d-flex">
                        {!user && (
                            <>
                                <li className="nav-item">
                                    <Link to="/signin" className="nav-link active">
                                        Login
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/signup" className="nav-link">
                                        Signup
                                    </Link>
                                </li>
                            </>
                        )}
                        {user && (
                            <>
                                <li className="nav-item">
                                    <p className="m-0">Hello {user.username}</p>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" onClick={handleSignOut}>
                                        Sign Out
                                    </Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
