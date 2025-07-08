import Link from "next/link";
import { COMPONENT_FOOTER_TEXTS as TEXTS } from "@/constants/constants-ch";

export default function Footer() {
    return (
        <footer className="bg-background h-16 flex items-center border-t">
            <div className="container flex items-center flex-wrap justify-between px-4 md:px-6">
                <Link href="#" className="text-lg font-bold" prefetch={false}>
                    {TEXTS.LINK_1}
                </Link>
                <nav className="flex items-center flex-wrap space-x-4 text-sm">
                    <Link href="#" className="hover:underline" prefetch={false}>
                        {TEXTS.LINK_2}
                    </Link>
                    <Link href="#" className="hover:underline" prefetch={false}>
                        {TEXTS.LINK_3}
                    </Link>
                    <Link href="#" className="hover:underline" prefetch={false}>
                        {TEXTS.LINK_4}
                    </Link>
                    <Link href="#" className="hover:underline" prefetch={false}>
                        {TEXTS.LINK_5}
                    </Link>
                </nav>
            </div>
        </footer>
    );
}
