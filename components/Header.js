import React from "react";
import headerStyles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>Joylly</span> Newz
      </h1>
      <p className={headerStyles.description}>Free Diving in Green Sydney</p>
    </div>
  );
};

export default Header;
