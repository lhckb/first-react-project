import React, { useContext } from "react";
import { FaTimes } from 'react-icons/fa'
import { AppContext } from "./contexts";
import cat from './assets/cat.jpg'

const Modal = () => {
  const { isModalOpen, openModal, closeModal, openSidebar } = useContext(AppContext)

  const checkModal = () => {
    if (isModalOpen) {
      return 'show-modal'
    }
    return ''
  }

  return <div className={`modal ${checkModal()}`}>

    <div className="modal-container">

      <button className="close-btn" onClick={closeModal}>
        <FaTimes/>
      </button>

      <h3>look at my cat:</h3>

      <img src={ cat } alt="cat" />

      <h3>ok now check out this kick ass sidebar</h3>

      <button className="btn" onClick={() => {
        openSidebar()
        closeModal()
      }}>
        open sidebar
      </button>

    </div>

  </div>
}

export default Modal