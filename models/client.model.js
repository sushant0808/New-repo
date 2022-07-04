import mongoose from "mongoose";
const { Schema } = mongoose;

const schema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  mobileNumber: {
    type: Number,
  },
  notes: {
    type: [String],
  },
  addresses: {
    type: [
      {
        apartment: { type: String },
        address: { type: String },
        zipCode: { type: Number },
      },
    ],
  },
  creditCards: {
    type: [
      {
        cardId: { type: Number },
        tokenId: { type: Number },
        lastFourDigits: { type: Number },
      },
    ],
  },
});

const User = mongoose.model("User", schema);
export default User;
