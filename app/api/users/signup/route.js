import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextResponse } from "next/server";

await connect(); // Await the database connection

export async function POST(request) {
  const reqBody = await request.json();
  const { username, password, email } = reqBody;

  const user = await User.findOne({ email });
  const user2 = await User.findOne({ username });
  if (user) {
    return NextResponse.json(
      { success: false,message:"Email already exists"}
    );
  }
  if (user2) {
    return NextResponse.json(
      { success: false},
      { no : 2}
    );
  }

  const newUser = new User({
    username,
    password,
    email,
  });

  console.log("HELLO");
  console.log(newUser);
  const savedUser = await newUser.save();

  return NextResponse.json(
    {success: true,},{
    message: "User created successfully",
    
    savedUser,
  });
}
