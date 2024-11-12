//import NavLink to create a link to the correct url
import { NavLink } from "react-router-dom";

export default function SideBar() {
    return (
      <div className="side-bar">
        <NavLink
          to="/dashboard/users"
          className="item-links"
          // activeClassName used to distinguish active link
          activeClassName="active"
        >
          <i className="fa-solid fa-users sideBarIcon"></i>
          Users
        </NavLink>
        <NavLink
          to="/dashboard/user/create"
          className="item-links"
          activeClassName="active"
        >
          <i className="fa-solid fa-user-plus sideBarIcon"></i>
          Add New User
        </NavLink>
      </div>
    );
}