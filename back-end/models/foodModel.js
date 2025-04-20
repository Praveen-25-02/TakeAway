import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
  name: { type: String, required: [true, "Name is required"] },
  description: {
    type: String,
    required: [true, "Description is required"],
    default: "No description provided",
    validate: {
      validator: (value) => value.trim() !== "",
      message: "Description cannot be an empty string",
    },
  },
  price: { type: Number, required: [true, "Price is required"] },
  image: { type: String, required: [true, "Image is required"] },
  category: { type: String, required: [true, "Category is required"] },
});

const foodModel = mongoose.models.food || mongoose.model("food", foodSchema);

export default foodModel;
