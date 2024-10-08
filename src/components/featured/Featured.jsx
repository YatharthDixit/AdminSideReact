import React from "react";
import "./featured.scss";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVertIcon font-size="small" className="icon" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text="70%" strokeWidth={3} />
        </div>
        <p className="title">Total Sales made today</p>
        <p className="amount">₹450</p>
        <p className="desc">
          Previous transactions processing. Last payment may not be included.
        </p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle"> Target </div>
            <div className="itemResult negative">
              <KeyboardArrowDownIcon fontSize="small" className="icon" />
              <div className="resultAmount">₹12.4k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle"> Last Week </div>
            <div className="itemResult negative">
              <KeyboardArrowDownIcon fontSize="small" className="icon" />
              <div className="resultAmount">₹12.4k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle"> Last Month </div>
            <div className="itemResult positive">
              <KeyboardArrowUpIcon fontSize="small" className="icon" />
              <div className="resultAmount">₹12.4k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
