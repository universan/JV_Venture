import mongoose from "mongoose";
import uniqueValiadtor from "mongoose-unique-validator";


const retreatSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
      unique: true,
      minLength: 1,
      maxLength: 160,
      text: true, // for text search
    },
    slug: {
        type: String,
        lowercase: true,
        index: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
      minLength: 1,
      maxLength: 1000000,
      text: true,
    },
    period: {
        type: String,
        required: true,
        trim: true,
        minLength: 1,
        maxLength: 1000000,
        text: true,
    },
    images: [
      {
        secure_url: {
          type: String,
          default: "",
        },
        public_id: {
          type: String,
          default: "",
        },
      },
    ],
  },
  { timestamps: true }
);

retreatSchema.plugin(uniqueValiadtor, { message: " already exists" });

export default mongoose.models.retreat ||
  mongoose.model("retreat", retreatSchema);
