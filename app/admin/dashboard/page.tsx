import { getMonthlyOrders } from "@/actions/orders";
import PageComponent from "./page-component";
import { getCategoryData } from "@/actions/categories";
import { getLatestUsers } from "@/actions/auth";

export default async function AdminDashboardPage() {
    const monthlyOrders = await getMonthlyOrders();
    const categoryData = await getCategoryData();
    const latestUsers = await getLatestUsers();

    return <PageComponent monthlyOrders={monthlyOrders} categoryData={categoryData} latestUsers={latestUsers} />;
}
