import React, {useState, useCallback, useEffect} from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../style/LoginModal.scss";

const LoginModal = ({show, handleClose}) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordVisibility, setPasswordVisibility] = useState("password");
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [passwordHidden, setPasswordHidden] = useState(true);
    const [loginDisabled, setLoginDisabled] = useState(true);

    const showPassword = useCallback(() => {
        setPasswordVisibility("text");
        setPasswordVisible(true);
        setPasswordHidden(false);
    }, [passwordVisibility, passwordVisible, passwordHidden]);

    const hidePassword = useCallback(() => {
        setPasswordVisibility("password");
        setPasswordVisible(false);
        setPasswordHidden(true);
    }, [passwordVisibility, passwordVisible, passwordHidden]);

    const handleEmailChange = event => setEmail(event.target.value);
    const handlePasswordChange = event => setPassword(event.target.value);

    const handleClick = () => {
        handleClose();
        setEmail("");
        setPassword("");
        setPasswordHidden(true);
    };

    function testEmailAndPassword(email, password) {
        let emailRegexp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/gi;
        let passwordRegexp = /(?=.*[0-9])+(?=.*[a-z])+(?=.*[A-Z])+(?=.*[$&+,:;=?@#|'<>.^*()%!-])+.{6,}/g;
        // At least 6 characters length, contain 1 numeric, 1 uppercase letter, 1 special character
        return emailRegexp.test(email) && passwordRegexp.test(password);
    }

    useEffect(() => {
        testEmailAndPassword(email, password) ? setLoginDisabled(false) : setLoginDisabled(true);
    }, [email, password]);

    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                className="ModalClass">

                <Modal.Body className="ModalBody" closeButton>

                    <p className="ModalBody__Title">Sign in</p>

                    <label className="ModalBody__Email__Label">Email</label>

                    <input className="ModalBody__Email__Input"
                           value={email}
                           onChange={handleEmailChange}/>

                    <div className="ModalBody__Password">
                        <label className="ModalBody__Password__Label">Password</label>
                        <p className="ModalBody__Password__Forgot" onClick={handleClick}>forgot password</p>
                    </div>

                    <div className="ModalBody__Password__Input">
                        <input className="ModalBody__Password__Input__Field"
                               value={password}
                               onChange={handlePasswordChange}
                               type={passwordVisibility}/>

                        {/* PASSWORD VISIBILITY TOGGLE */}
                        <img src="./LoginModal/password-show.svg"
                             className={`ModalBody__Password__Input__Icon ${passwordVisible ? "Element__Display" : "Element__Hide"}`}
                             onClick={hidePassword}
                             alt="password-show"/>
                        <img src="./LoginModal/password-hide.svg"
                             className={`ModalBody__Password__Input__Icon ${passwordHidden ? "Element__Display" : "Element__Hide"}`}
                             onClick={showPassword}
                             alt="password-hide"/>
                        {/* PASSWORD VISIBILITY TOGGLE */}
                    </div>

                    <Button className="ModalBody__LoginButton" variant="secondary" onClick={handleClick}
                            disabled={loginDisabled}>
                        Login
                    </Button>

                    <p className="ModalBody__NoAccount" onClick={handleClick}>
                        I don’t have an account
                    </p>
                </Modal.Body>

            </Modal>
        </>
    );
};

export default LoginModal;