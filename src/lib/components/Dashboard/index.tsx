import { dashboardConfig } from "../../constants/dashboardConfig";
import { UserDashboardConfig } from "../../constants/userDashboardConfig";
import { PRIORITY } from "../../constants/priority";
import { DashboardConfigTypes, WidgetConfig } from "../../types/Dashboard";
import DashboardItem from "../DashboardItem";
import Header from "../Header";
import styles from './index.module.css';


const Dashboard = ({ category }: DashboardConfigTypes) => {
    const source = category === 'user' ? UserDashboardConfig : dashboardConfig;
    const orderedWidgets = [...source].sort((a, b) => PRIORITY[a.type] - PRIORITY[b.type]);

    return (
        <div className={styles.dashboard_main_container}>
            <Header category={category} />
            {orderedWidgets.map((value: WidgetConfig) => (
                <DashboardItem {...value} key={value.id} />
            ))}
        </div>
    );
};

export default Dashboard;