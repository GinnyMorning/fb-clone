import React from 'react';
import AssignmentIndOutlinedIcon from '@material-ui/icons/AssignmentIndOutlined';
import GroupIcon from '@material-ui/icons/Group';
import BookmarksIcon from '@material-ui/icons/Bookmarks';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import SideBarRow from './SideBarRow';

import './Style/LeftMenu.css';

const LeftMenu = () => (
  <div className="leftMenu">
    <SideBarRow
      titles="Toan Pham"
      Icon=""
      src="https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/man5-512.png"
    />
    <SideBarRow titles="Friends" Icon={AssignmentIndOutlinedIcon} src="" />
    <SideBarRow titles="Pages" src="" Icon={AccountBoxIcon} />
    <SideBarRow titles="Group" src="" Icon={GroupIcon} />
    <SideBarRow titles="Saved" src="" Icon={BookmarksIcon} />
  </div>
);

export default LeftMenu;
