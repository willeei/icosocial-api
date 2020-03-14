import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

import donorTypes from '../utils/constants/donorTypes';

const UserSchema = new mongoose.Schema(
  {
    login: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    active: {
      type: Boolean,
      required: true,
      default: true,
    },
    type: {
      type: String,
      required: true,
      enum: [donorTypes.DONOR, donorTypes.INSTITUTION],
      default: donorTypes.DONOR,
    },
    avatar: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'File',
    },
  },
  {
    timestamps: true,
  }
);

UserSchema.pre('save', function() {
  if (this.isModified('password')) {
    this.password = bcrypt.hashSync(this.password, 8);
  }
});

UserSchema.methods.comparePassword = function(passwd) {
  return bcrypt.compareSync(passwd, this.password);
};

export default mongoose.model('User', UserSchema);
