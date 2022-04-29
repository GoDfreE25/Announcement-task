import React, { useState } from "react";
import { Announcement } from "../../types/announcement";
import { Modal } from "../Modal/modalWindow";

interface Props {
  announcements: Announcement;
  removeAnnoun: (announcementId: string) => void;
}

export const AnnouncementCard: React.FC<Props> = ({
  announcements, removeAnnoun
}) => {
  const { title, id } = announcements
  const [openModal, setOpenModal] = useState(false);

return (
  <div className="card">
    <div className="card-content">
      <div className="media">
        <div className="media-content">
          <p className="title is-8">{title}</p>
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
        {openModal && <Modal closeModal={setOpenModal} titl={title} />}
      </div>
    </div>
  </div>
  );
}