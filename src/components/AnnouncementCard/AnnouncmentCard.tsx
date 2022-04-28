import React from "react";
import { Announcement } from "../../types/announcement";

interface Props {
  announcements: Announcement;
  removeAnnoun: (announcementId: string) => void;
}

export const AnnouncementCard: React.FC<Props> = ({
  announcements, removeAnnoun
}) => {
  const { title, date, id } = announcements
return (
  <div className="card">
    <div className="card-content">
      <div className="media">
        <div className="media-content">
          <p className="title is-8">{title}</p>
        </div>
      </div>
      <div className="content">
        <div className="content_date">
          {date}
        </div>
        <br />
        <button type="button" className="button_delete" onClick={() => removeAnnoun(id)}>
          Delete
        </button>
      </div>
    </div>
  </div>
  );
}