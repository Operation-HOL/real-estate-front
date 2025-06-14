import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '*.r2.dev',  // For default R2 domain
                pathname: '/**',
            },
            // If you're using custom domain, add another pattern
            {
                protocol: 'https',
                hostname: 'r2.yourdomain.com',  // Replace with your domain
                pathname: '/**',
            },
        ],
    },
}

export default nextConfig;
