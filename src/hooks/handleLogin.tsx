import { useNavigations } from "./useNavigation";

export const useHandleLogin = () => {
    const { email, password, navigate, setErrorMessage, setSuccessMessage, setEmailError, setPasswordError, setEmailSuccess, setPasswordSuccess } = useNavigations();
    setErrorMessage('');
    setSuccessMessage('');
    setEmailError(false);
    setPasswordError(false);
    setEmailSuccess(false);
    setPasswordSuccess(false);

    let hasError = false;

    if (!email) {
        setEmailError(true);
        hasError = true;
    } else if (!isValidEmail(email)) {
        setEmailError(true);
        hasError = true;
    } else {
        setEmailSuccess(true);
    }

    if (!password) {
        setPasswordError(true);
        hasError = true;
    } else if (password.length < 6) {
        setPasswordError(true);
        hasError = true;
    } else {
        setPasswordSuccess(true);
    }

    if (hasError) return;

    setSuccessMessage('Login successful!');
    setTimeout(() => {
        navigate('/dashboard');
    }, 1000);
};

export const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};