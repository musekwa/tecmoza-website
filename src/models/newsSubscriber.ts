import mongoose, { Schema } from "mongoose";

const newsSubscriberSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const NewsSubscriber =
  mongoose.models.NewsSubscriber ||
  mongoose.model("NewsSubscriber", newsSubscriberSchema);

export default NewsSubscriber;
