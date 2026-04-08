"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase-client";
import { useRouter } from "next/navigation";

const STAMPS_PER_CARD = 5;
const REWARD_VALUE = 5;
const supabase = createClient();

function NailIcon({ filled }: { filled: boolean }) {
  return (
    <div
      className="flex h-14 w-14 items-center justify-center rounded-full border-2 transition-all duration-300"
      style={{
        borderColor: filled ? "#d4748c" : "#e8c9d2",
        backgroundColor: filled ? "#f9c6d0" : "#fff",
        boxShadow: filled ? "0 2px 8px rgba(212,116,140,0.35)" : "none",
      }}
    >
      {filled ? (
        /* nail polish bottle */
        <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 3h6v2H9z" fill="#d4748c"/>
          <path d="M8 5h8l1 13a1 1 0 01-1 1H8a1 1 0 01-1-1L8 5z" fill="#e8849a"/>
          <path d="M10 8h4v6h-4z" fill="#f9c6d0" opacity="0.6"/>
          <rect x="11" y="1" width="2" height="2" rx="0.5" fill="#b5566e"/>
        </svg>
      ) : (
        <span className="text-xl" style={{ color: "#e8c9d2" }}>✦</span>
      )}
    </div>
  );
}

export default function AccountPage() {
  const router = useRouter();
  const [stamps, setStamps] = useState<number>(0);
  const [dob, setDob] = useState("");
  const [appointments, setAppointments] = useState<Array<any>>([]);

  useEffect(() => {
    let mounted = true;
    async function load() {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) { router.push("/"); return; }
      if (!mounted) return;

      const { data: profile, error } = await supabase
        .from("profiles")
        .select("date_of_birth, points")
        .eq("id", user.id)
        .single();

      // If points column doesn't exist yet, fall back to fetching just DOB
      let finalProfile = profile;
      if (error?.code === "42703") {
        const { data: fallback } = await supabase
          .from("profiles")
          .select("date_of_birth")
          .eq("id", user.id)
          .single();
        finalProfile = fallback ? { ...fallback, points: 0 } : null;
      }

      if (!mounted) return;
      if (finalProfile) {
        setDob(finalProfile.date_of_birth ?? "");
        setStamps(finalProfile.points ?? 0);
      }

      try {
        const { data: appts } = await supabase
          .from("appointments")
          .select("id, service, starts_at, status")
          .eq("user_id", user.id)
          .order("starts_at", { ascending: false });
        if (appts && mounted) setAppointments(appts as any[]);
      } catch (_) {}
    }
    load();
    return () => { mounted = false; };
  }, [router]);

  const currentCardStamps = stamps % STAMPS_PER_CARD;
  const completedCards = Math.floor(stamps / STAMPS_PER_CARD);
  const rewardsReady = completedCards; // each completed card = $5 off
  const stampsUntilNext = STAMPS_PER_CARD - currentCardStamps;

  return (
    <div className="mx-auto max-w-2xl px-8 py-10 space-y-5">



      {/* ── Stamp Card ── */}
      <div
        className="relative overflow-hidden rounded-3xl p-6 shadow-xl"
        style={{
          background: "linear-gradient(135deg, #fce4ec 0%, #fdf3ec 55%, #fce4b3 100%)",
        }}
      >
        {/* decorative circles */}
        <div className="pointer-events-none absolute -top-10 -right-10 h-40 w-40 rounded-full opacity-25"
          style={{ background: "radial-gradient(circle, #f7a8b8, transparent)" }} />
        <div className="pointer-events-none absolute -bottom-8 -left-8 h-32 w-32 rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, #fcd97b, transparent)" }} />

        {/* header */}
        <div className="relative flex items-center justify-between mb-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-rose-400">Loyalty Stamp Card</p>
            <h1 className="text-xl font-black text-zinc-800 leading-tight">Collect &amp; Save</h1>
          </div>
          <div className="text-right">
            <p className="text-xs text-zinc-400">Every 5 visits</p>
            <p className="text-lg font-black text-rose-500">${REWARD_VALUE} OFF</p>
          </div>
        </div>

        {/* stamp circles */}
        <div className="relative flex justify-between gap-2 mb-4">
          {Array.from({ length: STAMPS_PER_CARD }).map((_, i) => (
            <NailIcon key={i} filled={i < currentCardStamps} />
          ))}
        </div>

        {/* progress text */}
        <div className="relative flex items-center justify-between">
          <p className="text-sm text-zinc-500">
            {currentCardStamps === 0
              ? "Start visiting to earn stamps!"
              : `${stampsUntilNext} more visit${stampsUntilNext !== 1 ? "s" : ""} until your reward`}
          </p>
          <span className="text-xs font-semibold text-rose-400">
            {currentCardStamps}/{STAMPS_PER_CARD}
          </span>
        </div>

        {/* thin progress bar */}
        <div className="relative mt-2 h-1.5 w-full rounded-full bg-white/50">
          <div
            className="h-1.5 rounded-full transition-all duration-500"
            style={{
              width: `${(currentCardStamps / STAMPS_PER_CARD) * 100}%`,
              background: "linear-gradient(90deg, #f48fb1, #d4748c)",
            }}
          />
        </div>
      </div>

      {/* ── Rewards Ready ── */}
      {rewardsReady > 0 && (
        <div
          className="flex items-center gap-4 rounded-2xl border px-5 py-4 shadow-sm"
          style={{ backgroundColor: "#fff9f0", borderColor: "#f5d9a0" }}
        >
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-2xl"
            style={{ backgroundColor: "#fce4b3" }}>
            🎁
          </div>
          <div>
            <p className="text-sm font-bold text-zinc-800">
              {rewardsReady} Reward{rewardsReady > 1 ? "s" : ""} Ready!
            </p>
            <p className="text-xs text-zinc-500">
              Show this to your nail technician for ${rewardsReady * REWARD_VALUE} off your next visit.
            </p>
          </div>
        </div>
      )}

      {/* ── Stats row ── */}
      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-2xl border border-zinc-100 bg-white p-4 text-center shadow-sm">
          <p className="text-3xl font-black text-zinc-800">{stamps}</p>
          <p className="mt-0.5 text-xs text-zinc-400 uppercase tracking-wide">Total Visits</p>
        </div>
        <div className="rounded-2xl border border-zinc-100 bg-white p-4 text-center shadow-sm">
          <p className="text-3xl font-black text-rose-500">${completedCards * REWARD_VALUE}</p>
          <p className="mt-0.5 text-xs text-zinc-400 uppercase tracking-wide">Saved So Far</p>
        </div>
      </div>

      {/* ── Profile Info ── */}
      <div className="rounded-2xl border border-zinc-100 bg-white p-5 shadow-sm space-y-3">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-400">Profile</h2>
        <div className="flex items-center justify-between">
          <span className="text-sm text-zinc-500">Date of Birth</span>
          <span className="text-sm font-medium text-zinc-800">{dob || "Not provided"}</span>
        </div>
        {!dob && (
          <div className="flex items-center justify-between rounded-xl px-3 py-2.5"
            style={{ backgroundColor: "#fdf3ec", border: "1px solid #f5d9b8" }}>
            <p className="text-xs text-zinc-500">Add your birthday for a special treat! 🎂</p>
            <a
              href="/complete-profile"
              className="ml-3 shrink-0 rounded-lg px-3 py-1.5 text-xs font-semibold transition hover:opacity-90"
              style={{ backgroundColor: "#f9c6d0", color: "#9b2c4a" }}
            >
              Add Now
            </a>
          </div>
        )}
        {dob && (() => {
          const birthMonth = new Date(dob).getMonth();
          const currentMonth = new Date().getMonth();
          return birthMonth === currentMonth ? (
            <div
              className="flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-medium"
              style={{ backgroundColor: "#fce4ec", color: "#c2185b" }}
            >
              <span className="text-base">🎂</span>
              Happy Birthday month! Show this to receive a special treat.
            </div>
          ) : null;
        })()}
      </div>

      {/* ── Appointments ── */}
      <div className="rounded-2xl border border-zinc-100 bg-white p-5 shadow-sm space-y-3">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-400">Appointments</h2>
        {appointments.length === 0 ? (
          <div className="space-y-3">
            <p className="text-sm text-zinc-500">No appointments yet.</p>
            <a
              href="/services"
              className="inline-block rounded-full px-6 py-2.5 text-sm font-semibold text-zinc-900 shadow-sm transition hover:opacity-90"
              style={{ backgroundColor: "#f9c6d0", border: "1px solid #f0aabd" }}
            >
              Book an Appointment
            </a>
          </div>
        ) : (
          appointments.map((a: any) => (
            <div key={a.id} className="rounded-xl border border-zinc-100 bg-zinc-50 p-3 text-sm">
              <div className="font-medium text-zinc-800">{a.service ?? "Appointment"}</div>
              <div className="mt-0.5 text-xs text-zinc-400">
                {a.starts_at ? new Date(a.starts_at).toLocaleString() : "Time not set"} · {a.status ?? "scheduled"}
              </div>
            </div>
          ))
        )}
      </div>

      {/* ── Actions ── */}
      <div className="flex justify-center pb-4">
        <a
          href="/auth/signout"
          className="inline-block rounded-lg border border-zinc-200 bg-white px-6 py-2.5 text-sm font-medium text-zinc-700 shadow-sm transition hover:bg-zinc-50"
        >
          Sign Out
        </a>
      </div>

    </div>
  );
}
