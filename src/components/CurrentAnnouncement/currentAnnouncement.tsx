/* eslint-disable react-hooks/exhaustive-deps */
import React, { useMemo, useState } from "react";
import { Announcement } from "../../types/announcement";
import '../CurrentAnnouncement/currentAnnouncment.scss';

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

  return (
    <div className="CurrentAnnouncement">
      <h2 className="CurrentAnnouncement__name">
        <span>{`Selected Announcement: ${announcement?.name ? announcement.name : ''}`}</span>
      </h2>

      <h3 className="CurrentAnnouncement__title">{announcement?.title}</h3>
      <p className="CurrentAnnouncement__description">{announcement?.description}</p>
      <p className="CurrentAnnouncement__date">{announcement?.dateAdded}</p>

      <button
        type="button"
        className="List__announcement-button button"
        onClick={() => setClearId('0')}
      >
        Clear
      </button>
    </div>
  );
};