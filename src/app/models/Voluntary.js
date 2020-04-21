import mongoose from 'mongoose';

const VoluntarySchema = mongoose.Schema(
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
    email: {
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
      type: String,
      require: false,
    },
    disabled: {
      type: Boolean,
      require: true,
      default: true,
    },
    info: {
      type: String,
      require: true,
    },
    user_id: {
      type: String,
      require: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model('Voluntary', VoluntarySchema);
