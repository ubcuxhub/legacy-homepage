"use client";
import { redirect } from "next/navigation";
import { LogoutButton } from "@/components/auth/LogoutButton";
import { useUser } from "@/context/UserContext";
import { createClient } from "@/lib/supabase/client";
import { useEffect, useState } from "react";
import { Event } from "@/lib/eventTypes";

export default function Events() {
  const { user, loading } = useUser();

  const [events, setEvents] = useState<Event[]>([]);
  const [loadingEvents, setLoadingEvents] = useState(true);

  useEffect(() => {
    const supabase = createClient();

    const fetchEvents = async () => {
      try {
        setLoadingEvents(true);

        const { data, error } = await supabase
          .from("events")
          .select("*")
          .order("event_date", { ascending: true });

        if (error) throw error;
        setEvents(data ?? []);
      } catch (err) {
        console.error("Error fetching events:", err);
      } finally {
        setLoadingEvents(false);
      }
    };

    if (user) {
      fetchEvents();
    }
  }, [user]);

  if (loading) return <p>Loading...</p>;
  if (!user) {
    redirect("/auth/login");
  }

  return (
    <div>
      <p>Hi!</p>
      <p>{`Logged in as ${user.email}`}</p>
      <p>Events: </p>
      {loadingEvents ? (
        <></>
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
