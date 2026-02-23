import { sanity } from "@/lib/sanity";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { id, name, email, password } = await req.json();

    if (!name || !email || !password) {
      return NextResponse.json(
        { success: false, message: "All fields required" },
        { status: 400 },
      );
    }

    const existingUser = await sanity.fetch(
      `*[_type == "user" && email == $email][0]`,
      { email },
    );

    if (existingUser) {
      return NextResponse.json(
        { success: false, message: "User already exists" },
        { status: 409 },
      );
    }

    const lastUserId = await sanity.fetch(
      `*[_type == "user"] | order(userId desc)[0].userId`,
    );

    const nextUserId = (lastUserId || 0) + 1;

    const hashedPassword = await bcrypt.hash(password, 10);

    await sanity.create({
      _type: "user",
      userId: nextUserId,
      name: name.trim(),
      email,
      password: hashedPassword,
    });

    return NextResponse.json({
      success: true,
      message: "User registered successfully",
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 },
    );
  }
}
