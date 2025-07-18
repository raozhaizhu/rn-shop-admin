"use client";

import { FC, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { PlusCircle } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { v4 as uuid } from "uuid";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table";

import { CategoryTableRow } from "@/components/category";
import { createCategorySchema, CreateCategorySchema } from "@/app/admin/categories/create-category.schema";
import { CategoriesWithProductsResponse } from "@/app/admin/categories/categories.types";
import { CategoryForm } from "@/app/admin/categories/category-form";
import { createCategory, imageUploadHandler, updateCategory } from "@/actions/categories";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { ADMIN_CATEGORIES_TEXTS as TEXTS } from "@/constants/constants-ch";

type Props = {
    categories: CategoriesWithProductsResponse;
};

const CategoriesPageComponent: FC<Props> = ({ categories }) => {
    const [isCreateCategoryModalOpen, setIsCreateCategoryModalOpen] = useState(false);
    const [currentCategory, setCurrentCategory] = useState<CreateCategorySchema | null>(null);

    const form = useForm<CreateCategorySchema>({
        resolver: zodResolver(createCategorySchema),
        defaultValues: {
            name: "",
            image: undefined,
        },
    });

    const router = useRouter();

    const submitCategoryHandler: SubmitHandler<CreateCategorySchema> = async (data) => {
        const { image, name, intent = "create" } = data;

        const handleImageUpload = async () => {
            const uniqueId = uuid();
            const fileName = `category/category-${uniqueId}`;
            const file = new File([image[0]], fileName);
            const formData = new FormData();
            formData.append("file", file);

            return imageUploadHandler(formData);
        };

        switch (intent) {
            case "create": {
                const imageUrl = await handleImageUpload();

                if (imageUrl) {
                    await createCategory({ imageUrl, name: data.name });
                    form.reset();
                    router.refresh();
                    setIsCreateCategoryModalOpen(false);
                    toast.success("Category created successfully");
                }

                break;
            }

            case "update": {
                if (image && currentCategory?.slug) {
                    const imageUrl = await handleImageUpload();

                    if (imageUrl) {
                        await updateCategory({ imageUrl, name, slug: currentCategory.slug, intent: "update" });
                        form.reset();
                        router.refresh();
                        setIsCreateCategoryModalOpen(false);
                        toast.success("Category updated successfully");
                    }

                    break;
                }
            }

            default:
                console.error("Invalid intent");
        }
    };

    const deleteCategoryHandler = async (id: number) => {
        await deleteCategoryHandler(id);
        router.refresh();
        toast.success("Category deleted successfully");
    };
    //
    return (
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
            <div className="flex items-center my-10">
                <div className="ml-auto flex items-center gap-2">
                    <Dialog
                        open={isCreateCategoryModalOpen}
                        onOpenChange={() => setIsCreateCategoryModalOpen(!isCreateCategoryModalOpen)}
                    >
                        <DialogTrigger asChild>
                            <Button
                                size="sm"
                                className="h-8 gap-1"
                                onClick={() => {
                                    setCurrentCategory(null);
                                    setIsCreateCategoryModalOpen(true);
                                }}
                            >
                                <PlusCircle className="h-3.5 w-3.5" />
                                <span className="sr-only sm:not-sr-only sm:whitespace-break-spaces">
                                    {TEXTS.DIALOG_BUTTON_TEXT}
                                </span>
                            </Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>{TEXTS.DIALOG_TITLE}</DialogTitle>
                            </DialogHeader>
                            <CategoryForm
                                form={form}
                                onSubmit={submitCategoryHandler}
                                defaultValues={currentCategory}
                            />
                        </DialogContent>
                    </Dialog>
                </div>
            </div>

            <Card className="overflow-x-auto">
                <CardHeader>
                    <CardTitle>{TEXTS.CARD_TITLE}</CardTitle>
                </CardHeader>

                <CardContent>
                    <Table className="w-full table-auto ">
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[100px] sm:table-cell">
                                    <span className="sr-only">{TEXTS.CARD_TABLE_HEAD_1}</span>
                                </TableHead>
                                <TableHead className="md:table-cell">{TEXTS.CARD_TABLE_HEAD_2}</TableHead>
                                <TableHead className="md:table-cell">{TEXTS.CARD_TABLE_HEAD_3}</TableHead>
                                <TableHead className="md:table-cell">{TEXTS.CARD_TABLE_HEAD_4}</TableHead>
                                <TableHead>
                                    <span className="sr-only">{TEXTS.CARD_TABLE_HEAD_5}</span>
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {categories.map((category) => (
                                <CategoryTableRow
                                    key={category.id}
                                    category={category}
                                    setCurrentCategory={setCurrentCategory}
                                    setIsCreateCategoryModalOpen={setIsCreateCategoryModalOpen}
                                    deleteCategoryHandler={deleteCategoryHandler}
                                />
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </main>
    );
};

export default CategoriesPageComponent;
