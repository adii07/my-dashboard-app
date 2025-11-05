import { dashboardConfig } from "../../constants/dashboardConfig";
import { UserDashboardConfig } from "../../constants/userDashboardConfig";
import { PRIORITY } from "../../constants/priority";
import { WidgetConfig } from "../../types/Dashboard";
import DashboardItem from "../DashboardItem";
import Header from "../Header";
import styles from './index.module.css';


interface DashboardProps { category: 'user' | 'sales' }

const Dashboard = ({ category }: DashboardProps) => {
    const source = category === 'user' ? UserDashboardConfig : dashboardConfig;
    const orderedWidgets = [...source].sort((a, b) => PRIORITY[a.type] - PRIORITY[b.type]);
    console.log(orderedWidgets,'help');
    
    return (
        <div className={styles.dashboard_main_container}>
            <Header />
            {orderedWidgets.map((value: WidgetConfig) => (
                <DashboardItem {...value} key={value.id} />
            ))}
        </div>
    );
};

export default Dashboard;