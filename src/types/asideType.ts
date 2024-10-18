export interface AsideType {
    title: string;
    path: string;
    icon: string;
    dropdownIcon?: string;
    className?: string;
    type?: string;

}

export interface AsideData {
    title: string;
    links: AsideType[];
}

export interface Guarantor {
    fullName?: string;
    name?: string;
    relationship?: string;
    phone?: string;
    email?: string;
    occupation?: string;
    employmentStatus?: string;
    monthlyIncome?: number;
    bank?: string;
    accountNumber?: number;
    bvn?: number;
    guarantorId?: string;
    guarantorName?: string;
    guarantorEmail?: string;
    guarantorPhone?: string;
    guarantorOccupation?: string;
    guarantorEmploymentStatus?: string;
    guarantorMonthlyIncome?: number;
    guarantorBank?: string;
    guarantorAccountNumber?: number;
    guarantorBvn?: number;
}

export interface User {
    maritalStatus: string;
    id: string;
    profile: {
        company: string;
        name?: string;
        fullName?: string;
        residenceType?: string;
        levelOfEducation?: string;
        employmentStatus?: string;
        sectorOfEmployment?: string;
        durationOfEmployment?: string;
        officement?: string;
        monthlyIncome?: number;
        loanPayment?: number;
    };
    social: {
        twitter?: string;
        facebook?: string;
        instagram?: string;
    };
    email: string;
    username: string;
    phone?: string;
    createdAt: string;
    status?: string;
    hasLoan?: boolean;
    hasSaving?: boolean;
    loans?: string;
    rating?: number;
    amount?: number;
    bank?: string;
    accountNumber?: number;
    bvn?: number;
    gender?: string;
    guarantors: Guarantor[]; // Updated to an array of guarantors
    children?: string;
    marital?: string;
}

export interface UserTableProps {
    users: User[];
    setUsers: React.Dispatch<React.SetStateAction<User[]>>;
    filteredUsers: User[];
    setFilteredUsers: React.Dispatch<React.SetStateAction<User[]>>;
}


export interface NavigatorProps {
    users: User[];
    setFilteredUsers: React.Dispatch<React.SetStateAction<User[]>>;
    setIsAsideVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface MobileAsideProps {
    isVisible: boolean;
    onClose: () => void;
}