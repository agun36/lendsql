import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useNavigations = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [emailSuccess, setEmailSuccess] = useState(false);
    const [passwordSuccess, setPasswordSuccess] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();

    return {
        email,
        setEmail,
        password,
        setPassword,
        errorMessage,
        setErrorMessage,
        successMessage,
        setSuccessMessage,
        emailError,
        setEmailError,
        passwordError,
        setPasswordError,
        emailSuccess,
        setEmailSuccess,
        passwordSuccess,
        setPasswordSuccess,
        isModalOpen,
        setIsModalOpen,
        navigate
    }
}