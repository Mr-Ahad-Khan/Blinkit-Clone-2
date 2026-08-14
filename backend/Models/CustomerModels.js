const { mongoose } = require("../Config/db");

const customerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: { type: String, required: true },
    address: { type: String, default: null },
    phone: { type: String, default: null },
  },
  { timestamps: true },
);

customerSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: (_doc, ret) => {
    delete ret._id;
    return ret;
  },
});

module.exports =
  mongoose.models.Customer || mongoose.model("Customer", customerSchema);
