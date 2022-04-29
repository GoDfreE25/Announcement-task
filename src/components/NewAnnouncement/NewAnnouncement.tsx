import React, { useState } from "react";
import { Announcement } from "../../types/announcement";
import { v4 as uuidv4 } from 'uuid';
import '../NewAnnouncement/NewAnnouncement.scss'

interface Props {
  onAdd: (announcement: Announcement) => void;
}

export const NewAnnouncement: React.FC<Props> = React.memo(({ 
  onAdd, 
}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dateAdded, setDateAdded] = useState('');
  const [name, setName] = useState('');

  const createAnnouncement = () => {
    onAdd({
    title,
    name,
    description,
    dateAdded,
    id: uuidv4(),
});
  };

  const resetForm = () => {
    setTitle('');
    setDescription('');
    setName('');
    setDateAdded('');
  };

  const handelDateUpdate = (event: React.ChangeEvent<HTMLInputElement>) => {
    const dateValue = event.target.value;
    const changedValue = dateValue.split('-').reverse().join('.');
    setDateAdded(changedValue);
  }

  const handlerChange = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    createAnnouncement();
    resetForm();
  };

  return (
    <div className="NewAnnouncementForm">
      <h3 className="title">
        Add the Announcement
      </h3>
      <form
        method="post"
        action="#"
        onSubmit={handlerChange}
        className="NewAnnouncementForm"
      >
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Write the title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="NewAnnouncementForm_input"
        />
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Write the title"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="NewAnnouncementForm_input"
        />
        <textarea
          name="description"
          id="description"
          placeholder="Write the description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="NewAnnouncementForm_input"
        />
        <input
          type="date"
          name="date"
          id="date"
          value={dateAdded}
          onChange={(e) => handelDateUpdate(e)}
          className="NewAnnouncementForm_input"
        />
        <button className="NewAnnouncementForm_submit-button" type="submit">
          Add the Announcement
        </button>
      </form>
    </div>
  );
});