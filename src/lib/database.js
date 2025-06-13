
import mongoose from "mongoose";
import dotenv from "dotenv";
import Identity from "../Models/Identity.js";

// Load env variables (only once, usually in main entry)
dotenv.config();

const dbConnect = async () => {
  try {
    const MONGO_URI = process.env.MONGODB_URI;

    if (!MONGO_URI) {
      throw new Error("MONGODB_URI not defined in environment variables");
    }

    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("✅ Vidya Bharti DB Connected successfully");
    await createHardcodedUsers();
  } catch (error) {
    console.error("❌ Vidya Bharti  360 DB Connection Failed");
    console.error(error);
    process.exit(1);
  }
};

const createHardcodedUsers = async () => {
  try {
    const existingUser = await Identity.findOne({
      email: "support@tapglobal360.com",
    });

    if (existingUser) {
      console.log("User already exists. Skipping hardcoded user creation.");
      return;
    }

    const users = [
      {
        firstname: "Tap",
        lastname: "Global360",
        email: "support@tapglobal360.com",
        password: "Rishi@2468", // You should hash passwords before storing!
      },
    ];

    await Identity.insertMany(users);
    console.log("✅ Hardcoded users inserted!");
  } catch (error) {
    console.error("❌ Error inserting users: ", error);
  }
};

export default dbConnect;
