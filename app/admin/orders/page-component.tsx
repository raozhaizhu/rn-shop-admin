"use client";

import { useState } from "react";
import { format } from "date-fns";
import Image from "next/image";
import { Button } from "@/components/ui/button";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

import { OrdersWithProducts } from "@/app/admin/orders/types";
import { updateOrderStatus } from "@/actions/orders";
import { toast } from "sonner";
import { ADMIN_ORDERS_TEXTS as TEXTS } from "@/constants/constants-ch";

type Props = {
    ordersWithProducts: OrdersWithProducts;
};

type OrderedProducts = {
    order_id: number;
    product: number & {
        category: number;
        created_at: string;
        heroImage: string;
        id: number;
        imagesUrl: string[];
        maxQuantity: number;
        price: number;
        slug: string;
        title: string;
    };
}[];

const statusOptions = ["Pending", "Shipped", "InTransit", "Completed"];

const PageComponent = ({ ordersWithProducts }: Props) => {
    const [selectedProducts, setSelectedProducts] = useState<OrderedProducts>([]);
    const [changingStatus, setChangingStatus] = useState(false);

    const orderedProducts = ordersWithProducts.flatMap((order) =>
        order.order_items.map((item) => ({ order_id: order.id, product: item.product }))
    );

    const handleStatusChange = async (orderId: number, status: string) => {
        setChangingStatus(true);

        try {
            await updateOrderStatus(orderId, status);
            toast.success("Changed order status successfully");
        } catch (
            // eslint-disable-next-line
            error: any
        ) {
            toast.warning(`Failed to change status: ${error?.message}`);
        } finally {
            setChangingStatus(false);
        }
    };

    const openProductModal = (products: OrderedProducts) => setSelectedProducts(products);

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-2xl font-bold mb-6">{TEXTS.TITLE}</h1>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>{TEXTS.TABLE_HEAD_1}</TableHead>
                        <TableHead>{TEXTS.TABLE_HEAD_2}</TableHead>
                        <TableHead>{TEXTS.TABLE_HEAD_3}</TableHead>
                        <TableHead>{TEXTS.TABLE_HEAD_4}</TableHead>
                        <TableHead>{TEXTS.TABLE_HEAD_5}</TableHead>
                        <TableHead>{TEXTS.TABLE_HEAD_6}</TableHead>
                        <TableHead>{TEXTS.TABLE_HEAD_7}</TableHead>
                        <TableHead>{TEXTS.TABLE_HEAD_8}</TableHead>
                        <TableHead>{TEXTS.TABLE_HEAD_9}</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {ordersWithProducts.map((order) => (
                        <TableRow key={order.id}>
                            <TableCell>{order.id}</TableCell>
                            <TableCell>{format(new Date(order.created_at), "MMM dd, yyyy")}</TableCell>
                            <TableCell>
                                <Select
                                    onValueChange={(value) => {
                                        handleStatusChange(order.id, value);
                                    }}
                                    defaultValue={order.status}
                                >
                                    <SelectTrigger className="w=[120px]">
                                        <SelectValue>{order.status}</SelectValue>
                                        <SelectContent>
                                            {statusOptions.map((status) => (
                                                <SelectItem key={status} value={status} disabled={changingStatus}>
                                                    {status}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </SelectTrigger>
                                </Select>
                            </TableCell>
                            <TableCell>{order.description || "No Description"}</TableCell>
                            <TableCell>{order.user.email}</TableCell>
                            <TableCell>{order.slug}</TableCell>
                            <TableCell>$ {order.totalPrice.toFixed(2)}</TableCell>
                            <TableCell>
                                {order.order_items.length} {TEXTS.TABLE_CELL}
                                {order.order_items.length > 1 ? "s" : ""}
                            </TableCell>
                            <TableCell>
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            onClick={() =>
                                                openProductModal(
                                                    orderedProducts.filter((item) => item.order_id === order.id)
                                                )
                                            }
                                        >
                                            {TEXTS.DIALOG_TRIGGER}
                                        </Button>
                                    </DialogTrigger>
                                    <DialogContent>
                                        <DialogHeader>
                                            <DialogTitle>{TEXTS.DIALOG_TITLE}</DialogTitle>
                                        </DialogHeader>

                                        <div className="mt-4">
                                            {selectedProducts.map(({ product }, index) => (
                                                <div key={index} className="mr-2 mb-2 flex items-center space-x-2">
                                                    <Image
                                                        className="w-16 h-16 object-cover rounded"
                                                        src={product.heroImage}
                                                        alt={product.title}
                                                        width={64}
                                                        height={64}
                                                    />
                                                    <div className="flex flex-col">
                                                        <span className="font-semibold">{product.title}</span>
                                                        <span className="text-gray-600">
                                                            $ {product.price.toFixed(2)}
                                                        </span>
                                                        <span className="text-sm text-gray-500">
                                                            {TEXTS.DIALOG_SPAN}
                                                            {product.maxQuantity}
                                                        </span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </DialogContent>
                                </Dialog>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};
export default PageComponent;
