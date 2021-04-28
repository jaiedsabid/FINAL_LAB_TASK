import {useState} from "react";
import {Redirect, Switch, Route} from "react-router-dom";
import NavBar from "./NavBarComponent";
import Home from "./HomeComponent";

const Main = () => {
    return (
        <div id="main">
            <NavBar />
            <Switch>
                <Route exact path="/home" component={Home}/>
                <Route exact path="/diaries" component={Home}/>
            </Switch>
        </div>
    );
};

export default Main;