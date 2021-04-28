import {Link} from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="nav-bar">
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/add">Add Diary</Link></li>
                <li><Link to="/diaries">Diaries</Link></li>
            </ul>
        </div>
    );
};

export default NavBar;