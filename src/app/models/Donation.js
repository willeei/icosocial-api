import mongoose from 'mongoose';

const DonationSchema = mongoose.Schema(
  {
    value: {
      type: Number,
      require: true,
    },
    donor_id: {
      type: String,
      require: true,
    },
    status: {
      type: Boolean,
      require: false,
      default: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model('Donation', DonationSchema);
