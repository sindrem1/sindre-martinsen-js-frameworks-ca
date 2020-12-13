import React from "react";
import Contact from "../contact/Contact";
import FrontPage from "../games/GameHome"
import GameDetail from "../games/GameSpecific"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from "react-router-dom";

function Layout() {
    return (
        <Router>
            <div className="navbar">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </div>
            <div>
                <Switch>
                    <Route path="/" exact component={FrontPage} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/game/:id" component={GameDetail} />
                </Switch>
            </div>
        </Router>
    );
}

export default Layout;