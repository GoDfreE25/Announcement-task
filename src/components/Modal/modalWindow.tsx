import { useState } from "react";

interface Props {
  closeModal: (name: boolean) => void;
  titl: string;
}

export const Modal: React.FC<Props> = ({ closeModal, titl }) => {
  const [title, setTitle] = useState(titl);


  const handlerSave = (value: any) => {
    setTitle(value);
  };

  return (
    <div className="modal">
      <div className="modal_container">
        <button type="button" onClick={() => closeModal(false)}>X</button>
        <form
        method="post"
        action="#"
        className="form"
        onSubmit={handlerSave}
      >
        <input
          type="text"
          name="title"
          id="title"
          defaultValue={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Write the title"
          className="form_text"
        />
        <textarea
          name="description"
          id="description"
          placeholder="Write the description"
          className="form_description"
        />
        <input
          type="date"
          name="imgUrl"
          id="imgUrl"
          placeholder="Write the imgUrl"
          className="form_text"
        />
        <div className="footer">
          <button type="button" onClick={() => closeModal(false)}>Cancel</button>
          <button onClick={e => e.preventDefault()}>Continue</button>
        </div>
        </form>
      </div>
    </div>
  )
}