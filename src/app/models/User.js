import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

import Types from '../utils/constants/Types';

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
      default: false,
    },
    first_access: {
      type: Boolean,
      required: true,
      default: true,
    },
    passwd_recover: {
      type: Boolean,
      required: true,
      default: false,
    },
    type: {
      type: String,
      enum: [Types.DONOR, Types.INSTITUTION, Types.VOLUNTARY],
    },
    person: {
      type: String,
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
