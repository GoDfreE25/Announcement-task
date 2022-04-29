import React from "react";
import { Announcement } from "../../types/announcement";
import {AnnouncementCard} from "../AnnouncementCard/AnnouncmentCard";
import '../AnnouncementList/AnnouncementList.scss';

interface Props {
  announcements: Announcement[];
  removeAnnoun: (announcementId: string) => void;
  setSelectedId: (userId: string) => void;
}

export const AnnouncementsList: React.FC<Props> = ({ announcements, removeAnnoun, setSelectedId }) => {
  return (
  <div className="announcement">
    {announcements.map(announcement => (
      <div className="announcement_list">
        <AnnouncementCard 
          key={announcement.id} 
          announcements={announcement} 
          removeAnnoun={removeAnnoun} 
          setSelectedId={setSelectedId}
        />
      </div>
    ))}
  </div>
  );
}