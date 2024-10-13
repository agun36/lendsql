import Navigator from '../../components/navigator/navigator';
import AsideComponent from '../aside/aside';
import './userDashboard.scss'
import UserTable from './userTable';
export default function UserDashboard() {
    return (
        <div className="user-dashboard">
            <Navigator />
            <div className="main-content">
                <AsideComponent />
                <UserTable />
            </div>
        </div >
    );
}