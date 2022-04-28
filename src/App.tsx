import React, { useState } from 'react';
import announcementFromServer from './api/announcement.json'
import './App.css';
import { AnnouncementsList } from './components/AnnouncementList/AnnouncementList';
import { NewAnnouncement } from './components/NewAnnouncement/NewAnnouncement';
import { Announcement } from './types/announcement';

export const App: React.FC = React.memo(() => {
  const [announcements, setAnnouncements] = useState(announcementFromServer);

  const addAnnouncement = (announcement: Announcement) => {
    setAnnouncements(currentAnnouncement => [
      ...currentAnnouncement,
      announcement
    ]);
  };

  const deleteAnnouncement = (announcementId: string) => {
    setAnnouncements(announcements.filter(announcement => announcement.id !== announcementId));
      };

  return (
    <div className="page">
     <div className="page-content">
        <AnnouncementsList 
          announcements={announcements}
          removeAnnoun={deleteAnnouncement}
        />
      </div>
      <div className="sidebar">
        <NewAnnouncement onAdd={addAnnouncement} />
      </div>
    </div>
  );
}) 

