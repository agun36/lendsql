import { AsideData } from "../types/asideType";

const asideData: AsideData[] = [
    {
        title: "Customers",
        links: [
            {
                title: "Users",
                path: "/customers/users",
                icon: "users-icon"
            },
            {
                title: "Guarantors",
                path: "/customers/guarantors",
                icon: "guarantors-icon"
            },

            {
                title: "Loans",
                path: "/customers/loans",
                icon: "loans-icon"
            },
            {
                title: "Decision Models",
                path: "/customers/decision-models",
                icon: "decision-models-icon"
            },
            {
                title: "Savings",
                path: "/customers/savings",
                icon: "savings-icon"
            },
            {
                title: "Loan Requests",
                path: "/customers/loan-requests",
                icon: "loan-requests-icon"
            },
            {
                title: "Whitelist",
                path: "/customers/whitelist",
                icon: "whitelist-icon"
            },
            {
                title: "karma",
                path: "/customers/karma",
                icon: "karma-icon"
            }
        ]
    },
    {
        title: "Businesses",
        links: [
            {
                title: "Organisation",
                path: "/business/organisation",
                icon: "organisation-icon"
            },
            {
                title: "Loan Products",
                path: "/business/loan-products",
                icon: "loan-products-icon"
            },
            {
                title: "fees and Charges",
                path: "/business/fees-and-charges",
                icon: "fees-and-charges-icon"
            },
            {
                title: "Transactions",
                path: "/business/transactions",
                icon: "transactions-icon"
            },
            {
                title: "Services",
                path: "/business/services",
                icon: "services-icon"
            },
            {
                title: "Service Account",
                path: "/business/service-account",
                icon: "service-account-icon"
            },
            {
                title: "Settlements",
                path: "/business/settlements",
                icon: "settlements-icon"
            },
            {
                title: "Reports",
                path: "/business/reports",
                icon: "reports-icon"
            }
        ]
    },
    {
        title: "Settings",
        links: [
            {
                title: "preferences",
                path: "/settings/preferences",
                icon: "preferences-icon"
            },
            {
                title: "fees and Pricing",
                path: "/settings/fees-and-pricing",
                icon: "fees-and-pricing-icon"
            },
            {
                title: "audit logs",
                path: "/settings/audit-logs",
                icon: "audit-logs-icon"
            }

        ]
    }
];

export default asideData;