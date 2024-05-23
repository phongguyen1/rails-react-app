const Signup = () => {
    return (
        <form>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">
                    Email
                </label>
                <input type="text" className="form-control" id="email" />
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">
                    Password
                </label>
                <input type="password" className="form-control" id="password" />
            </div>
            <div className="mb-3">
                <label htmlFor="repassword" className="form-label">
                    Re-enter Password
                </label>
                <input type="password" className="form-control" id="repassword" />
            </div>
            <button type="submit" className="btn btn-primary">
                Signup
            </button>
        </form>
    );
};

export default Signup;
