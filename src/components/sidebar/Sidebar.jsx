import "./sidebar.scss";
import SpaceDashboardOutlinedIcon from "@mui/icons-material/SpaceDashboardOutlined";
import CreditScoreOutlinedIcon from "@mui/icons-material/CreditScoreOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import MonitorHeartOutlinedIcon from "@mui/icons-material/MonitorHeartOutlined";
import BugReportOutlinedIcon from "@mui/icons-material/BugReportOutlined";
import { DarkModeContext } from "../../context/darkModeContext";

import { useContext } from "react";
import { Link } from "react-router-dom";
function Sidebar() {
  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Yathadmin</span>
        </Link>
      </div>
      <hr className="hr" />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <Link to="/" style={{ textDecoration: "none" }}>
              {<SpaceDashboardOutlinedIcon className="icon" />}
              <span className="my-span">Dashboard</span>
            </Link>
          </li>
          <p className="title">LISTS</p>

          <li>
            <Link to="/users" style={{ textDecoration: "none" }}>
              {<PersonOutlineOutlinedIcon className="icon" />}
              <span className="my-span">Users</span>
            </Link>
          </li>
          <li>
            <Link to="/products" style={{ textDecoration: "none" }}>
              {<ShoppingCartOutlinedIcon className="icon" />}
              <span className="my-span">Products</span>
            </Link>
          </li>
          <li>
            {<CreditScoreOutlinedIcon className="icon" />}
            <span className="my-span">Orders</span>
          </li>
          <li>
            {<LocalShippingOutlinedIcon className="icon" />}
            <span className="my-span">Delivery</span>
          </li>
          <p className="title">USEFUL</p>

          <li>
            {<BarChartOutlinedIcon className="icon" />}
            <span className="my-span">Stats</span>
          </li>
          <li>
            {<NotificationsNoneOutlinedIcon className="icon" />}
            <span className="my-span">Notifications</span>
          </li>
          <p className="title">SERVICES</p>

          <li>
            {<MonitorHeartOutlinedIcon className="icon" />}
            <span className="my-span">System Health</span>
          </li>
          <li>
            {<BugReportOutlinedIcon className="icon" />}
            <span className="my-span">Logs</span>
          </li>
          <li>
            {<SettingsOutlinedIcon className="icon" />}
            <span className="my-span">Settings</span>
          </li>
          <p className="title">USER</p>

          <li>
            {<AccountCircleOutlinedIcon className="icon" />}
            <span className="my-span">Profile</span>
          </li>
          <li>
            {<ExitToAppOutlinedIcon className="icon" />}
            <span className="my-span">Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          onClick={() => dispatch({ type: "LIGHT" })}
          className="colorOption"
        ></div>
        <div
          onClick={() => dispatch({ type: "DARK" })}
          className="colorOption"
        ></div>
      </div>
    </div>
  );
}

export default Sidebar;
