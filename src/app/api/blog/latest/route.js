import dbConnect from "../../../../lib/database";
import Blog from "../../../../Models/Blog/BlogModal";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const db = await dbConnect();
    if (!db) {
      return NextResponse.json(
        { message: "Database connection failed. Service unavailable.", data: [] },
        { status: 503 }
      );
    }
    
    const blogs = await Blog.find().sort({ createdAt: -1 }).limit(3);
    return NextResponse.json({
      message: "Latest blogs fetched successfully",
      data: blogs,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Error fetching latest blogs",
      error: error.message,
    });
  }
}