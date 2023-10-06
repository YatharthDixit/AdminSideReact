import "./navbar.scss";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";

import DarkModeOutLinedIcon from "@mui/icons-material/DarkModeOutlined";

import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";

import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";

import ChatBubbleoutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";

import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
// import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
function Navbar() {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon className="icon" />
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon className="icon" />
            <span>English</span>
          </div>
          <div className="item">
            <DarkModeOutLinedIcon
              className="icon"
              onClick={() =>
                dispatch({
                  type: "TOGGLE",
                })
              }
            />
          </div>
          <div className="item">
            <FullscreenExitOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleoutlineOutlinedIcon className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <ListOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <img
              className="avatar"
              alt=""
              src="https://media.licdn.com/dms/image/D4D03AQGIBl6LhZrHFg/profile-displayphoto-shrink_800_800/0/1677917848548?e=2147483647&v=beta&t=kkxnYxtfu5hgRY-t1ndmYixzJVF2lUEWjLSXDjAfd20"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
