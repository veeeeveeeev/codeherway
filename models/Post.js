import mongoose from "mongoose";

const { Schema } = mongoose;

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    cat: {
      type: String,
      required: true,
    },
    feature: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);

const Post = mongoose.models.Post || mongoose.model("Post", postSchema);
export default Post;
