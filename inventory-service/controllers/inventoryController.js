
import { inventoryData } from "../models/inventoryModel.js";
export const getInventory = (req, res) => {
    res.json({ success: true, data: inventoryData });
};
export const updateStock = (req, res) => {
    const { itemId, quantity } = req.body;
    const item = inventoryData.find(i => i.id === itemId);
    if (item) {
        item.stock = quantity;
        res.json({ success: true, message: "Stock updated", item });
    } else {
        res.status(404).json({ success: false, message: "Item not found" });
    }
};
