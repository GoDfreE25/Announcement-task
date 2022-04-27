import React, { useState } from 'react';
import announcementFromServer from './api/announcement.json'
import './App.css';
import { AnnouncementsList } from './components/AnnouncementList/AnnouncementList';
import { Announcement } from './types/announcement';

export const App: React.FC = React.memo(() => {
  const [announcements, setAnnouncements] = useState(announcementFromServer);

  const addAnnouncement = (announcement: Announcement) => {
    setAnnouncements(currentAnnouncement => [
      ...currentAnnouncement,
      announcement
    ]);
  };

  return (
    <div className="page">
     <div className="page-content">
        <AnnouncementsList announcement={announcements} />
      </div>
    </div>
  );
}) 

