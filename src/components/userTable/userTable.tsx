import React, { useState } from 'react';
import './userTable.scss';
import filterResult from '../../assets/filter-results-button.svg';
import { UserTableProps } from '../../types/asideType';
import { getStatusClassName } from '../../libs/data';
import icMore from '../../assets/ic-more-vert-18px.svg';
import usersIcon from '../../assets/user-icon1.svg';
import usersIcon2 from '../../assets/active-user.svg';
import userWithLoan from '../../assets/loan-user.svg';
import userSaving from '../../assets/user-saving.svg';
import dropdown from '../../assets/dropdown-icon.svg';
import { NavLink, useNavigate } from 'react-router-dom';
import checkuser from '../../assets/check_user.svg';
import eye from '../../assets/eyes.svg';
import delete_friend from '../../assets/delete_friend.svg';

const UserTable: React.FC<UserTableProps> = ({ users }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [showDropdown, setShowDropdown] = useState(false);
    const [actionMenuUserId, setActionMenuUserId] = useState<string | null>(null); // To handle action menu visibility
    const usersPerPage = 9;
    const navigate = useNavigate();

    const totalUsers = users.length;
    const activeUsers = users.filter(user => user.status === 'Active').length;
    const usersWithLoan = users.filter(user => user.loans && user.loans.length > 0).length;

    const totalLoanAmount = users.reduce((total, user) => {
        if (user.loans && user.loans.length > 0) {
            const userLoanTotal = Array.isArray(user.loans) ? user.loans.reduce((sum, loan) => sum + loan.loanAmount, 0) : 0;
            return total + userLoanTotal;
        }
        return total;
    }, 0);

    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
        setShowDropdown(false);
    };

    const handleActionMenuToggle = (userId: string) => {
        setActionMenuUserId(actionMenuUserId === userId ? null : userId); // Toggle menu visibility
    };

    const activateUser = (userId: string) => {
        console.log(`User ${userId} activated`);
        // Your activation logic here
        setActionMenuUserId(null); // Close menu after action
    };

    const blacklistUser = (userId: string) => {
        console.log(`User ${userId} blacklisted`);
        // Your blacklist logic here
        setActionMenuUserId(null); // Close menu after action
    };

    const viewUserDetails = (userId: string) => {
        navigate(`/user/${userId}`);
        setActionMenuUserId(null); // Close menu after action
    };

    const maxPages = 10;
    const totalPages = Math.min(Math.ceil(totalUsers / usersPerPage), maxPages);

    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    return (
        <main className="user-table_container container">
            <header className="user-table_container_header">
                <h2>Users </h2>
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

            <section className="user-table_container_body">
                <ul className="user-table-header">
                    <li>Organization <img src={filterResult} alt="showing filter icon" /></li>
                    <li>Username <img src={filterResult} alt="showing filter icon" /></li>
                    <li>Email <img src={filterResult} alt="showing filter icon" /></li>
                    <li>Phone Number <img src={filterResult} alt="showing filter icon" /></li>
                    <li>Date Joined <img src={filterResult} alt="showing filter icon" /></li>
                    <li>Status <img src={filterResult} alt="showing filter icon" /></li>
                </ul>

                {currentUsers.map((user) => (
                    <ul key={user.id} className="user-table-row">
                        <li>{user.profile.company}</li>
                        <li>{user.username}</li>
                        <li className="email">{user.email}</li>
                        <li className="phone">{user.phone || 'N/A'}</li>
                        <li>{new Date(user.createdAt).toLocaleDateString()}</li>
                        <li className={getStatusClassName(user.status || '')}>{user.status}</li>
                        <li className="edit-button">
                            <img
                                onClick={() => handleActionMenuToggle(user.id)}
                                src={icMore}
                                alt="action menu icon"
                            />
                            {actionMenuUserId === user.id && (
                                <ul className="action-menu">
                                    <li onClick={() => activateUser(user.id)}>
                                        <NavLink to='#'> <img src={eye} alt="" /> Activate</NavLink>
                                    </li>
                                    <li onClick={() => blacklistUser(user.id)}>
                                        <NavLink to="#"> <img src={delete_friend} alt="" /> Blacklist</NavLink>
                                    </li>
                                    <li onClick={() => viewUserDetails(user.id)}>
                                        <NavLink to="#"><img src={checkuser} alt="" /> View Details</NavLink>
                                    </li>
                                </ul>
                            )}
                        </li>
                    </ul>
                ))}
            </section>

            {/* Pagination Button with Dropdown */}
            <div className="user-table_container_pagination">
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
                    <div className="dropdown-menu">
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
        </main>
    );
};

export default UserTable;