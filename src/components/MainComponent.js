import {useState} from "react";
import {Redirect, Switch, Route} from "react-router-dom";
import NavBar from "./NavBarComponent";
import Home from "./HomeComponent";
import DiaryList from "./DiaryListComponent";
import useFetch from "./useFetch";

const Main = () => {
    const [diaryList, setDiaryList] = useState();
    const URL = "http://localhost:5000/diaries";
    useFetch(setDiaryList, URL);

    const deleteDiary = (id) => {

    }

    return (
        <div id="main">
            <NavBar />
            <Switch>
                <Route exact path="/home" component={Home}/>
                <Route exact path="/add" component={() => <h1>Add Diary</h1>}/>
                <Route exact path="/diaries" component={() => <DiaryList diaryList={diaryList} onDelete={deleteDiary} /> }/>
                <Route exact path="/diary/:id" component={() => "Diary Details"}/>
                <Redirect to="/home" />
            </Switch>
        </div>
    );
};

export default Main;