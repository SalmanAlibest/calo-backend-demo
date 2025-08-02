
import express from "express";
import inventoryRoutes from "./routes/inventoryRoutes.js";
const app = express();
app.use(express.json());
app.use("/api/inventory", inventoryRoutes);
const PORT = process.env.PORT || 4001;
app.listen(PORT, () => console.log(`Inventory Service running on port ${PORT}`));
