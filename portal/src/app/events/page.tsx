"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@/context/UserContext";
import { createClient } from "@/lib/supabase/client";
import { Event } from "@/lib/eventUtils";
import { LogoutButton } from "@/components/LogoutButton";

export default function Events() {
  const { user, loading } = useUser();
  const router = useRouter();

  const [events, setEvents] = useState<Event[]>([]);
  const [loadingEvents, setLoadingEvents] = useState(true);

  // Redirect safely inside effect
  useEffect(() => {
    if (!loading && !user) {
      router.replace("/auth/login"); // ✔ safe
    }
  }, [loading, user, router]);

  // Fetch events only after user is confirmed
  useEffect(() => {
    const supabase = createClient();

    async function fetchEvents() {
      setLoadingEvents(true);
      const { data } = await supabase
        .from("events")
        .select("*")
        .order("event_date", { ascending: true });
      setEvents(data ?? []);
      setLoadingEvents(false);
    }

    if (user) fetchEvents();
  }, [user]);

  if (loading || !user) {
    return <p>Loading...</p>; // ✔ never throws, stable hooks
  }

  return (
    <div>
      <p>Hi!</p>
      <p>{`Logged in as ${user.email}`}</p>

      <p>Events:</p>

      {loadingEvents ? (
        <p>Loading events...</p>
      ) : (
        <div>
          {events.map((event) => (
            <div key={event.name}>{event.name}</div>
          ))}
        </div>
      )}
      <LogoutButton></LogoutButton>
    </div>
  );
}
