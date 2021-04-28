

const AddDiary = ({callback}) => {
    return (
        <div className="form">
            <form action="" method="post" onSubmit={(evt) => callback(evt)}>
                <div className="input-group">
                    <label htmlFor="userId">User ID: </label>
                    <input type="text" name="userId"/>
                </div>
                <div className="input-group">
                    <label htmlFor="event">Event: </label>
                    <input type="text" name="event"/>
                </div>
                <div className="input-group">
                    <label htmlFor="note">Note: </label>
                    <input type="text" name="note"/>
                </div>
                <div className="btn">
                    <button type="submit">
                        Add
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddDiary;