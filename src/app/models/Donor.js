import mongoose from 'mongoose';

const DonorSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    cpf: {
      type: String,
      require: true,
    },
    cell_phone: {
      type: String,
      require: true,
    },
    telephone: {
      type: String,
      require: false,
    },
    mail: {
      type: String,
      require: true,
    },
    state: {
      type: String,
      require: true,
    },
    country: {
      type: String,
      require: true,
    },
    city: {
      type: String,
      require: true,
    },
    address: {
      type: String,
      require: false,
    },
    zip_code: {
      type: String,
      require: false,
    },
    number: {
      type: String,
      require: false,
    },
    complement: {
      type: String,
      require: false,
    },
    date_of_birth: {
      type: Date,
      require: false,
    },
    anonymous: {
      type: Boolean,
      require: true,
      default: true,
    },
    disabled: {
      type: Boolean,
      require: true,
      default: false,
    },
    user_id: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model('Donor', DonorSchema);
