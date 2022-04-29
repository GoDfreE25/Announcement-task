import React, { useState } from "react";
import { Announcement } from "../../types/announcement";
import { Modal } from "../Modal/editWindow";

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
    <div className="card-content">
      <div className="media">
        <div className="media-content">
          <p className="title is-8">{tittle}</p>
        </div>
      </div>
      <div className="content">
        <button type="button" className="button_delete" onClick={() => removeAnnoun(id)}>
          Delete
        </button>
        <button 
          type='button' 
          onClick={() => setOpenModal(true)}
        >
          Open Modal
        </button>
        {openModal && 
        <Modal 
          closeModal={setOpenModal} 
          setTitle={setTittle}
          title={tittle}
        />}
      </div>
      <button type='button' onClick={() => setSelectedId(id)}>
        Show Announcement Details
      </button>
    </div>
  </div>
  );
}