import {useState} from "react";
import {Redirect, Switch, Route} from "react-router-dom";
import NavBar from "./NavBarComponent";
import Home from "./HomeComponent";
import DiaryList from "./DiaryListComponent";
import useFetch from "./useFetch";
import ViewDiary from "./ViewDiaryComponent";
import AddDiary from "./AddDiaryComponent";

const Main = () => {
    const [diaryList, setDiaryList] = useState();
    const URL = "http://localhost:5000/diaries";
    useFetch(setDiaryList, URL);

    const deleteDiary = async (id) => {
        const DELETE_URL = `http://localhost:5000/diaries/${id}`;
        const METHOD = {method:"DELETE"};

        await fetch(DELETE_URL, METHOD);
        await setDiaryList(diaryList.filter((diary) => parseInt(id) !== parseInt(diary.id)));
    }

    const addDiary = async (evt) => {
        evt.preventDefault();
        const ADD_URL = `http://localhost:5000/diaries`;
        const date = new Date();
        const ID = String(Math.floor(Math.random()*1000)+1);
        const diary = {
            id: ID,
            userId: evt.target.userId.value,
            event: evt.target.event.value,
            note: evt.target.note.value,
            last_updated: date.toISOString().slice(0, 10),
        };

        const METHOD = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(diary)
        };

        await fetch(ADD_URL, METHOD);
        setDiaryList([diary, ...diaryList]);
        return;
    };

    return (
        <div id="main">
            <NavBar />
            <Switch>
                <Route exact path="/home" component={Home}/>
                <Route exact path="/add" component={() => <AddDiary callback={addDiary} />}/>
                <Route exact path="/diaries" component={() => <DiaryList diaryList={diaryList} deleteDiary={deleteDiary} /> }/>
                <Route exact path="/diary/:id" component={() => <ViewDiary diaryList={diaryList} />}/>
                <Redirect to="/home" />
            </Switch>
        </div>
    );
};

export default Main;