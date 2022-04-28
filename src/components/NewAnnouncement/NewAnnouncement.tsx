import React, { useState } from "react";
import { Announcement } from "../../types/announcement";
import { v4 as uuidv4 } from 'uuid';

interface Props {
  onAdd: (announcement: Announcement) => void;
}

export const NewAnnouncement: React.FC<Props> = React.memo(({ 
  onAdd, 
}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');

  const createAnnouncement = () => {
    onAdd({
    title,
    description,
    date,
    id: uuidv4(),
});
  };

  const resetForm = () => {
    setTitle('');
    setDescription('');
    setDate('');
  };

  const handelDateUpdate = (event: React.ChangeEvent<HTMLInputElement>) => {
    const dateValue = event.target.value;
    const changedValue = dateValue.split('-').reverse().join('.');
    setDate(changedValue);
  }

  const handlerChange = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    createAnnouncement();
    resetForm();
  };

  return (
    <div className="form">
      <h3 className="title">
        Add the Announcement
      </h3>
      <form
        method="post"
        action="#"
        onSubmit={handlerChange}
        className="form_main"
      >
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Write the title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="form_text"
        />
        <textarea
          name="description"
          id="description"
          placeholder="Write the description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="form_description"
        />
        <input
          type="date"
          name="imgUrl"
          id="imgUrl"
          placeholder="Write the imgUrl"
          value={date}
          onChange={(e) => handelDateUpdate(e)}
          className="form_text"
        />
        <button className="button_add" type="submit">
          Add the Announcement
        </button>
      </form>
    </div>
  );
});