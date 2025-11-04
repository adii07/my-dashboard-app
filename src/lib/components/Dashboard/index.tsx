import { dashboardConfig } from "../../constants/dashboardConfig";
import { WidgetConfig } from "../../types/Dashboard";
import DashboardItem from "../DashboardItem";
import styles from './index.module.css'
const Dashboard = () => {
    return (<div className={styles.dashboard_main_container}>
        {dashboardConfig.map((value: WidgetConfig, index: number) => {
            return <DashboardItem {...value} key={value.id} />

        })}
    </div>)
}

export default Dashboard;