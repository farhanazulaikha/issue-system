import './popup.css'
import correctImage from '../../assets/images/image.png'

const Popup = ({ modal, closeModal }) => {
  return (
    <>
        {modal && (
            <div className="modal">
                <div onClick={closeModal} className="overlay"></div>
                <div className="modal__content">
                    <button onClick={closeModal}>✖</button>
                    <img src={correctImage} alt="cookies-img" />
                    <p>Your issue has been submitted!</p>
                    <p>We will get back to you shortly.</p>
                    <button onClick={closeModal}>Close</button>
                </div>
            </div>
        )}
    </>
  )
}

export default Popup