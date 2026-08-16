"use client";

import { useCallback, useMemo, useState } from "react";
import { buildInquiryHref, groupUnitsByFloor } from "@/data/rooms";
import type { RoomBatch, RoomUnit } from "@/lib/types";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

type RoomUnitPickerProps = {
  batch: RoomBatch;
};

type RoomRowProps = {
  floor: number;
  unit: RoomUnit;
  roomCount: number;
  showFloorLabel: boolean;
  isSelected: boolean;
  onSelect: (unitNumber: number) => void;
};

function RoomRow({
  floor,
  unit,
  roomCount,
  showFloorLabel,
  isSelected,
  onSelect,
}: RoomRowProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect(unit.number)}
      aria-pressed={isSelected}
      aria-label={`Room ${unit.number} on floor ${floor}`}
      className={cn(
        "flex w-full items-center gap-4 px-5 py-4 text-left transition-colors duration-200 sm:gap-6 sm:px-6 sm:py-4",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent/40",
        isSelected
          ? "bg-accent/10 hover:bg-accent/12"
          : "hover:bg-bg-subtle",
      )}
    >
      <div className="w-24 shrink-0">
        {showFloorLabel ? (
          <>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
              Floor {floor}
            </p>
            <p className="mt-1 text-xs text-muted">
              {roomCount} room{roomCount === 1 ? "" : "s"}
            </p>
          </>
        ) : (
          <span className="block h-8" aria-hidden="true" />
        )}
      </div>

      <div className="flex min-w-0 flex-1 items-center justify-between gap-4">
        <span className="text-sm text-muted">Room</span>
        <span
          className={cn(
            "flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border font-display text-lg tabular-nums leading-none transition-colors",
            isSelected
              ? "border-accent bg-accent text-surface"
              : "border-text/10 bg-bg-subtle text-text",
          )}
        >
          {unit.number}
        </span>
      </div>
    </button>
  );
}

export function RoomUnitPicker({ batch }: RoomUnitPickerProps) {
  const [selectedUnit, setSelectedUnit] = useState<number | null>(null);
  const unitsByFloor = useMemo(
    () => groupUnitsByFloor(batch.units),
    [batch.units],
  );

  const floors = useMemo(
    () =>
      [...unitsByFloor.entries()].sort(([floorA], [floorB]) => floorA - floorB),
    [unitsByFloor],
  );

  const selectedFloor =
    selectedUnit !== null
      ? batch.units.find((unit) => unit.number === selectedUnit)?.floor
      : null;

  const inquiryHref = buildInquiryHref(
    batch.slug,
    selectedUnit ?? undefined,
  );

  const toggleUnit = useCallback((unitNumber: number) => {
    setSelectedUnit((current) => (current === unitNumber ? null : unitNumber));
  }, []);

  return (
    <section className="section-padding bg-bg-muted">
      <div className="container-content">
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-12 xl:gap-16">
          <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:max-w-md lg:text-left xl:max-w-lg">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
              Room numbers
            </p>
            <h2 className="mt-3 font-display text-2xl text-text md:text-3xl">
              Choose a room — optional
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
              Every {batch.name} room shares this layout. Tap a row if you have
              a preference, then send an inquiry. We&apos;ll confirm
              availability for your dates.
            </p>
          </div>

          <div className="mx-auto mt-8 max-w-xl overflow-hidden rounded-xl bg-surface shadow-luxury ring-1 ring-text/5 md:mt-10 lg:mx-0 lg:mt-0 lg:max-w-none lg:w-full">
            <div className="divide-y divide-text/5">
              {floors.map(([floor, units]) =>
                units.map((unit, unitIndex) => (
                  <RoomRow
                    key={unit.number}
                    floor={floor}
                    unit={unit}
                    roomCount={units.length}
                    showFloorLabel={unitIndex === 0}
                    isSelected={selectedUnit === unit.number}
                    onSelect={toggleUnit}
                  />
                )),
              )}
            </div>

            <div className="border-t border-text/5 bg-bg-inset px-5 py-5 sm:px-6">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between gap-4 rounded-lg bg-surface px-4 py-3 ring-1 ring-text/5">
                  <div className="min-w-0 text-left">
                    <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
                      Selected
                    </p>
                    <p className="mt-1 truncate text-sm text-text">
                      {selectedUnit ? (
                        <>
                          Room{" "}
                          <span className="font-medium">{selectedUnit}</span>
                          {selectedFloor ? (
                            <span className="text-muted">
                              {" "}
                              · Floor {selectedFloor}
                            </span>
                          ) : null}
                        </>
                      ) : (
                        <span className="text-muted">No room selected</span>
                      )}
                    </p>
                  </div>
                  {selectedUnit ? (
                    <button
                      type="button"
                      onClick={() => setSelectedUnit(null)}
                      className="shrink-0 text-xs text-muted underline-offset-4 hover:text-text hover:underline"
                    >
                      Clear
                    </button>
                  ) : null}
                </div>

                <Button href={inquiryHref} size="lg" className="w-full">
                  {selectedUnit
                    ? `Inquire about Room ${selectedUnit}`
                    : "Inquire for availability"}
                </Button>

                <p className="text-center text-xs leading-relaxed text-muted">
                  {selectedUnit
                    ? "We'll note your room preference and check availability."
                    : `We'll match you to an available ${batch.name} room.`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
