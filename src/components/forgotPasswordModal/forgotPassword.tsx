import React from 'react';
import '../../assets/styles/base/_inputs.scss';
import '../../assets/styles/base/_buttons.scss';
import '../../assets/styles/variables/_variables.scss';

import '../forgotPasswordModal/forgotPassword.scss'
import { useState } from 'react';
import { ModalProps } from '../../types/forgotPassword';



const ForgotPasswordModal: React.FC<ModalProps> = ({ isOpen, onClose, onSubmit }) => {
    const [email, setEmail] = useState('');

    if (!isOpen) return null;

    return (
        <div className="modal-backdrop">
            <div className="modal-content">
                <button className="modal-close" onClick={onClose}>×</button>
                <h1>Reset Password</h1>
                <p>Please enter your email to receive reset instructions:</p>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="modal-input input-control"
                />
                <button onClick={() => onSubmit(email)} className="btn-sm modal-submit">Submit</button>
            </div>
        </div>
    );
}

export default ForgotPasswordModal;
