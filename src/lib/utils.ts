import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import {Geist} from "next/font/google";
import {S3Client} from "@aws-sdk/client-s3";

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(amount: number, currency: string = 'ZAR', locale: string = 'en-SA'): string {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(amount);
}

const r2Client = new S3Client({
  region: 'auto',
  endpoint: `https://${process.env.CLOUDFLARE_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID!,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY!,
  }
});

export { r2Client }
