import ReactDOM from 'react-dom'
import React from 'react'
import './Modal.css'

const Modal = ({closeModal}) => {

    return ReactDOM.createPortal(
        <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-container" onClick={(event)=>event.stopPropagation()}>
                <div className="modal-header">
                    <h1>Message</h1>
                    <p className="close" onClick={closeModal}>&times;</p>
                </div>
                <div className="modal-body">
                    <h2>Hello.</h2>
                    <p>If you want to contact me directly,</p>
                    <p>
                       Click on the Contact to directly move to contact.
                       Thanks.
                    </p>
                </div>
                <div className="modal-footer">
                    <p className="modal-btn btn-red" onClick={closeModal}>Close</p>
                    <p className="modal-btn btn-green"
                        target="_blank"
                        href="www.raviteja.in"
                        rel="noreferrer">
                        Start Visiting
                    </p>
                </div>
            </div>
        </div>,
        document.getElementById("modal")
    )
}

export default Modal
