"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useId, useState } from "react";
import { StaggerChildren, StaggerItem } from "@/components/motion";
import { cn } from "@/lib/utils";

export type AccordionItem = {
  id: string;
  question: string;
  answer: string;
};

type AccordionProps = {
  items: AccordionItem[];
  className?: string;
  defaultOpenId?: string;
  stagger?: boolean;
};

export function Accordion({
  items,
  className,
  defaultOpenId,
  stagger = false,
}: AccordionProps) {
  const baseId = useId();
  const [openId, setOpenId] = useState<string | null>(
    defaultOpenId ?? items[0]?.id ?? null,
  );

  const rows = items.map((item, index) => {
    const isOpen = openId === item.id;
    const panelId = `${baseId}-${item.id}-panel`;
    const triggerId = `${baseId}-${item.id}-trigger`;

    const row = (
      <div className="py-1">
        <button
          id={triggerId}
          type="button"
          className="flex w-full items-start justify-between gap-4 py-5 text-left transition-colors hover:text-accent"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={() => setOpenId(isOpen ? null : item.id)}
        >
          <span className="font-medium text-text">{item.question}</span>
          <span
            className={cn(
              "mt-1 shrink-0 text-accent transition-transform duration-300",
              isOpen && "rotate-45",
            )}
            aria-hidden="true"
          >
            <PlusIcon />
          </span>
        </button>

        <AnimatePresence initial={false}>
          {isOpen ? (
            <motion.div
              id={panelId}
              role="region"
              aria-labelledby={triggerId}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
              className="overflow-hidden"
            >
              <p className="pb-5 pr-8 text-sm leading-relaxed text-muted md:text-base">
                {item.answer}
              </p>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    );

    if (stagger) {
      return (
        <StaggerItem key={item.id} index={index}>
          {row}
        </StaggerItem>
      );
    }

    return <div key={item.id}>{row}</div>;
  });

  if (stagger) {
    return (
      <StaggerChildren className={cn("divide-y divide-text/10", className)}>
        {rows}
      </StaggerChildren>
    );
  }

  return <div className={cn("divide-y divide-text/10", className)}>{rows}</div>;
}

function PlusIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="h-5 w-5"
    >
      <path d="M12 5v14M5 12h14" strokeLinecap="round" />
    </svg>
  );
}
