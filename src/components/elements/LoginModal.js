import React, {useState, useCallback} from "react";
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"
import "bootstrap/dist/css/bootstrap.min.css";
import "../../style/LoginModal.scss"

const LoginModal = ({show, handleClose}) => {

    const [passwordVisibility, setPasswordVisibility] = useState("password")
    const [passwordVisible, setPasswordVisible] = useState(false)
    const [passwordHidden, setPasswordHidden] = useState(true)

    const showPassword = useCallback(() => {
        setPasswordVisibility("text");
        setPasswordVisible(true);
        setPasswordHidden(false);
    }, [passwordVisibility, passwordVisible, passwordHidden])

    const hidePassword = useCallback(() => {
        setPasswordVisibility("password");
        setPasswordVisible(false);
        setPasswordHidden(true);
    }, [passwordVisibility, passwordVisible, passwordHidden])

    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}>

                <Modal.Body className="ModalBody" closeButton>

                    <p className="ModalBody__Title">Sign in</p>

                    <label className="ModalBody__Email__Label">Email</label>

                    <input className="ModalBody__Email__Input" required={true}/>

                    <div className="ModalBody__Password">
                        <label className="ModalBody__Password__Label">Password</label>
                        <p className="ModalBody__Password__Forgot">forgot password</p>
                    </div>

                    {/* PASSWORD VISIBILITY TOGGLE - LATER */}
                    <input className="ModalBody__Password__Input" type={passwordVisibility} required={true}/>
                    {/* PASSWORD VISIBILITY TOGGLE - LATER */}

                    {/* <i className="fas fa-eye"></i> */}
                    {/* <i className="fas fa-eye-slash"></i> */}
                    {/* <i className="far fa-eye"></i> */}
                    {/* <i className="far fa-eye-slash"></i> */}

                    <Button className="ModalBody__LoginButton" variant="secondary" onClick={handleClose}>
                        Login
                    </Button>

                    <p className="ModalBody__NoAccountButton" variant="secondary" onClick={handleClose}>
                        I don’t have an account
                    </p>

                </Modal.Body>

            </Modal>
        </>
    );
};

export default LoginModal;