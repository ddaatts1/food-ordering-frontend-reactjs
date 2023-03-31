import {useContext} from "react";
import {AuthContext} from "./AuthContext";

import LoginForm from "../GoogleRecaptcha/LoginForm";

// 404E635266556A586E3272357538782F413F4428472B4B6250645367566B5970
function ProtectedRoute({ element, ...rest }) {
    const { authState } = useContext(AuthContext);

    return (
        <>
            {console.log("auth: ",authState)}
            {authState.isAuthenticated == true? element : <LoginForm/>}
        </>

    );
}

export default ProtectedRoute;