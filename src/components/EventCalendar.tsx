"use client";

import dayjs from "dayjs";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
import { useMemo, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import type { CalendarEvent } from "@/types/content";

dayjs.extend(isSameOrBefore);
dayjs.extend(isSameOrAfter);

const COUNCIL_COLORS: Record<string, string> = {
  "Technical Council": "#f38221",
  "Cultural Council": "#7e57c2",
  "Sports Council": "#43a047",
  "Hostel Council": "#ff7043",
  "Academic Council": "#9c27b0",
  "Research Affairs": "#5c6bc0",
  "General Affairs": "#00897b",
  "Post Graduate Affairs": "#c2185b",
  default: "#546e7a",
};

type Props = {
  events: CalendarEvent[];
};

export function EventCalendar({ events }: Props) {
  const [currentMonth, setCurrentMonth] = useState(dayjs());

  const days = useMemo(() => {
    const startOfMonth = currentMonth.startOf("month");
    const endOfMonth = currentMonth.endOf("month");
    const daysInMonth = currentMonth.daysInMonth();
    const startDay = startOfMonth.day();
    const daysFromPrevMonth = startDay === 0 ? 6 : startDay - 1;
    const endDay = endOfMonth.day();
    const daysFromNextMonth = endDay === 0 ? 0 : 7 - endDay;
    const list: {
      date: dayjs.Dayjs;
      currentMonth: boolean;
      events: CalendarEvent[];
    }[] = [];

    for (let i = daysFromPrevMonth; i > 0; i--) {
      list.push({
        date: startOfMonth.subtract(i, "day"),
        currentMonth: false,
        events: [],
      });
    }
    for (let i = 1; i <= daysInMonth; i++) {
      const date = currentMonth.date(i);
      list.push({
        date,
        currentMonth: true,
        events:
          events?.filter((e) => dayjs(e.start_time).isSame(date, "day")) || [],
      });
    }
    for (let i = 1; i <= daysFromNextMonth; i++) {
      list.push({
        date: endOfMonth.add(i, "day"),
        currentMonth: false,
        events: [],
      });
    }
    return list;
  }, [currentMonth, events]);

  const renderDay = (day: (typeof days)[number]) => {
    const hasEvents = day.events.length > 0;
    const councils = [
      ...new Set(
        day.events.map((e) => e.council_title || e.council_name || e.council),
      ),
    ];
    const primaryColor =
      councils.length === 1
        ? COUNCIL_COLORS[councils[0] as string] || COUNCIL_COLORS.default
        : COUNCIL_COLORS.default;
    const tooltip = day.events
      .map((e) => `${dayjs(e.start_time).format("HH:mm")} - ${e.title}`)
      .join("\n");

    return (
      <div
        key={day.date.toString()}
        title={hasEvents ? tooltip : undefined}
        className={`flex h-9 w-full items-center justify-center rounded-full text-sm ${
          hasEvents
            ? "cursor-pointer text-white"
            : day.currentMonth
              ? "text-stone-800"
              : "text-stone-400"
        }`}
        style={{
          backgroundColor: hasEvents ? primaryColor : "transparent",
        }}
      >
        {day.date.date()}
      </div>
    );
  };

  return (
    <div className="mx-auto w-full max-w-[600px] px-2 py-2 sm:max-w-[265px] sm:px-4">
      <div className="mb-4 flex flex-col items-end sm:items-center">
        <h2 className="mb-1 text-base font-semibold tracking-wide sm:text-lg">
          CALENDAR
        </h2>
        <div className="h-1.5 w-[30%] rounded-full bg-sac-orange sm:w-1/2" />
      </div>

      <div className="mb-4 flex items-center justify-center">
        <button
          type="button"
          onClick={() => setCurrentMonth((m) => m.add(-1, "month"))}
          className="min-w-0 text-sac-orange"
          aria-label="Previous month"
        >
          <FaChevronLeft size={20} />
        </button>
        <span className="mx-4 min-w-[180px] whitespace-nowrap text-center text-lg font-medium sm:text-xl">
          {currentMonth.format("MMMM YYYY")}
        </span>
        <button
          type="button"
          onClick={() => setCurrentMonth((m) => m.add(1, "month"))}
          className="min-w-0 text-sac-orange"
          aria-label="Next month"
        >
          <FaChevronRight size={20} />
        </button>
      </div>

      <div className="mx-auto w-full max-w-[400px] rounded-lg bg-sac-orange-soft p-2 sm:w-[90%] sm:p-3">
        <div className="mb-2 grid grid-cols-7 text-center text-xs text-stone-800">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
            <span key={d}>{d}</span>
          ))}
        </div>
        <div className="grid min-h-[280px] grid-cols-7 gap-2 auto-rows-[40px]">
          {days.map(renderDay)}
        </div>
      </div>
    </div>
  );
}
