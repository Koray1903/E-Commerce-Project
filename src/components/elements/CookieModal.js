import React, {useState, useEffect} from "react";
import Modal from "react-bootstrap/Modal"
import "bootstrap/dist/css/bootstrap.min.css";
import "../../style/CookieModal.scss"

const CookieModal = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    useEffect(() => { // COOKIE MODAL 10 SECONDS AFTER MOUNT
        setTimeout(() => setShow(true), 10000)
    }, [])


    return (
        <>
            <Modal size="lg"
                   show={show}
                   onHide={handleClose}
                   backdrop="static"
                   keyboard={false}
                   aria-labelledby="example-custom-modal-styling-title"
                   className="CookieModalWindow">

                <Modal.Body className="CookieModalWindow__Body" closeButton>

                    {/* CLOSE BUTTON */}
                    <i className="fas fa-times CookieModalWindow__CloseButton" onClick={handleClose}></i>
                    {/* CLOSE BUTTON */}

                    <p className="CookieModalWindow__Title">This website uses cookies</p>

                    <p className="CookieModalWindow__Text">OSF uses its own and third-party cookies for statistical
                        purposes, to know your preferences, for
                        website performance
                        and interaction with social media offering publicity tailored to your interests. If you continue
                        browsing, we consider that you accept its use.
                        You can expand this information consulting our <span
                            className="CookieModalWindow__Text__Colored">Cookies Policy Page</span>.</p>

                    {/* REDUX - LOCAL STORAGE - LATER */}
                    <button className="CookieModalWindow__AcceptButton" onClick={handleClose}>accept</button>
                    {/* REDUX - LOCAL STORAGE - LATER */}
                </Modal.Body>

            </Modal>
        </>
    );
};

export default CookieModal;