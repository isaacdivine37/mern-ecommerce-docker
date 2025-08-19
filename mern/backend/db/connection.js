import { MongoClient, ServerApiVersion } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const URI = process.env.MONGO_URI; // stored in .env
const client = new MongoClient(URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

let db;

async function connectDB() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("✅ Connected to MongoDB Atlas!");
    db = client.db("MERN-APPLICATION"); // change this to your Atlas DB name
  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
  }
}

connectDB();

export default db;

