import mongoose, { Schema } from 'mongoose';

const LiveSchema = new Schema({
    sponsorId:{
        type: String,
    },
    streamerId:{
        type: String,
    },
    adId:{
        type: String,
    },
    adName:{
        type:String
    }
}, { timestamps: true });

LiveSchema.statics = {
    createLives(args, live) {
        return this.create({
            ...args,
            live,
        });
    }
};
export default mongoose.model('Live', LiveSchema);