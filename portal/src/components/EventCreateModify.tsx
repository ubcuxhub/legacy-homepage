"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";

import { createClient } from "@/lib/supabase/client";
import type {
  ApplicationQuestionTemplate,
  CheckInEvent,
} from "@/lib/eventUtils";
import { ResponseType } from "@/lib/eventUtils";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface EventCreateModifyProps {
  eventId?: string;
  onSuccess?: (id: string) => void;
  title?: string;
  description?: string;
}

interface EventFormState {
  name: string;
  event_date: string;
  event_time: string;
  location_building: string;
  location_room: string;
  location_address_url: string;
  price: string;
  description: string;
  max_capacity: string;
  image_url: string;
  created_at: string;
}

const defaultFormState: EventFormState = {
  name: "",
  event_date: "",
  event_time: "",
  location_building: "",
  location_room: "",
  location_address_url: "",
  price: "",
  description: "",
  max_capacity: "",
  image_url: "",
  created_at: "",
};

export const EventCreateModify = ({
  eventId,
  onSuccess,
  title,
  description,
}: EventCreateModifyProps) => {
  const supabase = useMemo(() => createClient(), []);
  const router = useRouter();

  const [formState, setFormState] = useState<EventFormState>(defaultFormState);
  const [checkInEvents, setCheckInEvents] = useState<CheckInEvent[]>([
    { location: "", date: "", time: "" },
  ]);
  const [applicationTemplate, setApplicationTemplate] = useState<
    ApplicationQuestionTemplate[]
  >([
    {
      question: "",
      response: ResponseType.text,
      max_char_limit: 0,
    },
  ]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loadingEvent, setLoadingEvent] = useState(!!eventId);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  useEffect(() => {
    const fetchExistingEvent = async () => {
      if (!eventId) return;

      setLoadingEvent(true);
      setError(null);
      const { data, error } = await supabase
        .from("events")
        .select("*")
        .eq("id", eventId)
        .maybeSingle();

      if (error) {
        setError(error.message);
        setLoadingEvent(false);
        return;
      }

      if (!data) {
        setError("Event not found.");
        setLoadingEvent(false);
        return;
      }

      setFormState({
        name: data.name ?? "",
        event_date: data.event_date ?? "",
        event_time: data.event_time ?? "",
        location_building: data.location_building ?? "",
        location_room: data.location_room ?? "",
        location_address_url: data.location_address_url ?? "",
        price:
          data.price !== null && data.price !== undefined
            ? String(data.price)
            : "",
        description: data.description ?? "",
        max_capacity:
          data.max_capacity !== null && data.max_capacity !== undefined
            ? String(data.max_capacity)
            : "",
        image_url: data.image_url ?? "",
        created_at: data.created_at ?? "",
      });

      setCheckInEvents(
        Array.isArray(data.check_in_events) && data.check_in_events.length > 0
          ? data.check_in_events
          : [{ location: "", date: "", time: "" }]
      );

      setApplicationTemplate(
        Array.isArray(data.application_template) &&
          data.application_template.length > 0
          ? data.application_template
          : [
              {
                question: "",
                response: ResponseType.text,
                max_char_limit: 0,
              },
            ]
      );

      setLoadingEvent(false);
    };

    fetchExistingEvent();
  }, [eventId, supabase]);

  const resetSuccessMessage = () => {
    if (successMessage) {
      setSuccessMessage(null);
    }
  };

  const handleFieldChange = <K extends keyof EventFormState>(
    field: K,
    value: EventFormState[K]
  ) => {
    resetSuccessMessage();
    setFormState((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const updateCheckInEvent = (
    index: number,
    field: keyof CheckInEvent,
    value: string
  ) => {
    resetSuccessMessage();
    setCheckInEvents((prev) =>
      prev.map((event, idx) =>
        idx === index
          ? {
              ...event,
              [field]: value,
            }
          : event
      )
    );
  };

  const addCheckInEvent = () => {
    resetSuccessMessage();
    setCheckInEvents((prev) => [...prev, { location: "", date: "", time: "" }]);
  };

  const removeCheckInEvent = (index: number) => {
    resetSuccessMessage();
    setCheckInEvents((prev) =>
      prev.length === 1 ? prev : prev.filter((_, idx) => idx !== index)
    );
  };

  const updateApplicationQuestion = (
    index: number,
    field: keyof ApplicationQuestionTemplate,
    value: string | ResponseType | number
  ) => {
    resetSuccessMessage();
    setApplicationTemplate((prev) =>
      prev.map((question, idx) =>
        idx === index
          ? {
              ...question,
              [field]:
                field === "max_char_limit"
                  ? Number(value)
                  : (value as string | ResponseType),
            }
          : question
      )
    );
  };

  const addApplicationQuestion = () => {
    resetSuccessMessage();
    setApplicationTemplate((prev) => [
      ...prev,
      { question: "", response: ResponseType.text, max_char_limit: 0 },
    ]);
  };

  const removeApplicationQuestion = (index: number) => {
    resetSuccessMessage();
    setApplicationTemplate((prev) =>
      prev.length === 1 ? prev : prev.filter((_, idx) => idx !== index)
    );
  };

  const validateForm = () => {
    if (!formState.name.trim()) return "Event name is required.";
    if (!formState.event_date) return "Event date is required.";
    if (!formState.event_time) return "Event time is required.";
    if (!formState.location_building.trim())
      return "Location building is required.";
    if (!formState.location_room.trim()) return "Location room is required.";
    if (!formState.location_address_url.trim())
      return "Location address URL is required.";
    if (!formState.description.trim()) return "Description is required.";
    if (!formState.max_capacity) return "Max capacity is required.";
    if (!checkInEvents.every((item) => item.location && item.date && item.time))
      return "All check-in events require location, date, and time.";
    if (
      !applicationTemplate.every(
        (item) => item.question.trim() && item.max_char_limit > 0
      )
    )
      return "Application questions require a question and maximum character limit greater than 0.";
    if (!formState.price.trim()) return "Price is required.";
    if (Number.isNaN(Number(formState.price)))
      return "Price must be a valid number.";

    return null;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    resetSuccessMessage();
    setError(null);

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    setIsSubmitting(true);
    const payload = {
      ...formState,
      price: Number(formState.price),
      max_capacity: String(formState.max_capacity),
      check_in_events: checkInEvents,
      application_template: applicationTemplate,
      created_at: formState.created_at || new Date().toISOString(),
    };

    if (!formState.image_url) {
      (payload as { image_url?: string | null }).image_url = null;
    }

    const query = eventId
      ? supabase.from("events").update(payload).eq("id", eventId)
      : supabase.from("events").insert(payload);

    const { data, error: upsertError } = await query.select("id").maybeSingle();

    if (upsertError) {
      setError(upsertError.message);
      setIsSubmitting(false);
      return;
    }

    if (!data?.id) {
      setError("No event id returned from Supabase.");
      setIsSubmitting(false);
      return;
    }

    setSuccessMessage(
      eventId ? "Event updated successfully." : "Event created successfully."
    );
    setIsSubmitting(false);
    if (!eventId) {
      setFormState(defaultFormState);
      setCheckInEvents([{ location: "", date: "", time: "" }]);
      setApplicationTemplate([
        {
          question: "",
          response: ResponseType.text,
          max_char_limit: 0,
        },
      ]);
    }

    if (onSuccess) {
      onSuccess(data.id);
    } else {
      router.refresh();
    }
  };

  return (
    <Card className="max-w-4xl">
      <CardHeader>
        <CardTitle>
          {title ?? (eventId ? "Modify Event" : "Create Event")}
        </CardTitle>
        <CardDescription>
          {description ??
            (eventId
              ? "Update the details for this event."
              : "Provide the details for the new event.")}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {loadingEvent ? (
          <p className="text-sm text-muted-foreground">
            Loading event details...
          </p>
        ) : (
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <section className="grid gap-4 md:grid-cols-2">
              <div className="grid gap-2">
                <Label htmlFor="name">Event Name</Label>
                <Input
                  id="name"
                  value={formState.name}
                  onChange={(e) => handleFieldChange("name", e.target.value)}
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="price">Price</Label>
                <Input
                  id="price"
                  type="number"
                  min="0"
                  step="0.01"
                  value={formState.price}
                  onChange={(e) => handleFieldChange("price", e.target.value)}
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="event_date">Event Date</Label>
                <Input
                  id="event_date"
                  type="date"
                  value={formState.event_date}
                  onChange={(e) =>
                    handleFieldChange("event_date", e.target.value)
                  }
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="event_time">Event Time</Label>
                <Input
                  id="event_time"
                  type="time"
                  value={formState.event_time}
                  onChange={(e) =>
                    handleFieldChange("event_time", e.target.value)
                  }
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="max_capacity">Max Capacity</Label>
                <Input
                  id="max_capacity"
                  type="number"
                  min="0"
                  value={formState.max_capacity}
                  onChange={(e) =>
                    handleFieldChange("max_capacity", e.target.value)
                  }
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="image_url">Image URL</Label>
                <Input
                  id="image_url"
                  value={formState.image_url}
                  onChange={(e) =>
                    handleFieldChange("image_url", e.target.value)
                  }
                  placeholder="https://example.com/event.jpg"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="location_building">Location Building</Label>
                <Input
                  id="location_building"
                  value={formState.location_building}
                  onChange={(e) =>
                    handleFieldChange("location_building", e.target.value)
                  }
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="location_room">Location Room</Label>
                <Input
                  id="location_room"
                  value={formState.location_room}
                  onChange={(e) =>
                    handleFieldChange("location_room", e.target.value)
                  }
                  required
                />
              </div>
              <div className="grid gap-2 md:col-span-2">
                <Label htmlFor="location_address_url">
                  Location Address URL
                </Label>
                <Input
                  id="location_address_url"
                  type="url"
                  value={formState.location_address_url}
                  onChange={(e) =>
                    handleFieldChange("location_address_url", e.target.value)
                  }
                  required
                />
              </div>
              <div className="grid gap-2 md:col-span-2">
                <Label htmlFor="description">Description</Label>
                <textarea
                  id="description"
                  className="min-h-[120px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                  value={formState.description}
                  onChange={(e) =>
                    handleFieldChange("description", e.target.value)
                  }
                  required
                />
              </div>
            </section>

            <section className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold">Check-In Events</h3>
                  <p className="text-sm text-muted-foreground">
                    Provide the check-in details for attendees. Each entry must
                    include a location, date, and time.
                  </p>
                </div>
                <Button
                  type="button"
                  variant="outline"
                  onClick={addCheckInEvent}
                  className="shrink-0"
                >
                  Add
                </Button>
              </div>
              <div className="flex flex-col gap-4">
                {checkInEvents.map((item, index) => (
                  <div
                    key={`check-in-${index}`}
                    className="grid gap-3 rounded-lg border p-4 md:grid-cols-3"
                  >
                    <div className="grid gap-2">
                      <Label htmlFor={`check_location_${index}`}>
                        Location
                      </Label>
                      <Input
                        id={`check_location_${index}`}
                        value={item.location}
                        onChange={(e) =>
                          updateCheckInEvent(index, "location", e.target.value)
                        }
                        required
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor={`check_date_${index}`}>Date</Label>
                      <Input
                        id={`check_date_${index}`}
                        type="date"
                        value={item.date}
                        onChange={(e) =>
                          updateCheckInEvent(index, "date", e.target.value)
                        }
                        required
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor={`check_time_${index}`}>Time</Label>
                      <Input
                        id={`check_time_${index}`}
                        type="time"
                        value={item.time}
                        onChange={(e) =>
                          updateCheckInEvent(index, "time", e.target.value)
                        }
                        required
                      />
                    </div>
                    <div className="md:col-span-3 flex justify-end">
                      <Button
                        type="button"
                        variant="ghost"
                        className="text-red-500 hover:text-red-600"
                        onClick={() => removeCheckInEvent(index)}
                        disabled={checkInEvents.length === 1}
                      >
                        Remove
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold">
                    Application Questions
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Define any application questions attendees must answer.
                  </p>
                </div>
                <Button
                  type="button"
                  variant="outline"
                  onClick={addApplicationQuestion}
                  className="shrink-0"
                >
                  Add
                </Button>
              </div>
              <div className="flex flex-col gap-4">
                {applicationTemplate.map((question, index) => (
                  <div
                    key={`application-${index}`}
                    className="grid gap-3 rounded-lg border p-4 md:grid-cols-3"
                  >
                    <div className="grid gap-2 md:col-span-2">
                      <Label htmlFor={`question_${index}`}>Question</Label>
                      <Input
                        id={`question_${index}`}
                        value={question.question}
                        onChange={(e) =>
                          updateApplicationQuestion(
                            index,
                            "question",
                            e.target.value
                          )
                        }
                        required
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor={`response_${index}`}>Response Type</Label>
                      <select
                        id={`response_${index}`}
                        className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                        value={question.response}
                        onChange={(e) =>
                          updateApplicationQuestion(
                            index,
                            "response",
                            e.target.value as ResponseType
                          )
                        }
                        required
                      >
                        {Object.values(ResponseType).map((value) => (
                          <option key={value} value={value}>
                            {value.replace("_", " ")}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="grid gap-2 md:col-span-3 md:grid-cols-3">
                      <div className="grid gap-2 md:col-span-1">
                        <Label htmlFor={`max_char_limit_${index}`}>
                          Max Character Limit
                        </Label>
                        <Input
                          id={`max_char_limit_${index}`}
                          type="number"
                          min="1"
                          value={question.max_char_limit}
                          onChange={(e) =>
                            updateApplicationQuestion(
                              index,
                              "max_char_limit",
                              Number(e.target.value)
                            )
                          }
                          required
                        />
                      </div>
                      <div className="md:col-span-2 flex items-end justify-end">
                        <Button
                          type="button"
                          variant="ghost"
                          className="text-red-500 hover:text-red-600"
                          onClick={() => removeApplicationQuestion(index)}
                          disabled={applicationTemplate.length === 1}
                        >
                          Remove
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {error && <p className="text-sm text-red-500">{error}</p>}
            {successMessage && (
              <p className="text-sm text-green-600">{successMessage}</p>
            )}

            <CardFooter className="px-0">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto"
              >
                {isSubmitting
                  ? eventId
                    ? "Updating..."
                    : "Creating..."
                  : eventId
                  ? "Update Event"
                  : "Create Event"}
              </Button>
            </CardFooter>
          </form>
        )}
      </CardContent>
    </Card>
  );
};

export default EventCreateModify;
