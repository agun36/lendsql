import React, { useState, useEffect } from 'react';
import './userTable.scss';
import filterResult from '../../assets/image/filter-results-button.svg';
import { User, UserTableProps } from '../../types/asideType';
import { getStatusClassName } from '../../libs/data';
import icMore from '../../assets/image/ic-more-vert-18px.svg';
import usersIcon from '../../assets/image/user-icon1.svg';
import usersIcon2 from '../../assets/image/active-user.svg';
import userWithLoan from '../../assets/image/loan-user.svg';
import userSaving from '../../assets/image/user-saving.svg';
import dropdown from '../../assets/image/dropdown-icon.svg';
import { NavLink } from 'react-router-dom';
import checkuser from '../../assets/image/check_user.svg';
import eye from '../../assets/image/eyes.svg';
import delete_friend from '../../assets/image/delete_friend.svg';
import next from '../../assets/image/next.svg';
import previous from '../../assets/image/previous.svg';
import '../../assets/styles/tables.scss';
import UserTableMobile from './userTableMobile';
import { useNavigations } from '../../hooks/useNavigation';
const UserTable: React.FC<UserTableProps> = ({ users }) => {
    const {
        currentPage,
        setCurrentPage,
        showDropdown,
        setShowDropdown,
        actionMenuUserId,
        setActionMenuUserId,
        filterDropdown,
        setFilterDropdown,
        navigate,
        location,
        filters,
        setFilters
    } = useNavigations();
    const [filteredUsers, setFilteredUsers] = useState<User[]>(users);

    const usersPerPage = 9;


    useEffect(() => {
        setFilteredUsers(users);
    }, [users]);

    const totalUsers = filteredUsers.length;
    const activeUsers = filteredUsers.filter(user => user.status === 'Active').length;
    const usersWithLoan = filteredUsers.filter(user => user.loans && user.loans.length > 0).length;

    const totalLoanAmount = filteredUsers.reduce((total, user) => {
        if (user.loans && user.loans.length > 0) {
            const userLoanTotal = Array.isArray(user.loans) ? user.loans.reduce((sum, loan) => sum + loan.loanAmount, 0) : 0;
            return total + userLoanTotal;
        }
        return total;
    }, 0);

    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfFirstUser + usersPerPage);

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
        setShowDropdown(false);
    };

    const handleActionMenuToggle = (userId: string) => {
        setActionMenuUserId(actionMenuUserId === userId ? null : userId);
    };


    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const activateUser = () => {
        setActionMenuUserId(null);
    };

    const blacklistUser = (userId: string) => {
        console.log(`User ${userId} blacklisted`);
        setActionMenuUserId(null);
    };

    const viewUserDetails = (userId: string) => {
        navigate(`/user/${userId}`);
        setActionMenuUserId(null);
    };

    const maxPages = 10;
    const totalPages = Math.min(Math.ceil(totalUsers / usersPerPage), maxPages);

    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFilters(prevFilters => ({
            ...prevFilters,
            [name]: value
        }));
    };

    const resetFilters = () => {
        setFilters({
            organization: '',
            username: '',
            email: '',
            phone: '',
            dateJoined: '',
            status: ''
        });
        setFilteredUsers(users);
    };

    const applyFilters = () => {
        let filtered = users;

        if (filters.organization) {
            filtered = filtered.filter(user => user.profile.company.toLowerCase().includes(filters.organization.toLowerCase()));
        }
        if (filters.username) {
            console.log(`Filtering by username: ${filters.username}`);
            filtered = filtered.filter(user => user.username.toLowerCase().includes(filters.username.toLowerCase()));
        }
        if (filters.email) {
            filtered = filtered.filter(user => user.email.toLowerCase().includes(filters.email.toLowerCase()));
        }
        if (filters.phone) {
            filtered = filtered.filter(user => user.phone && user.phone.includes(filters.phone));
        }
        if (filters.dateJoined) {
            filtered = filtered.filter(user => new Date(user.createdAt).toLocaleDateString() === new Date(filters.dateJoined).toLocaleDateString());
        }
        if (filters.status) {
            filtered = filtered.filter(user => user.status === filters.status);
        }

        console.log(`Filtered users: ${JSON.stringify(filtered)}`);
        setFilteredUsers(filtered);
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const renderPageNumbers = () => {
        const pageNumbers = [];
        const totalPagesToShow = 5;
        const startPage = Math.max(1, currentPage - Math.floor(totalPagesToShow / 2));
        const endPage = Math.min(totalPages, startPage + totalPagesToShow - 1);

        for (let i = startPage; i <= endPage; i++) {
            pageNumbers.push(
                <li
                    key={i}
                    onClick={() => handlePageChange(i)}
                    className={i === currentPage ? 'active' : ''}
                >
                    {i}
                </li>
            );
        }

        if (startPage > 1) {
            pageNumbers.unshift(<span key="start-ellipsis">...</span>);
            pageNumbers.unshift(
                <button key={1} onClick={() => handlePageChange(1)}>
                    1
                </button>
            );
        }

        if (endPage < totalPages) {
            pageNumbers.push(<span key="end-ellipsis">...</span>);
            pageNumbers.push(
                <button key={totalPages} onClick={() => handlePageChange(totalPages)}>
                    {totalPages}
                </button>
            );
        }

        return pageNumbers;
    };

    const getHeaderTitle = () => {
        switch (location.pathname) {
            case '/dashboard':
                return 'Dashboard';
            case '/customers/users':
                return 'Users';
            case '/user/:userId':
                return 'User Details';
            default:
                return 'Users';
        }
    };

    return (
        <div className="user-table_container container ">
            <header className="user-table_container_header">
                <h5>{getHeaderTitle()}</h5>
                <div className="cards">
                    <div className="card">
                        <img src={usersIcon} alt="Total Users" />
                        <h3>Total Users</h3>
                        <p>{totalUsers}</p>
                    </div>
                    <div className="card">
                        <img src={usersIcon2} alt="Active Users" />
                        <h3>Active Users</h3>
                        <p>{activeUsers}</p>
                    </div>
                    <div className="card">
                        <img src={userWithLoan} alt="Users with Loan" />
                        <h3>Users with Loan</h3>
                        <p>{usersWithLoan}</p>
                    </div>
                    <div className="card">
                        <img src={userSaving} alt="Total Loan Amount" />
                        <h3>Total Loan Amount</h3>
                        <p>{totalLoanAmount}</p>
                    </div>
                </div>
            </header>
            <table className="user-table_container_body table mobile-hide">
                <thead className="user-table-header">
                    <tr >
                        {['Organization', 'Username', 'Email', 'Phone Number', 'Date Joined', 'Status'].map((header, index) => (
                            <th key={index}>
                                {header} <img src={filterResult} alt="showing filter icon" onClick={() => setFilterDropdown(filterDropdown === header ? null : header)} />
                                {filterDropdown === header && (
                                    <div className="filter-dropdown">
                                        {header === 'Organization' ? (
                                            <select
                                                name="organization"
                                                value={filters.organization}
                                                onChange={handleFilterChange}
                                            >
                                                <option value="">Select Organization</option>
                                                {/* Add options dynamically based on available organizations */}
                                                {[...new Set(users.map(user => user.profile.company))].slice(0, 10).map((organization, idx) => (
                                                    <option key={idx} value={organization}>
                                                        {organization}
                                                    </option>
                                                ))}
                                            </select>
                                        ) : header === 'Username' ? (
                                            <input
                                                type="text"
                                                name="username"
                                                value={filters.username}
                                                onChange={handleFilterChange}
                                                placeholder="Username"
                                            />
                                        ) : header === 'Email' ? (
                                            <input
                                                type="email"
                                                name="email"
                                                value={filters.email}
                                                onChange={handleFilterChange}
                                                placeholder="Email"
                                            />
                                        ) : header === 'Phone Number' ? (
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={filters.phone}
                                                onChange={handleFilterChange}
                                                placeholder="Phone Number"
                                            />
                                        ) : header === 'Date Joined' ? (
                                            <input
                                                type="date"
                                                name="dateJoined"
                                                value={filters.dateJoined}
                                                onChange={handleFilterChange}
                                                placeholder="Date Joined"
                                            />
                                        ) : header === 'Status' ? (
                                            <select
                                                name="status"
                                                value={filters.status}
                                                onChange={handleFilterChange}
                                            >
                                                <option value="">Select Status</option>
                                                <option value="Active">Active</option>
                                                <option value="Inactive">Inactive</option>
                                                <option value="Blacklisted">Blacklisted</option>
                                            </select>
                                        ) : null}
                                        <div className="btn-container">
                                            <button onClick={resetFilters} className='btn-outline-sm btn-reset'>Reset</button>
                                            <button onClick={applyFilters} className='btn-xsm'>Filter</button>
                                        </div>
                                    </div>
                                )}
                            </th>
                        ))}
                    </tr>
                </thead>

                <tbody className="user-table-row">
                    {currentUsers.map((user) => (
                        <tr key={user.id}>
                            <td>{user.profile.company}</td>
                            <td>{user.username}</td>
                            <td className="email">{user.email}</td>
                            <td className="phone">{user.phone || 'N/A'}</td>
                            <td>{new Date(user.createdAt).toLocaleDateString()}</td>
                            <td>
                                <button className={getStatusClassName(user.status || '')}>{user.status}</button>
                            </td>
                            <td className="edit-button">
                                <div className='edit-btn_hover'>
                                    <img
                                        onClick={() => handleActionMenuToggle(user.id)}
                                        src={icMore}
                                        alt="action"
                                    />
                                    {/* {actionMenuUserId === user.id && ( */}
                                    <ul className="action-menu">
                                        <li onClick={() => activateUser()}>
                                            <NavLink to='#'> <img src={eye} alt="" /> Activate</NavLink>
                                        </li>
                                        <li onClick={() => blacklistUser(user.id)}>
                                            <NavLink to="#"> <img src={delete_friend} alt="" /> Blacklist</NavLink>
                                        </li>
                                        <li onClick={() => viewUserDetails(user.id)}>
                                            <NavLink to="#"><img src={checkuser} alt="" /> View Details</NavLink>
                                        </li>
                                    </ul>
                                </div>
                                {/* )} */}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <UserTableMobile users={currentUsers} />
            <div className='user-table_container_pagination_controls'>
                {/* Pagination Button with Dropdown */}
                <div className="user-table_container_pagination_controls_dropdown">
                    <div className="user-table_container_pagination-button-group">
                        <p>Showing</p>
                        <button
                            onClick={() => setShowDropdown(!showDropdown)}
                            className="pagination-button"
                        >
                            {currentPage} <span className="dropdown-icon"><img src={dropdown} alt="" /></span>
                        </button>
                        <p>out of {totalPages}</p>
                    </div>

                    {showDropdown && (
                        <div className="dropdown-menu ">
                            {pageNumbers.map(number => (
                                <button
                                    key={number}
                                    onClick={() => handlePageChange(number)}
                                    className={number === currentPage ? 'active' : ''}
                                >
                                    {number}
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* Previous and Next buttons */}
                <div className="pagination-controls">
                    <button onClick={handlePrevPage} disabled={currentPage === 1}>
                        <img src={next} alt="showing next page icon" />
                    </button>
                    <ul className="pagination-controls_page-numbers">
                        {renderPageNumbers()}
                    </ul>
                    <button onClick={handleNextPage} disabled={currentPage === totalPages}>
                        <img src={previous} alt="showing previous page icon" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UserTable;