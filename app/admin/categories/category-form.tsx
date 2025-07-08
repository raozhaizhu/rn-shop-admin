import { useEffect } from "react";
import { SubmitHandler } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { CreateCategorySchema } from "@/app/admin/categories/create-category.schema";
import { ADMIN_CATEGORIES_FORM_TEXTS as TEXTS } from "@/constants/constants-ch";

export const CategoryForm = ({
    form,
    onSubmit,
    defaultValues,
}: {
    // eslint-disable-next-line
    form: any;
    onSubmit: SubmitHandler<CreateCategorySchema>;
    defaultValues: CreateCategorySchema | null;
}) => {
    const isSubmitting = form.formState.isSubmitting;

    useEffect(() => {
        if (defaultValues) {
            form.reset(defaultValues);
        } else {
            form.reset({ name: "", image: undefined });
        }
    }, [defaultValues, form]);

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>{TEXTS.FORM_FIELD_1_LABEL}</FormLabel>
                            <FormControl>
                                <Input disabled={isSubmitting} placeholder="Name" {...field} />
                            </FormControl>
                            <FormDescription>{TEXTS.FORM_FIELD_1_DESCRIPTION}</FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="image"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>{TEXTS.FORM_FIELD_2_LABEL}</FormLabel>
                            <FormControl>
                                <Input
                                    type="file"
                                    accept="image/*"
                                    {...form.register("image")}
                                    onChange={(event) => {
                                        field.onChange(event.target.files?.[0]);
                                    }}
                                    disabled={isSubmitting}
                                />
                            </FormControl>
                            <FormDescription>{TEXTS.FORM_FIELD_2_DESCRIPTION}</FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button disabled={isSubmitting} type="submit" variant="outline">
                    {TEXTS.BUTTON_TEXT}
                </Button>
            </form>
        </Form>
    );
};
