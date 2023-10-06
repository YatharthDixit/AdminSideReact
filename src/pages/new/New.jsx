import React, { useContext, useState } from "react";

import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import Navbar from "../../components/navbar/Navbar";
import { DarkModeContext } from "../../context/darkModeContext";
function New({ inputs, title }) {
  const { darkMode } = useContext(DarkModeContext);

  const [file, setFile] = useState(null);
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />

        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : darkMode
                  ? "https://cdn3.vectorstock.com/i/1000x1000/50/37/camera-icon-on-black-background-vector-15985037.jpg"
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form action="">
              <div className="formInput">
                <label htmlFor="file">
                  Image: <UploadFileIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>
              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} />
                </div>
              ))}

              <button>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default New;
