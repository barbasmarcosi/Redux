import { Link } from 'react-router-dom';
import '../css/menu.css'
const Menu = (props) => (
    <nav className="Menu">
        <Link to="/">
            Users
        </Link>
        <Link to="/tasks">
            Tasks
        </Link>
    </nav>
)

export default Menu;