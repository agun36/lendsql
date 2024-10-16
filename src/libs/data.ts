import { AsideData } from "../types/asideType";
import usersIcon from '../assets/users.svg';
import guarantor from '../assets/guanrantor.svg';
import loansIcon from '../assets/loan.svg';
import savingsIcon from '../assets/saving-pro.svg';
import whitelist from '../assets/white-list.svg';
import karma from '../assets/user-times 1.svg';
import decisionModels from '../assets/handshake-regular 1.svg';
import loanRequests from '../assets/loan-req.svg';
import organisation from '../assets/briefcase 1.svg';
import loanProducts from '../assets/loan-prod.svg';
import coinSolid from '../assets/coins-solid 1.svg';
import report from '../assets/chart-bar 2.svg';
import transaction from '../assets/transaction.svg';
import services from '../assets/service.svg';
import userCog from '../assets/user-cog 1.svg';
import fee from '../assets/badge-percent 1.svg';
import preferences from '../assets/sliders-h 1.svg';
import audit from '../assets/clipboard-list 1.svg';
import home from '../assets/home 1.svg'
import scroll from '../assets/scroll 1.svg';
import dropdown from '../assets/dropdown-icon.svg'
const asideData: AsideData[] = [
    {
        title: "Switch Organization",
        links: [
            {
                title: 'Switch organisation ',
                path: "/",
                icon: organisation,
                dropdownIcon: dropdown
            }
        ]
    },
    {
        title: "Dashboard",
        links: [
            {
                title: "Dashboard",
                path: "/dashboard",
                icon: home
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
                title: "fees and Pricing",
                path: "/settings/fees-and-pricing",
                icon: fee
            },
            {
                title: "audit logs",
                path: "/settings/audit-logs",
                icon: audit
            }

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