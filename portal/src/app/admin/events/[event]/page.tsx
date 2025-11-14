import EventCreateModify from "@/components/EventCreateModify";
import React from "react";

interface EventViewProps {
  params: {
    event: string;
  };
}

const Page: React.FC<EventViewProps> = async ({ params }) => {
  const slug = await params;
  const eventId = slug.event;

  return (
    <div>
      <EventCreateModify eventId={eventId} />
    </div>
  );
};

export default Page;
