import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SECRET_KEY!
);

export async function POST(req: Request) {
  const { email, authUserId } = await req.json();

  if (!email || !authUserId) {
    return NextResponse.json(
      { error: "Missing email or authUserId" },
      { status: 400 }
    );
  }

  const { data, error } = await supabase
    .from("userInfo")
    .update({ auth_user_id: authUserId })
    .eq("email", email.trim().toLowerCase())
    .select();

  if (error) {
    console.error("Update error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ data });
}
