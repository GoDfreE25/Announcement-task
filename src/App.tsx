/* eslint-disable react-hooks/exhaustive-deps */
import React, { useMemo, useState } from 'react';
import announcementFromServer from './api/announcement.json'
import './App.css';
import { AnnouncementsList } from './components/AnnouncementList/AnnouncementList';
import { NewAnnouncement } from './components/NewAnnouncement/NewAnnouncement';
import { Announcement } from './types/announcement';

export const App: React.FC = React.memo(() => {
  const [announcements, setAnnouncements] = useState(announcementFromServer);
  const [query, setQuery] = useState('');

      const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
      };

      const announcmente = (announc: Announcement[]) => (
        announc.filter(announcement => {
          return announcement.title.toLocaleLowerCase().includes(query.toLocaleLowerCase());
        }));

      const searchedAnnouncement = useMemo(() => announcmente(announcements), [query, announcements]);

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
       <div className="control">
              <input
                type="text"
                value={query}
                onChange={handleChange}
                id="search-query"
                className="input"
                placeholder="Write the search word"
              />
            </div>
     <div className="page-content">
        <AnnouncementsList 
          announcements={searchedAnnouncement}
          removeAnnoun={deleteAnnouncement}
        />
      </div>
      <div className="sidebar">
        <NewAnnouncement onAdd={addAnnouncement} />
      </div>
    </div>
  );
}) 

