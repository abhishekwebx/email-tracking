import { NextResponse } from "next/server";
import { sanity } from "@/lib/sanity";
import bcrypt from "bcryptjs"; // for password hashing

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password required" },
        { status: 400 }
      );
    }

    // Fetch user by email
    const query = `*[_type == "user" && email == $email][0]`;
    const user = await sanity.fetch(query, { email });

    if (!user || user.role !== "admin") {
      return NextResponse.json(
        { error: "Admin user not found" },
        { status: 401 }
      );
    }

    // Password check (assuming hashed password stored in Sanity)
    const isValid = bcrypt.compareSync(password, user.password || "");

    if (!isValid) {
      return NextResponse.json({ error: "Invalid password" }, { status: 401 });
    }

    // Create a simple token (in production use JWT)
    const token = Math.random().toString(36).substring(2);

    return NextResponse.json({
      _id: user._id,
      email: user.email,
      role: user.role,
      token,
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Login failed" }, { status: 500 });
  }
}
