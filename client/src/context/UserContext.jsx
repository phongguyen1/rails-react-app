import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    return <MyContext.Provider value={{ user, setUser }}>{children}</MyContext.Provider>;
};

MyProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
