const DB_URI =
  "mongodb+srv://universan:saibChWe9fQDtfPB@universan.xsfbujw.mongodb.net/?retryWrites=true&w=majority&appName=universan";
const API =
  process.env.NODE_ENV === "production"
    ? "https://jv-venture.vercel.app/api"
    : "http://localhost:3000/api";

CLOUDINARY_CLOUD_NAME = "dkqzrzjik";
CLOUDINARY_API_KEY = "822339567988972";
CLOUDINRAY_API_SECRET = "eIQ2tBZwEYlMQBJ_IRiuqWeViwA";

DOMAIN = "http://localhost:3000";

module.exports = {
  DB_URI,
  API,
//   CLOUDINARY_CLOUD_NAME,
//   CLOUDINARY_API_KEY,
//   CLOUDINRAY_API_SECRET,
//   DOMAIN,
};
