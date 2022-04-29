import '../Modal/editWindow.scss'

interface Props {
  closeModal: (name: boolean) => void;
  setTitle: (title: string) => void;
  title: string;
}

export const Modal: React.FC<Props> = ({ closeModal, setTitle, title }) => {

  return (
    <div className="modal">
      <div className="modal__container">
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
          className="modal__input"
        />
        <div className="footer">
          <button 
            type="button" 
            className='modal__button' 
            onClick={() => closeModal(false)}
          >
            Save
          </button>
        </div>
        </form>
      </div>
    </div>
  )
}