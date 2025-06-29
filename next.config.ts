import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "iozfgqsiiowgtcsfbxbo.supabase.co",
            },
            {
                protocol: "https",
                hostname: "unsplash.com",
            },
        ],
    },
    devIndicators: false,
};

export default nextConfig;
