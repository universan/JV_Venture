// import config from "./config";
// const config = import("./config");
const DB_URI =
  "mongodb+srv://universan:saibChWe9fQDtfPB@universan.xsfbujw.mongodb.net/?retryWrites=true&w=majority&appName=universan";
const API =
  process.env.NODE_ENV === "production"
    ? "https://jv-venture.vercel.app/api"
    : "http://localhost:3000/api";

const CLOUDINARY_CLOUD_NAME = "dkqzrzjik";
const CLOUDINARY_API_KEY = "822339567988972";
const CLOUDINRAY_API_SECRET = "eIQ2tBZwEYlMQBJ_IRiuqWeViwA";

const DOMAIN = "http://localhost:3000";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
  env: {
    DB_URI: DB_URI,
    API: API,
    CLOUDINARY_CLOUD_NAME: CLOUDINARY_CLOUD_NAME,
    CLOUDINARY_API_KEY: CLOUDINARY_API_KEY,
    CLOUDINRAY_API_SECRET: CLOUDINRAY_API_SECRET,
    DOMAIN: DOMAIN,
  },
};

export default nextConfig;