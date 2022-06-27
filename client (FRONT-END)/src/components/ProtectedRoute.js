import { Navigate } from "react-router-dom";

const keyToken = localStorage.getItem("JWT_token");

const ProtectedRoute = ({ children , user }) => {
    if (!keyToken){
        return <Navigate to = "/" />
    }
    return children;
};

export default ProtectedRoute;