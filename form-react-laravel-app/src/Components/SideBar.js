import { Link } from "react-router-dom";

export default function SideBar() {
    return (
        <div className="side-bar">
            <Link to="/dashboard/users" className="item-links">Users</Link>
        </div>
    );
}