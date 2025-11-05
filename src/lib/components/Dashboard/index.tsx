import { dashboardConfig } from "../../constants/dashboardConfig";
import { PRIORITY } from "../../constants/priority";
import { WidgetConfig } from "../../types/Dashboard";
import DashboardItem from "../DashboardItem";
import Header from "../Header";
import styles from './index.module.css'
const Dashboard = () => {
    const orderedWidgets = [...dashboardConfig].sort(
        (a, b) => PRIORITY[a.type] - PRIORITY[b.type]
    );
    return (<div className={styles.dashboard_main_container}>
       <Header/>
        {orderedWidgets.map((value: WidgetConfig, index: number) => {
            return <DashboardItem {...value} key={value.id} />

        })}
    </div>)
}

export default Dashboard;