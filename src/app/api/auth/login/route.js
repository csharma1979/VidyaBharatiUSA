import { NextResponse } from "next/server";
import dbConnect from '../../../../lib/database';
import { loginUser } from '../../../../Controllers/Identity';


export async function POST(req) {
  try {
    const db = await dbConnect();
    if (!db) {
      return NextResponse.json(
        { message: "Database connection failed. Service unavailable." },
        { status: 503 }
      );
    }

    const { email, password } = await req.json();

    // Call the login function and get the response
    const result = await loginUser(email, password);

    // Return a successful response
    if (result.token) {
      return NextResponse.json({ token: result.token });
    } else {
      return NextResponse.json({ message: result.message }, { status: 401 });
    }
  } catch (error) {
    console.error("Error in login route:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}