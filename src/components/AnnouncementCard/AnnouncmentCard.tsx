import React from "react";
import { Announcement } from "../../types/announcement";

type Props = Announcement;

export const AnnouncementCard: React.FC<Props> = ({
  title, description, id, date,
}) => (
  <div className="card">
    <div className="card-content">
      <div className="media">
        <div className="media-content">
          <p className="title is-8">{title}</p>
        </div>
      </div>
      <div className="content">
        {description}
        <br />
        <br />
        <div className="content_date">
          {date}
        </div>
      </div>
    </div>
  </div>
);