import {useState} from "react";
import {Redirect, Switch, Route} from "react-router-dom";
import NavBar from "./NavBarComponent";
import Home from "./HomeComponent";
import DiaryList from "./DiaryListComponent";
import useFetch from "./useFetch";
import ViewDiary from "./ViewDiaryComponent";
import AddDiary from "./AddDiaryComponent";
import UpdateDiary from "./UpdateDiaryComponent";

const Main = () => {
    const [diaryList, setDiaryList] = useState();
    const [updateStatus, setUpdateStatus] = useState(false);
    const URL = "http://localhost:5000/diaries";
    useFetch(setDiaryList, URL, updateStatus);

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

        const result = await fetch(ADD_URL, METHOD);
        if(result.ok) {
            setDiaryList([...diaryList, diary]);
        }
        return;
    };

    const updateDiary = async (evt, id, newDiary) => {
        evt.preventDefault();
        const UPDATE_URL = `http://localhost:5000/diaries/${id}`;
        const date = new Date();
        const diary = {
            userId: newDiary.userId,
            event: newDiary.event,
            note: newDiary.note,
            last_updated: date.toISOString().slice(0, 10),
        };
        const METHOD = {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(diary)
        };

        const result = await fetch(UPDATE_URL, METHOD);
        if(result.ok) {
            setUpdateStatus(!updateStatus);
            alert(`The diary event ${id} updated successfully`);
        }
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
                <Route exact path="/diary/:id/update" component={() => <UpdateDiary callback={updateDiary} diaryList={diaryList} />}/>
                <Redirect to="/home" />
            </Switch>
        </div>
    );
};

export default Main;