import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import { RenderMounted } from "@/components/RenderMounted";
import { ReactNode } from "react";

// revalidatePath("/", "layout");

export default async function AdminLayout({
    children,
}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <RenderMounted>
            <Header />
            <main className="min-h-[calc(100svh-128px)] py-3">{children}</main>
            <Footer />
        </RenderMounted>
    );
}
