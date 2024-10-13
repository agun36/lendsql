import { NavLink } from 'react-router-dom';
import '../../assets/styles/base/_inputs.scss';
import '../../assets/styles/base/_buttons.scss';
import '../../assets/styles/variables/_variables.scss';
import '../authForm/userForm.scss';
import ForgotPasswordModal from '../forgotPasswordModal/forgotPassword';
import { useNavigations } from '../../hooks/useNavigation';
import showPassword from '../../hooks/showPassword';
import { isValidEmail } from '../../hooks/handleLogin';

export default function UserForm() {
    const {
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
        navigate,
        isModalOpen,
        setIsModalOpen
    } = useNavigations();

    // Basic email validation function

    const handleLogin = () => {
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

    const handlePasswordReset = (resetEmail: string) => {
        if (isValidEmail(resetEmail)) {
            alert(`Password reset instructions sent to ${resetEmail}`);
            setIsModalOpen(false);
        } else {
            alert('Invalid email format.');
        }
    };

    return (
        <aside className="user-form">
            <header className="form-header">
                <h1>Welcome!</h1>
                <p>Enter details to login.</p>
            </header>
            {errorMessage && <div className="error-message">{errorMessage}</div>}
            {successMessage && <div className="success-message">{successMessage}</div>}

            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    handleLogin();
                }}
            >
                {/* Email Input */}
                <div className="form-control">
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                        className={`input-control ${emailError ? 'input-error' : emailSuccess ? 'input-success' : ''}`}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {emailError && <small className="error-message">Email is required or invalid</small>}
                    {emailSuccess && <span className="success-icon">✓</span>}
                </div>

                {/* Password Input */}
                <div className="form-control">
                    <div className="input-wrapper">
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Password"
                            className={`input-control ${passwordError ? 'input-error' : passwordSuccess ? 'input-success' : ''}`}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    {passwordError && <small className="error-message">Password is required or too short</small>}
                    {passwordSuccess && <span className="success-icon">✓</span>}
                    <p className="show-password" id="togglePassword" onClick={showPassword}>Show</p>
                </div>

                <div className="form-footer">
                    <NavLink to="#" onClick={() => setIsModalOpen(true)} className="forgot-password">Forgot password?</NavLink>
                    <button type="submit" className="btn ">Log in</button>
                </div>
            </form>

            {/* Include the Modal */}
            <ForgotPasswordModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSubmit={handlePasswordReset}
            />
        </aside>
    );
}
