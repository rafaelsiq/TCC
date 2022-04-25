import mongoose, {Schema} from 'mongoose';
import validator from 'validator';
import {passwordReg} from './sponsor.validations';
import jwt from 'jsonwebtoken';
import constants from '../../config/constants';

const SponsorSchema = new Schema({
    type: {
        type: String,
        required: [true, 'Type is required!'],
        trim: true,
        unique: false,
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'Email is required!'],
        trim: true,
        validate: {
            validator(email) {
                return validator.isEmail(email);
            },
            message: '{VALUE} is not a valid email!',
        },
    },
    firstName: {
        type: String,
        required: [true, 'FirstName is required!'],
        trim: true,
    },
    lastName: {
        type: String,
        required: [true, 'LastName is required!'],
        trim: true,
    },
    userName: {
        type: String,
        required: [true, 'UserName is required!'],
        trim: true,
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'Password is required!'],
        trim: true,
        minlength: [8, 'Password need to be longer!'],
        validate: {
            validator(password) {
                return passwordReg.test(password);
            },
            message: '{VALUE} is not a valid password!',
        },
    },
    ads: {
        type: String,
        required: [false, 'You need to set up a ads Link'],
        trim: true,
        unique: false,
    },
    cpf: {
        type: String,
        required: [false, 'You need to set up a CPF to your account'],
        trim: true,
        unique: true,
    },
    tags:{
        type: String,
        required: [true, 'You need to set up a CPF to your account'],
        trim: true,
        unique: false,
    },
    cnpj: {
        type: String,
        required: [false, 'You need to set up a CNPJ to your account'],
        trim: true,
        unique: true,
    },
});
SponsorSchema.pre('save', function(next) {
    if (this.isModified('password')) {
        this.password = this._hashPassword(this.password);
    }
    return next();
});
SponsorSchema.methods = {
    _hashPassword(password) {
        return hashSync(password);
    },
    authenticateUser(password) {
        return compareSync(password, this.password);
    },
};
SponsorSchema.methods   = {
   
    createToken() {
      return jwt.sign(
        {
          _id: this._id,
        },
        constants.JWT_SECRET,
      );
    },
    toJSON() {
      return {
        _id: this._id,
        userName: this.userName,
        token: `JWT ${this.createToken()}`,
      };
    },
};

export default mongoose.model('Sponsor', SponsorSchema);