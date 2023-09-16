import "./modal.css"

type SetValue = {
  setIsOpen: (arg1: boolean) => void
}

const Modal = ({setIsOpen}: SetValue) => {

  return (
    <>
    <div className='darkBG' onClick={() => setIsOpen(false)}/>
     <div className="modal">
      <div className="modal-content">Please chose an option</div>
      <div className="modal-actions">
        <a href="mailto:danadan01zx@gmail.com">
        <button className="goToEmailButton">Writte a letter</button>
        </a>
        <button className="closeButton" onClick={() => setIsOpen(false)}>Close</button>
      </div>
    </div>
    </>
  )
}

export default Modal