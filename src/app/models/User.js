import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const UserSchema = new mongoose.Schema(
  {
    login: {
      type: String,
      required: true,
      unique: true,
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
      enum: ['DOADOR', 'INSTITUICAO'],
      default: 'DOADOR',
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
