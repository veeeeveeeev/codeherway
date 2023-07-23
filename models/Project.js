import mongoose from "mongoose";

const { Schema } = mongoose;

const projectSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    images: {
      type: [String],
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    cat: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Project =
  mongoose.models.Project || mongoose.model("Project", projectSchema);
export default Project;
