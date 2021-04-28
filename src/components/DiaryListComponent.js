import {Link} from 'react-router-dom';

const DiaryList = ({diaryList, deleteDiary}) => {

    const RenderList = ({diary}) => {
        return (
            <div className="diary">
                <p>Last Updated: {diary.last_updated}</p>
                <p>Diary ID: {diary.id}</p>
                <p>User ID: {diary.userId}</p>
                <p>Event: {diary.event}</p>
                <div className="btn">
                    <button>
                        <Link to={`/diary/${diary.id}`}>View</Link>
                    </button>
                    <button onClick={() => deleteDiary(diary.id)}>Delete</button>
                </div>
            </div>
        );
    };

    const diaries = diaryList.map(diaryItem => {
        return <RenderList key={diaryItem.id} diary={diaryItem} />;
    });

    return (
        <div id="list">
            <h1>List of Diaries</h1>
            {diaries}
        </div>
    );
};

export default DiaryList;