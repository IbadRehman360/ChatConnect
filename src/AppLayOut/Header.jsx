import { Link } from "react-router-dom"

function Header() {
    return (
        <div>
            <Link to="/login"  >  GO TO LOGIN </Link>
            <Link to="/register"  >  GO TO REGISTER </Link>
            <Link to="/message"  >  GO TO MESSAGE </Link>
            <Link to="/message/:userID"  >  GO TO MEESAGE/USER </Link>
        </div>
    )
}

export default Header
