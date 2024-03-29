import { Schema, model } from 'mongoose';

const clientSchema = new Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    usedPasswords: [String],
    phone: { type: String, required: true },
    profilePicture: String,
    birthdate: { type: String, required: true },
    publicKey: { type: String, required: true },
    tokens: [String],
    verificationCode: String,
    passwordResetCode: String,
    status: { type: String, required: true, default: "UNVERIFIED" },
    isSubscribed: { type: Boolean, required: true, default: false }
},{
    timestamps: true
});

export default model('Client', clientSchema);