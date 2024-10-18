import { AsideData } from "../types/asideType";
import usersIcon from '../assets/image/users.svg';
import guarantor from '../assets/image/guanrantor.svg';
import loansIcon from '../assets/image/loan.svg';
import savingsIcon from '../assets/image/saving-pro.svg';
import whitelist from '../assets/image/white-list.svg';
import karma from '../assets/image/user-times 1.svg';
import decisionModels from '../assets/image/handshake-regular 1.svg';
import loanRequests from '../assets/image/loan-req.svg';
import organisation from '../assets/image/briefcase 1.svg';
import loanProducts from '../assets/image/loan-prod.svg';
import coinSolid from '../assets/image/coins-solid 1.svg';
import report from '../assets/image/chart-bar 2.svg';
import transaction from '../assets/image/transaction.svg';
import services from '../assets/image/service.svg';
import userCog from '../assets/image/user-cog 1.svg';
import fee from '../assets/image/badge-percent 1.svg';
import preferences from '../assets/image/sliders-h 1.svg';
import audit from '../assets/image/clipboard-list 1.svg';
import home from '../assets/image/home 1.svg';
import scroll from '../assets/image/scroll 1.svg';
import dropdown from '../assets/image/dropdown-icon.svg';
import tire from '../assets/image/tire 1.svg';
import logoutIcon from '../assets/image/sign-out 1.svg';

const asideData: AsideData[] = [
    {
        title: "Switch Organization",
        links: [
            {
                title: 'Switch organisation ',
                path: "/",
                icon: organisation,
                dropdownIcon: dropdown,
                className: 'switch-organ'
            }
        ],


    },
    {
        title: "Dashboard",
        links: [
            {
                title: "Dashboard",
                path: "/dashboard",
                icon: home,
                className: 'dashboard'
            }
        ]
    },
    {
        title: "Customers",
        links: [
            {
                title: "Users",
                path: "/customers/users",
                icon: usersIcon
            },
            {
                title: "Guarantors",
                path: "/customers/guarantors",
                icon: guarantor
            },
            {
                title: "Loans",
                path: "/customers/loans",
                icon: loansIcon
            },
            {
                title: "Decision Models",
                path: "/customers/decision-models",
                icon: decisionModels
            },
            {
                title: "Savings",
                path: "/customers/savings",
                icon: savingsIcon
            },
            {
                title: "Loan Requests",
                path: "/customers/loan-requests",
                icon: loanRequests
            },
            {
                title: "Whitelist",
                path: "/customers/whitelist",
                icon: whitelist
            },
            {
                title: "karma",
                path: "/customers/karma",
                icon: karma
            }
        ]
    },
    {
        title: "Businesses",
        links: [
            {
                title: "Organisation",
                path: "/business/organisation",
                icon: organisation
            },
            {
                title: "Loan Products",
                path: "/business/loan-products",
                icon: loanProducts
            },
            {
                title: "fees and Charges",
                path: "/business/fees-and-charges",
                icon: coinSolid
            },
            {
                title: "Transactions",
                path: "/business/transactions",
                icon: transaction
            },
            {
                title: "Services",
                path: "/business/services",
                icon: services
            },
            {
                title: "Service Account",
                path: "/business/service-account",
                icon: userCog
            },
            {
                title: "Settlements",
                path: "/business/settlements",
                icon: scroll
            },
            {
                title: "Reports",
                path: "/business/reports",
                icon: report
            }
        ]
    },
    {
        title: "Settings",
        links: [
            {
                title: "preferences",
                path: "/settings/preferences",
                icon: preferences
            },
            {
                title: "Fees and Pricing",
                path: "/settings/fees-and-pricing",
                icon: fee
            },
            {
                title: "Audit logs",
                path: "/settings/audit-logs",
                icon: audit
            },
            {
                title: "Systems messages",
                path: '/settings/tires',
                icon: tire
            }
        ]
    },
    {
        title: 'Logout',
        links: [
            {
                title: 'Logout',
                path: '/logout',
                icon: logoutIcon,
                className: 'logout-link',
                type: 'button'
            },
        ]
    }
];

export const getStatusClassName = (status: string) => {
    switch (status) {
        case 'Active':
            return 'status-success';
        case 'Blacklisted':
            return 'status-danger';
        case 'Pending':
            return 'status-warning';
        case 'Inactive':
            return 'status-warm';
        default:
            return '';
    }
};

export default asideData;