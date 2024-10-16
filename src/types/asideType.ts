export interface AsideType {
    title: string;
    path: string;
    icon: string;
    dropdownIcon?: string;
}

export interface AsideData {
    title: string;
    links: AsideType[]
}
export interface User {
    id: string;
    profile: {
        company: string;
    };
    email: string;
    username: string;
    phone?: string;
    createdAt: string;
    status?: string;
    hasLoan?: boolean;
    hasSaving?: boolean;
    loans?: string;
}


export interface UserTableProps {

    users: User[];

    setUsers: React.Dispatch<React.SetStateAction<User[]>>;

    filteredUsers: User[];

    setFilteredUsers: React.Dispatch<React.SetStateAction<User[]>>;

}
