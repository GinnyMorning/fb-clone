import { Avatar, Icon } from '@material-ui/core';
import React from 'react';
import './Style/SideBarRow.css';
import Proptypes from 'prop-types';

const SideBarRow = ({ src, icon, titles }) => (
  <div>
    <div className="sidebarrow">
      {src && <Avatar src={src} />}
      {icon && <Icon />}
      <h4>{titles}</h4>
    </div>
  </div>
);
SideBarRow.propTypes = {
  src: Proptypes.string.isRequired,
  icon: Proptypes.string.isRequired,
  titles: Proptypes.string.isRequired,
};

export default SideBarRow;
