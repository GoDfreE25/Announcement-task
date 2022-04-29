/* eslint-disable react-hooks/exhaustive-deps */
import React, { useMemo, useState } from "react";
import { Announcement } from "../../types/announcement";

interface Props {
  selectedId: string;
  setClearId: (userId: string) => void;
  announcements: Announcement[];
}

export const CurrentAnnouncement: React.FC<Props> = ({ selectedId, setClearId, announcements }) => {
  const [announcement, setAnnouncement] = useState<Announcement>();

  const searchAnnouncement = (announcements: Announcement[]) => (
    announcements.find(announc => {
      return announc.id === selectedId
    })
  )

  useMemo(() =>  setAnnouncement(searchAnnouncement(announcements)), [announcement, selectedId]);
 
  console.log(announcement);
  

  return (
    <div className="CurrentAnnouncement">
      <h2 className="CurrentAnnouncement__name">
        <span>{`Selected Announcement: ${selectedId}`}</span>
      </h2>

      <h3 className="CurrentAnnouncement__title">{announcement?.title}</h3>
      <p className="CurrentAnnouncement__description">{announcement?.description}</p>
      <p className="CurrentAnnouncement__date">{announcement?.date}</p>

      <button
        type="button"
        className="TodoList__announcement-button button"
        onClick={() => setClearId('0')}
      >
        Clear
      </button>
    </div>
  );
};