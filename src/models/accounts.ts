import { Schema, model, ObjectId } from 'mongoose';

interface ISms {
    remainingCount: number;
}

interface IAccount {
    _id: ObjectId;
    apiKey: ObjectId;
    active: boolean;
    email: string;
    phoneNumber: string;
    fullName?: string;
    createdAt: Date;
    updatedAt: Date;
    messageTypes?: string[];
    sms: ISms;
    password: string;
    lastLogin?: Date;
    deliveryTime?: string;
    useSwearWords?: boolean;
}

const accountSchema = new Schema<IAccount>(
    {
        apiKey: { type: Schema.Types.ObjectId, ref: 'ApiKey' },
        active: { type: Boolean, default: true },
        email: { type: String },
        phoneNumber: { type: String },
        fullName: { type: String, required: false },
        messageTypes: { type: [String], required: false },
        sms: {
            remainingCount: { type: Number, default: 0 },
        },
        password: {
            type: String,
            required: true,
        },
        lastLogin: { type: Date, required: false },
        deliveryTime: { type: String, required: false },
        useSwearWords: { type: Boolean, required: false, default: false },
    },
    { timestamps: true },
);

export default model('Account', accountSchema);

export { IAccount, ISms };
