import React from 'react';
import './Style/Story.css';
import Proptypes from 'prop-types';
import { Avatar } from '@material-ui/core';

const Story = ({ img, profileSrc, title }) => (
  <div className="story" style={{ backgroundImage: `url(${img})` }}>
    <div className="story__avatar">
      <Avatar src={profileSrc} />
    </div>
    <h4>{title}</h4>
  </div>
);
Story.propTypes = {
  img: Proptypes.string.isRequired,
  profileSrc: Proptypes.string.isRequired,
  title: Proptypes.string.isRequired,
};
export default Story;
