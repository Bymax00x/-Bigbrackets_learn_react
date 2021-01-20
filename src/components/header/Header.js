import React from "react";
import "./Header.css";

import SearchIcon from "@material-ui/icons/Search";
import NotificationsIcon from "@material-ui/icons/Notifications";
import EmailIcon from "@material-ui/icons/Email";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const Header = () => {
  return (
    <header>
      <div className="searchBox">
        <input type="text" placeholder="search"></input>
        <span className="searchi">
          <SearchIcon />
        </span>
      </div>

      <span className="grupi">
        <NotificationsIcon />
        <EmailIcon />
        <AccountCircleIcon />
      </span>
    </header>
  );
};

export default Header;
