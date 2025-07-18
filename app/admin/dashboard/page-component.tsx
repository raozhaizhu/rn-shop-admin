"use client";

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ADMIN_DASHBOARD_TEXTS as TEXTS } from "@/constants/constants-ch";

type MonthlyOrderData = {
    name: string;
    orders: number;
};

type CategoryData = {
    name: string;
    products: number;
};

type latestUser = {
    id: string;
    email: string;
    date: string | null;
};

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const PageComponent = ({
    monthlyOrders,
    categoryData,
    latestUsers,
}: {
    monthlyOrders: MonthlyOrderData[];
    categoryData: CategoryData[];
    latestUsers: latestUser[];
}) => {
    return (
        <div className="flex-1 p-8 overflow-auto">
            <h1 className="text-3xl font-bold mb-6">{TEXTS.TITLE}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Orders Chart */}
                <Card>
                    <CardHeader>
                        <CardTitle>{TEXTS.CARD_1_TITLE}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={monthlyOrders}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="orders" fill="navy" />
                            </BarChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>
                {/* Products Chart */}
                <Card>
                    <CardHeader>
                        <CardTitle>{TEXTS.CARD_2_TITLE}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ResponsiveContainer width="100%" height={300}>
                            <PieChart data={categoryData}>
                                <Pie
                                    data={categoryData}
                                    dataKey="products"
                                    cx="50%"
                                    cy="50%"
                                    outerRadius={100}
                                    fill="navy"
                                    labelLine={false}
                                    label={({ name, percent }) => `${name} ${(percent! * 100).toFixed(0)}`}
                                >
                                    {categoryData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                            </PieChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>
                {/* Category To products Chart */}
                <Card>
                    <CardHeader>
                        <CardTitle>{TEXTS.CARD_2_TITLE}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={categoryData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="products" fill="#76BF91" />
                            </BarChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>
                {/* Latest Users */}
                <Card>
                    <CardHeader>
                        <CardTitle>{TEXTS.CARD_3_TITLE}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>{TEXTS.CARD_3_HEAD_1}</TableHead>
                                    <TableHead>{TEXTS.CARD_3_HEAD_2}</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {latestUsers.map((user) => (
                                    <TableRow key={user.id}>
                                        <TableCell>{user.email}</TableCell>
                                        <TableCell>{user.date}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};
export default PageComponent;
