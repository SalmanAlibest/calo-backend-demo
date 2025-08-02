
import { partners } from "../models/routingModel.js";
export const routeOrder = (req, res) => {
    const { orderId, region } = req.body;
    const partner = partners.find(p => p.region === region);
    if (partner) {
        res.json({ success: true, routedTo: partner.name });
    } else {
        res.status(404).json({ success: false, message: "No partner available for region" });
    }
};
