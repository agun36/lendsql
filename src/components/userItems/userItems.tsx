import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserTableProps } from '../../types/asideType';
import './userItem.scss';
import arrowBack from '../../assets/image/backArrow.svg';
import empty from '../../assets/image/empty-star.svg';
import full from '../../assets/image/full.svg';
import avater2 from '../../assets/image/avatar2.svg';


const UserList: React.FC<UserTableProps> = ({ users }) => {
    const { userId } = useParams<{ userId: string }>();
    const user = users.find(user => user.id === userId);
    const [activeTab, setActiveTab] = useState('general');

    if (!user) {
        return <div>User not found</div>;
    }

    const renderStars = (rating: number) => {
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 !== 0;
        const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

        return (
            <>
                {[...Array(fullStars)].map((_, i) => (
                    <img src={full} alt="" key={i} className="star full" />
                ))}
                {[...Array(emptyStars)].map((_, i) => (
                    <img src={empty} alt="" key={i} className="star empty" />
                ))}
            </>
        );
    };

    const renderTabContent = () => {
        switch (activeTab) {
            case 'general':
                return (
                    <div className='general-info'>
                        <div className="personal-info">
                            <h4>Personal Information</h4>
                            <div className="personal-info_head">
                                <div className='personal-info_details'>
                                    <h5>Full Name</h5>
                                    <p>{user.profile.name}</p>
                                </div>
                                <div className='personal-info_details'>
                                    <h5>Phone Number</h5>
                                    <p>{user.phone}</p>
                                </div>
                                <div className='personal-info_details'>
                                    <h5>Email Address</h5>
                                    <p>{user.email}</p>
                                </div>
                                <div className='personal-info_details'>
                                    <h5>BVN</h5>
                                    <p>{user.bvn}</p>
                                </div>
                                <div className='personal-info_details'>
                                    <h5>Gender</h5>
                                    <p>{user.gender}</p>
                                </div>
                                <div className='personal-info_details'>
                                    <h5>Marital Status</h5>
                                    <p>{user.maritalStatus}</p>
                                </div>
                                <div className='personal-info_details'>
                                    <h5>Children</h5>
                                    <p>{user.children}</p>
                                </div>
                                <div className='personal-info_details'>
                                    <h5>Type of Residence</h5>
                                    <p>{user.profile.residenceType}</p>
                                </div>
                            </div>
                        </div>
                        <div className="personal-info">
                            <h4>Educational and Employment</h4>
                            <div className="personal-info_head">
                                <div className='personal-info_details'>
                                    <h5>Level of Education</h5>
                                    <p>{user.profile.levelOfEducation}</p>
                                </div>
                                <div className='personal-info_details'>
                                    <h5>Employment Status</h5>
                                    <p>{user.profile.employmentStatus}</p>
                                </div>
                                <div className='personal-info_details'>
                                    <h5>Sector of Employment</h5>
                                    <p>{user.profile.sectorOfEmployment}</p>
                                </div>
                                <div className='personal-info_details'>
                                    <h5>Duration of Employment</h5>
                                    <p>{user.profile.durationOfEmployment}</p>
                                </div>
                                <div className='personal-info_details'>
                                    <h5>Officement</h5>
                                    <p>{user.profile.officement}</p>
                                </div>
                                <div className='personal-info_details'>
                                    <h5>Monthly Income</h5>
                                    <p>{user.profile.monthlyIncome}</p>
                                </div>
                                <div className='personal-info_details'>
                                    <h5>Loan Payment</h5>
                                    <p>{user.profile.loanPayment}</p>
                                </div>
                            </div>
                        </div>
                        <div className="personal-info">
                            <h4>Socials</h4>
                            <div className="personal-info_head">
                                <div className='personal-info_details'>
                                    <h5>Twitter</h5>
                                    <p>{user.social.twitter}</p>
                                </div>
                                <div className='personal-info_details'>
                                    <h5>Facebook</h5>
                                    <p>{user.social.facebook}</p>
                                </div>
                                <div className='personal-info_details'>
                                    <h5>Instagram</h5>
                                    <p>{user.social.instagram}</p>
                                </div>
                            </div>
                        </div>
                        <div className="personal-info">
                            <h4>Guarantors</h4>
                            {user.guarantors.map((guarantor, index) => (
                                <div key={index} className="personal-info_head">
                                    <div className='personal-info_details'>
                                        <h5>Full Name</h5>
                                        <p>{guarantor.fullName}</p>
                                    </div>
                                    <div className='personal-info_details'>
                                        <h5>Phone Number</h5>
                                        <p>{guarantor.phone}</p>
                                    </div>
                                    <div className='personal-info_details'>
                                        <h5>Email Address</h5>
                                        <p>{guarantor.email}</p>
                                    </div>
                                    <div className='personal-info_details'>
                                        <h5>Relationship</h5>
                                        <p>{guarantor.relationship}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            case 'Documents':
                return (
                    <div>
                        <h5>Documents</h5>
                        <p>Coming soon</p>
                    </div>
                );
            case 'Bank Details':
                return (
                    <div>
                        <h5>Bank Details</h5>
                        <p>Coming soon</p>
                    </div>
                );
            case 'Loan':
                return (
                    <div>
                        <h5>Loan</h5>
                        <p>Coming soon</p>
                    </div>
                );
            case 'Savings':
                return (
                    <div>
                        <h5>Savings</h5>
                        <p>Coming soon</p>
                    </div>
                );
            case 'App and System':
                return (
                    <div>
                        <h5>App and System</h5>
                        <p>Coming soon</p>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="user-details_container">
            <div className="back_to_users">
                <img src={arrowBack} alt="Back to Users" />
                <p>Back to Users</p>
            </div>
            <div className="user-details_sub">
                <div className="user-details_title">
                    <h5>User Details</h5>
                </div>
                <div className="user-details_button_group">
                    <button className='btn-outline_danger'>Blacklist User</button>
                    <button className='btn-outline-primary'>Activate User</button>
                </div>
            </div>
            <div className="user-details_tab ">
                <div className="user-details">
                    <img src={avater2} alt="avatar" />
                    <div className="user">
                        <h6>{user.profile.name}</h6>
                        <p>{user.id}</p>
                    </div>
                    <div className="user-rating">
                        <p>User&apos;s Rating</p>
                        {user.rating !== undefined && renderStars(user.rating)}
                    </div>
                    <div className="user-total-amount">
                        <h6>#{user.amount}</h6>
                        <p>{user.accountNumber} / {user.bank}</p>
                    </div>
                </div>
                <div className="user-details_tab_links">
                    <p
                        className={activeTab === 'general' ? 'active' : ''}
                        onClick={() => setActiveTab('general')}
                    >
                        General Details
                    </p>
                    <p
                        className={activeTab === 'Documents' ? 'active' : ''}
                        onClick={() => setActiveTab('Documents')}
                    >
                        Documents
                    </p>
                    <p
                        className={activeTab === 'Bank Details' ? 'active' : ''}
                        onClick={() => setActiveTab('Bank Details')}
                    >
                        Bank Details
                    </p>
                    <p
                        className={activeTab === 'Loan' ? 'active' : ''}
                        onClick={() => setActiveTab('Loan')}
                    >
                        Loan
                    </p>
                    <p
                        className={activeTab === 'Savings' ? 'active' : ''}
                        onClick={() => setActiveTab('Savings')}
                    >
                        Savings
                    </p>
                    <p
                        className={activeTab === 'App and System' ? 'active' : ''}
                        onClick={() => setActiveTab('App and System')}
                    >
                        App and System
                    </p>
                </div>
            </div>
            <div className="user-detailsTabSelect">
                {renderTabContent()}
            </div>
        </div>
    );
};

export default UserList;