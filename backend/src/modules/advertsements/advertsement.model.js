import mongoose, { Schema } from 'mongoose';
import slug from 'slug';
import uniqueValidator from 'mongoose-unique-validator';

const AdSchema = new Schema({
    sponsor:{
        type: String,
        trim: true,
        required: [true, 'Sponsor   is required!']
    },
    title: {
        type: String,
        trim: true,
        required: [true, 'Title   is required!'],
        unique:false
    },
    text: {
        type: String,
        trim: true,
        required: [true, 'Text   is required!'],
    },
    fileURL: {
        type: String,
        trim: true,
        required: [true, 'File is required!'],
    },
    startDate: {
        type: String,
        trim: true,
        required: [true, 'Start Date is required!'],
    },
    endDate: {
        type: String,
        trim: true,
        required: [true, 'End Date is required!'],
    },
    value: {
        type: String,
        trim: true,
        required: [true, 'Value is required!'],
    },
    status:{
        type: String,
        required:[false, 'asdasd']
    }
}, { timestamps: true });

AdSchema.plugin(uniqueValidator, {
    message: '{VALUE} already taken!',
});

AdSchema.pre('validate', function (next) {
    this._slugify();

    next();
});

AdSchema.methods = {
    _slugify() {
        this.slug = slug(this.title);
    },
};
AdSchema.statics = {
    createAds(args, user) {
        return this.create({
            ...args,
            user,
        });
    },
    list({ skip = 0, limit = 5 } = {}) {
        return this.find()
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(limit)
            .populate('sponsor');
    },
};

export default mongoose.model('Advertsement', AdSchema);