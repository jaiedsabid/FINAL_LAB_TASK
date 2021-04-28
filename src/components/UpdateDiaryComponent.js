import {useParams} from "react-router-dom";
import {useState} from "react";


const UpdateDiary = ({callback, diaryList}) => {
    const {id} = useParams();
    const diary = diaryList.filter(item => {
        return parseInt(id) === parseInt(item.id);
    })[0];

    const [newDiary, setNewDiary] = useState({
        userId: diary.userId,
        event: diary.event,
        note: diary.note
    });

    const onChangeInput = (evt) => {
        const attr = evt.target.name;
        const value = evt.target.value;
        const inputDiary = {...newDiary, [attr] : value};
        setNewDiary(inputDiary);
    };

    return (
        <div className="form">
            <form action="" method="patch" onSubmit={(evt) => callback(evt, id, newDiary)}>
                <div className="input-group">
                    <label htmlFor="userId">User ID: </label>
                    <input type="text" name="userId" value={newDiary.userId} onChange={onChangeInput}/>
                </div>
                <div className="input-group">
                    <label htmlFor="event">Event: </label>
                    <input type="text" name="event" value={newDiary.event} onChange={onChangeInput}/>
                </div>
                <div className="input-group">
                    <label htmlFor="note">Note: </label>
                    <input type="text" name="note" value={newDiary.note} onChange={onChangeInput}/>
                </div>
                <div className="btn">
                    <button type="submit">Update</button>
                </div>
            </form>
        </div>
    );
};

export default UpdateDiary;