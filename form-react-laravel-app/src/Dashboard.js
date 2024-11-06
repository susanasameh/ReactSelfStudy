import {  Outlet, Route, Routes } from "react-router-dom";
import SideBar from "./Components/SideBar";
import TopBar from "./Components/TopBar";
import Users from "./Users";

export default function Dashboard() {
    return (
      <div>
        <TopBar />
        <div className="content-flex">
          <SideBar />
          <div style={{ width: "80%" }}>
            {/* <Users /> */}
            {/* using <Outlet/> to get the child of the parent div*/}
                   <Outlet />
                </div>
        </div>
      </div>
    );
}