require("dotenv").config(); // ✅ Load environment variables
const { v2: cloudinary } = require("cloudinary");

// ✅ Use correct variable names (matching .env file)
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

console.log("Cloudinary configured");

const uploadImage = async (filePath) => {
  try {
    console.log("Uploading image to Cloudinary...");
    const result = await cloudinary.uploader.upload(filePath);
    console.log("Upload successful:", result.secure_url);
    return result.secure_url;
  } catch (error) {
    console.error("Cloudinary upload failed:", error);
    throw new Error("Cloudinary upload failed: " + error.message);
  }
};

module.exports = { uploadImage };
