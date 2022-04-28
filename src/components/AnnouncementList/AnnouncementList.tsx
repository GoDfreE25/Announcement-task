import React from "react";
import { Announcement } from "../../types/announcement";
import {AnnouncementCard} from "../AnnouncementCard/AnnouncmentCard";

interface Props {
  announcements: Announcement[];
  removeAnnoun: (announcementId: string) => void;
}

export const AnnouncementsList: React.FC<Props> = ({ announcements, removeAnnoun }) => {
  return (
  <div className="announcement">
    {announcements.map(announcement => (
      <div className="announcement_list">
        <AnnouncementCard key={announcement.id} announcements={announcement} removeAnnoun={removeAnnoun}/>
      </div>
    ))}
  </div>
  );
}