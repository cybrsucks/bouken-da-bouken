import { Navigate } from "react-router-dom";

const keyToken = sessionStorage.getItem("username");

const ProtectedRoute = ({ children , user }) => {
    if (keyToken == ''){
        return <Navigate to = "/" />
    }
    return children;
};

export default ProtectedRoute;