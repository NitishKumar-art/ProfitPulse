require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");

const authRoutes = require("./AuthRoute");

app.use("/api", authRoutes);


const app = express();

// ===== CONFIG =====
const PORT = process.env.PORT || 3003;
const MONGO_URI = process.env.MONGO_URL; // KEEP SAME NAME

// ===== MIDDLEWARE =====
app.use(express.json());

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://localhost:5173",
      "https://profitpulse-alpha.vercel.app/",
      "https:https://profitpulsedashboard.vercel.app/signup.js",
    ],
    credentials: true,
  })
);

// ===== ROUTES =====
app.get("/allHoldings", async (req, res) => {
  try {
    const allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch holdings" });
  }
});

app.get("/allPositions", async (req, res) => {
  try {
    const allPositions = await PositionsModel.find({});
    res.json(allPositions);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch positions" });
  }
});

app.post("/newOrder", async (req, res) => {
  try {
    const newOrder = new OrdersModel(req.body);
    await newOrder.save();
    res.json({ message: "Order saved!" });
  } catch (err) {
    res.status(500).json({ message: "Order failed" });
  }
});

// ===== START SERVER ONLY AFTER DB CONNECTS =====
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");

    const authRoutes = require("./AuthRoute");

      app.use("/api", authRoutes);


    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection failed:", err);
  });
