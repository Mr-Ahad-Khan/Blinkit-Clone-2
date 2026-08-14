const { mongoose } = require("../Config/db");

const paymentSchema = new mongoose.Schema(
  {
    orderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
      required: true,
    },
    amount: { type: Number, required: true, min: 0 },
    paymentMethod: {
      type: String,
      enum: ["cash", "card", "upi", "netbanking"],
      required: true,
    },
    paymentStatus: {
      type: String,
      enum: ["pending", "success", "failed", "refunded"],
      required: true,
      default: "pending",
    },
    transactionId: { type: String, unique: true, sparse: true, default: null },
  },
  { timestamps: true },
);

paymentSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: (_doc, ret) => {
    delete ret._id;
    return ret;
  },
});

module.exports =
  mongoose.models.Payment || mongoose.model("Payment", paymentSchema);
