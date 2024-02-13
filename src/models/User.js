const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: { type: String, required: true },
    roleId: { type: Schema.Types.ObjectId, ref: 'Role' },
    isDeleted: {
      type: Boolean,
      default: false,
    }
  },
  { timestamps: true }
);

module.exports = model("User", userSchema);