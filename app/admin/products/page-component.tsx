"use client";

import { FC, useState } from "react";
import { PlusIcon } from "lucide-react";
import { v4 as uuid } from "uuid";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { ProductsWithCategoriesResponse } from "@/app/admin/products/products.types";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Category } from "@/app/admin/categories/categories.types";
import { createOrUpdateProductSchema, CreateOrUpdateProductSchema } from "@/app/admin/products/schema";
import { imageUploadHandler } from "@/actions/categories";
import { createProduct, deleteProduct, updateProduct } from "@/actions/products";
import { ProductForm } from "@/app/admin/products/product-form";
import { ProductTableRow } from "@/app/admin/products/product-table-row";
import { ADMIN_PRODUCTS_TEXTS as TEXTS } from "@/constants/constants-ch";

type Props = {
    categories: Category[];
    productsWithCategories: ProductsWithCategoriesResponse;
};

export const ProductPageComponent: FC<Props> = ({ categories, productsWithCategories }) => {
    const [currentProduct, setCurrentProduct] = useState<CreateOrUpdateProductSchema | null>(null);
    const [isProductModalOpen, setIsProductModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    const form = useForm<CreateOrUpdateProductSchema>({
        resolver: zodResolver(createOrUpdateProductSchema),
        defaultValues: {
            title: "",
            category: undefined,
            price: undefined,
            maxQuantity: undefined,
            heroImage: undefined,
            images: [],
            intent: "create",
        },
    });

    const router = useRouter();

    const productCreateUpdateHandler = async (data: CreateOrUpdateProductSchema) => {
        const { category, images, maxQuantity, price, title, heroImage, slug, intent = "create" } = data;

        const uploadFile = async (file: File) => {
            const uniqueId = uuid();
            const fileName = `product/product-${uniqueId}-${file.name}`;
            const formData = new FormData();
            formData.append("file", file, fileName);
            // console.log("看看名字问题", fileName);
            return imageUploadHandler(formData);
        };

        let heroImageUrl: string | undefined;
        let imageUrls: string[] = [];

        if (heroImage) {
            const imagePromise = Array.from(heroImage).map((file) => uploadFile(file as File));
            try {
                [heroImageUrl] = await Promise.all(imagePromise);
            } catch (error) {
                console.error("Error uploading image:", error);
                toast.error("Error uploading image");
                return;
            }
        }

        if (images.length > 0) {
            const imagesPromises = Array.from(images).map((file) => uploadFile(file as File));
            // console.log("倒数第二图片地址", imagesPromises);

            try {
                imageUrls = (await Promise.all(imagesPromises)) as string[];
                // console.log("最终图片地址", imageUrls);
            } catch (error) {
                let errorMessage = "Error uploading images: ";
                if (error instanceof Error) {
                    errorMessage += error.message;
                }
                toast.error(errorMessage);
                return;
            }
        }

        switch (intent) {
            case "create": {
                if (heroImageUrl && imageUrls.length > 0) {
                    await createProduct({
                        category: Number(category),
                        images: imageUrls,
                        heroImage: heroImageUrl,
                        maxQuantity: Number(maxQuantity),
                        price: Number(price),
                        title,
                    });
                    form.reset();
                    router.refresh();
                    setIsProductModalOpen(false);
                    toast.success("Product created successfully");
                }
                break;
            }
            case "update": {
                if (heroImageUrl && imageUrls.length > 0 && slug) {
                    await updateProduct({
                        category: Number(category),
                        heroImage: heroImageUrl!,
                        imagesUrl: imageUrls,
                        maxQuantity: Number(maxQuantity),
                        price: Number(price),
                        title,
                        slug,
                    });
                    form.reset();
                    router.refresh();
                    setIsProductModalOpen(false);
                    toast.success("Product updated successfully");
                }
                break;
            }

            default:
                console.error("Invalid intent");
        }
    };

    const deleteProductHandler = async () => {
        if (currentProduct?.slug) {
            await deleteProduct(currentProduct.slug);
            router.refresh();
            toast.success("Product deleted successfully");
            setIsDeleteModalOpen(false);
            setCurrentProduct(null);
        }
    };

    return (
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
            <div className="container mx-auto p-4">
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-2xl font-bold">{TEXTS.TITLE}</h1>
                    <Button
                        onClick={() => {
                            setCurrentProduct(null);
                            setIsProductModalOpen(true);
                        }}
                    >
                        <PlusIcon className="mr-2 h-4 w-4" />
                        {TEXTS.BUTTON}
                    </Button>
                </div>

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
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {productsWithCategories.map((product) => (
                            <ProductTableRow
                                setIsProductModalOpen={setIsProductModalOpen}
                                key={product.id}
                                product={product}
                                setCurrentProduct={setCurrentProduct}
                                setIsDeleteModalOpen={setIsDeleteModalOpen}
                            />
                        ))}
                    </TableBody>
                </Table>

                {/* Product Modal */}
                <ProductForm
                    form={form}
                    onSubmit={productCreateUpdateHandler}
                    categories={categories}
                    isProductModalOpen={isProductModalOpen}
                    setIsProductModalOpen={setIsProductModalOpen}
                    defaultValues={currentProduct}
                />

                {/* Delete Product Modal */}
                <Dialog open={isDeleteModalOpen} onOpenChange={setIsDeleteModalOpen}>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>{TEXTS.DIALOG_TITLE}</DialogTitle>
                        </DialogHeader>
                        <p>
                            {TEXTS.DIALOG_P} {currentProduct?.title}
                        </p>
                        <DialogFooter>
                            <Button variant="destructive" onClick={deleteProductHandler}>
                                {TEXTS.DIALOG_BUTTON}
                            </Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </div>
        </main>
    );
};
