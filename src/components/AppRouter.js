// import React, { useState, useEffect }  from "react";
import { HashRouter as Router, Route, Routes, Navigate} from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";
import Profile from "../routes/Profile";
import TopNav from "./TopNav"

const AppRouter = ({isLoggedIn}) => {
    const topNav = {
        page_top: '#page_top',
        height: '80px'
    };
    return (
        <Router>
            <TopNav page_top={topNav}></TopNav>
            <div style={{height:topNav.height}}></div>
            <Routes>
                {isLoggedIn ? (
                // fragment, nameless tag
                    <>
                        <Route path="/" element={<Home/>} />
                        <Route path="/profile" element={<Profile/>} />
                    </>
                ) : (
                    <>
                        <Route path="/" element={<Auth/>} />
                    </>
                )}
                <Route path="/*" element={<Navigate to="/" />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;