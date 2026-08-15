const express = require("express");
const cors = require("cors");

// Load all models and register associations before syncing.
require("./Models");

const adminRoutes = require("./Routes/AdminRoutes");
const customerRoutes = require("./Routes/CustomerRoutes");
const productRoutes = require("./Routes/ProductRoutes");
const orderRoutes = require("./Routes/OrderRoutes");
const paymentRoutes = require("./Routes/PaymentRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Backend server is running" });
});

app.use("/api/admins", adminRoutes);
app.use("/api/customers", customerRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/payments", paymentRoutes);

module.exports = app;
