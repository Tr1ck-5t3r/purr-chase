const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const User = require("./models/User");
const Pet = require("./models/Pet");
const Order = require("./models/Orders"); // Ensure the file name matches your model file

// Cloudinary Upload Service
const { uploadImage } = require("./services/uploadService");

// ✅ Multer Setup for Image Uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Save files in "uploads" folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Unique filename
  },
});

const upload = multer({ storage });

// ✅ Image Upload Route
router.post("/upload", upload.single("image"), async (req, res) => {
  try {
    const imageUrl = await uploadImage(req.file.path); // Upload to Cloudinary
    res.json({ success: true, imageUrl });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// ✅ Middleware to protect admin routes
const isAuthenticated = (req, res, next) => {
  if (!req.session.user) {
    return res.redirect("/");
  }
  next();
};

// ✅ Serve Login Page
router.get("/", (req, res) => {
  res.render("login");
});

// ✅ Handle Login
router.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === "admin" && password === process.env.ADMIN_PASSWORD) {
    req.session.user = username;
    res.status(200).json({ success: true, username });
  } else {
    res.status(401).json({ success: false, message: "Invalid credentials" });
  }
});

// ✅ Logout
router.get("/logout", (req, res) => {
  req.session.destroy(() => {
    res.redirect("/");
  });
});

// ✅ Check Authentication
router.get("/check-auth", (req, res) => {
  if (req.session.user) {
    res.json({ authenticated: true, username: req.session.user });
  } else {
    res.json({ authenticated: false });
  }
});

// ===================== 🛠️ Admin Routes (Protected) =====================

// ✅ Admin Dashboard
router.get("/dashboard", isAuthenticated, async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();
    const totalPets = await Pet.countDocuments();
    const totalOrders = await Order.countDocuments();

    res.render("dashboard", { totalUsers, totalPets, totalOrders });
  } catch (error) {
    res.status(500).send("Error loading dashboard");
  }
});

// ✅ Add Pet Form
router.get("/add-pet", isAuthenticated, (req, res) => {
  res.render("add-pet");
});

// ✅ Add Pet (Submit Form)
router.post("/add-pet", upload.single("image"), async (req, res) => {
  try {
    const imageUrl = await uploadImage(req.file.path); // Upload image to Cloudinary
    const { name, breed, species, age, price, description } = req.body;

    const newPet = new Pet({ name, breed, species, age, price, description, image: imageUrl });
    await newPet.save();

    res.redirect("/dashboard");
  } catch (error) {
    res.status(500).send("Error adding pet: " + error.message);
  }
});

// ✅ Manage Users
router.get("/users", isAuthenticated, async (req, res) => {
  const users = await User.find();
  res.render("users", { users });
});

// ✅ Update User
router.post("/update-user/:id", isAuthenticated, async (req, res) => {
  await User.findByIdAndUpdate(req.params.id, req.body);
  res.redirect("/users");
});

// ✅ Delete User
router.get("/delete-user/:id", isAuthenticated, async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.redirect("/users");
});

// ✅ Manage Pets
router.get("/pets", isAuthenticated, async (req, res) => {
  const pets = await Pet.find();
  res.render("pets", { pets });
});

// ✅ Update Pet
router.post("/update-pet/:id", isAuthenticated, async (req, res) => {
  await Pet.findByIdAndUpdate(req.params.id, req.body);
  res.redirect("/pets");
});

// ✅ Delete Pet
router.get("/delete-pet/:id", isAuthenticated, async (req, res) => {
  await Pet.findByIdAndDelete(req.params.id);
  res.redirect("/pets");
});

module.exports = router;
