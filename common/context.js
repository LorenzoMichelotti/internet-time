import { MongoClient } from 'mongodb';

const uri = process.env.MONGO_DB;
export const context = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });