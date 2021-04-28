import {useParams} from "react-router-dom";

const ViewDiary = ({diaryList}) => {
    const {id} = useParams();

    const diary = diaryList.filter((item) => parseInt(id) === parseInt(item.id))[0];

    return (
        <div className="view-details">
            <h1>Diary Details</h1>
            <p>ID: {diary.id}</p>
            <p>User ID: {diary.userId}</p>
            <p>Event: {diary.event}</p>
            <p>Note: {diary.note}</p>
            <p>Last Updated: {diary.last_updated}</p>
        </div>
    );
};

export default ViewDiary;