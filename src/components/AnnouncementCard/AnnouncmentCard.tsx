import React from "react";
import { Announcement } from "../../types/announcement";

interface Props {
  announcements: Announcement;
  removeAnnoun: (announcementId: string) => void;
}

export const AnnouncementCard: React.FC<Props> = ({
  announcements, removeAnnoun
}) => {
  const { title, description, date, id } = announcements
return (
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
        <button type="button" className="button_delete" onClick={() => removeAnnoun(id)}>
          Delete
        </button>
      </div>
    </div>
  </div>
  );
}