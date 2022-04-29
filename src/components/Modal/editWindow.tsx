
interface Props {
  closeModal: (name: boolean) => void;
  setTitle: (title: string) => void;
  title: string;
}

export const Modal: React.FC<Props> = ({ closeModal, setTitle, title }) => {

  return (
    <div className="modal">
      <div className="modal_container">
        <button type="button" onClick={() => closeModal(false)}>X</button>
        <form
        method="post"
        action="#"
        className="form"
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
        <div className="footer">
          <button type="button" onClick={() => closeModal(false)}>Ok</button>
        </div>
        </form>
      </div>
    </div>
  )
}