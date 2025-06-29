import { ReactNode } from "react";
import { createClient } from "@/supabase/server";
import { redirect } from "next/navigation";
import { ADMIN } from "@/constants/constants";

// todo:检查用户是否已经登录,如果已经登录,应该拦截并跳转到admin页面,否则渲染AuthPage
export default async function AuthLayout({ children }: Readonly<{ children: ReactNode }>) {
    const supabase = await createClient();

    const { data: authData } = await supabase.auth.getUser();

    if (authData?.user) {
        const { data, error } = await supabase.from("users").select("*").eq("id", authData.user.id).single();

        if (error || !data) {
            console.log("Error fetching user data", error);
            return;
        }

        if (data.type === ADMIN) {
            return redirect("/admin");
        }
    }

    return <>{children}</>;
}
