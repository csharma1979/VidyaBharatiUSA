import mongoose from "mongoose";
import dotenv from "dotenv";
import Identity from "../Models/Identity.js";

// Load env variables (only once, usually in main entry)
dotenv.config();

let isConnected = false; // Track connection status

const dbConnect = async () => {
  try {
    // Check if already connected
    if (isConnected) {
      return mongoose.connection;
    }

    const MONGO_URI = process.env.MONGODB_URI;

    if (!MONGO_URI) {
      console.warn("⚠️ MONGODB_URI not defined in environment variables. Database features will be disabled.");
      return null;
    }

    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = true;
    console.log("✅ Vidya Bharti DB Connected successfully");
    await createHardcodedUsers();
    
    return mongoose.connection;
  } catch (error) {
    console.error("❌ Vidya Bharti  360 DB Connection Failed");
    console.error(error);
    // Don't exit the process, just return null to indicate connection failure
    return null;
  }
};

const createHardcodedUsers = async () => {
  try {
    const existingUser = await Identity.findOne({
      email: "support@vidyabharatiusa.org",
    });

    if (existingUser) {
      console.log("User already exists. Skipping hardcoded user creation.");
      return;
    }

    const users = [
      {
        firstname: "Vidya",
        lastname: "Bharti",
        email: "support@vidyabharatiusa.org",
        password: "Rishi@2468", 
      },
    ];

    await Identity.insertMany(users);
    console.log("✅ Hardcoded users inserted!");
  } catch (error) {
    console.error("❌ Error inserting users: ", error);
  }
};

export default dbConnect;