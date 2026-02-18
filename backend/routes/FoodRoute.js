import express from "express";
import { createDonation, getDonations, updateDonation } from "../controller/FoodController.js";
const router = express.Router();
router.post("/", createDonation);
router.get("/", getDonations);
router.put("/:id", updateDonation);
export default router;