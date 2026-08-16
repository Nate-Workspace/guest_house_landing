"use client";

import { useActionState, useMemo } from "react";
import {
  submitContactForm,
  type ContactFormState,
} from "@/app/actions/contact";
import { Button } from "@/components/ui/Button";
import {
  formatBatchLabel,
  getBatchBySlug,
  getUnitInBatch,
  roomBatches,
} from "@/data/rooms";
import { cn } from "@/lib/utils";

type ContactFormProps = {
  defaultBatch?: string;
  defaultUnit?: string;
};

const initialState: ContactFormState = {
  success: false,
  message: "",
};

const fieldClassName =
  "w-full rounded-lg border border-text/10 bg-surface px-4 py-3 text-sm text-text shadow-sm transition-colors placeholder:text-muted/70 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20";

const labelClassName = "mb-2 block text-sm font-medium text-text";

function resolveDefaultPreference(
  defaultBatch?: string,
  defaultUnit?: string,
): string {
  if (!defaultBatch || !getBatchBySlug(defaultBatch)) {
    return "";
  }

  if (defaultUnit) {
    const unitNumber = Number(defaultUnit);
    if (getUnitInBatch(defaultBatch, unitNumber)) {
      return `${defaultBatch}:${unitNumber}`;
    }
  }

  return defaultBatch;
}

export function ContactForm({ defaultBatch, defaultUnit }: ContactFormProps) {
  const defaultPreference = useMemo(
    () => resolveDefaultPreference(defaultBatch, defaultUnit),
    [defaultBatch, defaultUnit],
  );

  const [state, formAction, pending] = useActionState(
    submitContactForm,
    initialState,
  );

  return (
    <form action={formAction} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClassName}>
            Full name <span className="text-accent">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className={fieldClassName}
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="email" className={labelClassName}>
            Email <span className="text-accent">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={fieldClassName}
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className={labelClassName}>
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={fieldClassName}
            placeholder="+251 9XX XXX XXX"
          />
        </div>

        <div>
          <label htmlFor="room" className={labelClassName}>
            Room preference
          </label>
          <select
            id="room"
            name="room"
            defaultValue={defaultPreference}
            className={cn(fieldClassName, "appearance-none bg-surface")}
          >
            <option value="">No preference</option>
            {roomBatches.map((batch) => (
              <optgroup key={batch.slug} label={formatBatchLabel(batch)}>
                <option value={batch.slug}>
                  Any room in {batch.name}
                </option>
                {batch.units.map((unit) => (
                  <option key={unit.number} value={`${batch.slug}:${unit.number}`}>
                    Room {unit.number} · Floor {unit.floor}
                  </option>
                ))}
              </optgroup>
            ))}
          </select>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="checkIn" className={labelClassName}>
            Check-in date
          </label>
          <input
            id="checkIn"
            name="checkIn"
            type="date"
            className={fieldClassName}
          />
        </div>

        <div>
          <label htmlFor="checkOut" className={labelClassName}>
            Check-out date
          </label>
          <input
            id="checkOut"
            name="checkOut"
            type="date"
            className={fieldClassName}
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClassName}>
          Message <span className="text-accent">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={cn(fieldClassName, "resize-y min-h-32")}
          placeholder="Tell us about your stay — dates, number of guests, preferred room type or number..."
        />
      </div>

      {state.message ? (
        <p
          role="status"
          className={cn(
            "rounded-lg px-4 py-3 text-sm",
            state.success
              ? "bg-accent/10 text-accent-dark"
              : "bg-text/5 text-text",
          )}
        >
          {state.message}
        </p>
      ) : null}

      <Button type="submit" size="lg" disabled={pending} className="w-full sm:w-auto">
        {pending ? "Sending..." : "Send inquiry"}
      </Button>
    </form>
  );
}
