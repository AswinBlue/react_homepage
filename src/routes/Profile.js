import React from "react";
// import { Profiler } from "react/cjs/react.production.min";
import { authService } from "../components/AppFirebase";


// export default() => <span>Profile</span>;
const Profile = () => {
    const onLogoutClick = () => {
        authService.signOut();
    }
    return (
        <>
            <button onClick = {onLogoutClick}>Log out</button>
        </>
    );
};
export default Profile;