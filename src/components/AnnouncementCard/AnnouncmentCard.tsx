import React, { useState } from "react";
import { Announcement } from "../../types/announcement";
import { Modal } from "../Modal/editWindow";
import '../AnnouncementCard/AnnouncementCard.scss'

interface Props {
  announcements: Announcement;
  removeAnnoun: (announcementId: string) => void;
  setSelectedId: (userId: string) => void;
}

export const AnnouncementCard: React.FC<Props> = ({
  announcements, removeAnnoun, setSelectedId
}) => {
  const { title, id } = announcements
  const [openModal, setOpenModal] = useState(false);
  const [tittle, setTittle] = useState(title);

return (
  <div className="card">
    <div className="card__content">
      <div>
        <div className="card__media-content">
          <p className="card__title">{tittle}</p>
        </div>
      </div>
      <div className="content">
        <button 
          type="button" 
          className="card__button" 
          onClick={() => removeAnnoun(id)}
        >
          Delete
        </button>
        <button 
          type='button'
          className="card__button"
          onClick={() => setOpenModal(true)}
        >
          Edit title
        </button>
        {openModal && 
        <Modal 
          closeModal={setOpenModal} 
          setTitle={setTittle}
          title={tittle}
        />}
      </div>
      <button 
        type='button'
        className="card__button"
        onClick={() => setSelectedId(id)}
      >
        Show Announcement Details
      </button>
    </div>
  </div>
  );
}