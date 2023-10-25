import { connect } from 'mongoose';
// import mongoose from "mongoose";
// mongoose.set('debug', true)
const baseDatabaseUrl = 'mongodb://localhost:27019/';
const databaseUrl =
    process.env.MONGO_URL || `${baseDatabaseUrl}morningfeelgoods`;
const createMongooseConnection = async () => {
    await connect(databaseUrl);
};

export default createMongooseConnection;
export { databaseUrl };
