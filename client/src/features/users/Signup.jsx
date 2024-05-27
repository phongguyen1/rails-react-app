import { useState, useContext } from "react";
import { signup } from "../../services/userService";
import { objectToFormData } from "../../utils/formDataHelper";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../../context/UserContext";

const Signup = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    });
    const { user, setUser } = useContext(MyContext);

    const handleSignup = async (rawData) => {
        try {
            const formData = objectToFormData({ user: rawData });
            const response = await signup(formData);
            console.log("user", user);
            setUser((prev) => ({ ...prev, ...response }));

            navigate(`/`);
        } catch (e) {
            console.error("Failed to signup: ", e);
        }
    };

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                handleSignup(formData);
            }}
        >
            <div className="mb-3">
                <label htmlFor="username" className="form-label">
                    Username
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="username"
                    value={formData.username}
                    onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">
                    Email
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">
                    Password
                </label>
                <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
            </div>

            <button type="submit" className="btn btn-primary">
                Signup
            </button>
        </form>
    );
};

export default Signup;
