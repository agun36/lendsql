import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

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
    const [currentPage, setCurrentPage] = useState(1);
    const [showDropdown, setShowDropdown] = useState(false);
    const [actionMenuUserId, setActionMenuUserId] = useState<string | null>(null);
    const [filterDropdown, setFilterDropdown] = useState<string | null>(null);
    const location = useLocation();
    const [filters, setFilters] = useState({
        organization: '',
        username: '',
        email: '',
        phone: '',
        dateJoined: '',
        status: ''
    });

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
        navigate,
        currentPage,
        setCurrentPage,
        showDropdown,
        setShowDropdown,
        actionMenuUserId,
        setActionMenuUserId,
        filterDropdown,
        setFilterDropdown,
        location,
        filters,
        setFilters,
    }
}