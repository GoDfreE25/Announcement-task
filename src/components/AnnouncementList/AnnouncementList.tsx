import React from "react";
import { Announcement } from "../../types/announcement";
import {AnnouncementCard} from "../AnnouncementCard/AnnouncmentCard";

interface Props {
  announcement: Announcement[];
}

export const AnnouncementsList: React.FC<Props> = ({ announcement }) => (
  <div className="movies">
    {announcement.map(announcement => (
      <AnnouncementCard key={announcement.id} {...announcement} />
    ))}
  </div>
);