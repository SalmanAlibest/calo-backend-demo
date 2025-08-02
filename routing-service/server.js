
import express from "express";
import routingRoutes from "./routes/routingRoutes.js";
const app = express();
app.use(express.json());
app.use("/api/route", routingRoutes);
const PORT = process.env.PORT || 4002;
app.listen(PORT, () => console.log(`Routing Service running on port ${PORT}`));
