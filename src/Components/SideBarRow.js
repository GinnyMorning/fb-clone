import { Avatar } from "@material-ui/core";
import React from "react";
import "./Style/SideBarRow.css";
import Proptypes from "prop-types";

const SideBarRow = ({ src, Icon, titles }) => (
  <div>
    <div className="sidebarrow">
      {src && <Avatar src={src} />}
      {Icon && <Icon />}
      <h4>{titles}</h4>
    </div>
  </div>
);
SideBarRow.propTypes = {
  src: Proptypes.string.isRequired,
  Icon: Proptypes.elementType.isRequired,
  titles: Proptypes.string.isRequired,
};

export default SideBarRow;
