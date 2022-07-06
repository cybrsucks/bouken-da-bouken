import { Navigate, Outlet } from "react-router-dom";


const useAuth = () => {
    const user = { loggedIn: (!sessionStorage.getItem('username') == "") };
    return user && user.loggedIn;
};

const ProtectedRoute = () => {
    const isAuth = useAuth();
    return isAuth ? <Outlet /> : <Navigate to="/" />;
};


// import { Navigate } from "react-router-dom";

// const keyToken = sessionStorage.getItem("username");

// const ProtectedRoute = ({ children , user }) => {
//     if (keyToken == ''){
//         return <Navigate to = "/" />
//     }
//     return children;
// };

export default ProtectedRoute;