import { useContext, useState } from "react";
import { objectToFormData } from "../../utils/formDataHelper";
import { signin } from "../../services/userService";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../../context/UserContext";

const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const { setUser } = useContext(MyContext);

    const handleSignin = async (rawData) => {
        try {
            const formData = objectToFormData({ user: rawData });
            const response = await signin(formData);
            setUser(response);
            localStorage.setItem("user", JSON.stringify(response));
            navigate(`/`);
        } catch (e) {
            console.error("Failed to Signin: ", e);
        }
    };

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                handleSignin(formData);
            }}
        >
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
                Login
            </button>
        </form>
    );
};

export default Login;
