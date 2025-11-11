import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { LogoutButton } from "@/components/LogoutButton";

export default async function Events() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getClaims();
  const user = data?.claims;

  if (error || !user) {
    redirect("/auth/login");
  }

  return (
    <div>
      <p>Hi!</p>
      <p>{`Your are logging in as ${user.email}`}</p>
      <p>here's a list of events...</p>
      <LogoutButton></LogoutButton>
    </div>
  );
}
