import Donation from "../models/FoodModel.js";

const parseNumber = (val) => {
  const num = parseFloat(val);
  return isNaN(num) ? null : num;
};

export const createDonation = async (req, res) => {
  try {
    const lat = parseNumber(req.body.lat);
    const lon = parseNumber(req.body.lon);

    let location = req.body.location;
    if (location && location.toLowerCase().includes("lat")) {
      location = null;
    }

    const donation = new Donation({
      ...req.body,
      location,
      lat,
      lon,
      status: "Pending"
    });

    await donation.save();
    res.status(201).json(donation);
  } catch (error) {
    console.error("Error creating donation:", error);
    res.status(500).json({ message: error.message });
  }
};

export const getDonations = async (req, res) => {
  try {
    const donations = await Donation.find().sort({ createdAt: -1 });
    res.status(200).json(donations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateDonation = async (req, res) => {
  try {
    const donation = await Donation.findByIdAndUpdate(
      req.params.id,
      {
        ...req.body,
        lat: parseNumber(req.body.lat),
        lon: parseNumber(req.body.lon)
      },
      { returnDocument: "after" }
    );

    if (!donation) {
      return res.status(404).json({ message: "Donation not found" });
    }

    res.status(200).json(donation);
  } catch (error) {
    console.error("Error updating donation:", error);
    res.status(500).json({ message: error.message });
  }
};