import React from "react";
import "./menu-item.components.style.scss";
import { withRouter } from "react-router-dom";

const Menu = ({ title, imageUrl, size, linkUrl, history, match }) => {
  console.log(history, match);
  return (
    <div
      className={`${size} menu-item`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className="backgroundImage"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default withRouter(Menu);
