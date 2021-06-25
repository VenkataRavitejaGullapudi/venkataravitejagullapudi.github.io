import ReactDOM from 'react-dom'
import React from 'react'
import './Modal.css'

const Modal = ({ closeModal, modalTitle, modalSubTitle, modalBodyPara1, modalBodyPara2, actionButton }) => {

    return ReactDOM.createPortal(
        <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-container" onClick={(event) => event.stopPropagation()}>
                <div className="modal-header">
                    <h1>{modalTitle}</h1>
                    <p className="close" onClick={closeModal}>&times;</p>
                </div>
                <div className="modal-body">
                    <p>{modalSubTitle}</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{modalBodyPara1}</p>
                    {modalBodyPara2.includes('https') ? 
                        <a href={modalBodyPara2} className="link" target="_blank" rel="noreferrer">
                            Check it here
                        </a>
                    :
                    <p >
                        {modalBodyPara2}
                    </p>
                }
                </div>
                <div className="modal-footer">
                    <p className="modal-btn btn-red" onClick={closeModal}>Close</p>
                    { actionButton &&
                        <p className="modal-btn btn-green"
                            target="_blank"
                            href="www.raviteja.in"
                            rel="noreferrer">
                            Start Visiting
                        </p>
                    }
                </div>
            </div>
        </div>,
        document.getElementById("modal")
    )
}

export default Modal
