import { createClient } from "@/supabase/server";

const supabase = await createClient();

// eslint-disable-next-line
const { data } = await supabase
    .from("order")
    .select("*,order_items:order_item(*,product(*)),user(*)")
    .order("created_at", { ascending: false });

export type OrdersWithProducts = NonNullable<typeof data>;
