import React from "react";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";

import "./Style/MainFeed.css";

const mainFeed = () => (
  <div className="feed">
    {/* Story */}
    <StoryReel />
    {/* Massage sender */}
    <MessageSender />
    {/* Message */}
  </div>
);

export default mainFeed;
